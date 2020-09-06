## newTask

Шаблон верстки для нового проекта `Gulp + Sass`

Если потребуется, легко можно разбить стили для шаблонов отдельных страниц за счет разделения стилей по логике.

- В `gulpfile.js` прописан скрипт для сжатия картинок (нет необходимости сжимать через оптимизиллу)
- Библиотеки фронта устанавливаются через npm в папку `public_html/_libs/`
- Простая Sass архитектура

### Описание архитектуры

- base/ - стили по умолчанию, классы, цвета, переменные, миксины и пр.
- blocks/ - стили отдельных переиспользуемых блоков (пагинация, хлебные крошки ...)
- elements/ - стили для отдельных переиспользуемых элементов (кнопки, формы ...)
- templates/ - папка для разбивки по шаблонам
- style.scss - основной файл стилей

В файлах стилей подписано, что и для чего.

## Как работать с зависимостями front библиотек через npm

### Как устанавливать

`npm i названия пакетов через пробел --prefix ./public_html/_libs/`

### Часто используемые пакеты

`npm i fancyapps/fancybox bootstrap --prefix ./public_html/_libs`

Обновление путем установки этих же пакетов этой же командой

### Могут понадобиться

- [slick-carousel] - slick slider
- [flickity] - flickity slider
- [fengyuanchen/datepicker](https://github.com/fengyuanchen/datepicker) - simple datepicker
- [desandro/masonry](https://masonry.desandro.com/) - колонки через js
- [tuupola/lazyload](https://github.com/tuupola/lazyload) - lazyload
- [hilios/jQuery.countdown](http://hilios.github.io/jQuery.countdown/) - обратный отсчет даты
- [alvarotrigo/fullPage.js](https://github.com/alvarotrigo/fullPage.js) - полноэкранная прокрутка
- [abouolia/sticky-sidebar](https://github.com/abouolia/sticky-sidebar) - sticky sidebar
- [lcdsantos/jQuery-Selectric/](https://github.com/lcdsantos/jQuery-Selectric/) - стилизация select
- [chosen-js](https://harvesthq.github.io/chosen/) - стилизация select
- [tgomilar/paroller.js/](https://tgomilar.github.io/paroller.js/) - Параллакс
- [janpaepke/ScrollMagic](http://scrollmagic.io/) - анимация при прокрутке
- [aos](https://michalsnik.github.io/aos/) - анимация aos
- [wow.js](https://github.com/graingert/wow) - анимация при прокрутке wow.js
- [animate.css](https://github.com/daneden/animate.css) - стили анимаций (так же стили для wow.js)
- [jquery.maskedinput](https://github.com/digitalBush/jquery.maskedinput) - маски для вводимых данных
