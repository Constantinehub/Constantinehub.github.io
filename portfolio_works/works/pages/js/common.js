$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	if ($(window).width() > 768) {
		$("ul.nav > li").hover(function() {
			$(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn();
			$("ul.nav > li a").removeAttr("data-toggle");
		}, function() {
			$(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut();
			$("ul.nav > li a").attr("data-toggle", "dropdown");
		});
	};


});

$(document).ready(function(){

	var touch = $("#touch_menu");
	var menu = $(".navigation");

	$(touch).on("click", function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 760 && menu.is(":hidden")) {
			menu.removeAttr("style");
		}
	});

	$("#owl-example").owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
	});

});
