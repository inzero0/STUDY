	var main_banner = new Swiper('.swiper-container.main_banner',{
	slidesPerView:1,
	centeredSlides:true,
	autoplay:{
		delay:2000,
		disableOnInteraction:false,
	},
	navigation: { 
		nextEl: '.swiper-button-next.main_visual', 
		prevEl: '.swiper-button-prev.main_visual', 
	},
	});
	var Nn_banner = new Swiper('.swiper-container.banner1',{
	slidesPerView:1,
	autoplay:{
		delay:2000,
		disableOnInteraction:false,
	},
	navigation: { 
		nextEl: '.bb_icon4.next', 
		prevEl: '.bb_icon1.prev', 
	},
	});	

	var performance_banner = new Swiper('.swiper-container.performance_banner',{
	slidesPerView:3,
	navigation: {
		nextEl: '.swiper-button-next.performance', 
		prevEl: '.swiper-button-prev.performance', 
	},
	});
	var rental_gallery = new Swiper('.swiper-container.rental_gallery',{
	slidesPerView:3,
	spaceBetween: 20,
	navigation: { 
		nextEl: '.swiper-button-next.rental_gallery', 
		prevEl: '.swiper-button-prev.rental_gallery', 
	},
	});
	var footer_banner = new Swiper('.swiper-container.footer_banner',{
	slidesPerView:6,
	autoplay:{
		delay:2000,
		disableOnInteraction:false,
	},
	navigation: { 
		nextEl: '.fb_icon2.next', 
		prevEl: '.fb_icon1.prev', 
	},
	});