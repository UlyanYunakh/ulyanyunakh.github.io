<?php
 if($_POST)
 {
 $to_Email = "example@mail.ru";
 $subject = 'Запрос обратного звонка.';

 if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

 $otvet_serv = json_encode(
 array(
 'text' => 'Возникла ошибка при отправке данных'
 ));

 die($otvet_serv);
 }

 if(!isset($_POST["polz_from"]) || !isset($_POST["polz_to"]) || !isset($_POST["polz_num"]) || !isset($_POST["polz_phone"]))
 {
 $otvet_serv = json_encode(array('type'=>'error', 'text' => 'Заполните форму'));
 die($otvet_serv);
 }

 $user_From = filter_var($_POST["polz_from"], FILTER_SANITIZE_STRING);
 $user_To = filter_var($_POST["polz_to"], FILTER_SANITIZE_STRING);
 $user_Num = filter_var($_POST["polz_num"], FILTER_SANITIZE_STRING);
 $user_Phone = filter_var($_POST["polz_phone"], FILTER_SANITIZE_STRING);

 if(strlen($user_From)<3)
 {
 $otvet_serv = json_encode(array('text' => 'Поле Имя слишком короткое или пустое'));
 die($otvet_serv);
 }
 if(strlen($user_To)<3)
 {
 $otvet_serv = json_encode(array('text' => 'Поле Сообщение слишком короткое или пустое'));
 die($otvet_serv);
 }
 if(!is_numeric($user_Phone))
 {
 $otvet_serv = json_encode(array('text' => 'Номер телефона может состоять только из цифр'));
 die($otvet_serv);
 }
 if(!is_numeric($user_Num))
 {
 $otvet_serv = json_encode(array('text' => 'Номер телефона может состоять только из цифр'));
 die($otvet_serv);
 }
 

 $message = "Телефон: ".$user_Phone.". Отправление: ".$user_From.". Прибытие: ".$user_To.". Количество: ".$user_Num;

 if(!mail($to_Email, $subject, $message, "From: info@webriz.ru \r\n"))
 {
 $otvet_serv = json_encode(array('text' => 'Не могу отправить почту! Пожалуйста, проверьте ваши настройки PHP почты.'));
 die($otvet_serv);
 }else{
 $otvet_serv = json_encode(array('text' => 'Спасибо! Ваше сообщение отправлено.'));
 die($otvet_serv);
 }
 }
 ?>