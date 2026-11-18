<?xml version="1.0" encoding="UTF-8"?>
<!-- Makes sitemap.xml readable in a browser. Search engines ignore this file
     and read the raw XML. -->
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    exclude-result-prefixes="s xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap — jotly.info</title>
        <style>
          body { margin: 0; background: #F2F2EE; color: #121212; font: 15px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
          main { max-width: 1000px; margin: 0 auto; padding: 48px 24px 64px; }
          h1 { margin: 0 0 6px; font-size: 32px; letter-spacing: -0.02em; }
          h1 span { display: inline-block; width: 8px; height: 8px; border-radius: 4px; background: #121212; margin-left: 3px; }
          p { margin: 0 0 24px; color: #5F5F5A; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 20px; overflow: hidden; }
          th, td { text-align: left; padding: 14px 18px; border-bottom: 1px solid #ECECE6; vertical-align: top; }
          th { font-size: 13px; color: #5F5F5A; font-weight: 600; background: #FAFAF7; }
          tr:last-child td { border-bottom: 0; }
          a { color: #121212; font-weight: 600; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .langs a { display: inline-block; margin: 0 6px 6px 0; padding: 2px 10px; border-radius: 999px; background: #F2F2EE; font-size: 13px; font-weight: 600; }
          .num { white-space: nowrap; color: #5F5F5A; }
          @media (max-width: 640px) { .hide-sm { display: none; } th, td { padding: 12px; } }
        </style>
      </head>
      <body>
        <main>
          <h1>jotly<span></span> sitemap</h1>
          <p><xsl:value-of select="count(s:urlset/s:url)"/> pages. This list is for search engines like Google.</p>
          <table>
            <tr><th>Page</th><th class="hide-sm">Languages</th><th>Updated</th><th class="hide-sm">Priority</th></tr>
            <xsl:for-each select="s:urlset/s:url">
              <tr>
                <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                <td class="langs hide-sm">
                  <xsl:for-each select="xhtml:link">
                    <a href="{@href}"><xsl:value-of select="@hreflang"/></a>
                  </xsl:for-each>
                </td>
                <td class="num"><xsl:value-of select="s:lastmod"/></td>
                <td class="num hide-sm"><xsl:value-of select="s:priority"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
