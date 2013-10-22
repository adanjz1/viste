<?php
$con=mysqli_connect('190.228.29.63','userjomvispo',"magico",'jomvispo');
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

// Create table
$sql="
CREATE TABLE categoria (
  id int(11) NOT NULL,
  nombre varchar(200) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS fotos (
  id int(11) NOT NULL AUTO_INCREMENT,
  producto int(11) NOT NULL,
  foto varchar(200) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS producto (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(200) NOT NULL,
  descripcion text NOT NULL,
  categoria int(11) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
  id int(11) NOT NULL AUTO_INCREMENT,
  user varchar(200) NOT NULL,
  pass varchar(200) NOT NULL,
  PRIMARY KEY (id)
);

";

// Execute query
if (mysqli_query($con,$sql))
  {
  echo "Table persons created successfully";
  }
else
  {
  echo "Error creating table: " . mysqli_error($con);
  }
?>
