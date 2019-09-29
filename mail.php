<?php
require_once "SendMailSmtpClass.php";


$mailSMTP = new SendMailSmtpClass('Grungeminsk@gmail.com', 'derebas1988', 'ssl://smtp.gmail.com', 465, "utf-8");
// $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'порт', 'кодировка письма');

$from = array(
    "заявка granzh", // Имя отправителя
    "huntronicsrus@gmail.com" // почта отправителя
  );
// кому
//jlkfa
$to = 'derdy@tut.by, den.vasilyuk@gmail.com';

$request_vars = "";
foreach ($_POST['request'] as $key => $value) {
  if (is_array($value)){
    $vars = '';
    $main_key = $key;
    foreach ($value as $key => $value_var) {
      $value_var = trim($value_var);
      if ($value_var!='')
        $vars .= htmlspecialchars(stripslashes($value_var)).', ';
    }
    $request_vars .= $main_key.': '.substr($vars, 0, -2).'<br>';
  }
  else{
    $value = trim($value);
    if ($value!='')
      $request_vars .= $key.': '.htmlspecialchars(stripslashes($value)).'<br>';
  }
}

$result =  $mailSMTP->send($to, 'Сообщение', $request_vars, $from); 
// $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Отправитель письма');

if($result){
      echo "Сообщение отправлено.<br /><br /><a href='#' onclick='goBack();'>Вернуться на сайт.</a><script>function goBack(){ window.history.back();}</script>";;
  }else{
      echo "Сообщение не отправлено.<br /><br /><a href='#' onclick='goBack();'>Вернуться на сайт.</a><script>function goBack(){ window.history.back();}</script>";
  }
?>