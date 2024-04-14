<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="5" >
    <link rel="stylesheet" type="text/css" href="style.css" media="screen"/>

	<title> Sensor Data </title>

</head>

<body>

    <h1>SENSOR DATA</h1>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "CloudDash";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, timestamp, flow_m1, flow_m2, diff_flow, valve_status FROM sensordata ORDER BY id DESC"; /*select items to display from the sensordata table in the data base*/

echo '<table cellspacing="5" cellpadding="5">
      <tr> 
        <th>ID</th> 
        <th>Time Stamp</th> 
        <th>Flow M1</thh> 
        <th>Flow M2</th> 
        <th>Variance in Flow</th> 
        <th>Valve Status</th>      
      </tr>';
 
if ($result = $conn->query($sql)) {
    while ($row = $result->fetch_assoc()) {
        $row_id = $row["id"];
        $row_timestamp = $row["timestamp"];
        $row_flow_m1 = $row["flow_m1"];
        $row_flow_m2 = $row["flow_m2"];
        $row_diff_flow = $row["diff_flow"];
        $row_valve_status = $row["valve_status"]; 
        
        // Uncomment to set timezone to - 1 hour (you can change 1 to any number)
       // $row_reading_time = date("Y-m-d H:i:s", strtotime("$row_reading_time - 1 hours"));
      
        // Uncomment to set timezone to + 4 hours (you can change 4 to any number)
        //$row_reading_time = date("Y-m-d H:i:s", strtotime("$row_reading_time + 4 hours"));
      
        echo '<tr> 
                <td>' . $row_id . '</td> 
                <td>' . $row_timestamp . '</td> 
                <td>' . $row_flow_m1 . '</td> 
                <td>' . $row_flow_m2 . '</td> 
                <td>' . $row_diff_flow . '</td> 
                <td>' . $row_valve_status . '</td>                
              </tr>';
    }
    $result->free();
}

$conn->close();
?> 
</table>

</body>
</html>

	</body>
</html>