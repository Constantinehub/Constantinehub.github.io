<?php
if($_POST)
		{
		$to = "killtobanana@gmail.com"; //куда отправлять письмо
		$from = $_POST['email']; // от кого
		$subject = "Проверка почты"; //тема
		$message = 'Имя: '.$_POST['name'].'; Email: '.$_POST['email'].';';
		$headers = "Content-type: text/html; charset=UTF-8 \r\n";
		$headers .= "From: " . $from . "\r\n";
		$result = mail($to, $subject, $message, $headers);
 
			if ($result){
					echo "Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи";
			}
		}
?>