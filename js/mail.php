<?php 
if(isset($_POST['email'])){
    $to = "it0631@uom.edu.gr"; // this is your Email address
    $from = $_POST['email']; // this is the senders Email address
    $name = $_POST['name'];
    $subject =$_POST['subject'];
    $message = $_POST['message'];


    mail($to,$subject,$message,$from);
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>