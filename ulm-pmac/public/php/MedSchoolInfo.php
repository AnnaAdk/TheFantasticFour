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
$type = $data['SchoolType'];
$activity = $data['ExamScores'];
$date = $data['ExamDate'];
$cwid = 0;


// SQL query to insert data
$sql = "INSERT INTO applicantEventInfo (typeOfExam, descriptionOfExam, dateTaken, CWID,)
        VALUES ('$type', '$activity', '$date', $cwid)";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully!";
} else {
    echo "Error inserting data: " . $conn->error;
}

$conn->close();
?>

