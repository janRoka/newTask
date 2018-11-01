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

	//jquery UI подсветка нужных дат
	function highlightDays(date) {
		for (var i = 0; i < dates.length; i++) {
			dates[i] = new Date(dates[i]);
			var d1 = dates[i].getDate()+'.'+(dates[i].getMonth())+'.'+dates[i].getFullYear(),
				d2 = date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear();
			if (d1 == d2){
				return [true, 'highlight', 'Возможная дата отбытия'];
			}
		}
		return [false, ''];
	}

	function tourDates(){
		var form = $('.form-filter'),
			uri = form.data('ajax');
		var params = {
			action: 'tour-dates',
			city: form.find('select[name="city"]').val(),
			transport: form.find('select[name="transport"]').val()
		};
		$.post(uri,params,function(data){
			dates = JSON.parse(data);
			// console.log(data);
		});
	}

	var dates = [];
	var dates_days = [];

	tourDates();
	$('.form-filter select').change(tourDates);

	$.datepicker.setDefaults($.datepicker.regional["ru"]);

	var dateTo = $('input[name="date_to"]').datepicker({
		dateFormat: 'dd.mm.yy'
	});

	var dateFrom = $('input[name="date_from"]').datepicker({
		dateFormat: 'dd.mm.yy',
		beforeShowDay: highlightDays
	}).on('change', function () {
		dateTo.datepicker( "option", "minDate", $(this).datepicker('getDate'));
	});

	// Получить годы из unix time
	$('input[name*="date_born"]').on('change',function(){
		var now = new Date(),
			dateArr = $(this).val().split('.'),
			dateBorn = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]),
			sec = 31556926, // Кол-во секунд в году
			age = Math.floor((now - dateBorn) / (1000*sec));
		age = isNaN(age) ? 0 : age;
		age = age < 0 ? 0 : age;
		$(this).closest('.form-row').find('input[name*="age"]').val(age);
		$(this).closest('.table-row').find('input[name*="age"]').val(age);
		
		var obj = $(this);
		changeCost(obj);
	});

	// Смена фона при прокрутке страницы
	function changeBodyBg(){
		var colorClass = 'color-pink';
		$('.panel').each(function(){
			if($(window).scrollTop() > $(this).offset().top - 300){
				colorClass = 'color-' + $(this).data('color');
			}
			$('body').attr('class','').addClass(colorClass);
		});
	}
	changeBodyBg();
	$(window).scroll(changeBodyBg);

});