/*
|---------------------------------------
| Общий файл скриптов для всех страниц
|---------------------------------------
*/

$(document).ready(function(){

	/*----- Настройки ------*/
	var w = window.innerWidth; // ширина окна с полосой прокрутки

	/*----- Всплывающие окна ------*/

	$.fancybox.defaults.loop = true;
	$.fancybox.defaults.animationEffect = "fade";
	$.fancybox.defaults.touch.vertical = false;

	$('href^="#modal-"').click(function(e){
		e.preventDefault();
		$.fancybox.open({
			src: $(this).attr('href')
		});
	});

	$('.btn-close').click(function(){
		$.fancybox.close();
	});


	/*----- Клик на ссылку с якорем ------*/

	$('.scroll-link').on('click', function(){
		var block = $($(this).attr('href')),
			topOffset = 50;
		if(block.length){
			$('html:not(:animated), body:not(:animated)').stop().animate({
				scrollTop: block.offset().top  - topOffset
			}, 500);
		}
		return false;
	});

	$('.to-top').on('click', function(){
		$('html:not(:animated), body:not(:animated)').stop().animate({
			scrollTop: 0
		}, 500);
	});


	/*----- nav-fixed -----*/

	if($('.nav-fixed').length){
		function checkNavFixed(){
			if($(window).scrollTop() > 100){
				$('.nav-fixed').addClass('active');
			}else{
				$('.nav-fixed').removeClass('active');
			}
		}
		if(w >= 576){
			checkNavFixed();
			$(window).on('scroll', checkNavFixed);
		}
	}


	/*----- Menu trigger ------*/

	$('.top-menu-trigger').click(function(){
		if(window.innerWidth < 992){
			$('.top-menu').toggle();
		}
	});
	$(document).click(function(event) {
		if(window.innerWidth < 992){
			if ($(event.target).closest(".top-menu, .top-menu-trigger").length) return;
			$('.top-menu').hide();
			event.stopPropagation();
		}
	});


	/*----- Ajax отправка формы ------*/

	// $('.ajax-form').submit(function(e){
	// 	var ajaxLink = $(this).attr('action');
	// 	e.preventDefault();
	// 	var params = $(this).serialize();
	// 	$.post(ajaxLink, params, function(data){
	// 		$.fancybox.close();
	// 		$.fancybox.open('<div class="modal">'+data+'</div>');
	// 		$('.ajax-form').find('input[type="text"], input[type="email"], input[type="number"], textarea').val('');
	// 	});
	// });


});
