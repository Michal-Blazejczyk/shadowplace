<?php
$to = "budzik555@interia.pl";
$name = $_POST['name'];
$nazwisko = $_POST['email'];
$subject = "Nowy e-mail od . $name . '(' .$email. ')';
$massage = $_POST['message']
$txt = "Hello world!";
$headers = 'From:'  . $name . '(' .$email. ')' .
"CC: somebodyelse@example.com";
$headers = "content-type text/html charset=utf-8\r\n";
mail($to,$subject,$txt,$headers);
?>