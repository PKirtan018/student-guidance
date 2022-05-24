<?php
//This script will handle login
session_start();

// check if the user is already logged in
if(isset($_SESSION['username']))
{
    header("location: welcome.php");
    exit;
}
require_once "config.php";

$username = $password = "";
$err = "";

// if request method is post
if ($_SERVER['REQUEST_METHOD'] == "POST"){
    if(empty(trim($_POST['username'])) || empty(trim($_POST['password'])))
    {
        $err = "Please enter username and password";
        echo $err;
    }
    else{
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);
    }


    if(empty($err))
    {
        $sql = "SELECT id, username, password FROM users WHERE username = ?";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "s", $param_username);
        $param_username = $username;

        // Try to execute this statement
        if(mysqli_stmt_execute($stmt)){
            echo"1";
            mysqli_stmt_store_result($stmt);
            if(mysqli_stmt_num_rows($stmt) == 1)
            {echo"2";
                mysqli_stmt_bind_result($stmt, $id, $username, $hashed_password);
                if(mysqli_stmt_fetch($stmt))
                {echo"3";
                    if(password_verify($password, $hashed_password))
                    {echo"4";
                        // this means the password is corrct. Allow user to login
                        session_start();
                        $_SESSION["username"] = $username;
                        $_SESSION["id"] = $id;
                        $_SESSION["loggedin"] = true;

                        //Redirect user to welcome page
                        header("location: welcome.php");

                    }
                }

            }

        }
    }


}


?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 <title></title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

</head>

<body>
<style>
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



<!---->
<!--<div class="container mt-4">-->
<!--    <h3>Please Login Here:</h3>-->
<!--    <hr>-->
<!---->
<!--    <form action="login.php" method="post">-->
<!--            <label for="email">Username:</label>-->
<!--            <input type="text" name="username" id="email" placeholder="Enter Username">-->
<!--            <label for="password">Password:</label>-->
<!--            <input type="password" name="password" id="password" placeholder="Enter Password">-->
<!--        <button type="submit" >Submit</button>-->
<!--    </form>-->
<!---->
<!--</div>-->
<!--</body>-->
<!--</html>-->
<!---->




<form action="" method="post" class="form-signin" >
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="username" class="sr-only">Username</label>
    <input type="text" name="username" id="username" class="form-control" placeholder="username" required autofocus>
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" name = "password" id="inputPassword" class="form-control" placeholder="Password" required>
    <div class="checkbox mb-3">
        <label>
            <input type="checkbox" value="remember-me"> Remember me
        </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit" name="loginsubmit">Sign in</button>
</form>
</body>
</html>