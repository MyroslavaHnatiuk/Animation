$(document).ready(function () {
        setTimeout(function () {
        $('.first-animate').hide();
        $('.block').show();
        $('.block').removeClass('.hide');
    $('.first .top-gradient').addClass('top-animate')
    //    $('body').addClass('main');
        $('.el').hide();
            var screenHeight = $( window ).height();
            console.log(screenHeight);


    }, 10000);

    var screenHeight = $( window ).height();
    var screenHeight2 = $( window ).height()*2;
    var screenHeight3 = $( window ).height()*3;
    var screenHeight4 = $( window ).height()*4;

    $('.first').bind('mousewheel', function(event) {
        var screenHeight = $( window ).height();
        console.log($( window ).height());
        if (event.originalEvent.wheelDelta <= 0) {
            $("body").animate({
                scrollTop: screenHeight+30
            }, 500);
            $('.second .top-gradient').addClass('top-animate');
            $('.first .top-gradient').removeClass('top-animate');
            $('.first .flow').removeClass('flow-animate');
            $('.second .pictures').addClass('to-top');
            setTimeout(function () {
                $('.second .descr').addClass('desc-animate').removeClass('hide');
            }, 5000);
            //$('.second .pic-description').show();
        }
    });
    $('.second').bind('mousewheel', function(event) {
        console.log($( window ).height());
        if (event.originalEvent.wheelDelta >= 0) {
            $("body").animate({
                scrollTop: -screenHeight+30
            }, 500);
            $('.second .top-gradient').removeClass('top-animate');
            $('.first .top-gradient').addClass('top-animate');
            $('.first .flow').addClass('flow-animate');
            $('.second .pictures').removeClass('to-top');
            $('.second .descr').removeClass('desc-animate').addClass('hide');
        }
        else {
            $("body").animate({
                scrollTop: screenHeight2+30
            }, 500);
            $('.third .top-gradient').addClass('top-animate');
            $('.second .top-gradient').removeClass('top-animate');
            $('.third .flow').addClass('flow-animate2');
            $('.second .pictures').removeClass('to-top');
            $('.second .descr').addClass('hide').removeClass('desc-animate');


        }
    });
    $('.third').bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            $("body").animate({
                scrollTop: screenHeight+30
            }, 500);
            $('.third .top-gradient').removeClass('top-animate');
            $('.second .top-gradient').addClass('top-animate');
            $('.third .flow').removeClass('flow-animate2');
            $('.second .pictures').addClass('to-top');
            setTimeout(function () {
                $('.second .descr').addClass('desc-animate').removeClass('hide');
            }, 5000);

        }
        else {
            $("body").animate({
                scrollTop: screenHeight3+60
            }, 500);
            $('.last .top').addClass('top-animate');
            $('.third .top-gradient').removeClass('top-animate');
            $('.third .flow').removeClass('flow-animate2');
            $('.last .contact-block').addClass('top-animate');
            setTimeout(function () {
                $('.last .navy-block').removeClass('hide').addClass('last-animate');
                $('.last .contact-block').addClass('halfSize');
                $('.last .contact-block').css('width', '50%');
            },2000)

        }
    });
    $('.last').bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            $("body").animate({
                scrollTop: screenHeight2+30
            }, 500);
            $('.last .top').removeClass('top-animate');
            $('.third .top-gradient').addClass('top-animate');
            $('.third .flow').addClass('flow-animate2');
            $('.last .contact-block').removeClass('top-animate');
            $('.last .navy-block').removeClass('last-animate').addClass('hide');
            $('.last .contact-block').css('width', '100%');
            $('.last .contact-block').removeClass('halfSize');

        }
        else {
            $("body").animate({
                scrollTop: screenHeight4
            }, 500);
        }
    });






    function scrolling() {
        var win = $(window);

        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        //var bounds = this.offset();
        //bounds.right = bounds.left + this.outerWidth();
        //bounds.bottom = bounds.top + this.outerHeight();
        //
        //console.log(!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    }

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        //console.log('dds')
    });


   
});
//var scrolling1 = function() {
//    var lastScrollTop = 0;
//    $(window).scroll(function (event) {
//        var st = $(this).scrollTop();
//        if (st > lastScrollTop) {
//            console.log("down")
//            var screenHeight = $( window ).height();
//            console.log(screenHeight);
//            $("html, body").animate({
//                scrollTop: screenHeight
//            }, 2000);
//        } else {
//            console.log("up")
//        }
//        lastScrollTop = st;
//    });
//}
