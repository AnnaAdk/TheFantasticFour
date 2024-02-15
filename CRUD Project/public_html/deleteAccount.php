<?php
/**Written by nic*/

$username="admin";
$dbpassword="fantasticfour";
$dbname="ACCOUNTS";

$conn = new mysqli("localhost", $username, $dbpassword, $dbname);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

$sql = "DELETE From passwords Where  ulm_Email='" . $_POST['ulmEmail'] . "' AND password='" . $_POST['password'] . "'";

if ($conn->query($sql) === TRUE) {
    echo "account deleted";
}
else{
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>