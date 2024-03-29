$(document).ready(function() {
  	$('.contact').tooltip();
  
  	/*Resume*/
	
	var sections = $('section')
  		, nav = $('nav')
  		, nav_height = nav.outerHeight();

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
   	window.open('/resume');
   	return false;
	});
	
	$('#resume-pdf-btn').click(function(){
   	window.open('/resume/pdf');
   	return false;
	});
	
	$('#resume-doc-btn').click(function(){
   	window.open('/resume/doc');
   	return false;
	});
	
	$('#send_message').click(function(e){
		e.preventDefault(); 

		var name = $('#name').val();
		var email = $('#email').val();
		var message = $('#message').val();
		
		var isError = false;
		if($.trim(name).length == 0) {
			$('#name').addClass("error");
			isError = true;
		} else{
			if($('#name').hasClass('error')) 
				$('#name').removeClass('error');				
		}
		
		if( $.trim(email).length == 0){
			$('#email').addClass("error");
			isError = true;
		} else{
			if($('#email').hasClass('error')) 
				$('#email').removeClass('error');	
		}
		
		if($.trim(message).length == 0){
			$('#message').addClass("error");
			isError = true;
		} else{
				if($('#message').hasClass('error')) 
					$('#message').removeClass('error');		
		}
		
		if(isError == false){
			$.post( "/mail", {name:name, email:email, message:message},function( result ) {
				$('#name').val("");
				$('#email').val("");
				$('#message').val("");
				removeErrorDisplayColor();
  				$( ".result" ).html( result );
			});
		} else{
			
			var html = "<div class='alert alert-danger' role='alert'> \
    								<button type='button' class='close' data-dismiss='alert' aria-label='Close'> \
      								<span aria-hidden='true'> \
        									&times; \
        								</span> \
        							</button> \
    							<strong> All fields are required </strong> \
    							</div>";
			$( ".result" ).html( html );		
		}
	});
	
	function removeErrorDisplayColor(){
				
		if($('#name').hasClass('error')) 
			$('#name').removeClass('error');
		if($('#email').hasClass('error')) 
			$('#email').removeClass('error');
		if($('#message').hasClass('error')) 
			$('#message').removeClass('error');
	}
	
});