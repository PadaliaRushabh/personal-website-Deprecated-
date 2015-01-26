$(document).ready(function() {
  	$('.contact').tooltip();
  
  	/*Resume*/
  
  	/*var isdisplayed = false; 
  	$('#resume-html-btn').click(function(){

  		if(isdisplayed == false){
  				console.log("clicked");
				$('#resume-html-display').load("resume.html");
  				isdisplayed = true;
		} else{
			$('#resume-html-display').html("");
			isdisplayed = false;		
		}
  	});*/
  	
  	$('#resume-html-display').load("resume.html");
	
	var sections = $('section')
  		, nav = $('nav')
  		, nav_height = nav.outerHeight();
  
	/*$(".navbar-nav>li>a").click(function (e) {	
		var menu = $(this).parent().parent();
		menu.find("li").each(function(index) {
		if(index !=2 ){			
  			if($(this).hasClass("active") == true){
  				console.log($(this).parent().html())
				$(this).removeClass("active");  			
  			}
  		}	
		});
		//console.log($(this).html().trim() === "Rushabh Padalia");
		if($(this).html().trim() !== "Rushabh Padalia"){
			$(this).parent().addClass("active");
		}
	});*/

	$("#nav-projects").click(function(e) {
		e.preventDefault(); 
    	$('html, body').animate({
        scrollTop: $("#projects").offset().top - nav_height  + 10
    	}, 1000);
	});
	$("#nav-me").click(function(e) {
		e.preventDefault(); 
    $('html, body').animate({
        scrollTop: $("#me").offset().top - nav_height
    }, 1000);
	});
	$("#nav-rushabh").click(function(e) {
		e.preventDefault(); 
	});
	$("#nav-contact").click(function(e) {
		e.preventDefault(); 
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - nav_height + 10
    }, 1000);
	});
	$("#nav-resume").click(function(e) {
		e.preventDefault(); 
    $('html, body').animate({
        scrollTop: $("#resume").offset().top - nav_height + 10
    }, 1000);
	});	
	
	/*Change active on scroll*/
  
	$(window).on('scroll', function () {
  		var cur_pos = $(this).scrollTop();
 
  		sections.each(function() {
    		var top = $(this).offset().top - nav_height,
        	bottom = top + $(this).outerHeight();
    		if (cur_pos >= top && cur_pos <= bottom) {
      		nav.find('a').parent().removeClass('active');	
      		nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
      		
    		}
  		});
			if($(window).scrollTop() + $(window).height() == $(document).height()){
				nav.find('a[href="#resume"]').parent().addClass('active');
			}
	});	
	
	$('#dad-website-btn').click(function(){
   	window.open('http://rajesh.padalia.net');
   	return false;
	});
	$('#resume-html-btn').click(function(){
   	window.open('http://rushabh.padalia.net/resume');
   	return false;
	});
	
});