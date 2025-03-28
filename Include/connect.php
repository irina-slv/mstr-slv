<?php
$db_host = 'localhost';
$db_user = 'root';
$db_password = 'root';
$db_db = 'user';

$conn = new mysqli($db_host, $db_user, $db_password, $db_db);

if ($conn->connect_error) {
    die("Échec de connexion : " . $conn->connect_error);
}


?>
