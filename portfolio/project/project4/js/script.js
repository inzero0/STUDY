$(document).ready(function(){
	$('body,html').stop().animate({'scrollTop':0},1500,'swing');
	$(window).on('scroll',function(){
		var scroll=$(this).scrollTop();
		for(var i=0; i<5 ; i++){
			$('section>article').eq(i).css({'transform':'translateZ('+ parseInt((-5000*i)+scroll) +'px)'})	
			if(scroll>=i*5000 && scroll<(i+1)*5000){
				$('.scrollNavi li').removeClass();
				$('.scrollNavi li').eq(i).addClass('on');				
				$('article').removeClass();
				$('article').eq(i).addClass('on');
				
			}
		}
		
	})
	$('body').on('mousemove',function(e){
		var posX=e.pageX/100, posY=e.pageY/150; 
		//나누지 않으면 크기가 너무 방대하게 옮겨다님
		//나누는 크기가 작으면 이동거리가 커짐
		$('.obj11').css({'left':-270-posX,'bottom':-100-posY})
		$('.obj12').css({'left':-593-posX,'bottom':-85-posY})
		$('.obj13').css({'left':50+posX,'bottom':0+posY})
		$('.obj21').css({'right':-710-posX,'bottom':-420-posY})
		$('.obj22').css({'right':-50-posX,'bottom':-50-posY})
		$('.obj31').css({'right':110+posX,'bottom':70+posY})
		$('.obj32').css({'left':100+posX,'bottom':-160-posY})
		$('.obj41').css({'left':350+posX,'bottom':-150-posY})
		$('.obj42').css({'right':167+posX,'bottom':-255-posY})
		$('.obj43').css({'right':-60-posX,'bottom':-120-posY})
		$('.obj51').css({'left':-100-posX,'bottom':-90-posY})
		$('.obj52').css({'top':170-posX,'right':30+posY})
		$('.obj53').css({'left':160+posX,'bottom':100-posY})
	})
	/*
		변수 posX,posY 좌표 
		만약 posX =mousemove 이벤트 pageX가 담겨있음
		만약 posY =mousemove 이벤트 pageY가 담겨있음
		
		*/
	/*네비게이션 클릭시 스크롤 이동*/
	$('.scrollNavi li').on('click',function(){
		var a=$(this).index();
		$('body,html').stop().animate({'scrollTop':5000*a},1500,'swing')
	})
});















