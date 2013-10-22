<!DOCTYPE HTML>
<html>

    <head>
        
        <meta charset="utf-8">
        <title>BLADES - 3D</title>
        <meta name="viewport" id="view" content="width=device-width, minimum-scale=1, maximum-scale=1" />
        
        <style type="text/css">
			
			.blades-3d {
			
				margin: 20px 0 0 30px;
				
			}

		</style>
        
        <!-- BEGIN BLADES-3D CSS -->
        <link rel="stylesheet" type="text/css" href="media/css/font-awesome-custom.css" />
        <link rel="stylesheet" type="text/css" href="media/css/blades-3d.css" />
        <!-- ENDS BLADES-3D CSS -->
        
        <!-- BEGIN BLADES-3D SCRIPTS -->
        <script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/webfont/1.0.31/webfont.js'></script>
        <script type="text/javascript" src="media/js/jquick.js"></script>
        <script type="text/javascript" src="media/js/jquick.transform.js"></script>
        <script type="text/javascript" src="media/js/blades-3d.js"></script>
        
        <script type="text/javascript">
			
			jQuick(document).ready(function() {
        		
				// This function accepts settings, see help document for an example and more information
				jQuick('.blades-3d').blades();
				
			// The Google Font is preloaded, see help document for more information
			}, ['Yanone+Kaffeesatz::latin']);
		
		</script>
        <!-- END BLADES-3D SCRIPTS -->
        
    </head>
    
    <body>       
       
        <!-- BEGIN BLADES-3D HTML -->        
        <div class="blades-3d"
             data-width="700" 
             data-height="300" 
             data-cols="7" 
             data-rows="3" 
             data-spacing="10" 
             data-use-retina="true" 
             data-responsive="true" 
             data-randomize="false" 
             data-autoplay="false" 
             data-autoplay-delay="4000" 
             data-transition-3d="true" 
             data-transition-type="mixed" 
             data-transition-all-delay="75" 
             data-transition-cols-delay="100" 
             data-transition-rows-delay="250"
             data-scaled-hides-captions="false">
            
            <!-- BEGIN SLIDE -->
            <!-- 
                data-img = The url to your regular sized image 
                data-retina = The url to your retina sized image
            -->
            <div class="blades-slide" data-img="media/img/banner1.jpg" data-retina="media/img/banner1.jpg">
                
                <!-- Delete slogans if you do not wish to use -->  
                <!-- Any number of slogans are supported but only two usually fit on small mobile screens -->
                <!--
                    data-x = The left or right position depending on the alignment
                    data-y = The top position
                    data-align = Options are "left" or "right"
                    data-color = The slogan's text color
                    data-background = The slogan's background color
                -->
                <span data-x="30" data-y="30" data-align="left" data-color="#000" data-background="#FFF">BLADES-3d by CodingJack</span>
                <span data-x="30" data-y="85" data-align="left" data-color="#FFF" data-background="#000">Responsive & Retina Ready</span>
            
            </div>
            <!-- END SLIDE -->
            
            <div class="blades-slide" data-img="media/img/banner2.png" data-retina="media/img/banner2.png">
            
                <span data-x="166" data-y="134" data-align="left" data-color="#FFF" data-background="#000">Randomize Slide Order</span>
                <span data-x="356" data-y="134" data-align="left" data-color="#000" data-background="#FFF">With Autoplay & More</span>
            
            </div>
            
            <div class="blades-slide" data-img="media/img/banner3.jpg" data-retina="media/img/banner3.jpg">
            
                <span data-x="30" data-y="30" data-align="right" data-color="#000" data-background="#FFF">Six Flip Variations</span>
                <span data-x="30" data-y="85" data-align="right" data-color="#FFF" data-background="#000">Choose One or Mix Them All</span>
            
            </div>
            
            <div class="blades-slide" data-img="media/img/banner4.png" data-retina="media/img/banner4.png">
            
                <span data-x="15" data-y="15" data-align="right" data-color="#FFF" data-background="#000">iPhone, iPad, Android</span>
                <span data-x="195" data-y="15" data-align="right" data-color="#000" data-background="#FFF">Firefox, Webkit & IE10</span>
            
            </div>
            
            <div class="blades-slide" data-img="media/img/banner5.jpg" data-retina="media/img/banner5.jpg">
                
                <!-- multiple lines, hyperlink example -->
                <span data-x="20" data-y="20" data-align="left" data-color="#000" data-background="#FFF">Slogans support multiple<br /> lines and <a href="http://codecanyon.net/user/CodingJack" target="_blank">hyperlinks</a>.</span>
            
            </div>
            
            <!-- The left/right buttons, delete entirely if you do not wish to use -->
            <div class="blades-controls">
            
                <span class="blades-btn blades-btn-left"><i class="icon-chevron-left"></i></span>
                <span class="blades-btn blades-btn-right"><i class="icon-chevron-right"></i></span>
                
            </div>
        
        </div>
        <!-- END BLADES-3D HTML -->

    </body>
    
</html>