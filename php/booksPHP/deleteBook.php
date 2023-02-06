<?php 
include '../connectDB.php';

$input = file_get_contents("php://input");
$decode = json_decode($input, true);

$id = $decode['id'];

$conn = open();
$sql = "DELETE FROM `book` WHERE `book_id` = $id";
$result = mysqli_query($conn, $sql);
if($result){
    echo json_encode(["success"=>true, "message"=>"Book has been deleted"]);
}else{
    echo json_encode(["success"=>false, "message"=>"Book has not been deleted"]);
}

mysqli_close($conn);
?>