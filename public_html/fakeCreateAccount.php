<?php
/**Written by nic*/


$username="admin";
$dbpassword="fantasticfour";
$dbname="ACCOUNTS";

$conn = new mysqli("localhost", $username, $dbpassword, $dbname);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}



$sql = "INSERT INTO passwords VALUES ( 'user@website.com', 'ReallyGoodPassword')";

if ($conn->query($sql) === TRUE) {
    echo "created";
}
else{
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>