<?php 
require_once "SendMailSmtpClass.php"; // подключаем класс


$mailSMTP = new SendMailSmtpClass('Grungeminsk@gmail.com', 'derebas1988', 'ssl://smtp.gmail.com', 465, "utf-8");
// $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'порт', 'кодировка письма');

$user_Name = $_POST['user_name'];
$user_Phone = $_POST['user_phone'];
$user_Massege = $_POST['user_massege'];

  $from = array(
    "заявка granzh", // Имя отправителя
    "huntronicsrus@gmail.com" // почта отправителя
  );
// кому
//jlkfa
$to = 'derdy@tut.by, den.vasilyuk@gmail.com';

// отправляем письмо
  $result =  $mailSMTP->send($to, 'Сообщение', $user_Name . '<br>Номер:' . $user_Phone . '<br>Сообщение:' . $user_Massege, $from); 
  // $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Отправитель письма');
 
  if($result){
      echo "Сообщение отправлено. Спасибо Вам  . $user_name . , мы скоро свяжемся с Вами. <br /><br /><a href='#' onclick='goBack();'>Вернуться на сайт.</a>";
  }else{
      echo "Сообщение отправлено. Спасибо Вам  . $user_name . , мы скоро свяжемся с Вами. <br /><br /><a href='#' onclick='goBack();'>Вернуться на сайт.</a>";
  }

?>