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
  	
  	

	$(".navbar-nav>li>a").click(function (e) {	
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
	});
	
	$("#nav-resume").click(function(e) {
		e.preventDefault(); 
    	$('html, body').animate({
        scrollTop: $("#resume").offset().top
    	}, 1000);
	});
	$("#nav-projects").click(function(e) {
		e.preventDefault(); 
    	$('html, body').animate({
        scrollTop: $("#projects").offset().top
    	}, 1000);
	});
	$("#nav-me").click(function(e) {
		e.preventDefault(); 
    $('html, body').animate({
        scrollTop: $("#me").offset().top
    }, 1000);
	});
	$("#nav-rushabh").click(function(e) {
		e.preventDefault(); 
	});
	$("#nav-contact").click(function(e) {
		e.preventDefault(); 
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
	});
	$("#nav-resume").click(function(e) {
		e.preventDefault(); 
    $('html, body').animate({
        scrollTop: $("#resume").offset().top
    }, 1000);
	});	
});