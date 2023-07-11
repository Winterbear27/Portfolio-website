$('.hero-btn').click(function() {
  $('.modal').removeClass('hidden');
});
$('.close-btn').click(function() {
  $('.modal').addClass('hidden');
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }

    }
  });
});

$(function() {
  $(window).scroll(function() {

    $('.fade-in').each(function(i) {

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      bottom_of_window = bottom_of_window + 400;

      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 600);

      }
    });
  });
});

$(window).scroll(function() {

  if ($(this).scrollTop() > 500) {
    $('.scroll-top').removeClass('hidden');
  } else {
    $('.scroll-top').addClass('hidden');
  }
});

$('.scroll-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});

var map837u18engvh;
(function(d, t) {
  var s = d.createElement(t),
    options = {
      'userName': 'lewisvrobinson',
      'formHash': 'map837u18engvh',
      'autoResize': true,
      'height': '580',
      'async': true,
      'host': 'wufoo.com',
      'header': 'hide',
      'ssl': true
    };
  s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
  s.onload = s.onreadystatechange = function() {
    var rs = this.readyState;
    if (rs)
      if (rs != 'complete')
        if (rs != 'loaded') return;
    try {
      map837u18engvh = new WufooForm();
      map837u18engvh.initialize(options);
      map837u18engvh.display();
    } catch (e) {}
  };
  var scr = d.getElementsByTagName(t)[0],
    par = scr.parentNode;
  par.insertBefore(s, scr);
})(document, 'script');