<?php

$to = "ahdproduction@gmail.com";  // Replace with your mail address
$name = $_REQUEST['name'];
$from = $_REQUEST['email'];

// Sujet
$subject = 'Formulaire de contact Mi8';

$fields = array();
$fields{"name"} = "Name";
$fields{"email"} = "Email";
$fields{"message"} = "Message";

$body = "Here is what was sent: <br> <br>"; foreach($fields as $a => $b){  $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

// message
// $message = '
// <html>
// <head>
// <title>Formulaire DE CONTACT</title>
// </head>
// <body>
// <p> "Here is what was sent:\n\n"; foreach($fields as $a => $b){   
// 		$body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); } </p>
// </body>
// </html>
// ';

// Pour envoyer un mail HTML, l'en-tête Content-type doit être défini
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// En-têtes additionnels
$headers .= 'To: Abdel <ahdproduction@gmail.com>';
$headers .= 'From: $from';	

// Envoi
$send = mail($to, $subject, $body, $headers);

?>