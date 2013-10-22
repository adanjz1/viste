<?
include 'widget/header.php';
$categoria = R::load('categoria',$_GET['cat']);
$productos = R::find('producto',' categoria = ?', array($_GET['cat']));
?>
                <!-- ."main-bar -->
                <div class="main-bar">
                    <div class="container-fluid">
                        <div class="row-fluid">
                            <div class="span12">
                                <h3><i class="icon-home"></i> <?=$categoria->nombre?></h3>
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
                    <div class="row-fluid">
                        <!-- .inner -->
                        <div class="row-fluid">
                                <!-- .span12 -->
                                <div class="span12">
                                    <div class="box">
                                        <header>
                                            <div class="icons"><i class="icon-edit"></i></div>
                                            <h5>Productos</h5>
                                            
                                        </header>
                                        <div id="actionTable" class="body collapse in">
                                            <button class="btn add" style="margin-bottom: 10px;"><i class="icon-add" style="background-position: -408px -96px;"></i> Agregar</button>
                                            <table class="table table-bordered responsive sortableTable">
                                                <thead>
                                                    <tr>
                                                        <th><i class="icon-sort"></i><i class="icon-sort-down"></i> <i class="icon-sort-up"></i>#</th>
                                                        <th><i class="icon-sort"></i><i class="icon-sort-down"></i> <i class="icon-sort-up"></i>Nombre</th>
                                                        <th><i class="icon-sort"></i><i class="icon-sort-down"></i> <i class="icon-sort-up"></i>Descripcion</th>
                                                        <th>Fotos</th>
                                                        <th>Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?
                                                    foreach($productos as $producto){
                                                        echo '<tr rel="'.$producto->id.'">
                                                        <td>'.$producto->id.'</td>
                                                        <td>'.$producto->nombre.'</td>
                                                        <td>'.substr($producto->descripcion,0,200).'</td>
                                                        <td>
                                                            <ul class="adminImages">';
                                                            $fotos = R::find('fotos',' producto = ? ', array($producto->id));
                                                            foreach($fotos as $foto){
                                                                echo '<li><img src="../media/uploads/'.$foto->foto.'"></li>';
                                                            }
                                                        echo '
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <button class="btn edit"><i class="icon-edit"></i></button>
                                                            <button class="btn btn-danger remove" data-toggle="confirmation"><i class="icon-remove"></i></button>
                                                        </td>
                                                        </tr>';
                                                    }
                                                ?>   
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <!-- /.span12 -->
                            </div>
                            
                                <script type="text/javascript" src="assets/js/lib/jquery.tablesorter.min.js"></script>
                                <script type="text/javascript" src="assets/js/lib/jquery.dataTables.min.js"></script>
                                <script type="text/javascript" src="assets/js/lib/DT_bootstrap.js"></script>
                                <script src="assets/js/lib/responsive-tables.js"></script>
                                <script type="text/javascript">
                                    $(function() {
                                        $('#actionTable button.remove').on('click', function() {
                                            $(this).closest('tr').remove();
                                            $.ajax({
                                                type: "POST",
                                                url: "delete.php",
                                                data: { product: $(this).closest('tr').attr('rel') }
                                              }).done(function( msg ) {
                                                
                                              });
                                          });
                                          $('#actionTable button.edit').on('click', function() {
                                             document.location='editProduct.php?id='+$(this).parent().parent().attr('rel')+'&cat=<?=$_GET['cat']?>';
                                          });
                                          $('button.add').on('click', function() {
                                             document.location='editProduct.php?cat=<?=$_GET['cat']?>';
                                          });
                                    });
                                </script>
                           
                            <!-- /.row-fluid -->
                            <!--END LATEST COMMENT-->
                        </div>
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