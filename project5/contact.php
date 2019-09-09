<!DOCTYPE html>
<html lang="en">
    <head>
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="contact.css" rel="stylesheet">
        <link href="animate.css" rel="stylesheet">
        <script src="contact.js"></script>
        <script src="jquery-3.2.1.min.js"></script>

    </head>
    <body>
        <nav class="side-menu">
    <ul>
      <li><a href="home.html">Home<span><i class="fa fa-home"></i></span></a></li>
      <li><a href="about.html">About<span><i class="fa fa-question"></i></span></a></li>
      <li><a href="projects.html">Projects<span><i class="fa fa-folder"></i></span></a></li>
      <li><a href="contact.php">Contact<span><i class="fa fa-phone"></i></span></a></li>
      <li><a href="resume.html">Resume<span><i class="fa fa-file-text"></i></span></a></li>
      <!--<li><a href="index.html">Social Media<span><i class="fa fa-users"></i></span></a></li>-->
    </ul>
  </nav>

  <!--<h2>E-mail me @ mooreoctavius94@gmail.com</h2>-->
      
               <form>
            <form action="contact.php">
            <form method="post"> <input name="name" id = 'name' type="text" maxlength="40" placeholder="Name">
            <form method="post"> <input name="email" id = 'email' type="email" maxlength="40"  placeholder="Email">
            <form method="post"> <input name="subject" id = 'subject' type="text" maxlength="50"  placeholder="Message...">
            <form method="post"> <input name="message" id = 'message' type="text" maxlength="200"  placeholder="Message...">
            <button input type="submit" name="send" value="send" class='send'>Send</button>
                    </form>
            <!--<textarea rows="4" cols="40" form ="message" name ="message" placeholder = "Message..." maxlength = "224"></textarea>-->

                

<?php


       error_reporting(E_ALL & ~E_NOTICE);

     /* Attempt MySQL server connection. Assuming you are running MySQL
    server with default setting (user 'root' with no password) */

    $link = mysqli_connect("localhost", "omoore94_omoore", "deandre94", "omoore94_testdb");

    // Check connection

    if($link === false){
        die("ERROR: Could not connect. " . mysqli_connect_error());
    }

    

    // Escape user inputs for security
    $name = mysqli_real_escape_string($link, $_GET['name']);
    $email = mysqli_real_escape_string($link, $_GET['email']);
    $subject = mysqli_real_escape_string($link, $_GET['subject']);
    $message = mysqli_real_escape_string($link, $_GET['message']);

    // attempt insert query execution
    $sql = "INSERT INTO portfolio (name, email, description, message) VALUES ('$name', '$email', '$subject', '$message')";

    if(mysqli_query($link, $sql)){
        // echo "Records added successfully.";
        
    } else{
        // echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
    }


    // close connection
    mysqli_close($link);

    ?>

    </body>
</html>