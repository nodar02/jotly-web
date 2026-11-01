(function () {
  'use strict';

  /* ───────── Translations (EN / RU) ───────── */
  var T = {
    en: {
      'nav.how': 'How it works', 'nav.features': 'Features', 'nav.pricing': 'Pricing', 'nav.faq': 'FAQ', 'nav.cta': 'Get the app',
      'hero.badge': 'Expense tracker for iPhone',
      'hero.title': 'Double-tap.<br>Jot. <mark>Done.</mark>',
      'hero.lede': 'Jotly logs an expense in about three seconds — tap the back of your iPhone, type the amount, pick a category. See where every dram, dollar and euro went.',
      'hero.cta': 'Start free month', 'hero.cta2': 'See how it works',
      'hero.fine': 'iPhone · 1 month free, then $4.90/month',
      'how.kicker': 'How it works', 'how.title': 'Faster than forgetting.',
      'how.s1.t': 'Turn on Back Tap', 'how.s1.p': 'A one-minute setup in Jotly links a double-tap on the back of your iPhone to a new jot.',
      'how.s2.t': 'Tap at the till', 'how.s2.p': 'Paid for coffee? Double-tap — the jot sheet opens over whatever you were doing, even from the lock screen.',
      'how.s3.t': 'Amount, category, done', 'how.s3.p': 'Type the amount in any currency, tap a category, save. About three seconds, start to finish.',
      'feat.title': 'Everything you need to know where it went.',
      'feat.lede': 'No bank logins, no spreadsheets. Just your jots, turned into clear numbers.',
      'feat.1.t': 'Three-second jots', 'feat.1.p': 'One sheet for amount, note and category. Your default account and category are already picked.',
      'feat.2.t': 'Every currency', 'feat.2.p': "Jot in dram, dollars, euros or rubles. Totals convert to your main currency at that day's rate.",
      'feat.3.t': 'Budgets that nudge', 'feat.3.p': "Set a monthly budget and per-category limits. See what's left per day, and which category ran over.",
      'feat.4.t': 'Insights, not homework', 'feat.4.p': 'Income versus spending by month, what you kept, and plain-language notes on what changed.',
      'feat.5.t': 'Private by default', 'feat.5.p': 'Your jots live on your iPhone and sync through your own iCloud. Lock the app with Face ID.',
      'feat.6.t': 'Light and dark', 'feat.6.p': "Follows your iPhone's appearance, in English or Russian.",
      'screens.title': 'See where it <span class="lime-text">went.</span>',
      'screens.lede': 'Activity, category split and monthly insights — all from the jots you already made.',
      'price.kicker': 'Pricing', 'price.title': 'One plan. First month on us.',
      'price.lede': 'Try everything free for a month. Keep going for less than one coffee — cancel anytime in your App Store settings.',
      'price.badge': '1 month free', 'price.per': '/ month',
      'price.f1': 'Unlimited jots and accounts', 'price.f2': 'Back Tap quick jot', 'price.f3': 'Multi-currency with daily rates',
      'price.f4': 'Budgets, insights and CSV export', 'price.f5': 'iCloud sync across your devices',
      'price.cta': 'Start free month',
      'faq.title': 'Questions',
      'faq.1.q': 'Does Jotly connect to my bank?', 'faq.1.a': 'No. You jot what you spend, so nothing needs your bank login. Automatic jots from Apple Wallet payments are coming soon.',
      'faq.2.q': 'Where is my data stored?', 'faq.2.a': 'On your iPhone, synced through your own iCloud account. You can export everything to CSV at any time.',
      'faq.3.q': 'Which currencies does it support?', 'faq.3.a': 'Jot in any currency. Pick a main currency for totals and budgets; each jot keeps its original amount and the rate from that day.',
      'faq.4.q': 'Is there an Android version?', 'faq.4.a': 'Jotly is iPhone-only for now, in English and Russian.',
      'final.title': 'Your next coffee is a three-second jot.', 'final.cta': 'Get Jotly free',
      'foot.privacy': 'Privacy', 'foot.terms': 'Terms', 'foot.contact': 'Contact',
      'meta.title': 'Jotly — quick expense tracker for iPhone'
    },
    ru: {
      'nav.how': 'Как это работает', 'nav.features': 'Возможности', 'nav.pricing': 'Цена', 'nav.faq': 'Вопросы', 'nav.cta': 'Скачать',
      'hero.badge': 'Учёт расходов для iPhone',
      'hero.title': 'Двойной тап.<br>Записал. <mark>Готово.</mark>',
      'hero.lede': 'Jotly записывает расход примерно за три секунды — коснитесь задней панели iPhone, введите сумму, выберите категорию. Видно, куда ушёл каждый драм, доллар и евро.',
      'hero.cta': 'Месяц бесплатно', 'hero.cta2': 'Как это работает',
      'hero.fine': 'iPhone · месяц бесплатно, затем $4.90 в месяц',
      'how.kicker': 'Как это работает', 'how.title': 'Быстрее, чем забыть.',
      'how.s1.t': 'Включите Back Tap', 'how.s1.p': 'Минутная настройка в Jotly привязывает двойной тап по задней панели iPhone к новой записи.',
      'how.s2.t': 'Тап на кассе', 'how.s2.p': 'Заплатили за кофе? Двойной тап — окно записи откроется поверх любого приложения, даже с экрана блокировки.',
      'how.s3.t': 'Сумма, категория, готово', 'how.s3.p': 'Введите сумму в любой валюте, выберите категорию, сохраните. Около трёх секунд от начала до конца.',
      'feat.title': 'Всё, чтобы знать, куда ушли деньги.',
      'feat.lede': 'Без входа в банк и без таблиц. Только ваши записи, превращённые в понятные цифры.',
      'feat.1.t': 'Запись за три секунды', 'feat.1.p': 'Одно окно для суммы, заметки и категории. Основной счёт и категория уже выбраны.',
      'feat.2.t': 'Любая валюта', 'feat.2.p': 'Записывайте в драмах, долларах, евро или рублях. Итоги пересчитываются в основную валюту по курсу того дня.',
      'feat.3.t': 'Бюджеты с подсказками', 'feat.3.p': 'Задайте месячный бюджет и лимиты по категориям. Видно, сколько осталось на день и какая категория вышла за лимит.',
      'feat.4.t': 'Аналитика без усилий', 'feat.4.p': 'Доходы и расходы по месяцам, сколько удалось сохранить, и понятные заметки о том, что изменилось.',
      'feat.5.t': 'Приватно по умолчанию', 'feat.5.p': 'Записи хранятся на вашем iPhone и синхронизируются через ваш iCloud. Приложение можно закрыть Face ID.',
      'feat.6.t': 'Светлая и тёмная тема', 'feat.6.p': 'Следует оформлению iPhone, на английском или русском.',
      'screens.title': 'Видно, куда <span class="lime-text">ушло.</span>',
      'screens.lede': 'Активность, разбивка по категориям и аналитика по месяцам — всё из уже сделанных записей.',
      'price.kicker': 'Цена', 'price.title': 'Один тариф. Первый месяц — бесплатно.',
      'price.lede': 'Попробуйте всё бесплатно в течение месяца. Дальше — дешевле одной чашки кофе. Отменить можно в любой момент в настройках App Store.',
      'price.badge': 'Месяц бесплатно', 'price.per': '/ месяц',
      'price.f1': 'Безлимитные записи и счета', 'price.f2': 'Быстрая запись через Back Tap', 'price.f3': 'Мультивалютность с дневным курсом',
      'price.f4': 'Бюджеты, аналитика и экспорт в CSV', 'price.f5': 'Синхронизация через iCloud',
      'price.cta': 'Месяц бесплатно',
      'faq.title': 'Вопросы',
      'faq.1.q': 'Jotly подключается к моему банку?', 'faq.1.a': 'Нет. Вы сами записываете траты, поэтому вход в банк не нужен. Автоматические записи из платежей Apple Wallet скоро появятся.',
      'faq.2.q': 'Где хранятся мои данные?', 'faq.2.a': 'На вашем iPhone, с синхронизацией через ваш аккаунт iCloud. Всё можно в любой момент выгрузить в CSV.',
      'faq.3.q': 'Какие валюты поддерживаются?', 'faq.3.a': 'Любые. Выберите основную валюту для итогов и бюджетов; каждая запись сохраняет исходную сумму и курс того дня.',
      'faq.4.q': 'Есть версия для Android?', 'faq.4.a': 'Пока Jotly только для iPhone, на английском и русском.',
      'final.title': 'Следующий кофе — запись за три секунды.', 'final.cta': 'Попробовать Jotly',
      'foot.privacy': 'Конфиденциальность', 'foot.terms': 'Условия', 'foot.contact': 'Контакты',
      'meta.title': 'Jotly — быстрый учёт расходов для iPhone'
    },
    es: {
      'nav.how': 'Cómo funciona', 'nav.features': 'Funciones', 'nav.pricing': 'Precio', 'nav.faq': 'Preguntas', 'nav.cta': 'Descargar',
      'hero.badge': 'Control de gastos para iPhone',
      'hero.title': 'Doble toque.<br>Anota. <mark>Listo.</mark>',
      'hero.lede': 'Jotly registra un gasto en unos tres segundos: toca la parte trasera de tu iPhone, escribe el importe y elige una categoría. Mira adónde fue cada dram, dólar y euro.',
      'hero.cta': 'Empieza tu mes gratis', 'hero.cta2': 'Mira cómo funciona',
      'hero.fine': 'iPhone · 1 mes gratis, luego $4.90 al mes',
      'how.kicker': 'Cómo funciona', 'how.title': 'Más rápido que olvidarlo.',
      'how.s1.t': 'Activa Tocar atrás', 'how.s1.p': 'Una configuración de un minuto en Jotly vincula un doble toque en la parte trasera de tu iPhone con una nueva anotación.',
      'how.s2.t': 'Toca al pagar', 'how.s2.p': '¿Pagaste un café? Doble toque: la hoja de anotación se abre sobre lo que estés haciendo, incluso desde la pantalla bloqueada.',
      'how.s3.t': 'Importe, categoría, listo', 'how.s3.p': 'Escribe el importe en cualquier moneda, toca una categoría y guarda. Unos tres segundos de principio a fin.',
      'feat.title': 'Todo lo que necesitas para saber adónde fue tu dinero.',
      'feat.lede': 'Sin acceso a tu banco ni hojas de cálculo. Solo tus anotaciones, convertidas en números claros.',
      'feat.1.t': 'Anotaciones en tres segundos', 'feat.1.p': 'Una sola hoja para importe, nota y categoría. Tu cuenta y categoría habituales ya están elegidas.',
      'feat.2.t': 'Cualquier moneda', 'feat.2.p': 'Anota en drams, dólares, euros o rublos. Los totales se convierten a tu moneda principal con el tipo de cambio de ese día.',
      'feat.3.t': 'Presupuestos que avisan', 'feat.3.p': 'Fija un presupuesto mensual y límites por categoría. Mira cuánto te queda por día y qué categoría se pasó.',
      'feat.4.t': 'Análisis sin esfuerzo', 'feat.4.p': 'Ingresos frente a gastos por mes, cuánto ahorraste y notas claras sobre qué cambió.',
      'feat.5.t': 'Privado por defecto', 'feat.5.p': 'Tus anotaciones viven en tu iPhone y se sincronizan con tu propio iCloud. Bloquea la app con Face ID.',
      'feat.6.t': 'Modo claro y oscuro', 'feat.6.p': 'Sigue la apariencia de tu iPhone.',
      'screens.title': 'Mira adónde <span class="lime-text">fue.</span>',
      'screens.lede': 'Actividad, reparto por categorías y análisis mensual, todo a partir de lo que ya anotaste.',
      'price.kicker': 'Precio', 'price.title': 'Un solo plan. El primer mes, gratis.',
      'price.lede': 'Prueba todo gratis durante un mes. Después, por menos que un café. Cancela cuando quieras en los ajustes de App Store.',
      'price.badge': '1 mes gratis', 'price.per': '/ mes',
      'price.f1': 'Anotaciones y cuentas ilimitadas', 'price.f2': 'Anotación rápida con Tocar atrás', 'price.f3': 'Multimoneda con tipo de cambio diario',
      'price.f4': 'Presupuestos, análisis y exportación a CSV', 'price.f5': 'Sincronización con iCloud entre tus dispositivos',
      'price.cta': 'Empieza tu mes gratis',
      'faq.title': 'Preguntas',
      'faq.1.q': '¿Jotly se conecta a mi banco?', 'faq.1.a': 'No. Tú anotas lo que gastas, así que no hace falta acceder a tu banco. Pronto llegarán las anotaciones automáticas de pagos con Apple Wallet.',
      'faq.2.q': '¿Dónde se guardan mis datos?', 'faq.2.a': 'En tu iPhone, sincronizados con tu propia cuenta de iCloud. Puedes exportarlo todo a CSV cuando quieras.',
      'faq.3.q': '¿Qué monedas admite?', 'faq.3.a': 'Cualquiera. Elige una moneda principal para totales y presupuestos; cada anotación conserva su importe original y el tipo de cambio de ese día.',
      'faq.4.q': '¿Hay versión para Android?', 'faq.4.a': 'Por ahora Jotly es solo para iPhone.',
      'final.title': 'Tu próximo café es una anotación de tres segundos.', 'final.cta': 'Prueba Jotly gratis',
      'foot.privacy': 'Privacidad', 'foot.terms': 'Términos', 'foot.contact': 'Contacto',
      'meta.title': 'Jotly — control de gastos rápido para iPhone'
    }
  };

  function storeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function storeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function setLang(lang) {
    var dict = T[lang] || T.en;
    document.documentElement.lang = lang;
    document.title = dict['meta.title'];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-html')];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    storeSet('jotly-lang', lang);
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });
  var saved = storeGet('jotly-lang');
  var browser = (navigator.language || '').toLowerCase().slice(0, 2);
  var initial = (saved && T[saved]) ? saved : (T[browser] ? browser : 'en');
  if (initial !== 'en') setLang(initial);

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
    activity: '<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>',
    summary: '<path d="M21 12A9 9 0 1 1 12 3v9z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15z"/>',
    budget: '<rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18M16 15h2"/>',
    insights: '<path d="M5 20v-8M12 20V5M19 20v-11"/>'
  };
  function tab(id, label, active) {
    return '<span class="tab' + (id === active ? ' on' : '') + '"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + ICONS[id] + '</svg>' + label + '</span>';
  }
  document.querySelectorAll('.tabbar').forEach(function (bar) {
    var a = bar.getAttribute('data-active');
    bar.innerHTML = tab('activity', 'Activity', a) + tab('summary', 'Summary', a) +
      '<span class="tab-plus"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span>' +
      tab('budget', 'Budget', a) + tab('insights', 'Insights', a);
  });

  /* ───────── Quick jot (interactive hero demo) ───────── */
  var jot = document.getElementById('quickjot');
  if (jot) {
    var state = { amount: '12500', cat: 'food', cur: 'AMD', saved: false };
    var CATS = [
      ['housing', 'Housing', '#121212'], ['food', 'Food', '#D4F25A'], ['groceries', 'Groceries', '#B8A6FF'],
      ['utilities', 'Utilities', '#FF8A5B'], ['transport', 'Transport', '#7FC8F8'], ['shopping', 'Shopping', '#F5B8D8'],
      ['goingout', 'Going out', '#FFD15C'], ['subs', 'Subscriptions', '#9FE0C4']
    ];
    var RATES = { USD: [1, '$'], AMD: [387, '֏'], EUR: [0.87, '€'], RUB: [80, '₽'], GEL: [2.7, '₾'] };
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
