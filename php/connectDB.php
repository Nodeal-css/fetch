<?php 
$localhost = "localhost";
$username = "root";
$password = "";
$dbname = "library";

function open(){
	global $localhost, $username, $password, $dbname;
	$conn = mysqli_connect($localhost, $username, $password, $dbname);
	if(!$conn){
		die("Connection failed " . mysqli_connect_error());
	}else{
		echo 'connected';
	}
	return $conn;
}

function close($conn){
	mysqli_close($conn);
}