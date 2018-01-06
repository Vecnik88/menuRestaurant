$(document).ready(function() {
	var v = false;
	var $f, $m;
	$("button#vegOn").click(function() {
		if (v == false) {
			console.log("click1");
			$f = $(".fish").parent().parent().detach();
			$(".hamburger").replaceWith("<li class='portobello'><em>Portobello mushrum</em></li>");
			$(".meat").after("<li class='tofu'><em>Tofu</em></li>");
			$(".meat").detach();
			$(".tofu").parent().parent().addClass("veg_leaf");
			v = true;
		}
	});
	$("button#restoreMe").click(function() {
		if (v == true) {
			console.log("click2");
			$(".portobello").parent().parent().removeClass("veg_leaf");
			$(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");
			$(".menu_entrees li").first().before($f);
			$(".tofu").parent().parent().removeClass("veg_leaf");
			$("tofu").each(function(i) {
				$(this.after($m[i]));
			});
			$(".tofu").remove();
			v = false;
		}
	});
});