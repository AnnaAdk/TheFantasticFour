<?php
$username = "admin";
$dbpassword = "TheFantasticFour";
$dbname = "Capstone";

$conn = new mysqli("capstone-rds-prod.ckh0oguhtg0c.us-east-1.rds.amazonaws.com", $username, $dbpassword, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Your database operations go here

$conn->close(); // Close the connection after using it
?>
