$(document).ready(function(){
    $(".accordion_head").click(function(){
		if ($('.accordion_body').is(':visible')) {
			$(".accordion_body").slideUp(300);
			$(".plusminus").text('+');
		}
        if( $(this).next(".accordion_body").is(':visible')){
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").text('+');
            $(this).removeClass('clicked');
        }else {
            $(this).next(".accordion_body").slideDown(300); 
            $(this).children(".plusminus").text('-');
            $(this).addClass('clicked');
        }
	});
});