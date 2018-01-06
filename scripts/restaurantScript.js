$(document).ready(function() {
	var state = false;
	$("button#vegOn").click(function() {
		if (state === false) {
			$f = $(".fish").parent().parent().detach();
			$(".hamburger").replaceWith("<li class='portobello'><em>Portobello mushrum</em></li>");
			$(".meat").after("<li class='tofu'><em>Tofu</em></li>");
			$(".meat").detach();
			//$(".tofu").parent().parent().addClass("veg_leaf");
			state = true;
		}
	});
	$("button#restoreMe").click(function() {
		if (state === false) {
			console.log("click");
			$(".menu_entrees li").first().before($f);
			$(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");
			//$(".tofu").removeClass("veg_leaf");
			state = false;
		}
	});
});