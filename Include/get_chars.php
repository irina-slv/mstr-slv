<?php
include 'connect.php';

$sql = "SELECT * FROM cars";
$result = $conn->query($sql);

$cars = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $cars[] = $row;
    }
}

echo json_encode($cars);
$conn->close();
?>
