## newTask

Довольно простой шаблон верстки для нового проекта `Gulp + Sass`

Шаблон рассчитан на работу с CMS/Framework, где имеется шаблонизатор и наследование шаблонов 

- В `gulpfile.js` прописан скрипт для сжатия картинок (нет необходимости сжимать через оптимизиллу)
- Библиотеки фронта устанавливаются через npm и подключаются с сервера, а не с CDN
- На каждый шаблон подключаются свои файлы стилей и скриптов
- Простая Sass архитектура


## Как работать с зависимостями front библиотек через npm

### Как устанавливать

`npm i названия пакетов через пробел --prefix ./public_html/_libs`

### Часто используемые пакеты

`npm i jquery normalize.css bootstrap-css-only fancyapps/fancybox slick-carousel flickity --prefix ./public_html/_libs`

Обновление путем установки этих же пакетов этой же командой

### Могут понадобиться

- [fengyuanchen/datepicker](https://github.com/fengyuanchen/datepicker) - simple datepicker
- [desandro/masonry](https://masonry.desandro.com/) - колонки через js
- [tuupola/lazyload](https://github.com/tuupola/lazyload) - lazyload
- [hilios/jQuery.countdown](http://hilios.github.io/jQuery.countdown/) - обратный отсчет даты
- [alvarotrigo/fullPage.js](https://github.com/alvarotrigo/fullPage.js) - полноэкранная прокрутка
- [abouolia/sticky-sidebar](https://github.com/abouolia/sticky-sidebar) - sticky sidebar
- [lcdsantos/jQuery-Selectric/](https://github.com/lcdsantos/jQuery-Selectric/) - стилизация select
- [harvesthq/chosen](https://harvesthq.github.io/chosen/) - стилизация select
- [tgomilar/paroller.js/](https://tgomilar.github.io/paroller.js/) - Параллакс
- [janpaepke/ScrollMagic](http://scrollmagic.io/) - анимация при прокрутке
- [graingert/wow](https://github.com/graingert/wow) - анимация при прокрутке wow.js
- [daneden/animate.css](https://github.com/daneden/animate.css) - стили анимаций (так же стили для wow.js)
- [jquery.maskedinput](https://github.com/digitalBush/jquery.maskedinput) - маски для вводимых данных