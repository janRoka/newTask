/*
|---------------------------------------
| Общий файл скриптов для всех страниц
|---------------------------------------
*/

$(document).ready(function(){

	/*----- Настройки ------*/
	var w = window.innerWidth; // ширина окна с полосой прокрутки

	/*----- Всплывающие окна ------*/

	$('[data-fancybox]').fancybox({
		loop: true,
		animationEffect: "fade"
	});

	$('.btn-modal').click(function(e){
		e.preventDefault();
		$.fancybox.open({
			src: $(this).attr('href')
		});
	});

	$('.btn-close').click(function(){
		$.fancybox.close();
	});


	/*----- Клик на ссылку с якорем ------*/

	// $('.scroll-link').click(function(){
	// 	var block = $($(this).attr('href'));
	// 	var topOffset = 50;
	// 	if ($(block).length){
	// 		$('html:not(:animated), body:not(:animated)').animate({
	// 			scrollTop: block.offset().top  - topOffset
	// 		},500);
	// 		return false;
	// 	}
	// });


	/*----- Валидация телефона ------*/

	// $('input[name="phone"]').on('keyup change', function(){
	// 	var val = $(this).val().replace(/[^0-9+]/,'');
	// 	$(this).val(val);
	// });


	/*----- Меню------*/

	// Menu trigger
	$('.top-menu-trigger').click(function(){
		if(window.innerWidth < 992){
			$('.top-menu').toggle();
		}
	});
	// Скрыть элемент при клике за его пределами
	$(document).click(function(event) {
		if ($(event.target).closest(".top-menu, .top-menu-trigger").length) return;
		$('.top-menu').hide();
		event.stopPropagation();
	});

	/*----- Ajax отправка формы ------*/

	$('.ajax-form').submit(function(e){
		var ajaxLink = $(this).attr('action');
		e.preventDefault();
		var params = $(this).serialize();
		$.post(ajaxLink, params, function(data){
			$.fancybox.close();
			$.fancybox.open('<div class="modal">'+data+'</div>');
			$('.ajax-form').find('input[type="text"],input[type="email"],textarea').val('');
		});
	});


	/*----- Вырезаем пустые строки, убираем жесткие размеры изображения для телефонов ------*/

	if($('.html-redactor').length){
		$('.html-redactor img').each(function(){
			if(w < 576){
				$(this).removeAttr('width').removeAttr('height');
			}
			if($(this).hasClass('modal-image')){
				$(this).wrap('<a href="'+$(this).attr('src')+'" data-fancybox></a>');
			}
		});
		if(w < 576){
			$('.html-redactor p').each(function(){
				var ps = $(this).nextAll('p');
				ps.each(function(){
					if($(this).html() == '&nbsp;'){
						$(this).remove();
					}
				});
			});
		}
	}


});
