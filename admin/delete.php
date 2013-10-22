<?php
include 'widget/header.php';
$prod = R::load('producto', $_REQUEST['product']);
R::trash( $prod );
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
