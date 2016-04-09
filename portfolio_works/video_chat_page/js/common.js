$(document).ready(function() {

	$(".modal-window a").click(function(){
		$(".modal-window").hide();
	});

	$("#micro-smart").bind("click", function() {
		var src = ($(this).attr("src") === "img/smart_img_2.png")
			? "img/anti_smart_1.png"
			: "img/smart_img_2.png";
		$(this).attr("src", src);
	});

	$("#screen-smart").bind("click", function() {
		var src2 = ($(this).attr("src") === "img/smart_img_5.png")
			? "img/anti_smart_5.png"
			: "img/smart_img_5.png";
		$(this).attr("src", src2);
	});


	$("#slider-vertical").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 60,
	});

	$("#slider-vertical").css({display: "none"});

	$(function() {
		$("#volume-smart").click(function(event) {
			$("#slider-vertical").toggle();
		});
		$(document).click(function(event) {
			if ($(event.target).closest("#slider-vertical").length == 0 && $(event.target).attr("id") != 'volume-smart') {
				$('#slider-vertical').hide();
			}
		});
	});



	/*$("#volume-smart").click(function() {
		$("#slider-vertical").show();
	});*/

});