#!/usr/bin/env python3
"""Build the localized home pages for jotly.info.

Source of truth:
  index.html        English page and layout template (edit layout here)
  i18n/<lang>.json  all translatable text, one file per language

Run from the repo root after changing either:
  python3 tools/build_i18n.py

It rewrites index.html with en.json and writes ru/index.html, es/index.html,
hy/index.html, each with its own <title>, description, canonical URL, Open Graph
tags and hreflang links to the others. It also refreshes sitemap.xml.
"""
import datetime
import html
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://jotly.info'
LANGS = ['en', 'ru', 'es', 'hy']           # en lives at the site root
LABEL = {'en': 'EN', 'ru': 'RU', 'es': 'ES', 'hy': 'HY'}
NAME = {'en': 'English', 'ru': 'Русский', 'es': 'Español', 'hy': 'Հայերեն'}
OG_LOCALE = {'en': 'en_US', 'ru': 'ru_RU', 'es': 'es_ES', 'hy': 'hy_AM'}
LEGAL_PAGES = ['privacy.html', 'terms.html', 'contact.html']   # English only


def url(lang):
    return SITE + ('/' if lang == 'en' else f'/{lang}/')


def load(lang):
    with open(os.path.join(ROOT, 'i18n', f'{lang}.json'), encoding='utf8') as f:
        return json.load(f)


def replace_block(s, start, end, new):
    """Replace everything between two marker comments (markers kept)."""
    i = s.index(start) + len(start)
    j = s.index(end, i)
    return s[:i] + new + s[j:]


def set_attr(s, pattern, value):
    s2, n = re.subn(pattern, lambda m: m.group(1) + html.escape(value, quote=True) + m.group(2), s)
    assert n == 1, pattern
    return s2


def apply_text(s, T):
    s = re.sub(r'(<(\w+)[^>]*\sdata-i18n="([^"]+)"[^>]*>)(.*?)(</\2>)',
               lambda m: m.group(1) + html.escape(T[m.group(3)], quote=False) + m.group(5), s, flags=re.S)
    s = re.sub(r'(<(\w+)[^>]*\sdata-i18n-html="([^"]+)"[^>]*>)(.*?)(</\2>)',
               lambda m: m.group(1) + T[m.group(3)] + m.group(5), s, flags=re.S)
    return s


def lang_switch(current):
    up = '' if current == 'en' else '../'
    links = []
    for l in LANGS:
        href = (up or './') if l == 'en' else f'{up}{l}/'
        cur = ' aria-current="page"' if l == current else ''
        links.append(f'<a href="{href}" hreflang="{l}" lang="{l}" title="{NAME[l]}"{cur}>{LABEL[l]}</a>')
    return '\n      ' + '\n      '.join(links) + '\n    '


def alternates():
    lines = [f'<link rel="alternate" hreflang="{l}" href="{url(l)}">' for l in LANGS]
    lines.append(f'<link rel="alternate" hreflang="x-default" href="{url("en")}">')
    return '\n' + '\n'.join(lines) + '\n'


def relocate(s):
    """Make relative links work from /<lang>/ (one folder down)."""
    def fix(m):
        attr, val = m.group(1), m.group(2)
        if re.match(r'(https?:|mailto:|tel:|#|/|data:|\.\./|\./)', val):
            return m.group(0)
        return f'{attr}="../{val}"'
    return re.sub(r'\b(href|src)="([^"]*)"', fix, s)


def build(template, lang):
    T = load(lang)
    s = template
    s = re.sub(r'<html lang="[^"]*">', f'<html lang="{lang}">', s, count=1)
    s = set_attr(s, r'(<title>)[^<]*(</title>)', T['meta.title'])
    s = set_attr(s, r'(<meta name="description" content=")[^"]*(">)', T['meta.description'])
    s = set_attr(s, r'(<meta property="og:title" content=")[^"]*(">)', T['meta.title'])
    s = set_attr(s, r'(<meta property="og:description" content=")[^"]*(">)', T['meta.description'])
    s = set_attr(s, r'(<meta property="og:url" content=")[^"]*(">)', url(lang))
    s = set_attr(s, r'(<meta property="og:locale" content=")[^"]*(">)', OG_LOCALE[lang])
    s = set_attr(s, r'(<link rel="canonical" href=")[^"]*(">)', url(lang))
    s = replace_block(s, '<!-- i18n:alternates -->', '<!-- /i18n:alternates -->', alternates())
    s = replace_block(s, '<!-- i18n:switch -->', '<!-- /i18n:switch -->', lang_switch(lang))
    s = replace_block(s, '<!-- i18n:faq-schema -->', '<!-- /i18n:faq-schema -->', faq_schema(T))
    extra = ''
    if lang == 'hy':
        extra = ('\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family='
                 'Noto+Sans+Armenian:wght@400;500;600;700;800&display=swap">\n')
    s = replace_block(s, '<!-- i18n:fonts -->', '<!-- /i18n:fonts -->', extra)
    s = apply_text(s, T)
    if lang != 'en':
        s = relocate(s)
    return s


def faq_schema(T):
    """FAQPage structured data from the visible FAQ, so search engines and AI
    answers can quote it. Keys faq.N.q / faq.N.a, in order."""
    items = []
    n = 0
    while f'faq.{n}.q' in T or n == 0:
        if f'faq.{n}.q' in T:
            items.append({'@type': 'Question',
                          'name': re.sub('<[^>]+>', '', T[f'faq.{n}.q']),
                          'acceptedAnswer': {'@type': 'Answer',
                                             'text': re.sub('<[^>]+>', '', T[f'faq.{n}.a'])}})
        n += 1
    data = {'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': items}
    return ('\n<script type="application/ld+json">\n'
            + json.dumps(data, ensure_ascii=False, indent=1) + '\n</script>\n')


def sitemap():
    today = datetime.date.today().isoformat()
    alt = ''.join(f'\n    <xhtml:link rel="alternate" hreflang="{l}" href="{url(l)}"/>' for l in LANGS)
    alt += f'\n    <xhtml:link rel="alternate" hreflang="x-default" href="{url("en")}"/>'
    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
           'xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for l in LANGS:
        out.append(f'  <url>\n    <loc>{url(l)}</loc>\n    <lastmod>{today}</lastmod>\n'
                   f'    <priority>{"1.0" if l == "en" else "0.9"}</priority>{alt}\n  </url>')
    for p, pr in zip(LEGAL_PAGES, ['0.3', '0.3', '0.5']):
        out.append(f'  <url><loc>{SITE}/{p}</loc><lastmod>{today}</lastmod><priority>{pr}</priority></url>')
    out.append('</urlset>\n')
    return '\n'.join(out)


def main():
    path = os.path.join(ROOT, 'index.html')
    with open(path, encoding='utf8') as f:
        template = f.read()
    for lang in LANGS:
        page = build(template, lang)
        dest = path if lang == 'en' else os.path.join(ROOT, lang, 'index.html')
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        with open(dest, 'w', encoding='utf8') as f:
            f.write(page)
        print('wrote', os.path.relpath(dest, ROOT))
    with open(os.path.join(ROOT, 'sitemap.xml'), 'w', encoding='utf8') as f:
        f.write(sitemap())
    print('wrote sitemap.xml')


if __name__ == '__main__':
    main()
