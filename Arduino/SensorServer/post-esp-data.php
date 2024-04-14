<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "CloudDash";

/*$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);*/

$api_key_value = "tPmAT5Ab3j7F9";

$api_key = $flow_m1 = $flow_m2 = $diff = $valve = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $api_key = test_input($_POST["api_key"]);
    if($api_key == $api_key_value) {
        $flow_m1 = test_input($_POST["flow_m1"]);
        $flow_m2 = test_input($_POST["flow_m2"]);
        $diff = test_input($_POST["diff"]);
        $valve = test_input($_POST["valve_status"]);
        
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 
        
        $sql = "INSERT INTO SensorData (flow_m1, flow_m2, diff, valve_status)
        VALUES ('" . $flow_m1 . "', '" . $flow_m2 . "', '" . $diff . "', '" . $valve . "')";
        
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    
        $conn->close();
    }
    else {
        echo "Wrong API Key provided.";
    }

}
else {
    echo "No data posted with HTTP POST.";
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}