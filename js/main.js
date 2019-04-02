$(document).ready(function(){

	var ajaxLink = '/ajax/';
	var w = window.innerWidth; // ширина окна с полосой прокрутки

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

	$('a[href="#"]').click(function(){ return false; });

	// Маска телефона
	$('input[name="phone"]').mask('+7(999)999-99-99');

	// ajax form
	$('.ajax-form').submit(function(e){
		e.preventDefault();
		var params = $(this).serialize();
		$.post(ajaxLink, params, function(data){
			$.fancybox.close();
			$.fancybox.open('<div class="modal">'+data+'</div>');
			$('.ajax-form').find('input[type="text"],input[type="email"],textarea').val('');
		});
	});

	// Вырезаем пустые строки и убираем жесткие размеры изображения для телефонов
	if($('.content-area').length && w < 576){
		$('.content-area img').removeAttr('width').removeAttr('height');
		$('.content-area p').each(function(){
			var ps = $(this).nextAll('p');
			ps.each(function(){
				if($(this).html() == '&nbsp;'){
					$(this).remove();
				}
			});
		});
	}

	// slider



});
