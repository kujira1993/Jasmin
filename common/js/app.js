$(function() {

	$(".responsible_tabbox_selector li").click(function() {
		var num = $(".responsible_tabbox_selector li").index(this);

		$(".responsible_tabbox_content").addClass('dpn');
		$(".responsible_tabbox_content").eq(num).removeClass('dpn');
		$(".responsible_tabbox_selector li").removeClass('current');
		$(this).addClass('current')
	});

});