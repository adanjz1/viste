<?
$sec = 'about';
include('widgets/header.php') ?>
                <style>
                    .span6.column{
                        width: 33%;
                        position:relative;
                    }
                    .row-fluid{
                        max-width: none;
                    }
                </style>
            </head>
           
        <div class="row-fluid clearfix">
            <div class="span6 column texto" style="width:55%">
                
                <p style="font-size: 10pt;
                  line-height: 11pt;">
                    <h3 style="margin-bottom:0px;">Quienes somos</h3><br/>

                    <span class="negroyazul">Viste Design</span> es una empresa lider en la soluci&oacute;n integral de todo tipo de proyectos de exhibici&oacute;n, Packaging y demas proyectos publicitarios o POP.<br/>

Con miles de productos exhibidos actualmente en diferentes puntos de venta del pa&iacute;s, <span class="negroyazul">Viste Design</span> se ha convertido en un referente en el rubro.<br/>

Contamos con planta de producci&oacute;n propia lo que nos permite cumplir siempre en tiempo y forma con todos nuestros proyectos.<br/>

<h4>Misi&oacute;n:</h4>

Todos los proyectos de <span class="negroyazul">Viste Design</span> resaltan por el compromiso con la excelencia, la innovaci&oacute;n, la calidad, cumplimiento de objetivos sin excederse en los presupuestos provistos. Nunca se entrega un proyecto o producto que no cumpla con nuestros estandares y los del cliente.<br/>

<h4>Visi&oacute;n:</h4>

Trabajamos con la filosof&iacute;a del win-win, ganar - ganar. En nuestra visi&oacute;n todos nuestros 

clientes act&uacute;an como socios comerciales y siempre brindamos nuestro consejo, experiencia 

y tiempo para que no solo los proyectos realizados lleguen al objetivo deseado, sino que 

tambi&eacute;n nos preocupamos por que la empresa se revalorize al m&aacute;ximo posible.

Todos nuestros proyectos son de fabricaci&oacute;n 100% nacional en nuestra planta de San 

Mart&iacute;n.<br/>

<h4>Valores:</h4>

Innovaci&oacute;n<br/>

Compromiso con el trabajo<br/>

Compromiso con los tiempos<br/>

Calidad <br/>

Integridad
                </p>
             </div>
                       <div class="vSeparator" ></div>
                <div class="span6 column">
        <div class="box box-element" style="display: block;">

            <div class="view">
                <form action='gracias_<?= $sec ?>.php' id="form" method='post'>
                    <fieldset class="aboutForm">
                        <h3>Envianos tu consulta</h3>
                        <label>Nombre y Apellido</label>
                        <input type="text" name="nombre" id="nombre">

                        <label>E-mail</label>
                        <input type="text"  name="mail"  id="mail">
                        
                        <label>Tel&eacute;fono</label>
                        <input type="text"  name="telefono" id="telefono">

                        <label>Empresa</label>
                        <input type="text" name="empresa" id="empresa">

                        <label>Consulta</label>
                        <textarea name="consulta" id="consulta"></textarea>
                        <br/>
                        <button onclick="validate()" class="btn" >Submit</button>
                    </fieldset>
                </form>
                <script>
                     function validate(){
                        var valido = true;
                        if($('#nombre').val() == ''){
                            alert('Debe ingresar su nombre');
                            valido = false;
                        }else if($('#mail').val() == ''){
                            alert('Debe ingresar su email');
                            valido = false;
                        }else if($('#telefono').val() == ''){
                            alert('Debe ingresar su telefono');
                            valido = false;
                        }else if($('#consulta').val() == ''){
                            alert('Debe ingresar su consulta');
                            valido = false;
                        }
                        if(valido){
                            $('#form').submit();
                        }
                    }
                </script>
            </div>
        </div>
    </div>
        </div>
<? include('widgets/footer.php') ?>