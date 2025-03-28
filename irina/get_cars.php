<?php
include 'connect.php';

header('Content-Type: application/json');

$cars = [];

$sql = "SELECT * FROM voitures";
$result = $conn->query($sql);

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $cars[] = $row;
    }
    $result->free();
} else {
    echo json_encode(["error" => "Erreur SQL: " . $conn->error]);
    exit();
}

$conn->close();

echo json_encode($cars, JSON_UNESCAPED_UNICODE);
?>
