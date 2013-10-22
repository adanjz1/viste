<?php
define("MAX_SIZE", "40000");

$errors = 0;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $image = $_FILES["file"]["name"];
    $uploadedfile = $_FILES['file']['tmp_name'];

    if ($image) {
        $filename = stripslashes($_FILES['file']['name']);
        $extension = getExtension($filename);
        $extension = strtolower($extension);
        if (($extension != "jpg") && ($extension != "jpeg") && ($extension != "png") && ($extension != "gif")) {
            echo ' Unknown Image extension ';
            $errors = 1;
        } else {
            $size = filesize($_FILES['file']['tmp_name']);

            if ($size > MAX_SIZE * 1024) {
                echo "You have exceeded the size limit";
                $errors = 1;
            }

            if ($extension == "jpg" || $extension == "jpeg") {
                $uploadedfile = $_FILES['file']['tmp_name'];
                $src = imagecreatefromjpeg($uploadedfile);
            } else if ($extension == "png") {
                $uploadedfile = $_FILES['file']['tmp_name'];
                $src = imagecreatefrompng($uploadedfile);
            } else {
                $src = imagecreatefromgif($uploadedfile);
            }

            list($width, $height) = getimagesize($uploadedfile);

            $newwidth = 300;
            $newheight = ($height / $width) * $newwidth;
            $tmp = imagecreatetruecolor($newwidth, $newheight);


            imagecopyresampled($tmp, $src, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);
            $sqlfileName = md5(rand()).'.'.$extension;
            $filename = '/media/uploads/' .$sqlfileName;
            imagejpeg($tmp, $filename, 100);
            imagedestroy($src);
            imagedestroy($tmp);
        }
    }
}
//If no errors registred, print the success message
include('../includes/boot.php');
if (!$errors) {
    $foto = R::dispense('fotos');
    $foto->foto =  $sqlfileName;
    $foto->producto = $_GET['id'];
    $fotoId = R::store($foto);
    echo '{"jsonrpc" : "2.0", "result" : success, "id" : '.$fotoId.'}';
} 

function getExtension($str) {

    $i = strrpos($str, ".");
    if (!$i) {
        return "";
    }
    $l = strlen($str) - $i;
    $ext = substr($str, $i + 1, $l);
    return $ext;
}
?>
