document.addEventListener('DOMContentLoaded', () => {

    const mediaFiles = document.querySelectorAll('img, video');
    let i = 0

    Array.from(mediaFiles).forEach((file, index) => {
        file.onload = () => {
            i++

            percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1)

            if(i === mediaFiles.length) {
                preloader.classList.add('preloader--hide')
                percents.innerHTML = 100
            }
        }
    })

})
    $(".burger-header").click(function(event){
        $(".burger-header").toggleClass("burger-header_active");
        $(".burger-header__body").toggleClass("burger-header__body_active");
    });
    $(".tel-top-header").click(function(event){
        $(".popup-tel").toggleClass("popup-tel_active");
    });
    $(".popup-tel__close").click(function(event){
        $(".popup-tel").toggleClass("popup-tel_active");
    });

    let menuParents = document.querySelectorAll('.menu-sidebar__link_arrow');
    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];
        menuParent.addEventListener("mouseenter", function (e){
            menuParent.classList.add("active");
        });
        menuParent.addEventListener("mouseleave", function (e){
            menuParent.classList.remove("active");
        });
    }

    
    $(".burger-header_sidebar").click(function(event){
        $(".sidebar__body").toggleClass("sidebar__body_active");
        $(".card-sidebar").removeClass("card-sidebar_active");
/*         $(".sidebar__card").toggleClass("sidebar__card_active"); */
    });

    let select__title = document.querySelector(".select__title");
    let select__submenu = document.querySelector(".select__submenu");
    select__title.addEventListener("click",function(e){
        select__title.classList.toggle("active");
        select__submenu.classList.toggle("active");
    });



    $(".main-slider").slick({
        slidesToShow:1,
        infinite:false,
        arrows:false,
        dots:true,
/*         autoplay:true,
        autoplaySpeed:5000, */
    });
    $(".product-slider__body").slick({
        slidesToShow:1,
        arrows:true,
        dots: true,
    });
    $(".slider-companys").slick({
        slidesToShow: 5,

        responsive: [
            {
              breakpoint: 970,
              settings: {
                slidesToShow: 4,
                }
            },
            {
                
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                }
            },
            {
                
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                }
            }
        ],

    });
    $(".mainslider-cart").slick({
        slidesToShow: 1,
        arrows:false,
        dots: false,
        asNavFor: '.subslider-cart',
    });
    $(".subslider-cart").slick({
        slidesToShow: 4,
        arrows:false,
        dots: false,
        asNavFor: '.mainslider-cart',
    });




 
    const priceStart = document.querySelector('.filtr__input_start');
    const priceEnd = document.querySelector('.filtr__input_end');
    priceStart.addEventListener('change', setPriceValues);
    priceEnd.addEventListener('change', setPriceValues);
    function setPriceValues(){
        let priceStartValue;
        let priceEndtValue;
        if (priceStart.Value != ""){
            priceStartValue = priceStart.value;
        }
        if (priceEnd.Value != ""){
            priceEndValue = priceEnd.value;
        }
        slider.noUiSlider.set([priceStartValue, priceEndValue]);
    }

/*     $(".filtr__arrow").click(function(event){
        $(this).toggleClass("active").next().slideToggle(300);
    }); */
    $(".spoiler").click(function(event){
        $(this).toggleClass("active").next().slideToggle(300);
    });

    const slider = document.querySelector(".filtr__slider");
    if(slider!= ""){
        noUiSlider.create(slider, {
            start: [20000, 80000],
            connect: true,
            tooltips: [wNumb({ decimals: 0}), wNumb({ decimals: 0})],
            range: {
                'min': 0,
                'max': 200000
        }
        });
    }

/* }); */