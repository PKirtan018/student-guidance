

<?php

function setcomment($conn){
if(isset($_POST['commentsubmit'])){
    $uid = $_POST['uid'];
    $date = $_POST['date'];
    $message = $_POST['message'];

    $sql="INSERT INTO comments(uid, date, message) values('$uid','$date','$message' )";
    $result= $conn->query($sql);
}
}

function getcomment($conn){
    $sql="select * from comments";
    $result= $conn->query($sql);
    while($row=$result->fetch_assoc()){
        $id=$row['uid'];
        $sql2="select * from users where id='$id'";
        $result2= $conn->query($sql2);
        if($row2=$result2->fetch_assoc()){
            echo "<div class='comment-box'><p>";
            echo $row2['username']."<br>";
            echo $row['date']."<br>";
            echo nl2br($row['message']);
            echo "</p>";
            if(isset($_SESSION['id'])){
                if($_SESSION['id']==$row2['id']){
                    echo"<form  class='delete-form' method='Post' action='".deletecomment($conn)."'>
 <input type='hidden' name='cid' value='".$row['cid']."'>
 <button name='commentdelete' type='submit'>delete</button>
 </form>
 <form  class='edit-form' method='Post' action='editcomment.php'>
 <input type='hidden' name='cid' value='".$row['cid']."'>
 <input type='hidden' name='uid' value='".$row['uid']."'>
 <input type='hidden' name='date' value='".$row['date']."'>
 <input type='hidden' name='message' value='".$row['message']."'>
 <button>Edit</button>
 </form>";
}else{





echo" <form  class='edit-form' method='Post' action='replycomment.php'>
 <input type='hidden' name='cid' value='".$row['cid']."'>
 <input type='hidden' name='uid' value='".$row['uid']."'>
 <input type='hidden' name='date' value='".$row['date']."'>
 <input type='hidden' name='message' value='".$row['message']."'>
 <button>reply</button>
 </form>";}
                if($conn){ getreply($conn);}






 }

            }

echo"</div>";
        }


}
function editcomment($conn){
    if(isset($_POST['commentsubmit'])){
        $cid = $_POST['cid'];
        $uid = $_POST['uid'];
        $date = $_POST['date'];
        $message = $_POST['message'];

        $sql="UPDATE comments SET message='$message' where cid='$cid'";
        $result= $conn->query($sql);
        header("location: question.php");
    }
}

function deletecomment($conn)
{
    if (isset($_POST['commentdelete'])) {
        $cid = $_POST['cid'];


        $sql = "delete from comments where cid='$cid'";
        $result = $conn->query($sql);
        header("location: question.php");
    }
}
function replycomment($conn){
    if(isset($_POST['replysubmit'])){
        $cid2 = $_POST['cid'];
        $uid2 = $_POST['uid'];
        $date2 = $_POST['date'];
        $message2 = $_POST['message'];

        $sql="INSERT INTO replies(uid, date, message) values('$uid2','$date2','$message2' )";
        $result= $conn->query($sql);
        header("location: question.php");
    }
}function getreply($conn){
    $sql="select * from comments";
    $result= $conn->query($sql);
    while($row=$result->fetch_assoc()){
        $id=$row['uid'];  $sql2="select * from users where id='$id'";
        $result2= $conn->query($sql2);
        $row2=$result2->fetch_assoc();
        $sql3="select * from replies where cid='$id'";
        $result3= $conn->query($sql3);
        if($row3=$result3->fetch_assoc()){
            echo "<div class='comment-box'><p>";
            echo $row2['username']."<br>";
            echo $row3['date']."<br>";
            echo nl2br($row3['message']);
            echo "</p>";
            if(isset($_SESSION['id'])){
                if($_SESSION['id']==$row2['id']){


                    echo" <form  class='edit-form' method='Post' action='replycomment.php'>
 <input type='hidden' name='cid' value='".$row['cid']."'>
 <input type='hidden' name='uid' value='".$row['uid']."'>
 <input type='hidden' name='date' value='".$row['date']."'>
 <input type='hidden' name='message' value='".$row['message']."'>
 <button>reply</button>
 </form>";}
            }}}}

?>
