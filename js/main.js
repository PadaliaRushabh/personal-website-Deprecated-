$(document).ready(function() {
  	$('.contact').tooltip();
  
  	/*Resume*/
  
  	var isdisplayed = false; 
  	$('#resume-html-btn').click(function(){

  		if(isdisplayed == false){
  				console.log("clicked");
				$('#resume-html-display').load("resume.html");
  				isdisplayed = true;
		} else{
			$('#resume-html-display').html("");
			isdisplayed = false;		
		}
  	});
});