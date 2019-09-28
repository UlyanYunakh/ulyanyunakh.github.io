<?php 
require_once "SendMailSmtpClass.php"; // подключаем класс


$mailSMTP = new SendMailSmtpClass('Grungeminsk@gmail.com', 'derebas1988', 'ssl://smtp.gmail.com', 465, "utf-8");
// $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'порт', 'кодировка письма');

$user_From = $_POST['form-user_from'];
$user_To = $_POST['form-user_to'];
$user_Num = $_POST['form-user_number'];
$user_Phone = $_POST['form-user_phone'];

  $from = array(
    "заявка granzh", // Имя отправителя
    "huntronicsrus@gmail.com" // почта отправителя
  );
// кому
//jlkfa
$to = 'derdy@tut.by, den.vasilyuk@gmail.com';

// отправляем письмо
  $result =  $mailSMTP->send($to, 'Сообщение', '<br>Место отправления:' . $user_From . '<br>Место прибытия:' . $user_To . '<br>Кол-во мест:' . $user_Num . '<br>Телефон:' . $user_Phone, $from); 
  // $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Отправитель письма');
 
  if($result){
      echo "Сообщение отправлено. Спасибо Вам, мы скоро свяжемся с Вами. <br /><br /><a href='#' onclick='goBack();'>Вернуться на сайт.</a>";
  }else{
      echo "Сообщение отправлено. Спасибо Вам, мы скоро свяжемся с Вами. <br /><br /><a href='#' onclick='goBack();'>Вернуться на сайт.</a>";
  }

?>