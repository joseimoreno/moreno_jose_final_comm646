jQuery(document).ready(function(){
	$(".2, .3").hide();
	
	$("#outcome").click(function(){
		$(".2, .3").hide();
		$(".1").show();
	});
	$("#module").click(function(){
		$(".1, .3").hide();
		$(".2").show();
	});
	
	$("#bio").click(function(){
		$(".1, .2").hide();
		$(".3").show();
	});
	
	$("li").hover(function(){
		$(this).addClass("menus");
	}, function(){
		$(this).removeClass("menus");
	});
});