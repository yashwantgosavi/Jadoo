// fadein on mousescroll
const $paragraph = $("p,li,a,img,div,h1,h2,h3,h4,h5,h6,b,address,footer,ul,button");
$(window).scroll(function() {
  $paragraph.each(function() {
    const paragraphMiddle = $(this).offset().top + 0.5 * $(this).height();
    const windowBottom = $(window).scrollTop() + $(window).height();
    if (paragraphMiddle < windowBottom) {
      $(this).addClass("slideIn");
    }
  });
});
$(window).scroll();

// navglass
$(function() {
  var s = $(".navbar");
  $(window).scroll(function() {
    100 <= $(window).scrollTop()
      ? s.removeClass("clearHeader").addClass("glass")
      : s.removeClass("glass").addClass("clearHeader");
  });
});