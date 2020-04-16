 
$(document).ready(function(){
		    $(".i_bannerbox").show();
		    var swiper = new Swiper('.i_bannerbox', {
		        pagination: {
		            el: '.i_bannerbox .swiper-pagination',
		        },
		        autoplay:{
		            delay:2000,
		            disableOnInteraction:false,
		        },
		        loop:true,
		        speed:5000
		    });
		    
});

window.clicked = function (href) {
    window.location.href = href;
}