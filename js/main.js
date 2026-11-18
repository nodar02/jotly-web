(function () {
  'use strict';

  /* ───────── Language links ─────────
     Each language is its own page (/, /ru/, /es/, /hy/), built by tools/build_i18n.py.
     When the site is opened straight from disk (file://), folders don't open their
     index.html by themselves, so point the links at it. */
  if (location.protocol === 'file:') {
    document.querySelectorAll('.lang a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (/\/$/.test(href)) a.setAttribute('href', href + 'index.html');
    });
  }

  /* ───────── Helpers ───────── */
  function h(tag, cls, html) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (html != null) el.innerHTML = html;
    return el;
  }
  function usd(n) { return '$' + n.toLocaleString('en-US'); }

  /* ───────── Tab bar (shared by app screens) ───────── */
  var ICONS = {
    activity: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/></svg>',
    summary: '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M11 3.1A9 9 0 1 0 20.9 13H11z"/><path d="M13 1.6V11h9.4A9.4 9.4 0 0 0 13 1.6z"/></svg>',
    budget: '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M5.5 5h13a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zM2.5 8.6v2h19v-2zM5.5 13.2v2.6h3.6v-2.6z"/></svg>',
    insights: '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="11" width="5" height="10" rx="1.6"/><rect x="9.5" y="7" width="5" height="14" rx="1.6"/><rect x="16" y="3" width="5" height="18" rx="1.6"/></svg>'
  };
  function tab(id, label, active) {
    return '<span class="tab' + (id === active ? ' on' : '') + '">' + ICONS[id] + label + '</span>';
  }
  document.querySelectorAll('.tabbar').forEach(function (bar) {
    var a = bar.getAttribute('data-active');
    bar.innerHTML = tab('activity', 'Activity', a) + tab('summary', 'Summary', a) +
      '<span class="tab-plus"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span>' +
      tab('budget', 'Budget', a) + tab('insights', 'Insights', a);
  });

  /* ───────── Quick jot (interactive hero demo) ───────── */
  var jot = document.getElementById('quickjot');
  if (jot) {
    var state = { amount: '4.80', cat: 'food', cur: 'USD', saved: false };
    var CATS = [
      ['housing', 'Housing', '#121212'], ['food', 'Food', '#D4F25A'], ['groceries', 'Groceries', '#B8A6FF'],
      ['utilities', 'Utilities', '#FF8A5B'], ['transport', 'Transport', '#7FC8F8'], ['shopping', 'Shopping', '#F5B8D8'],
      ['goingout', 'Going out', '#FFD15C'], ['subs', 'Subscriptions', '#9FE0C4']
    ];
    var RATES = { USD: [1, '$'], EUR: [0.87, '€'], GBP: [0.75, '£'], AMD: [387, '֏'] };
    var q = function (k) { return jot.querySelector('[data-jot="' + k + '"]'); };
    var curWrap = q('curs'), catWrap = q('cats'), keyWrap = q('keys'), saveBtn = q('save');

    Object.keys(RATES).forEach(function (k) {
      var b = h('button', null, RATES[k][1] + ' ' + k);
      b.type = 'button';
      b.dataset.cur = k;
      b.addEventListener('click', function () { state.cur = k; state.saved = false; render(); });
      curWrap.appendChild(b);
    });
    CATS.forEach(function (c) {
      var b = h('button', null, '<span class="dot"></span>' + c[1]);
      b.type = 'button';
      b.dataset.cat = c[0];
      b.addEventListener('click', function () { state.cat = c[0]; state.saved = false; render(); });
      catWrap.appendChild(b);
    });
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'back'].forEach(function (k) {
      var b = h('button', k === 'back' ? 'back' : null, k === 'back'
        ? '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5h11v14H9l-6-7z"/><path d="M12 9l5 6M17 9l-5 6"/></svg>'
        : k);
      b.type = 'button';
      if (k === 'back') b.setAttribute('aria-label', 'Delete');
      b.addEventListener('click', function () { press(k); });
      keyWrap.appendChild(b);
    });
    saveBtn.addEventListener('click', function () {
      if (state.amount) { state.saved = true; render(); }
    });

    function press(k) {
      var a = state.amount;
      if (k === 'back') a = a.slice(0, -1);
      else if (k === '.') { if (a.indexOf('.') === -1) a = (a || '0') + '.'; }
      else {
        var dot = a.indexOf('.');
        if (dot !== -1 && a.length - dot > 2) return;
        if (a.replace('.', '').length >= 7) return;
        a = (a === '0' ? '' : a) + k;
      }
      state.amount = a;
      state.saved = false;
      render();
    }

    function render() {
      var r = RATES[state.cur];
      var num = parseFloat(state.amount || '0');
      var parts = (state.amount || '0').split('.');
      q('sym').textContent = r[1];
      var amt = q('amount');
      amt.textContent = Number(parts[0] || '0').toLocaleString('en-US') + (parts.length > 1 ? '.' + parts[1] : '');
      amt.classList.toggle('empty', !state.amount);
      var conv;
      if (state.cur === 'USD') conv = 'Main currency';
      else if (num) conv = '≈ $' + (num / r[0]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' · 1 USD = ' + r[0] + ' ' + state.cur;
      else conv = '1 USD = ' + r[0] + ' ' + state.cur;
      q('conv').textContent = conv;

      curWrap.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.cur === state.cur));
      });
      var catLabel = '';
      catWrap.querySelectorAll('button').forEach(function (b, i) {
        var on = b.dataset.cat === state.cat;
        b.setAttribute('aria-pressed', String(on));
        b.querySelector('.dot').style.background = (CATS[i][0] === 'housing' && on) ? '#FFFFFF' : CATS[i][2];
        if (on) catLabel = CATS[i][1];
      });
      saveBtn.textContent = (state.saved ? 'Jotted to ' : 'Save to ') + catLabel;
      saveBtn.classList.toggle('saved', state.saved);
    }
    render();
  }

  /* ───────── Activity: daily bars ───────── */
  var bars = document.getElementById('daily-bars');
  if (bars) {
    var v = [210,180,260,240,742,190,230,300,280,350,220,310,260,330,290,240,410,270,320,300,260,280,350,300,330,390,320,280,461,58];
    v.forEach(function (x, i) {
      var b = h('div', 'bar');
      b.style.height = Math.max(6, Math.round(x / 742 * 112)) + 'px';
      b.style.background = i === v.length - 1 ? '#121212' : (x === 742 ? '#B8A6FF' : '#D9D9D2');
      bars.appendChild(b);
    });
  }

  /* ───────── Summary: split + category list ───────── */
  var split = document.getElementById('sum-split');
  var list = document.getElementById('sum-list');
  if (split && list) {
    var raw = [
      ['Housing', 4300, 12, '#FFFFFF'], ['Food', 1321, 19, '#D4F25A'], ['Groceries', 1180, 14, '#B8A6FF'],
      ['Utilities', 811, 4, '#FF8A5B'], ['Shopping', 742, 9, '#F5B8D8'], ['Transport', 597, 16, '#7FC8F8'],
      ['Other', 561, 9, '#BDBDB5']
    ];
    var total = 9512;
    raw.forEach(function (r, i) {
      var s = h('span');
      s.style.flex = r[1];
      s.style.background = i === 0 ? '#F2F2EE' : r[3];
      split.appendChild(s);
      list.appendChild(h('li', null,
        '<span class="cat-sw" style="background:' + (i === 0 ? '#121212' : r[3]) + '"></span>' +
        '<span class="cat-name"><b>' + r[0] + '</b><small>' + r[2] + ' jots</small></span>' +
        '<span class="cat-pct">' + Math.round(r[1] / total * 100) + '%</span>' +
        '<span class="cat-amt">' + usd(r[1]) + '</span>'));
    });
  }

  /* ───────── Insights: month picker ───────── */
  var ins = document.getElementById('insights');
  if (ins) {
    var data = [['Apr', 18000, 10120], ['May', 18400, 9880], ['Jun', 19200, 10450], ['Jul', 17900, 9020], ['Aug', 19600, 7800], ['Sep', 22600, 9512]];
    var maxI = 22600, maxL = 13088, avgL = 9820, sel = 5;
    var qi = function (k) { return ins.querySelectorAll('[data-ins="' + k + '"]'); };
    var monthsEl = qi('months')[0], leftEl = qi('leftbars')[0];
    qi('avg')[0].style.bottom = Math.round(avgL / maxL * 92) + 'px';

    data.forEach(function (d, i) {
      var b = h('button', null,
        '<span class="ins-pair"><span style="height:' + Math.round(d[1] / maxI * 130) + 'px;background:#F2F2EE"></span>' +
        '<span style="height:' + Math.round(d[2] / maxI * 130) + 'px;background:#D4F25A"></span></span>' + d[0]);
      b.type = 'button';
      b.addEventListener('click', function () { sel = i; renderIns(); });
      monthsEl.appendChild(b);
      var l = h('span', 'lb');
      l.style.height = Math.round((d[1] - d[2]) / maxL * 92) + 'px';
      leftEl.appendChild(l);
    });

    function renderIns() {
      var s = data[sel], left = s[1] - s[2];
      qi('name').forEach(function (el) { el.textContent = s[0]; });
      qi('inc')[0].textContent = usd(s[1]);
      qi('exp')[0].textContent = usd(s[2]);
      qi('left')[0].textContent = usd(left);
      qi('rate')[0].textContent = Math.round(left / s[1] * 100) + '%';
      monthsEl.querySelectorAll('button').forEach(function (b, i) { b.setAttribute('aria-pressed', String(i === sel)); });
      leftEl.querySelectorAll('.lb').forEach(function (b, i) { b.style.background = i === sel ? '#121212' : '#B8A6FF'; });
    }
    renderIns();
  }
})();
