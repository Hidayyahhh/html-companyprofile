<?php
$conn=mysqli_connect("localhost","root","","tugasuas");

if (mysqli_connect_errno()){
	echo "Koneksi database gagal : " . mysqli_connect_error();
}
function query($query){
	global $conn;
	$result = mysqli_query ($conn, $query);
	$rows = [];
	while ( $row = mysqli_fetch_assoc($result) ) {
		$rows[] = $row;
	}
	return $rows;
}



function tambah(){
    global $conn;
    $nama = trim($_POST['username']);
    $email = trim($_POST['email']);
    $pass = trim($_POST['password']);

    // Hash password sebelum menyimpannya di database
    $pass_hash = password_hash($pass, PASSWORD_DEFAULT);

    // Masukkan data ke database
    mysqli_query($conn, "INSERT INTO user (username, email, password) VALUES ('$nama', '$email', '$pass_hash')");

    // Redirect ke halaman login
    header("Location: index.php");
}


 

 
?>