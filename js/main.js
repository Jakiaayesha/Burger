(function($) {
	'use strict';

$('.burger-banner-top-menu-icon a').on('click', function() {
	$('.burger-banner-top-menu').slideToggle()
	$('header').addClass('mobile-header')
});

	$(window).resize(function() {
		var screensize = $(window).width();
		if (screensize > 991 ) {
		$('.burger-banner-top-menu').removeAttr('style')
	};
	
	});


$(window).scroll(function() {
	var up = $(window).scrollTop()
	$('.cler').text(up)
	if (up = 1 ) {
		$('header').removeClass('mobile-header')
	};
});

}) (jQuery);