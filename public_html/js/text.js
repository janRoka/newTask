/*
|---------------------------------------
| Файл скриптов для шаблона текстовой страницы
|---------------------------------------
*/

$(document).ready(function(){

	/*----- Настройки ------*/
	var w = window.innerWidth; // ширина окна с полосой прокрутки

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

});