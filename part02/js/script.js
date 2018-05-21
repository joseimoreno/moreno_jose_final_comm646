jQuery(document).ready(function(){
	/*$(".slide img:gt(0)").hide();
	setInterval(function(){
		$(".slide :first-child").fadeOut(1000)
		.next("img").fadeIn(1000)
		.end().appendTo(".slide");
	}, 6000);
	$("#1").click(function(){
		$(".one").fadeIn(1000);
		$(".one").fadeOut(4000);
	});
	$("#2").click(function(){
		$(".two").fadeIn(1000);
		$(".two").fadeOut(4000);
	});
	$("#3").click(function(){
		$(".three").fadeIn(1000);
		$(".three").fadeOut(4000);
	});
	$("#4").click(function(){
		$(".four").fadeIn(1000);
		$(".four").fadeOut(4000);
	});
	$("#5").click(function(){
		$(".five").fadeIn(1000);
		$(".five").fadeOut(4000);
	});
	$("button").addClass("buttons");
	*/
	
	//OR
	
	$(".two, .three, .four, .five").hide();
	$("#1").click(function(){
		$(".two, .three, .four, .five").fadeOut();
		$(".one").fadeIn("slow");
	});
	$("#2").click(function(){
		$(".one, .three, .four, .five").fadeOut();
		$(".two").fadeIn("slow");
	});
	$("#3").click(function(){
		$(".one, .two, .four, .five").fadeOut();
		$(".three").fadeIn("slow");
	});
	$("#4").click(function(){
		$(".one, .two, .three, .five").fadeOut();
		$(".four").fadeIn("slow");
	});
	$("#5").click(function(){
		$(".one, .two, .three, .four").fadeOut();
		$(".five").fadeIn("slow");
	});
	$("button").addClass("buttons");
});