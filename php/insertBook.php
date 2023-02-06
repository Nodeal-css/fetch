<?php
include 'connectDB.php';

$input = file_get_contents("php://input");
$decode = json_decode($input, true);

$title = $decode["title"];
$author = $decode["author"];
$genre = $decode["genre"];
$quantity = $decode["quantity"];
$price = $decode["price"];

$sql = "INSERT INTO `book`(`title`, `author`, `genre`, `quantity`, `price`) VALUES ('$title','$author','$genre', $quantity, $price)";
$con = open();
$result = mysqli_query($con, $sql);
if($result){
	$arr = array('success'=>true,'message'=>'book has been added');
	echo( json_encode($arr));
}else{
	echo json_encode(['success', false, 'message', 'book not added']);
}
mysqli_close($con);
?>