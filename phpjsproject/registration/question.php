<?php
date_default_timezone_set('Asia/Kathmandu');
include'config.php';
include 'comments.inc.php';
session_start();




?>


<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ask question</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>


<?php
if (isset($_SESSION['id'])){
    echo" <form method='post' action='".setcomment($conn)."'>
    <input type='hidden' name='uid' value='".$_SESSION['id']."'>
    <input type='hidden' name='date' value='".date('Y-m-d H:i:s')."'>
    Question:
    <textarea name='message'> </textarea><br>
    <button name='commentsubmit' type='submit'>Ask </button>
</form>";
}


getcomment($conn);

?>

</body>
</html>






