<?php

include'config.php';
include'comments.inc.php'





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
$cid = $_POST['cid'];
$uid = $_POST['uid'];
$date = $_POST['date'];
$message = $_POST['message'];

echo" <form method='post' action='".replycomment($conn)."'>
    <input type='hidden' name='cid' value='".$cid."'>
    <input type='hidden' name='uid' value='".$uid."'>
    <input type='hidden' name='date' value='".$date."'>
    Question:
    <textarea name='message'>".$message." </textarea><br>
    <button name='replysubmit' type='submit'>reply</button>
</form>";


?>

</body>
</html>
