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
$fac1 = $data['FacultyNameOne'];
$dep1 = $data['FacultyDepOne'];
$fac1 = $data['FacultyNameTwo'];
$dep1 = $data['FacultyDepTwp'];
$title1 = $data['FacultyTitleOne'];
$title2 = $data['FacultyTitleTwo'];
$cwid = 0;

// SQL query to insert data
$sql = "INSERT INTO applicantFacultyReco (faculty1, dep1, faculty2, dep2, CWID, title, title2)
        VALUES ('$fac1', '$dep1', '$fac2', $dep2, '$cwid', '$title1', '$title2')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully!";
} else {
    echo "Error inserting data: " . $conn->error;
}

$conn->close();
?>

