<?php
session_start();

require_once "config.php";

if($_SERVER["REQUEST_METHOD"]== "POST"){
    $sql = "SELECT * FROM users WHERE id = ?";
    if($stmt = mysqli_prepare($conn, $sql)){
        mysqli_stmt_bind_param($stmt, "i", $param_id);
        $param_id = $_SESSION['id'];

        if(mysqli_stmt_execute($stmt)){
            $result = mysqli_stmt_get_result($stmt);
            $row = mysqli_fetch_array($result);
            if(password_verify($_POST['currentPassword'], $row['password'])){
                $sql = "UPDATE users set password=?,username=? WHERE id=?";
                if($stmt = mysqli_prepare($conn, $sql)){
                    mysqli_stmt_bind_param($stmt, "si", $param_password, $param_id,);
                  $param_username=($_POST['username']);
                    $param_password = password_hash($_POST['newPassword'], PASSWORD_DEFAULT) ;
                    $param_id = $_SESSION['id'];

                    if(mysqli_stmt_execute($stmt)){
                        header("location: login.php");
                    }
                }
            }
            else{
                echo "Password not changed.";
            }
        }
    }
}

?>
<html>
<head>
    <title> Change password</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

</head>

<body><style>
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    html,body{
        display: grid;
        height: 100%;
        width: 100%;
        place-items:center ;
        background: #f2f2f2;

    }

</style>
<h3> CHANGE PASSWORD</h3>
<form method="post" action="">

    Current Password:<br>
    <input type="password" name="currentPassword">
    <br>
    New Password:<br>
    <input type="password" name="newPassword">
    <br>
    Confirm Password:<br>
    <input type="password" name="confirmPassword">
    <br>
    <br>
    <button class="btn btn-lg btn-primary btn-block" type="submit" name="confirm">confirm</button>


</form>

</body>
</html>