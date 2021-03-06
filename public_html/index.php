<!DOCTYPE html>
<html lang="ru">
<head>
	<!-- <base href=""> -->
	<meta charset="UTF-8">
	
	<!-- СЕО -->
	<title>New Task</title>
	<meta name="description" content="">

	<meta property="og:image" content="" />
	
	<link rel="shortcut icon" href="/apple-touch-icon.png" type="image/png">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png">

	<!-- Мобильная версия -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- CSS -->
	<link rel="stylesheet" href="css/libs.min.css">
	<link rel="stylesheet" href="css/style.css">

	<!-- jQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</head>
<body>
	<div class="page-wrapper">

		<div class="page-wrapper-top">

			<header class="header">
				<div class="container">
					
				</div>
			</header>

			<section>
				<div class="container">
					
				</div>
			</section>

		</div>
		
		<div class="page-wrapper-bottom">
			<footer class="footer">
				<div class="container">
					
				</div>
			</footer>
		</div>

	</div>
	
	<!-- Modals -->
	<div class="modal modal-callback" id="modal-callback">
		<form action="php/send.php" class="ajax-form" method="post">
			<input type="hidden" name="action" value="send-form">
			<input type="hidden" name="type" value="Обратный звонок">
			<div class="d-none">
				<input type="text" name="work-email" value="">
			</div>
			<h3 class="modal-title">Заказать обратный звонок</h3>
		</form>
	</div>
	<!-- /Modals -->

	<!-- jQuery Scripts -->
	<script src="js/libs.min.js"></script>
	<script src="js/scripts.js"></script>

</body>
</html>
