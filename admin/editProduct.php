<?
include 'widget/header.php';
if(!empty($_POST['nombre']) && !empty($_POST['descripcion']) && !empty($_POST['cat'])){
    $producto = R::load('producto',intVal($_POST['id']));
    $producto->nombre = $_POST['nombre'];
    $producto->descripcion = $_POST['descripcion'];
    $producto->categoria = $_POST['cat'];
    $producto->id = $_POST['id'];
    $id = R::store($producto);
    echo '<script>
        document.location = \'tablePack.php?cat='.$_POST['cat'].'\'
    </script>';
}
if (empty($_GET['id'])) {
    $productos = R::dispense('producto');
    $id = R::store($productos);
} else {
    $productos = R::load('producto', intVal($_GET['id']));
    $id = $_GET['id'];
}
?>
<link type="text/css" rel="stylesheet" href="assets/plupload/js/jquery.plupload.queue/css/jquery.plupload.queue.css"/>
<!-- ."main-bar -->
<div class="main-bar">
    <div class="container-fluid">
        <div class="row-fluid">
            <div class="span12">
                <h3><i class="icon-home"></i> <?= (empty($productos) ? 'Nuevo' : 'Editar') ?></h3>
            </div>
        </div>
        <!-- /.row-fluid -->
    </div>
    <!-- /.container-fluid -->
</div>
<!-- /.main-bar -->
</header>
<!-- END HEADER.head -->

<!-- BEGIN LEFT  -->

<!-- END LEFT -->

<!-- BEGIN MAIN CONTENT -->
<div id="content">
    <!-- .outer -->
    <div class="container-fluid outer">

        <!-- .inner -->
        <div class="row-fluid">
            <div class="span12">
                <script type="text/javascript" src="up/js/ajaxupload.3.5.js" ></script>
                <script language="javascript" type="text/javascript">
                    $(function()
                    {
                        var btnUpload = $('#upload');
                        var status = $('#status');
                        new AjaxUpload(btnUpload, {
                            action: 'up/upload-file.php?id=<?=$id?>',
                            name: 'uploadfile',
                            onSubmit: function(file, ext)
                            {
                                if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))) {
                                    // extension is not allowed 
                                    status.text('Only JPG, PNG or GIF files are allowed');
                                    return false;
                                }
                                status.text('Uploading...');
                            },
                            onComplete: function(file, response)
                            {
                                //On completion clear the status
                                status.text('');
                                //Add uploaded file to list
                                var bb = response
                                var idd = response.replace('success', ' ');
                                var idb = idd.replace(/^\s*|\s*$/g, '');
                                if (bb != '')
                                {
                                    $('<span></span>').appendTo('#files').html('<img src="/media/uploads/' + bb + '" alt="" width="120" height="120" style="margin:5px;" />').addClass('success');
                                }
                                else
                                {
                                    $('<span></span>').appendTo('#files').text(file).addClass('error');
                                }
                            }});
                    });

                </script>
                <style type="text/css">
                    #upload{
                       -moz-border-radius: 5px 5px 5px 5px;
                        background-color: #ccc;
                        border: 1px solid;
                        color: #FFFFFF;
                        cursor: pointer !important;
                        font-family: Arial,Helvetica,sans-serif;
                        font-size: 1em;
                        font-weight: bold;
                        margin: 10px 0;
                        padding: 5px;
                        text-align: center;
                        width: 96px;
                        height: 20px;

                    }
                    #upload1{
                        -moz-border-radius:5px 5px 5px 5px;
                        background:none repeat scroll 0 0 #000000;
                        color:#FFFFFF;
                        cursor:pointer !important;
                        font-family:Arial,Helvetica,sans-serif;
                        font-size:1.3em;
                        font-weight:bold;
                        margin:10px 0;
                        padding:5px;
                        text-align:center;
                        width:98px;
                    }
                    .darkbg{
                        background:#ddd !important;
                    }
                    #status{
                        font-family:Arial; padding:5px;
                    }


                    .error{ background:#f0c6c3; border:1px solid #cc6622; }
                    .baltr{background-image:url(../images/head_bg.png); color:#FFFFFF}
                    .baltd1{ background-color:#e9e5e5}
                    .baltd2{ background-color:#f4f1f1}

                    #files span{float:left;}

                </style>
                
                    <?php if (isset($_SESSION["sess_msg"]) && $_SESSION["sess_msg"] != "") { ?>
                                <?php echo $_SESSION["sess_msg"];
                                $_SESSION["sess_msg"] = ""; ?>
                        <?php
                    }
                    ?>
                <div class="box">
                        <header>
                            <div class="icons"><i class="icon-check"></i></div>
                            <h5>Edit or add</h5>
                        </header>
                        <div class="block">
                    <form method="post" enctype="multipart/form-data" action="" class="form-horizontal">
                      <input type="hidden" name="id" value="<?= $id ?>"/>
                      <input type="hidden" name="cat" value="<?= $_GET['cat'] ?>"/>
                        <div class="control-group">
                            <label for="text1" class="control-label">Nombre</label>

                            <div class="controls with-tooltip">
                                <input type="text" id="text1" name="nombre" class="span6 input-tooltip" value="<?= (!empty($productos->nombre))?$productos->nombre:'' ?>"
                                       data-original-title="Please use your name" data-placement="bottom"/>
                            </div>
                        </div>  
                      <div class="control-group">
                            <label for="text1" class="control-label">Descripcion</label>

                            <div class="controls with-tooltip">
                                <textarea class="span6" id="limiter" name="descripcion"><?= (!empty($productos->descripcion))?$productos->descripcion:'' ?></textarea>
                            </div>
                        </div>  
                      <div class="control-group">
                            <label for="text1" class="control-label">Fotos</label>

                            <div class="controls with-tooltip">
                                <div id="upload" ><span>Upload Image<span></div><span id="status"></span>
                                <div id="files">
                                    <?
                                    $fotos = R::find('fotos',' producto = ? ', array($productos->id));
                                    foreach($fotos as $foto){
                                        echo '<span class="success"><img src="../media/uploads/'.$foto->foto.'" alt="" width="120" height="120" style="margin:5px;"></span>';
                                    }
                                    
                                    ?>
                                </div>
                            </div>
                        </div>  
                      <div class="control-group">
                            <div class="controls with-tooltip">
                                   <input type="submit" value="subir"/>    
                            </div>
                        </div>  
                     
                                         
                                         
                                            
                                            
                    </div>
                                            </div>

                                            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
                                          
                                            <!-- /.row-fluid -->
                                            <!--END LATEST COMMENT-->

                                            <!-- /.inner -->
                                            </div>
                                            <!-- /.row-fluid -->
                                            </div>
                                            <!-- /.outer -->
                                            </div>
                                            <!-- END CONTENT -->


                                            <?
                                            include('widget/footer.php');
                                            ?>