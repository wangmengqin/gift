define(["jquery","swiper"],function(){
	function init(){
		$(function(){
			new Swiper ('.swiper-container', {
				// 如果需要分页器
			    pagination: '.swiper-pagination',
			    paginationClickable :true,
			    autoplayDisableOnInteraction:false,

				autoplay:2000,
			    loop: true,
			    
			    // 如果需要前进后退按钮
			
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
 
			})    
		})
	}
	return {
		init:init
	}
})