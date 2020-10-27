<?php
$message = $_POST['message'];
$email = $_POST['email'];
$subject = "Enquiry";
$recipient = "admin@key-vah.com";
$formcontent=" From: $email \n Subject: $subject \n Message: $message";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='/' style='text-decoration:none;color:#B79954;'> Return Home</a>";
?>