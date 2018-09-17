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

	// Прилипшее к верху меню

	var navPos, winPos, navHeight;

	function refreshVar() {
		navPos = $('.nav-wrapper').offset().top;
		navHeight = $('.nav-wrapper').outerHeight(true);
	}
	refreshVar();
	$(window).resize(refreshVar);

	$('<div class="clone-nav"></div>').insertBefore('.nav-wrapper').css('height', navHeight).hide();

	$(window).scroll(function() {
		winPos = $(window).scrollTop();
		if(w >= 768){
			if(winPos >= navPos){
				$('.nav-wrapper').addClass('nav-fixed');
				$('.clone-nav').show();
			}
			else{
				$('.nav-wrapper').removeClass('nav-fixed');
				$('.clone-nav').hide();
			}
		}
	});

	// Бегающая линия под меню

	var liActive, liPos, line = $('.top-menu-line');

	function moveLine(action = null){
		liActive = $('.top-menu').find('>li.active');
		liPos = liActive.offset().left;
		liWidth = liActive.width();
		action == 'init' ? line.css({"left":liPos,"width":liWidth}) : line.animate({"left":liPos,"width":liWidth},300);
		if($('.top-menu>li.active').length) line.show();
	}
	moveLine('init');

	$('.top-menu>li>a').click(function(){
		$('.top-menu>li').removeClass('active');
		$(this).parent().addClass('active');
		moveLine();
	});

	// Активация пункта меню при прокрутке

	function scrollActive(){
		var arr = ['works','tech','prices','faq','contacts']; // id секций
		for(var i = 0; i < arr.length; i++){
			var item = $('a[href="#'+arr[i]+'"]');
			var el = $('#'+arr[i]);
			var begin = el.offset().top - 50;
			var end = begin + el.outerHeight();
			var scroll = $(window).scrollTop();
			if(scroll > begin && scroll < end){
				item.addClass('active');
			}else{
				item.removeClass('active');
			}
		}
	}

	scrollActive();
	$(window).scroll(scrollActive);

	// Клик на ссылку с якорем
	$('.scroll-link').click(function(){
		var block = $($(this).attr('href'));
		var topOffset = 50;
		if ($(block).length){
			$('html:not(:animated), body:not(:animated)').animate({
				scrollTop: block.offset().top  - topOffset
			},500);
			return false;
		}
	});

	// В поле телефона оставляем только цифры и +
	$('input[name="phone"]').keyup(function(){
		var val = $(this).val().replace(/[^0-9+]/,'');
		$(this).val(val);
	});

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

	// Скрыть элемент при клике за его пределами
	// $(document).click(function(event) {
	// 	if ($(event.target).closest(".element").length) return;
	// 	$("p").hide("slow");
	// 	event.stopPropagation();
	// });

});
