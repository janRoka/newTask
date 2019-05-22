$(document).ready(function(){

	/*----- Настройки ------*/

	var ajaxLink = '/ajax/';
	var w = window.innerWidth; // ширина окна с полосой прокрутки


	/*----- Всплывающие окна ------*/

	$('[data-fancybox]').fancybox({
		loop: true,
		animationEffect: "fade"
	});

	$('.btn-modal').click(function(){
		$.fancybox.open({
			src: $(this).attr('href')
		});
	});

	$('.btn-close').click(function(){
		$.fancybox.close();
	});


	/*----- Ссылки ------*/

	$('a[href="#"]').click(function(){ return false; });


	/*----- Маска телефона ------*/

	$('input[name="phone"]').mask('+7(999)999-99-99');


	/*----- Меню------*/

	if(w < 992){
		// Menu trigger
		$('.top-menu-trigger').click(function(){
			$('.top-menu').toggle();
		});
		// Скрыть элемент при клике за его пределами
		$(document).click(function(event) {
			if ($(event.target).closest(".top-menu, .top-menu-trigger").length) return;
			$(".top-menu").hide();
			event.stopPropagation();
		});
	}

	/*----- Ajax отправка формы------*/

	$('.ajax-form').submit(function(e){
		e.preventDefault();
		var params = $(this).serialize();
		$.post(ajaxLink, params, function(data){
			$.fancybox.close();
			$.fancybox.open('<div class="modal">'+data+'</div>');
			$('.ajax-form').find('input[type="text"],input[type="email"],textarea').val('');
		});
	});


	/*----- Контент------*/

	// Вырезаем пустые строки, убираем жесткие размеры изображения для телефонов, 
	if($('.content-area').length){

		$('.content-area img').each(function(){
			if(w < 576){
				$(this).removeAttr('width').removeAttr('height');
			}
			if($(this).hasClass('modal-image')){
				$(this).wrap('<a href="'+$(this).attr('src')+'" data-fancybox></a>');
			}
		});

		if(w < 576){

			$('.content-area p').each(function(){
				var ps = $(this).nextAll('p');
				ps.each(function(){
					if($(this).html() == '&nbsp;'){
						$(this).remove();
					}
				});
			});

		}

	}

	/*----- Слайдеры------*/



});
