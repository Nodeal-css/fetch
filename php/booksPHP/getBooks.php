<?php 
include '../connectDB.php';

$conn = open();
$sql = "SELECT `book_id`, `title`, `author`, `genre`, `quantity`, `price` FROM `book`";
$result = mysqli_query($conn, $sql);
$arr = [];
if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $arr[] = $row;
    }
}
echo json_encode($arr);
mysqli_close($conn);
?>