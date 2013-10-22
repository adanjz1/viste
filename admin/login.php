<?
session_start();
    include ("../includes/boot.php");
    if(!empty($_POST['user']) && !empty($_POST['pass'])){
        $login = R::find('users',' user = ? and pass = ?', array($_POST['user'],$_POST['pass']));
        if(!empty($login)){
            $_SESSION['loggedId']=1;
            header('location:index.php');
        }
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/login.css">
        <link rel="stylesheet" href="assets/magic/magic.css">
    </head>
    <body>
        <div class="container">
            <div class="text-center">
                <img src="../media/img/logo.png" alt="Metis Logo">
            </div>
            <div class="tab-content">
                <div id="login" class="tab-pane active">
                    <form action="" class="form-signin" method="post">
                        <p class="muted text-center">
                            Ingreso del usuario administrador
                        </p>
                        <input type="text" placeholder="Usuario" name="user" class="input-block-level">
                        <input type="password" placeholder="Contrase&ntilde;a" name="pass" class="input-block-level">
                        <button class="btn btn-large btn-primary btn-block" type="submit">Ingresar</button>
                    </form>
                </div>
                


        </div> <!-- /container -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
        <script type="text/javascript" src="assets/js/vendor/bootstrap.min.js"></script>

        <script>
            $('.inline li > a').click(function() {
                var activeForm = $(this).attr('href') + ' > form';
                //console.log(activeForm);
                $(activeForm).addClass('magictime swap');
                //set timer to 1 seconds, after that, unload the magic animation
                setTimeout(function() {
                    $(activeForm).removeClass('magictime swap');
                }, 1000);
            });

        </script>
    </body>
</html>
