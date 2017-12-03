$(function(){
	$("#navBox ul li").hover(function(){
		var i = $(this).index();
		$("#navBox ul li").eq(i).addClass("nav_active").siblings().removeClass("nav_active");
	});
			
	$("#nav .dh_box div").click(function(){
		var e = $(this).index();
		$("#nav .dh_box div").eq(e).addClass("nav_active").siblings().removeClass("nav_active");
	});
						
	$(window).scroll(function() {
		if($(window).scrollTop() >= 200){
			$('.actGotop').fadeIn(300); 
		}else{    
			$('.actGotop').fadeOut(300);
		}
	});

	$('.actGotop').click(function(){
		$('html,body').animate({scrollTop: '0px'}, 400);
	});
});


$(document).ready(function () {
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    grabCursor : true,
	    pagination: '.swiper-pagination', //分页器
	    paginationClickable :true,
	    effect : 'flip',
		flip: {
		            slideShadows : true,
		            limitRotation : true,
		       }

	});
});












