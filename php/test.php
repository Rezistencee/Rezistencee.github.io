<?php
$fio = $_POST['name'];
$email = $_POST['email'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("horbonosa@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>