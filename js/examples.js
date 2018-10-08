$(document).ready(function(){

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

	// Скрыть элемент при клике за его пределами
	$(document).click(function(event) {
		if ($(event.target).closest(".element").length) return;
		$("p").hide("slow");
		event.stopPropagation();
	});

	// Проверка формы на ошибки
	$('form').submit(function(){
		var errors = 0;
		$(this).find('.required').removeClass('error').each(function(){
			if($(this).val() == ''){
				$(this).addClass('error');
				errors++;
			}
		});
		if(errors){
			$('html,body').animate({
				scrollTop: $(this).find('.error').eq(0).offset().top - 40
			},300);
			return false;
		}
	});

	// Проверить ссылку на модальное окно политики конфиденциальности
	if(document.location.href.match(/#modal-conf/)){
		$.fancybox.open({
			src: '#modal-conf'
		});
	}

});