//doc ready load
$( document ).ready(function() {
    $("#Arabica").show();
	$("#Bourbon").hide();
	$("#Ethiopian").hide();
	$("#Columbian").hide();
	$("#Guatemalan").hide();
	$("#Typica").hide();

	var parallaxSettings = {
        initialOpacity: 1, //from 0 to 1, e.g. 0.34 is a valid value. 0 = transparent, 1 = Opaque
        opacitySpeed: 0.1, //values from 0.01 to 1 -> 0.01: slowly appears on screen; 1: appears as soon as the user scrolls 1px
        //pageLoader: true
  	};

 	parallaxImgScroll(parallaxSettings);

 	//this is the parallax for smaller screen sizes
 		//parallax scrolling fix for repsonsive

	var width = $(window).width();
	if(width > 1900){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1000);
		$('#mug').attr('data-ps-vertical-position', -400);
		$('#frothmilk').attr('data-ps-vertical-position', 450);
		$('#pourmilk').attr('data-ps-vertical-position', -200);
	}
	else if(width < 1899 && width > 1700){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1000);
		$('#mug').attr('data-ps-vertical-position', -250);
		$('#frothmilk').attr('data-ps-vertical-position', 500);
		$('#pourmilk').attr('data-ps-vertical-position', -200);
	}
	else if(width < 1699 && width > 1201){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1200);
		$('#mug').attr('data-ps-vertical-position', -100);
		$('#frothmilk').attr('data-ps-vertical-position', 600);
		$('#pourmilk').attr('data-ps-vertical-position', -200);
	}
	else if(width < 1200 && width > 1000){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1200);
		$('#mug').attr('data-ps-vertical-position', -200);
		$('#frothmilk').attr('data-ps-vertical-position', 700);
		$('#pourmilk').attr('data-ps-vertical-position', -100);
	}
	else if(width < 999 && width > 768){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1200);
		$('#mug').attr('data-ps-vertical-position', -100);
		$('#frothmilk').attr('data-ps-vertical-position', 700);
		$('#pourmilk').attr('data-ps-vertical-position', 0);
	}
	else if(width < 767 && width > 500){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1200);
		$('#mug').attr('data-ps-vertical-position', 0);
		$('#frothmilk').attr('data-ps-vertical-position', 600);
		$('#pourmilk').attr('data-ps-vertical-position', 0);
	}
	else if(width < 499 && width > 300){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1200);
		$('#mug').attr('data-ps-vertical-position', 300);
		$('#frothmilk').attr('data-ps-vertical-position', 600);
		$('#pourmilk').attr('data-ps-vertical-position', 0);
	}
});

//Navigation menu needed for the assignment
$('nav').onePageNav({
	scrollSpeed: 750,
	scrollThreshold: 0.5,
});
//this is the on click for the hamburger icon
$("#Hamburger").click(function(){
	$("ul").slideToggle();
});

//variable for the nav to be shown
var nav = $('ul');
//resize the window to show the nav after it is hidden from the slide toggle
$(window).resize(function(){
	var width = $(window).width();
	//width bigger then breakpoint and the nav is hidden it should remove the style attribute from the nav
	//nav refers to the var at the top
	if(width > 768 && nav.is(':hidden')){
		nav.removeAttr('style');
	}

	//parallax scrolling fix for repsonsive
	if(width > 1900){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1000);
		$('#mug').attr('data-ps-vertical-position', -400);
		$('#frothmilk').attr('data-ps-vertical-position', 450);
		$('#pourmilk').attr('data-ps-vertical-position', -200);
	}
	else if(width < 1899 && width > 1700){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1000);
		$('#mug').attr('data-ps-vertical-position', -250);
		$('#frothmilk').attr('data-ps-vertical-position', 500);
		$('#pourmilk').attr('data-ps-vertical-position', -200);
	}
	else if(width < 1699 && width > 1201){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1200);
		$('#mug').attr('data-ps-vertical-position', -100);
		$('#frothmilk').attr('data-ps-vertical-position', 600);
		$('#pourmilk').attr('data-ps-vertical-position', -200);
	}
	else if(width < 1200 && width > 1000){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1200);
		$('#mug').attr('data-ps-vertical-position', -200);
		$('#frothmilk').attr('data-ps-vertical-position', 700);
		$('#pourmilk').attr('data-ps-vertical-position', -100);
	}
	else if(width < 999 && width > 768){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1200);
		$('#mug').attr('data-ps-vertical-position', -100);
		$('#frothmilk').attr('data-ps-vertical-position', 700);
		$('#pourmilk').attr('data-ps-vertical-position', 0);
	}
	else if(width < 767 && width > 500){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1200);
		$('#mug').attr('data-ps-vertical-position', 0);
		$('#frothmilk').attr('data-ps-vertical-position', 600);
		$('#pourmilk').attr('data-ps-vertical-position', 0);
	}
	else if(width < 499 && width > 300){
		$('#coffeegrinds').attr('data-ps-vertical-position', 1200);
		$('#mug').attr('data-ps-vertical-position', 300);
		$('#frothmilk').attr('data-ps-vertical-position', 600);
		$('#pourmilk').attr('data-ps-vertical-position', 0);
	}
});

//on click for the beans
$("#ArabicaBean").click(function(){
	$("#Arabica").show();
	$("#Bourbon").hide();
	$("#Ethiopian").hide();
	$("#Columbian").hide();
	$("#Guatemalan").hide();
	$("#Typica").hide();
	return false;
});
$("#BourbonBean").click(function(){
	$("#Arabica").hide();
	$("#Bourbon").show();
	$("#Ethiopian").hide();
	$("#Columbian").hide();
	$("#Guatemalan").hide();
	$("#Typica").hide();
	return false;
});
$("#EthiopianBean").click(function(){
	$("#Arabica").hide();
	$("#Bourbon").hide();
	$("#Ethiopian").show();
	$("#Columbian").hide();
	$("#Guatemalan").hide();
	$("#Typica").hide();
	return false;
});
$("#ColumbianBean").click(function(){
	$("#Arabica").hide();
	$("#Bourbon").hide();
	$("#Ethiopian").hide();
	$("#Columbian").show();
	$("#Guatemalan").hide();
	$("#Typica").hide();
	return false;
});
$("#GuatemalanBean").click(function(){
	$("#Arabica").hide();
	$("#Bourbon").hide();
	$("#Ethiopian").hide();
	$("#Columbian").hide();
	$("#Guatemalan").show();
	$("#Typica").hide();
	return false;
});
$("#TypicaBean").click(function(){
	$("#Arabica").hide();
	$("#Bourbon").hide();
	$("#Ethiopian").hide();
	$("#Columbian").hide();
	$("#Guatemalan").hide();
	$("#Typica").show();
	return false;
});

//this is the fancy box slider for the images needed for the assignment
$("[data-fancybox]").fancybox({
	// Options will go here
  	loop : true,
  	//protect: true,
  	arrows : true,
  	keyboard : true,
	buttons : [
		'slideShow',
		'fullScreen',
		'thumbs',
		'close'
	]
});