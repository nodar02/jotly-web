(function () {
  'use strict';

  // The site is static, so "Send message" opens the visitor's email app with the
  // message filled in. To send straight from the page instead, point the form at a
  // form service (e.g. Formspree) and replace openMail() with a fetch() POST.
  var TO = 'support@jotly.info';

  var form = document.getElementById('contact-form');
  var sent = document.getElementById('contact-sent');
  if (!form) return;

  var topic = 'App support';
  var topicBtns = document.querySelectorAll('#c-topics button');
  topicBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      topic = b.getAttribute('data-topic');
      topicBtns.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
    });
  });

  var name = document.getElementById('c-name');
  var email = document.getElementById('c-email');
  var msg = document.getElementById('c-msg');

  function setError(input, text) {
    var err = document.getElementById(input.id + '-err');
    input.setAttribute('aria-invalid', text ? 'true' : 'false');
    if (err) { err.textContent = text || ''; err.hidden = !text; }
  }

  function openMail() {
    var subject = 'Jotly — ' + topic;
    var body = msg.value.trim() + '\n\n— ' + (name.value.trim() || 'Jotly user') + ' (' + email.value.trim() + ')';
    window.location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true;
    var em = email.value.trim();
    if (!em) { setError(email, 'Enter your email so we can reply.'); ok = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { setError(email, 'Enter an email like you@example.com.'); ok = false; }
    else setError(email, '');
    if (!msg.value.trim()) { setError(msg, 'Write a message before sending.'); ok = false; }
    else setError(msg, '');
    if (!ok) { form.querySelector('[aria-invalid="true"]').focus(); return; }

    openMail();
    form.hidden = true;
    sent.hidden = false;
    sent.querySelector('h2').setAttribute('tabindex', '-1');
    sent.querySelector('h2').focus();
  });

  document.getElementById('contact-again').addEventListener('click', function () {
    msg.value = '';
    sent.hidden = true;
    form.hidden = false;
    msg.focus();
  });
})();
