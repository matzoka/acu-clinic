// フッターの年号を自動表示
(function(){
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();

// スクロールで要素をふわっと表示
(function(){
  var targets = Array.prototype.slice.call(document.querySelectorAll('.hero, section, .card'));
  if (!targets.length) return;

  // フォールバック（未対応ブラウザ）
  if (!('IntersectionObserver' in window)){
    targets.forEach(function(el){ el.classList.add('reveal','is-visible'); });
    return;
  }

  targets.forEach(function(el){ el.classList.add('reveal'); });

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var delay = 0;
      if (el.classList.contains('card')){
        var siblings = Array.prototype.filter.call(el.parentNode.children, function(c){ return c.classList && c.classList.contains('card'); });
        var idx = siblings.indexOf(el);
        delay = Math.max(0, idx) * 80; // カードのみ少しずつ表示
      }
      el.style.animationDelay = delay + 'ms';
      el.classList.add('is-visible');
      io.unobserve(el);
    });
  }, { threshold: 0.15 });

  targets.forEach(function(el){ io.observe(el); });
})();
