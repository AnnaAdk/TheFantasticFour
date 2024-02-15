<?php

/**Written by nic*/

$username="admin";
$dbpassword="fantasticfour";
$dbname="ACCOUNTS";

$conn = new mysqli("localhost", $username, $dbpassword, $dbname);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE passwords SET password='" . $_POST['newPassword'] . "' WHERE password='" . $_POST['password'] . "' AND ulm_Email='" . $_POST['ulmEmail'] . "'";

if ($conn->query($sql) === TRUE) {
    echo "Password Updated";
}
else{
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>