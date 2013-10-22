<?php
session_start();
require_once("../../includes/boot.php");
$rand = md5(rand(0,500)).'_';
$uploaddir = '../../media/uploads/'.$rand; 
$nam=$_FILES['uploadfile']['name'];
$file = $uploaddir .basename($_FILES['uploadfile']['name']); 
$fileNameSql = $rand.basename($_FILES['uploadfile']['name']);
if(isset($_SESSION["session_temp"]))
{
	if (move_uploaded_file($_FILES['uploadfile']['tmp_name'], $file)) 
	{ 
		$fotos = R::dispense('fotos');
                $fotos->producto = $_GET['id'];
                $fotos->foto = $fileNameSql;
                $idFotos = R::store($fotos);
  		echo $fileNameSql; 
	}
	else 
	{
		echo "error";
	}
}
else
{
	$dmyhis=date('YmdHis');
	$_SESSION["session_temp"] = $dmyhis;
	if (move_uploaded_file($_FILES['uploadfile']['tmp_name'], $file)) 
	{ 
		$fotos = R::dispense('fotos');
                $fotos->producto = $_GET['id'];
                $fotos->foto = $fileNameSql;
                $idFotos = R::store($fotos);
  		echo $fileNameSql; 
	}
	else 
	{
		echo "error";
	}	
}


?>