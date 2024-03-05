<?php
// Connect to the database

$servername = "capstone-rds-prod.ckh0oguhtg0c.us-east-1.rds.amazonaws.com";
$username = "admin";
$password = "fantasticfour";
$dbname = "Capstone";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the API call (assuming it's sent as JSON)
$data = json_decode(file_get_contents("php://input"), true);

// Extract relevant data (modify as needed)
$awardName = $data['awardName'];
$awardDate = $data['awardDate'];
$awardDec = $data['awardDescription'];
$cwid = 0;

// SQL query to insert data
$sql = "INSERT INTO applicantFacultyReco (awardName, awardDate, awardDec, CWID)
        VALUES ('$awardName', '$awardDate', '$awardDec', '$cwid')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully!";
} else {
    echo "Error inserting data: " . $conn->error;
}

$conn->close();
?>

