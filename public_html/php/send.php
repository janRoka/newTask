<?php

if (empty($_SERVER['HTTP_X_REQUESTED_WITH']) || $_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') {return;}

if($_SERVER['REQUEST_METHOD'] != 'POST'){ return; }

include 'helpers.php';

$to = 'mail@mail.ru';
$subject = 'Заявка с сайта Example';
$message = '';

$fields = [
	'type' => 'Форма',
	'name' => 'Имя',
	'phone' => 'Телефон',
	'email' => 'Email',
	'message' => 'Сообщение'
];

foreach($fields as $k => $v){
	if(isset($_POST[$k]) && !empty($_POST[$k])){
		$message .= '<b>'.$v.': </b>'.clean($_POST[$k]).'<br>';
	}
}

$headers = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: <no-reply@example.ru>\r\n"; 
// $headers .= "Reply-To: reply-to@example.com\r\n";

if(mail($to,$subject,$message,$headers)){
	echo 'Ваша заявка принята, наши специалисты свяжутся с вами в ближайшее время.';
}else{
	echo 'Ошибка отправки, попробуйте позже.';
}

exit;
