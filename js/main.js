$(document).ready(function(){

	var w = window.innerWidth; // ширина окна с полосой прокрутки

	$('[data-fancybox]').fancybox({
		loop:true,
		animationEffect: "fade"
	});

	$('.btn-modal').fancybox();

	$('.btn-close').click(function(){
		$.fancybox.close();
	});

	// Маска телефона
	$('input[name="phone"]').mask('+7(999)999-99-99');

	// ajax form
	$('.ajax-form').submit(function(e){
		e.preventDefault();
		var params = $(this).serialize(),
			uri = $(this).attr('action');
		$.post(uri, params, function(data){
			$.fancybox.close();
			$.fancybox.open('<div class="modal">'+data+'</div>');
			$('.ajax-form').find('input[type="text"],input[type="email"],textarea').val('');
		});
	});

});
