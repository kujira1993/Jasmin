$(function() {

	$(".responsible_tabbox_selector li").click(function() {
		var num = $(".responsible_tabbox_selector li").index(this);

		$(".responsible_tabbox_content").addClass('dpn');
		$(".responsible_tabbox_content").eq(num).removeClass('dpn');
		$(".responsible_tabbox_selector li").removeClass('current');
		$(this).addClass('current')
	});

	/* 文字数カウントをしてカットする処理 */
	var $setElm = $('.ttl');
	var cutFigure = '60'; // カットする文字数
	var afterTxt = '…'; // 文字カット後に表示するテキスト

	$setElm.each(function(){
		var textLength = $(this).text().length;
		var textTrim = $(this).text().substr(0,(cutFigure));

		console.log(textLength);

		if(cutFigure < textLength) {
			$(this).html(textTrim + afterTxt).css({visibility:'visible'});
		} else if(cutFigure >= textLength) {
			$(this).css({visibility:'visible'});
		}
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
				slidesToScroll: 3
			}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});

	$('.content_keyvisual_wrap').slick({
		infinite: true,
		dots:true,
		arrows:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.lazy-item').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
	});

});