<?php
header("Access-Control-Allow_Origin: *");
header("Access-Control-Allow-Headers: *");
$servername = "capstone-rds-prod.ckh0oguhtg0c.us-east-1.rds.amazonaws.com";
$username = "admin";
$password = "fantasticfour";
$dbname = "Capstone";

// Create a connection
$conn = new mysqli("localhost", $username, $password, $dbname);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

// Extract relevant data (modify as needed)
$CWID = $data['CWID'];
$Password = $data['Password'];
$Email = $data['Email'];
$Phone = $data['Phone'];
$Fname = $data['Fname'];
$Lname = $data['Lname'];
$mint = $data['Mini'];

// SQL query to insert data
$sql = "INSERT INTO applicant (CWID, password, email, phoneNumber, firstName, lastName, middleInitial)
        VALUES ($CWID, $Password, $Email, $Phone, $Fname, $Lname, $mint)";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully!";
} else {
    echo "Error inserting data: " . $conn->error;
}

$conn->close();
?>

