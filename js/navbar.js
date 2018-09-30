$(document).ready(function(){

    $(document).scroll(function(){
    		$color = "navbarcolor";
    		$animationdown = "animationdown";
    		$element = $('.navbar');
    	if($(document).scrollTop() > 200){
    		$element.addClass($color);
    		$element.addClass($animationdown);
    	}
    	else{
    		$element.removeClass($color);
    		$element.removeClass($animationdown);
    	}
    });
});