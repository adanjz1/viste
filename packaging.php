<?
$sec = 'packaging';
include('widgets/header.php');
$productos = R::find('producto',' categoria = ? ', array(1));
?>
        <script>
            $(document).ready(function() {
                $("#carousel1").CloudCarousel(		
		{			
			xPos: 128,
			yPos: 32,
                        height:340,
                        xRadius:($('#carousel1').width()/2),
			buttonLeft: $("#left-but"),
			buttonRight: $("#right-but"),
			altBox: $("#alt-text"),
			titleBox: $("#title-text")
		});
                $("#carousel1").touchwipe({
                    wipeLeft: function() { $("#left-but").click() },
                    wipeRight: function() { $("#right-but").click() },
                    min_move_x: 20,
                    min_move_y: 20,
                    preventDefaultEvents: true
               });
                 var t=setTimeout(Opac,100)
            });
            function Opac(){
                var maxElem = $(".cloudcarousel").first();
                
                $(".cloudcarousel").each(function() { 
                    if(parseInt(maxElem.css('top')) < parseInt($(this).css('top'))){
                        maxElem = $(this)
                   }
                    $(this).css('opacity','0.3');
                   
               });
               maxElem.css('opacity','1');
               $('.tituloArt').html(maxElem.attr('title'));
               var t=setTimeout(Opac,200)
            }
                </script>
                <style>
                    .span6.column{
                        width: 32%;
                        position:relative;
                    }
                    .row-fluid{
                        max-width: none;
                    }
                </style>
            </head>
           
        <div class="row-fluid clearfix">
            <div class="span6 column" style="width:55%;height: 450px;">
                <div class="tituloArt negroyazul"></div>
                <div id = "carousel1" style="width:256px; height:128px;background:#000;overflow:scroll;">            
                    <!-- All images with class of "cloudcarousel" will be turned into carousel items -->
                    <!-- You can place links around these images -->
                    <?
                        foreach($productos as $producto){
                            $fotos = R::find('fotos',' producto = ? ', array($producto->id));
                            foreach($fotos as $foto){
                                $fotoPrinc = $foto->foto;
                                break;
                            }
                            echo '<img class = "cloudcarousel" src="media/uploads/'.$fotoPrinc.'" title="'.utf8_decode($producto->nombre).'" onclick="document.location=\'details.php?id='.$producto->id.'&sec=packaging\'" />';
                        }
                    ?>
                </div>

                <!-- Define left and right buttons. -->
                <div class="left-but" id="left-but"><</div>
                <div class="right-but" id="right-but">></div>
                

                <!-- Define elements to accept the alt and title text from the images. -->
                </div>
                       <div class="vSeparator" style="height:450px;width:16px;"></div>
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
                        <textarea name="consulta" id='consulta' style="height:110px !important;"></textarea>
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
            <?
            $hideBrands = true;
            ?>
            
            <ul id="mycarousel" class="jcarousel-skin-tango">
                <li><img src="media/img/lacoste.png"/></li>
                <li><img src="media/img/pioneer.png"/></li>
                <li><img src="media/img/bgh.png"/></li>
                <li><img src="media/img/pfizer.png"/></li>
                <li><img src="media/img/bghQC.png"/></li>
                <li><img src="media/img/pilim.png"/></li>
                <li><img src="media/img/tnPlatex.png"/></li>
                <li><img src="media/img/cerotres.png"/></li>
                <li><img src="media/img/lab.png"/></li>
                <li><img src="media/img/yeppo.png"/></li>
                <li><img src="media/img/lemon.png"/></li>
                <li><img src="media/img/love.png"/></li>
                <li><img src="media/img/broom.png"/></li>
                <li><img src="media/img/brunette.png"/></li>
                <li><img src="media/img/centella.png"/></li>
                <li><img src="media/img/cheito.png"/></li>
                <li><img src="media/img/om.png"/></li>
                <li><img src="media/img/arrugadedos.png"/></li>
                <li><img src="media/img/silent.png"/></li>
                <li><img src="media/img/sinfin.png"/></li>
                <li><img src="media/img/tmm.png"/></li>
                <li><img src="media/img/lenceria.png"/></li>
                <li><img src="media/img/matooka.png"/></li>
                <li><img src="media/img/euro.png"/></li>
                <li><img src="media/img/trapito.png"/></li>
                <li><img src="media/img/amas.png"/></li>
                <li><img src="media/img/ks.png"/></li>
                <li><img src="media/img/tidabit.png"/></li>
            </ul>
            <div class="bottmLaser" style="width:100%;">
                <h3 class="negroyazul" style="text-align:center;">Packaging y envoltorios de PVC</h3>
                <div class="descripcion" style="background:none;margin:auto;width: 63%;">
                    <div class="txt">
                        <p>
                            <b>Viste Design Packaging</b> es parte de la familia de Viste Design.  En nuestro departamento nos dedicamos principalmente al desarrollo de packaging de PVC para todo tipo de productos.<br/>

        En un mercado tan competitivo y saturado de productos como el de hoy en d&iacute;a, la presentaci&oacute;n y la imagen pueden hacer la diferencia entre un &eacute;xito comercial y un fracaso.Todos nuestros empaques de PVC poseen un gran impacto visual.<br/>

        En Viste Design Packaging desarrollamos packs para cada tipo de producto, nos adecuamos a cada requerimiento especifico y podemos ofrecer una gran variedad de dise&ntilde;os y propuestas que se adecuen a los distintos mercados.<br/>
        Poseemos productos standard se comercializan a partir de 1000 unidades y realizamos producciones especiales a partir de 3000.
                        </p>

                    </div>
            </div>
        </div>
<? include('widgets/footer.php') ?>