



$(window).scroll(function () {

    var scroll = $(this).scrollTop();

    if (scroll > 130) {
        $(".menu").addClass("menu_fix");
    } else {
        $(".menu").removeClass("menu_fix")
    }

});





$(document).ready(function () {

    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller({
        barColor: '#fc6'
    });
    $('#bar4').barfiller({
        barColor: '#900',
        duration: 3000
    });

    $('#bar5').barfiller();
    $('#bar6').barfiller();
    $('#bar7').barfiller({
        barColor: '#fc6'
    });
    $('#bar8').barfiller({
        barColor: '#900',
        duration: 3000
    });

});


var mixer = mixitup('.cont');


$('.text_slick').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
    },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
  ]
});







