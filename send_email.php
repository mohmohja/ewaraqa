<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Recipient email address (replace with your email)
    $to = "mj@ewaraqa.com";

    // Email subject and body content
    $email_subject = "Contact Form Submission: " . $subject;
    $email_body = "You have received a new message from the contact form.\n\n" .
                  "Name: $name\n" .
                  "Email: $email\n\n" .
                  "Message:\n$message\n";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Email sent successfully
        echo "Message sent successfully!";
    } else {
        // Failed to send the email
        echo "Error sending the message.";
    }
}
?>
