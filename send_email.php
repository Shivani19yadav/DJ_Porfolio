<?php
// Require the PHPMailer library
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

// Create a new PHPMailer instance
$mail = new PHPMailer();

// Set the SMTP credentials
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com'; // Replace with your SMTP host
$mail->SMTPAuth = true;
$mail->Username = 'shivani19yadav2002@gmail.com'; // Replace with your SMTP username
$mail->Password = '*********'; // Replace with your SMTP password
$mail->SMTPSecure = 'tls'; // Set the encryption type, if required
$mail->Port = 587; // Replace with the appropriate port number

// Set the sender and recipient
$mail->setFrom($_POST['email'], $_POST['name']);
$mail->addAddress('shivani19yadav2002@gmail.com'); // Replace with the recipient's email address

// Set email subject and body
$mail->Subject = 'New Contact Form Submission';
$mail->Body = $_POST['message'];

// Send the email
if ($mail->send()) {
  // Email sent successfully
  echo 'Thank you for contacting us. We will get back to you soon.';
} else {
  // Error sending email
  echo 'Oops! Something went wrong. Please try again later.';
}
?>
