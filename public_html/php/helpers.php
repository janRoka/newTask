<?php

if (! function_exists('clean') ){

	function clean($value = "") { // Функция очистки данных
		$value = trim($value);
		$value = stripslashes($value);
		$value = strip_tags($value);
		$value = htmlspecialchars($value);
		
		return $value;
	}

}

if (! function_exists('d') ){

	function d($var, $die = true){ // Функция отладки
		print '<pre>';
		print_r($var);
		print '</pre>';
		if($die) die;
	}
	
}