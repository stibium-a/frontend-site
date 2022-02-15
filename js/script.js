$('.owl-carousel.ipad').owlCarousel({
    loop:true,
    margin:40,
    nav: true,
    navContainer: ['.arrows'],
    navText: ["<img src='img/arrow_left1.png'>", "<img src='img/arrow_right1.png'>"],
    dots: false,
    autoplay:false,
    autoplayTimeout:1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.owl-carousel.news').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navContainer:['.news_arrows'],
    navText: ["<img src='img/left arrow.png'>", "<img src='img/right arrow.png'>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$(document).ready(function(){
   $('.burger').click(function(event){
       $('.burger, .menu').toggleClass('active');
       $('body').toggleClass('lock');
   });
});

$('.owl-carousel.product').owlCarousel({
    loop:true,
    margin:40,
    nav: true,
    navText: ["<img src='../scss_hw/img/arrowLeftP2.png'>", "<img src='../scss_hw/img/arrowRightP2.png'>"],
    dots: false,
    autoplay:false,
    autoplayTimeout:1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});



















