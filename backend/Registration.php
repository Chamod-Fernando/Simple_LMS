<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");

include('conn.php');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// var_dump($data);
$name = $data['name'];
$nic = $data['nic'];
$password = $data['password'];
$email =$data['email'];
$number = $data['number'];
$jobrole =$data['jobrole'];
$address =$data['address'];
$district =$data['district'];
$city =$data['city'];

$sql = "INSERT INTO register (name, nic, email, number, jobrole, password, address, district, city) VALUES ('$name','$nic','$email','$number',$jobrole,'$password','$address','$district'.'city')";


if ($mysqli->query($sql) == true) {
    echo "succssesful";
  } else {
    echo "Error: " ;
  }
// echo $sql;

$mysqli->close();

?>