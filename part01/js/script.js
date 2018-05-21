jQuery(document).ready(function(){
	$("aside h2, section h2").css({
		"padding-left": "20px",
		"border": "solid",
		"border-color": "#CC1C0D ",
		"border-width": "1px",
		"border-radius": "5px",
		"padding-top": "3px",
		"padding-bottom": "3px",
		"background-color": "#DFE3E6"
	});
	$("ul li a").addClass("navigation");
	$("section p").removeClass("vprospect vconvert vretain");
	$("aside p:last").append("<br>Chevy Dealers Association");
	$("aside p:first").wrapInner("<q><i></q>");
	$("section p b").wrap('<a href="http://www.vectacorp.com"/>');
});