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

	$('.btn-modal').click(function(){
		$.fancybox.open({
			src: $(this).attr('href')
		});
	});

	$('.btn-close').click(function(){
		$.fancybox.close();
	});


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
		var ajaxLink = $(this).attr('action');
		e.preventDefault();
		var params = $(this).serialize();
		$.post(ajaxLink, params, function(data){
			$.fancybox.close();
			$.fancybox.open('<div class="modal">'+data+'</div>');
			$('.ajax-form').find('input[type="text"],input[type="email"],textarea').val('');
		});
	});

});
