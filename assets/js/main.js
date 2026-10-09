(function() {
  'use strict';
  var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  if (prefersLight) {
    document.documentElement.classList.add('theme-light');
  }
  console.log('Mahvex Template loaded');
})();
