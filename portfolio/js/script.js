$(function(){
	var $window=$(window),$mainHeader=$('.menu'),$defaultLogo='images/logo.png',$Logo=$('#logo'),$smallLogo='images/small_logo.png',$seperator=$mainHeader.outerHeight();
	$window.scroll(function(){
		if($(this).scrollTop() > $seperator){
			if(!$mainHeader.hasClass('shrink')){
				$mainHeader.addClass('shrink');
			}
			
		}else{
			if($mainHeader.hasClass('shrink')){
				$mainHeader.removeClass('shrink');
			}
				
		}
	})
})
$(function(){
    var menu=$('#header .menu ul li');
    var contents=$('#section section');
    var nav=$('nav>ul>li');
    menu.click(function(e){
        e.preventDefault();
        var tg=$(this);
        var i=tg.index();
        var section=contents.eq(i);
        var tt=section.offset().top;
        nav.removeClass('on').eq(i).addClass('on');
        menu.removeClass('on').eq(i).addClass('on');
        $('html,body').stop().animate({scrollTop:tt},1000,'easeInCubic');
    })
    nav.click(function(e){
        e.preventDefault();
        var tg=$(this);
        var i=tg.index();
        var section=contents.eq(i);
        var tt=section.offset().top;
        nav.removeClass('on').eq(i).addClass('on');
        menu.removeClass('on').eq(i).addClass('on');
        $('html,body').stop().animate({scrollTop:tt},1000,'easeInCubic');
    })
    $(window).scroll(function(){
        var sct=$(window).scrollTop();
        contents.each(function(){
            var tg=$(this);
            var i=tg.index();
            if(tg.offset().top<=sct){
                menu.removeClass('on');
                nav.removeClass('on');
                menu.eq(i).addClass('on');
                nav.eq(i).addClass('on');
            }
        })
    })
})
$(function(){
    var chart=$('.chart');
    var modal=$('.modal_open');
    modal.click(function(){
    	$('.modal_popup').show();
        $('.menu.shrink').hide();
    	$('.bg100').click(function(){
    		$('.modal_popup').hide();
            $('.menu.shrink').show();
    	});
        if($('.modal_popup').show()){
            animateChart();
        }
	return false;
})
function animateChart(){
    chart.each(function(){
        var item=$(this);
        var title=item.find('span');
        var targetNum=title.attr('data-num');
        var line=item.find('line.graph');
        $({rate:0}).animate({rate:targetNum},{
            duration:1500,
            progress:function(){
                var now=this.rate;
                var amount=470-(470*now/100)
                title.text(Math.floor(now));
                line.css({strokeDashoffset:amount});
            }
        })
    })
}
})
$(function(){
    $('.hidden').hover(
        function(){
            var ah=$(this).innerHeight();//높이+패딩
            var img=$(this).find('img');
            var imgh=img.innerHeight();
            img.stop().animate({top:ah-imgh},3000);
        },function(){
            var img=$(this).find('img');
            img.stop().animate({top:0},3000);
        })
        $(window).scroll(function(){
            var sct=$(window).scrollTop();
            var csst=$('#Project1').offset().top;
            if(sct>csst-400){
                $('.project1_left').stop().animate({left:'5px'},1000);
                $('.project1_right').stop().animate({right:'10px'},1000);
            }else{
                $('.project1_left').stop().animate({left:'-600px'},1000);
                $('.project1_right').stop().animate({right:'-600px'},1000);
            }
        })
        $(window).scroll(function(){
            var sct=$(window).scrollTop();
            var csst=$('#Project2').offset().top;
            if(sct>csst-600){
                $('.project2_left').stop().animate({left:'5px'},1000);
                $('.project2_right').stop().animate({right:'-200px'},1000);
            }else{
                $('.project2_left').stop().animate({left:'-600px'},1000);
                $('.project2_right').stop().animate({right:'-600px'},1000);
            }
        })
        $(window).scroll(function(){
            var sct=$(window).scrollTop();
            var csst=$('#Responsible1').offset().top;
            if(sct>csst-600){
                $('.Responsible1_left').stop().animate({left:'5px'},1000);
                $('.Responsible1_right').stop().animate({right:'-100px'},1000);
            }else{
                $('.Responsible1_left').stop().animate({left:'-600px'},1000);
                $('.Responsible1_right').stop().animate({right:'-600px'},1000);
            }
        })
        $(window).scroll(function(){
            var sct=$(window).scrollTop();
            var csst=$('#Responsible2').offset().top;
            if(sct>csst-600){
                $('.Responsible2_left').stop().animate({left:'5px'},1000);
                $('.Responsible2_right').stop().animate({right:'-100px'},1000);
            }else{
                $('.Responsible2_left').stop().animate({left:'-600px'},1000);
                $('.Responsible2_right').stop().animate({right:'-600px'},1000);
            }
        })
        $(window).scroll(function(){
            var sct=$(window).scrollTop();
            var csst=$('#Design').offset().top;
            if(sct>csst-600){
                $('.Design_left').stop().animate({left:'5px'},1000);
                $('.Design_right').stop().animate({right:'-100px'},1000);
            }else{
                $('.Design_left').stop().animate({left:'-600px'},1000);
                $('.Design_right').stop().animate({right:'-600px'},1000);
            }
        })
    })
    $(function(){
        $(window).scroll(function(){
            //console.log($(this).scrollTop())
            if($(this).scrollTop() > 2000){
                $('.top_btn').fadeIn(200);
            }else{
                $('.top_btn').fadeOut(200);
            }
        })
        $('.top_btn').click(function(e){
            e.preventDefault();
            $('html,body').animate({scrollTop:0},500,'easeOutQuart');
        })
    })