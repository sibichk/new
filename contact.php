<?php 
$name=$_GET['name'];
$email=$_GET['email'];
$message=$_GET['message'];

 $to='sibi27@yahoo.com';
    $email_subject = "website email";
 
    $email_body = "You have received a new message from the user $name with email address $email\n".
                            "Here is the message:\n $message";
							mail($to,$email_subject,$email_body);

?>