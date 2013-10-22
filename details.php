<?
$sec=$_GET['sec'];
include('widgets/header.php');
 $producto = R::load('producto', intVal($_GET['id']));
 $categoria = R::load('categoria',intVal($producto->categoria));
 $sec = $categoria->id;
 $secS = strtolower($categoria->nombre);
  $id = $_GET['id'];
?>
        <script>
            $(document).ready(function() {
                //jCarousel Plugin
                $('#carousel').jcarousel({
                        vertical: true, //orientation of the carousel, in this case we use vertical
                        scroll: 1, //the number of items to scroll by
                        auto: 2, //the interval of scrolling
                        wrap: 'last', //wrap at last item and jump back to the start
                        initCallback: mycarousel_initCallback	//we will use this to further enhance the behavior of this carousel
                });

            $('div#slideshow-carousel a img').css({'opacity': '0.5'});
   	
   	//readjust the first item to 50% opacity
   	$('div#slideshow-carousel a img:first').css({'opacity': '1.0'});
   	
   	//append the arrow to the first item
   	$('div#slideshow-carousel li a:first').append('')

 
  	//Add hover and click event to each of the item in the carousel
    $('div#slideshow-carousel li a').hover(
       	function () {
        	
        	//check to make sure the item is not selected
       		if (!$(this).has('span').length) {
       			//reset all the item's opacity to 50%
        		$('div#slideshow-carousel li a img').stop(true, true).css({'opacity': '0.5'});
        		
        		//adust the current selected item to full opacity
   	    		$(this).stop(true, true).children('img').css({'opacity': '1.0'});
       		}		
       	},
       	function () {
        		
        	//on mouse out, reset all the item back to 50% opacity
       		$('div#slideshow-carousel li a img').stop(true, true).css({'opacity': '0.5'});
       		
       		//reactivate the selected item by loop through them and look for the one
       		//that has the span arrow
       		$('div#slideshow-carousel li a').each(function () {
				//found the span and reset the opacity back to full opacity
       			if ($(this).has('span').length) $(this).children('img').css({'opacity': '1.0'});

       		});
        		
       	}
	).click(function () {

		//remove the span.arrow
	    $('span.arrow').remove();
	    
	    //append it to the current item        
		$(this).append('');
		
		//remove the active class from the slideshow main
		$('div#slideshow-main li').removeClass('active');
		
		//display the main image by appending active class to it.        
       	$('div#slideshow-main li.' + $(this).attr('rel')).addClass('active');	
        	
       	return false;
	});


});


//Carousel Tweaking
function mycarousel_initCallback(carousel) {
	
	// Pause autoscrolling if the user moves with the cursor over the clip.
	// resume otherwise
	carousel.clip.hover(function() {
		carousel.stopAuto();
	}, function() {
		carousel.startAuto();
	});
}
	
                </script>
                <style>
                    .span6.column{
                       width: 33%;
                        position:relative;
                    }
                    .row-fluid{
                        max-width: none;
                    }
                    .fotorama__wrap{
                        width: 100% !important;
                    }
                </style>
            </head>
          
        <div class="row-fluid clearfix">
            <div class="span6 column" style="width:45%;margin-top: 80px">
                 <div class="header detailsProd">
                    <h3 class="negroyazul"><?=utf8_decode($producto->nombre)?></h3>
                    <h4 class="right" onclick="document.location='<?=$secS?>.php'" style='cursor:pointer;'>< Volver</h4>
                </div>
                 <div id="welcomeHero">
		
                    <div id="slideshow-carousel">				
                              <ul id="carousel" class="jcarousel jcarousel-skin-tango">
                                  <?
                                    $fotos = R::find('fotos',' producto = ? ', array($producto->id));
                                    $k=0;
                                    foreach($fotos as $foto){
                                        echo '<li><a href="#" rel="p'.$k.'"><img src="media/uploads/'.$foto->foto.'" width="206" height="95" alt="#"/></a></li>';
                                        $k++;
                                    }
                                  ?>
                                   
                              </ul>
                    </div>
                     <div id="slideshow-main">
                            <ul>
                                <?
                                    $fotos = R::find('fotos',' producto = ? ', array($producto->id));
                                    $k=0;
                                    foreach($fotos as $foto){
                                        echo '  <li class="p'.$k.' '.(($k==0)?'active':'').'">
                                            <a href="#">
                                                    <img src="media/uploads/'.$foto->foto.'" width="430" height="290" alt=""/>
                                            </a>
                                    </li>';
                                        $k++;
                                    }
                                  ?>

                            </ul>										
                    </div>

                    <div class="clear"></div>

            </div>
                <!-- Define left and right buttons. -->
                

                <!-- Define elements to accept the alt and title text from the images. -->
              
             </div>
            <div class="span6 column" style="width:19%;margin-top: 80px;margin-left: -30px;
padding-top: 15px;
font-size: 1vw;">
                <div class="descripcion">
                    <div class="txt">
                        <p style="padding: 5px;">
                           <?= utf8_decode($producto->descripcion) ?>
                        </p>

                    </div>

                </div>
            </div>
                       <div class="vSeparator" style="height:450px;width:16px;"></div>
                <div class="span6 column" style="width: 30%;">
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
        
<? include('widgets/footer.php') ?>
