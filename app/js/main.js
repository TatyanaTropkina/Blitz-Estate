$(function () {
	$('.quiz__slider').slick({
		prevArrow: false,
		fade: true,
		nextArrow: '<button class="quiz__slider-btn">Продолжить</button>',
    });
$('.apart__items-extra').hide();
$('.apart__inner-btn').on('click', function(){
	$('.apart__items-extra').show();
	$(this).hide();
	$('.apart__gallery-extra').slick({
	fade: true,
	arrows: false,
});
});

$('.apart__gallery-extra').on('click', function () {
	$(this).slick('slickNext');
});
$('.apart__btn').on('click', function(){
	$('.apart__items-extra').hide();
	$('.apart__inner-btn').show();

});
	$('.apart__gallery').on('click', function () {
        $(this).slick('slickNext');
    });

    $('.apart__gallery').slick({
        fade: true,
        arrows: false,
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
		responsive: [
			{
			breakpoint: 901,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 4,
			}
		}
	]

    });
    $('.features__item').on('click', function () {
        $(this).toggleClass('active');
    });
    $(window).scroll(function () {
        $('.features__item').removeClass('active')
    });
    $('.menu__btn').on('click', function () {
        $('.menu').toggleClass('active');
		$('.menu__list').toggleClass('active');
        $('.menu__btn').toggleClass('active');
        $('.header').toggleClass('gradient');
    })
    $('.menu__list-link').on('click', function () {
        $('.menu').removeClass('active');
		$('.menu__list').removeClass('active');
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
