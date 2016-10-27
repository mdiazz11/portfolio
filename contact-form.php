<?php
if(isset($_POST['submit'])){
    $errors = '';
    $myemail = 'melissa@meldiaz.com';

    $name = $_POST['name'];
    $email_address = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['message'];


    $to = $myemail;
    $email_subject = "Contact form submission: $name";
    $email_body = "You have received a new message. ".
    " Here are the details:\n Name: $name \n ".
    "Email: $email_address\n Message \n $message";
    $headers = "From: $myemail\n";
    $headers .= "Reply-To: $email_address";
    mail($to,$email_subject,$email_body,$headers);
    //redirect to the 'thank you' page
    header('Location: index.html');
}

?>
