jQuery(document).ready(function ($) {
	var htmlMenu = $('.wsn-contenmenu').html();
	$('body').children().wrapAll('<div class="wsn-site" />').wrapAll('<div class="wsn-page" />');
	$('.wsn-site').prepend('<div class="wsn-mobile-menu">' + htmlMenu + ' </div>');
	$('.wsn-page').prepend('<div class="wsn-modal-close-menu"></div>');
	$('.wsn-contenmenu').remove();


	/**
	 * @author WIlowayne De La Cruz <wilo0087@gmail.com>
	 * @note: Show or hide menu
	 */
	$('.wsn-open-menu').click(function () {
		openOrcloseMenu(1);
	});

	$('.wsn-modal-close-menu, .wcc-close-menu').click(function () {
		openOrcloseMenu(0);
	});

	$('.wsn-mobile-menu li.parent > a').click(function (e) {
		e.preventDefault();
		$(this).parent('li').children('ul').slideToggle();
		$(this).parent('li').toggleClass('wcc-spanded');

	});
});


/**
 * @author: Wilowayne De La Cruz
 * @note Function for open or close menu
 * @var open (bool) True for open menu, false for close menu 
 */
function openOrcloseMenu(open) {
	var $ = jQuery.noConflict();
	$('.wsn-mobile-menu').css({
		height: $('body').height() + 'px'
	});

	if (open) {
		$('.wsn-modal-close-menu').fadeIn();

		$('body').css({
			'overflow-x': 'hidden'
		});

		$('.wsn-mobile-menu').animate({
			'margin-left': '0',
			'opacity': '1'
		});

		$('.wsn-page').css({
			'position': 'fixed',
			'overflow': 'hidden',
			'top': '0',
			'box-shadow': '-6px 0px 13px 0px rgba(0,0,0,1)'
		});

		$('.wsn-page').animate({
			'right': '-70%'
		});

	} else {
		$('.wsn-modal-close-menu').fadeOut();

		$('body').css({
			'overflow-x': 'hidden'
		});

		$('.wsn-page').animate({
			'right': '0%'
		}, 'slow', function () {
			$(this).css({
				'position': 'relative',
				'overflow': '',
				'box-shadow': 'none'
			});
		});

		$('.wsn-mobile-menu').animate({
			'margin-left': '-70%'
		}, 'slow', function () {
			$(this).attr('style', '');
		});
	}
}