

/*On page refresh, scroll will be at the top*/
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});


/*----For setting active class on Nav link----*/
$('#active1').addClass("active");

/*---Prevent hard jump on click of nav link---*/
$(document).ready(function() {
		$('a.nav-link[href*="#"]').bind('click', function(e) {
			
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the page url
				});

				return false;
		});
});

/*---To set navbar links active onClick or on scroll based on scroll height of that specific page---*/
$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop()+5;
		//alert($(window).scrollTop()+ "px ");	
		// Assign active class to nav links while scolling
		$('.thumbnail-common').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('#navbar1 a.active').removeClass('active border-bottom');
						$('.nav a').eq(i).addClass('active border-bottom');
				}
		});
}).scroll();

/*----To add Navbar background color green when the scrollTop()>=1 or window width<=576----*/
$(document).ready(function(){

	$(window).scroll(function() {
	    if ($(window).scrollTop()>=1 || $(this).width()<=576){
	    	$("#navbar1").addClass("nav-bg-color");
		} else{
			$("#navbar1").removeClass("nav-bg-color");
		}

	});

	$(window).resize(function(){
		if ($(this).width()<=576){
			$("#navbar1").addClass("nav-bg-color");
		} else{
			$("#navbar1").removeClass("nav-bg-color");
		}
	});
});



/*To deactivate links and button, onClick event, page will not jump to the top*/
$(".click-returnFalse").click(function(e){
	e.preventDefault();
});

/*----Button on bottom right and position fixed to jump to the Top----*/
$(document).ready(function() { 
	var offset = 20;	//px
	var duration = 300;	 //millisecond
	$(window).scroll(function() {

		if ($(this).scrollTop() > offset) {
			$("#back-to-top").fadeIn(duration);
		} else {
			$("#back-to-top").fadeOut(duration);
		}
		 
		}); 
	$("#back-to-top").click(function(event) {
		event.preventDefault();

		$("html, body").animate({scrollTop: 0}, duration);	 
		return false;	 
		}) 
});

