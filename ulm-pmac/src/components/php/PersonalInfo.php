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
$streetAdd1 = $data['Str1'];
$streetAdd2 = $data['Str2'];
$city = $data['City'];
$state = $data['State'];
$zip = $data['Zip'];
$cwid = 0;

// SQL query to insert data
$sql = "INSERT INTO applicantInfo (streetAdd1, streetAdd2, city, zipcode, state, CWID)
        VALUES ('$streetAdd1', '$streetAdd2', '$city', '$state', '$zip' ,$cwid)";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully!";
} else {
    echo "Error inserting data: " . $conn->error;
}

$conn->close();
?>

