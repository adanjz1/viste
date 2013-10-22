<?php
$sec = 'packaging';
include('widgets/header.php');

$destinatario = "adanzweig@gmail.com, info@vistedesign.com.ar, tomas@vistedesign.com.ar, daniel@darriens.com";
$asunto = "Consulta desde la web - Packaging"; 
$cuerpo = ' 

Nombre: '.$_POST['nombre'].'
Email: '.$_POST['mail'].'
Telefono: '.$_POST['telefono'].'
Empresa: '.$_POST['empresa'].'
Mensaje:
'.$_POST['consulta'].'
 
'; 

//Envío en formato HTML 
$headers = 
    'X-Mailer: PHP/' . phpversion(); 



mail($destinatario,$asunto,$cuerpo,$headers);

?>
<div class="volver" style="margin-left: 10%;
font-size: 15pt;
cursor: pointer;" onclick='window.history.back()'>< Volver</div>
<div class='gracias'>
    Muchas gracias por contactarnos, en breve recibir&aacute; nuestra respuesta.
</div>
<div class='gracias'>
    Muchas gracias por contactarnos, en breve recibir&aacute; nuestra respuesta.
</div>
<!-- Google Code for Viste Design Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 973264605;
var google_conversion_language = "en";
var google_conversion_format = "2";
var google_conversion_color = "ffffff";
var google_conversion_label = "y_oICIPF_wYQ3a2L0AM";
var google_conversion_value = 0;
var google_remarketing_only = false;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/973264605/?value=0&amp;label=y_oICIPF_wYQ3a2L0AM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>


<script type="text/javascript">
var fb_param = {};
fb_param.pixel_id = '6008658564332';
fb_param.value = '0.00';
fb_param.currency = 'USD';
(function(){
  var fpw = document.createElement('script');
  fpw.async = true;
  fpw.src = '//connect.facebook.net/en_US/fp.js';
  var ref = document.getElementsByTagName('script')[0];
  ref.parentNode.insertBefore(fpw, ref);
})();
</script>
<noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/offsite_event.php?id=6008658564332&amp;value=0&amp;currency=USD" /></noscript>

<?php
include('widgets/footer.php')
?>
