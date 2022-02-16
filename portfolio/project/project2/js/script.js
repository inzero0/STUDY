jQuery(document).ready(function(){


	$(window).scroll(function(){
		console.log($(this).scrollTop())
		if($(this).scrollTop()>300){
			$('.go_top').fadeIn(200);
		}else{
			$('.go_top').fadeOut(200);
		}
	})
	$('.go_top').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:0},500,'easeOutQuart')
	
})




})