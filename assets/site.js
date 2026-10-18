/* 知水 · 个人网页 —— 交互脚本 */
(function () {
  'use strict';

  /* 移动端全屏菜单 */
  var btn = document.querySelector('.menu-btn');
  var ov = document.querySelector('.overlay');
  if (btn && ov) {
    var close = function () {
      ov.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    btn.addEventListener('click', function () {
      var open = ov.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    ov.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* 滚动渐显 */
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* 页脚年份 */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
