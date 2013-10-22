<?
include 'widget/header.php';
?>
                <!-- ."main-bar -->
                <div class="main-bar">
                    <div class="container-fluid">
                        <div class="row-fluid">
                            <div class="span12">
                                <h3><i class="icon-home"></i> Dashboard</h3>
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
                        <div class="span12 inner">
                            <div class="tac">
                                <ul class="stats_box">
                                    <li>
                                        <div class="sparkline bar_week"></div>
                                        <div class="stat_text">
                                            <strong>2.345</strong>Formularios Semanales
                                            <span class="percent down"> <i class="icon-caret-down"></i> -16%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sparkline line_day"></div>
                                        <div class="stat_text">
                                            <strong>165</strong>Formularios Diarios
                                            <span class="percent up"> <i class="icon-caret-up"></i> +23%</span>
                                        </div>
                                    </li>
                                </ul>
                                 <script type="text/javascript">
                                    $(function() {
                                        $('.inlinesparkline').sparkline();

                                        /* Sparklines can also take their values from the first argument
                                         passed to the sparkline() function */

                                        $(".sparkline.bar_week").sparkline([5, 6, 7, 2, 0, -4, -2, 4], {
                                            type: 'bar',
                                            height: '40',
                                            barWidth: 5,
                                            barColor: '#4d6189',
                                            negBarColor: '#a20051'
                                        });

                                        $(".sparkline.line_day").sparkline([5, 6, 7, 9, 9, 5, 4, 6, 6, 4, 6, 7], {
                                            type: 'line',
                                            height: '40',
                                            drawNormalOnTop: false
                                        });

                                    });
                                </script>
                            </div>
                            <hr>
                            
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