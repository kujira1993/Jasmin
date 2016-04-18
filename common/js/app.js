$(function() {

	$(".responsible_tabbox_selector li").click(function() {
		var num = $(".responsible_tabbox_selector li").index(this);

		$(".responsible_tabbox_content").addClass('dpn');
		$(".responsible_tabbox_content").eq(num).removeClass('dpn');
		$(".responsible_tabbox_selector li").removeClass('current');
		$(this).addClass('current')
	});

	/* slider処理（slick） */
	$('.responsible_slides').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			}
		]
	});

	$('.lazy-item').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

});