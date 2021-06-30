$(function () {
    $('.apart__gallery').slick({
        fade: true,
        arrows: false,
    });
	$('.quiz__slider').slick({
		prevArrow: false,
		nextArrow: '<button class="quiz__slider-btn">Продолжить</button>',
    });
	
	var mixer = mixitup('.apart__items', {
		load: {
			filter: '.all'
		},
		animation: {
			effectsIn: 'fade translateY(0) translateX(0)',
			effectsOut: 'fade translateY(0) translateX(0)',
			effects: 'fade translateY(0) translateY(0)',
			duration: 500
		}
		
	});
    $('.apart__gallery').on('click', function () {
        $(this).slick('slickNext');
    });
$('.apart__items-more').hide();
$('.apart__inner-btn').on('click', function(){
	$('.apart__items-more').show();
	$(this).hide();
});
$('.apart__btn').on('click', function(){
	$('.apart__items-more').hide();
	$('.apart__inner-btn').show();

})
    $('.about__gallery-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.about__gallery-slider-nav'
    });
    $('.about__gallery-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.about__gallery-slider',

    });
    $('.features__item').on('click', function () {
        $(this).toggleClass('active');

    });

    $(window).scroll(function () {
        $('.features__item').removeClass('active')

    });

    $('.menu__btn').on('click', function () {
        $('.menu').toggleClass('active');
        $('.menu__btn').toggleClass('active');
        $('.header').toggleClass('gradient');
    })
    $('.menu__list-link').on('click', function () {
        $('.menu').removeClass('active');
        $('.menu__btn').removeClass('active');
    });

    let btnCategories = $(".menu__btn");
    let categories = $(".menu");

    $(document).mouseup(function (e) {
        if (!btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
            !categories.is(e.target) && categories.has(e.target).length === 0
        ) {
            categories.removeClass('active');
            $('.header').removeClass('gradient');
            $('.menu__btn.active').removeClass('active');
        }
    });


});


// filterSelection("all")

// function filterSelection(c) {
//     var x, i;
//     x = document.getElementsByClassName("apart__item");
//     if (c == "all") c = "";

//     for (i = 0; i < x.length; i++) {
//         w3RemoveClass(x[i], "show");
//         if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//     }
// }

// function w3AddClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) == -1) {
//             element.className += " " + arr2[i];
//         }
//     }
// }

// function w3RemoveClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         while (arr1.indexOf(arr2[i]) > -1) {
//             arr1.splice(arr1.indexOf(arr2[i]), 1);
//         }
//     }
//     element.className = arr1.join(" ");
// }

// var btnContainer = document.getElementById("apart__filter");
// var btns = btnContainer.getElementsByClassName("apart__filter-btn");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }