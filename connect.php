<?php
    $db_host ='localhost';
    $db_user ='root';
    $db_password = 'root';
    $db_db = 'user';

    $mysqli = @new mysqli(
        $db_host,
        $db_user,
        $db_password,
        $db_db
    );
    
    if ($mysqli->connect_error){
        echo 'Errno:'.$mysqli->connect_errno ;
        echo '<br>';
        echo 'Error :' .$mysqli->connect_error;
        exit();
    }

    $var = 'Vous êtes connéctes';
    echo 'Vous êtes connéctes';
    echo '<br>';
    echo 'Host information : ' .$mysqli->host_info;
    echo '<br>';
    echo 'Protocol version :' .$mysqli->protocol_version ;

    $mysqli->close();
?>