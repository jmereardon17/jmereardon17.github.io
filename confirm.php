<?php

if ( isset($_POST['serviceSubmit']) ) {

  $first_name = $_POST['firstName'];
  $last_name = $_POST['lastName'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $form = $_POST['forms'];
  $carousel = $_POST['carousels'];
  $lightbox = $_POST['lightboxes'];
  $stockImages = $_POST['stockPhotos'];
  $logo = $_POST['logo'];
  $info = $_POST['info'];
  $checklist = $_POST['checklist'];
  $checklistLength = count($checklist);

  $email_subject = "[Website Request] Client - $first_name $last_name";

  $email_body = 
    "Client Details\n".
    "Name: $first_name $last_name\n".
    "Phone: $phone\n".
    "Email: $email\n".
    "Website Details\n".
    "Forms: $form\n".
    "Carousels: $carousel\n".
    "Lightbox: $lightbox\n".
    "stockImages: $stockImages\n".
    "Logo: $logo\n".
    "Message: $info\n".
    "Checklist\n".
    // for($i=0; $i < $checklistLength; i++) {
    //   "$checklist[$i]\n".
    // }
    "Web Hosting: $checklist[0]\n".
    "Domain: $checklist[1]\n".
    "cPanel: $checklist[2]\n";

    $email_body = '<html><body>';
  
  $email_body .= '<img src="https://jamiereardon.dev/img/email-header.jpg" alt="Jamie Reardon Logo" />';

  $email_body .= '<p>You have received a new contact request from your site.</p>';

  $email_body .= '<table rules="all" style="border-color: #e0e0e0;" cellpadding="10">';

  $email_body .= "<tr style='background: #f5f5f5;'><td colspan='2' style='text-align: center; text-transform: uppercase; color: #C28D76;'><strong>Client Details</strong></td></tr>";

  $email_body .= "<tr><td><strong>Name:</strong> </td><td>" . $first_name . $last_name . "</td></tr>";

  $email_body .= "<tr><td><strong>Phone:</strong> </td><td>" . $phone . "</td></tr>";

  $email_body .= "<tr><td><strong>Email:</strong> </td><td>" . $email . "</td></tr>";

  $email_body .= "<tr><td><strong>Forms:</strong> </td><td>" . $form . "</td></tr>";

  $email_body .= "<tr><td><strong>Carousels:</strong> </td><td>" . $carousel . "</td></tr>";

  $email_body .= "<tr><td><strong>Lightbox:</strong> </td><td>" . $lightbox . "</td></tr>";

  $email_body .= "<tr><td><strong>Stock Images:</strong> </td><td>" . $stockImages . "</td></tr>";

  $email_body .= "<tr><td><strong>Logo:</strong> </td><td>" . $logo . "</td></tr>";

  $email_body .= "</table>";

  $email_body .= "<p style='padding-left: 10px;'><strong>Message:</strong></p>";

  $email_body .= "<p style='padding-left: 10px;'>" .$message . "</p>";

  $email_body .= "<p style='padding-left: 10px;'>Web Hosting: " . $checklist[0] . "</p>";

  $email_body .= "<p style='padding-left: 10px;'>Domain: " . $checklist[1] . "</p>";

  $email_body .= "<p style='padding-left: 10px;'>cPanel: " . $checklist[2] . "</p>";

  $email_body .= "</body></html>";       

  // Build Headers
  $to = "jamie.reardon91@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $email_from \r\n";
  // Set content-type header for sending HTML email
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=SO-8859-1\r\n";
  // Send email
  mail($to,$email_subject,$email_body,$headers);

  // Send email confirmation to client
  // Build the Email
  $email_subject = "Confirmation - Jamie Reardon Web Service";
  // Create the HTML
  $email_body = '<html><body>';
  $email_body .= '<img src="https://jamiereardon.dev/img/email-header.jpg" alt="Jamie Reardon Logo" />';

  $email_body .= '<p>Thank you for sending your request. Please allow up to 24 hours to get in touch.</p>';

  $email_body .= "</body></html>";

  $to = $email_from;
  // Build headers
  $headers = "From: jamie.reardon91@gmail.com";
  $headers .= "Reply-To: jamie.reardon91@gmail.com";
  // Set content-type header for sending HTML email
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=SO-8859-1\r\n";
  mail($to,$email_subject,$email_body,$headers);
}

?>