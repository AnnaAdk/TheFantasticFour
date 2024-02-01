<?php

$_POST['ulmEmail'];
$username="admin";
$dbpassword="fantasticfour";
$dbname="ACCOUNTS";

$conn = new mysqli("localhost", $username, $dbpassword, $dbname);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT ulm_Email, password FROM passwords WHERE ulm_Email= '" . $_POST['ulmEmail'] . "' AND password = '" . $_POST['password'] . "')";

if ($conn->query($sql) === TRUE) {
    echo "This You? " . $conn->query($sql);
}
else{
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>