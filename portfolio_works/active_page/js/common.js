$(document).ready(function($) {
	$("#slider").owlCarousel({
		items: 2,
		loop: true,
		autoPlay: false,
		pagination: true
	});
});

$(window).load(function(){
	$("#slider img").liCover({
		parent: $(".slide"),
		position: "absolute",
		veticalAlign: "middle",
		align: "center"
	});
	$(".slide_top").liCover({
		veticalAlign: "top"
	});
});