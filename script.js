document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.querySelector('.mobile-menu');
  var openIcon = document.querySelector('.icon-open');
  var closeIcon = document.querySelector('.icon-close');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      menu.classList.toggle('open');
      if (openIcon && closeIcon) {
        openIcon.style.display = menu.classList.contains('open') ? 'none' : 'block';
        closeIcon.style.display = menu.classList.contains('open') ? 'block' : 'none';
      }
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        if (openIcon && closeIcon) { openIcon.style.display = 'block'; closeIcon.style.display = 'none'; }
      });
    });
  }

  var header = document.querySelector('.site-header-inner');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 1px 2px rgba(0,0,0,.06)';
      }
    });
  }
});
