<?
    include('includes/boot.php')
?>
<html>

<head>
    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
    <link href="media/css/styles.css?r=rand" rel="stylesheet">
    <link href="media/css/jcarousel.css" rel="stylesheet">
    <link href="media/css/galleriffic-1.css" rel="stylesheet">
    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
    <script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
    <script src="media/js/jcarousel.js"></script>
    <script src="media/js/jquery.slides.min.js"></script>
    <script type="text/JavaScript" src="media/js/carousel.js"></script>
    <script type="text/JavaScript" src="media/js/swipe.js"></script>
        
    <!-- SlidesJS Required (if responsive): Sets the page width to the device width. -->
    <meta name="viewport" content="width=device-width">
    <!-- End SlidesJS Required -->

    <title>VisteDesign</title>
    <!-- SlidesJS Required: -->
    <script>
        $(document).ready(function() {
             $('#mycarousel').jcarousel({
                wrap: 'circular',
                auto: 2
            });
//            setInterval(doLayout, 500)
//            function doLayout(){
////            $('.log').html(($('.footer').position().top+70)+'----'+$('body').height()+'----'+$('#clearado').position().top)
//console.log(($('.footer').position().top+10) + '= '+$('body').height())
//            if(($('.footer').position().top+10) < $('body').height()){ 
//                    $('.footer').css('position','absolute');
//                    $('.footer').css('bottom',0);
//                    //$('.footer').css('height','70px');
//                    $('.footer').css('width','100%');
//                }else if(($('.footer').position().top+200) > $('body').height()){
//                    $('.footer').css('position','relative');
//                }
//                if(($('.footer').position().top+200) < $('#clearado').position().top ){
//                     $('.footer').css('position','relative');
//                }
//            }
        });


            </script>
        </head>
        <body>
           
            <div class="navbar">
                <div class="navbar-inner">
                    <div class="container-fluid">
                        <a href="index.php" class="brand" style="z-index: 0;"><img src="media/img/logo.png"/></a>
                        <a data-target=".navbar-responsive-collapse" data-toggle="collapse" class="btn btn-navbar collapsed" style="color: #000;position: absolute;z-index: 999999;">
                            Menu
                        </a>
                        
                        <?= ($sec =='home')?'<img src="media/img/flecha.png" class="logoImg active">':'' ?>
                        <div class="nav-collapse navbar-responsive-collapse collapse" style="height: 0;background-color: #333;">
                            <ul class="nav pull-right">
                                <li class=" <?= ($sec =='about')?'active':'' ?>"><p style="text-align: center;
position: absolute;
width: inherit;
left: -5px;
font-size: 15pt;
color: #ccc;
margin: auto !important;
top: -30px;">Tel: <b>4713.6854</b></p><a href="about.php">QUIENES SOMOS</a></li>
                                <?= ($sec =='about')?'<img src="media/img/flecha.png" class="logoImg active about">':'' ?>
                                <li class=" <?= ($sec =='laser')?'active':'' ?>"><a href="laser.php">LASER</a></li>
                                <?= ($sec =='laser')?'<img src="media/img/flecha.png" class="logoImg active laser">':'' ?>
                                <li class=" <?= ($sec =='packaging')?'active':'' ?>"><a href="packaging.php">PACKAGING</a></li>
                                <?= ($sec =='packaging')?'<img src="media/img/flecha.png" class="logoImg active packaging">':'' ?>
                                <li class=" <?= ($sec =='pop')?'active':'' ?>"><a href="pop.php">POP</a></li>
                                <?= ($sec =='pop')?'<img src="media/img/flecha.png" class="logoImg active pop">':'' ?>
                                <li class=" <?= ($sec =='contacto')?'active':'' ?>"><a href="contacto.php">CONTACTO</a></li>
                                <?= ($sec =='contacto')?'<img src="media/img/flecha.png" class="logoImg active contacto">':'' ?>
                            </ul>
                        </div><!-- /.nav-collapse -->
                    </div>
                </div><!-- /navbar-inner -->
            </div>
            <div class='body' style=''>