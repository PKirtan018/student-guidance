<?php

session_start();

if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !==true)
{
    header("location: login.php");
}
?>

<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <h1 style="color: orangered" align="center" >Let's learn</h1>
    <hr>

</head>


<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html"> <img src="download.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
           let's learn</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="welcome.php">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="question.php">Ask Question</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        user settings
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                       <li><a class="dropdown-item" href="update.php">edit</a></li>
                        <li><a class="dropdown-item" href="logout.php">logout</a></li>

                    </ul>
                </li>


    </div>
</nav>



<div class="container mt-4">
    <h3 style="color: white"><?php echo "Welcome ". $_SESSION['username']?>! You can now use this website</h3>
    <hr>

</div>


<div>
 <h4 >Please choose the subject you want to get notes on </h4>

</div>
<br>
<br>
<br>

<div class="btn-group">
    <button type="button" class="btn btn-danger btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        physics
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="question.php">question</a></li>
        <li><a class="dropdown-item" href="physics.html">chapter list</a></li>
        <li><a class="dropdown-item" href="phyquiz.html">quiz</a></li>


    </ul>

</div>

<div class="btn-group">
    <button type="button" class="btn btn-danger btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
       chemistry
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="question.php">question</a></li>
        <li><a class="dropdown-item" href="chemistry.html">chapter list</a></li>
        <li><a class="dropdown-item" href="chemquiz.html">quiz</a></li>



    </ul>

</div>

 <div class="btn-group">
    <button type="button" class="btn btn-danger btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Maths
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="question.php">question</a></li>
        <li><a class="dropdown-item" href="math.html">chapter list</a></li>
        <li><a class="dropdown-item" href="mathquiz.html">quiz</a></li>


    </ul>

</div>


</body>
</html>
