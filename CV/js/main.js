$(function () {
  
  // Has Attribute Function
  $.fn.hasAttribute = function (name) {
    return this.attr(name) !== undefined;
  };

  // Function ScrollTo
  function scroll_to(to, seconds, subof = 10)
  {
    $('html, body').animate({
      scrollTop: $(to).offset().top - subof
    }, seconds);
  }

  // Go to
  $('*[goto]').on('click', function () {
    var redirect_to = $(this).attr('goto');
    if ($(this).hasAttribute('smooth-scroll') == true && $(this).attr('smooth-scroll') == 'on') {
      scroll_to(redirect_to);
    } else {
      var new_window = window.open(redirect_to, '_blank');
      new_window.focus();
    }
  });

});
