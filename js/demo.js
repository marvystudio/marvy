var lastScrollTop = 0;
$(function () {
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        var $nav = $(".scroll-fixed-top");
        if (st > lastScrollTop){
            $nav.removeClass('scrolled');
        } else {

            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        }
        lastScrollTop = st;

    });

});

$(window).scroll(function() {

    var wScroll = $(this).scrollTop();
    $('.eco-nike').css({
        'transform' : 'translateX(-'+ wScroll /4 +'%)'
    });
    $('.eco-airforce').css({
        'transform' : 'translateX('+ wScroll /4 +'%)'
    });
    if(wScroll > $('.eco-browse-all').offset().top - $(window).height()){
        $('.eco-browse-all').css({'background-position':'center '+ (wScroll - $('.eco-browse-all').offset().top) +'px'});

        var opacity = (wScroll - $('.eco-browse-all').offset().top + 400) / (wScroll / 5);

        $('.eco-window-tint').css({'opacity': opacity});

    }
});

