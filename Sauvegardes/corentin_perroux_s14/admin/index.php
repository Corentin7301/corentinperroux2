<?php 
include '../pages/inc/header_admin.inc.php';
?>

<?php
// lien base de donnee
include('../pages/inc/config.inc.php');
// verification si il y a une session d'ouverte
if(isset($_SESSION['email'])) {
    // on ouvre la page categories
    include('categories_admin.php');
} else {
    // on met la page de login
    include('../pages/inc/login.inc.php');
}

?>
<?php 
include '../pages/inc/footer_admin.inc.php';
?>