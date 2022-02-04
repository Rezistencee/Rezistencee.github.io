<?php
$to = "horbonosa@gmail.com";
$name = $_POST['name'];
$from = trim($_POST['email']);
$message = htmlspecialchars($_POST["msg"]);
$message = urldecode($message);
$message = trim($message);

$headers = "From" .$name. "\r\n" ."Reply-To: " .$from;

if (mail($to, $name, $message, $headers)) {     
    echo "Сообщение успешно отправлено";
} else {
    echo "При отправке сообщения возникла ошибка";
}
?>
