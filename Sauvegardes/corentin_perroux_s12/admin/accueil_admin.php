<?php
// lien base de donnee
include('../pages/inc/config.inc.php');

// verification si il y a une session ouverte
if(isset($_SESSION['email'])) {
?>    
<!-- on cree un bouton de deconnection -->
<a class="deconnection" href="?logout=1">Déconnexion</a>
    
            <?php if(!empty($_GET['logout'])) {
                session_destroy();
                header("Location: ../admin/index.php");
            }
            ?>
    <?php 
    $page_img = $_GET['admin_page'];
    include '../pages/inc/header_admin.inc.php';
    
    ?>
   <div class="redim">
    <?php
    include '../pages/inc/photos.inc.php';
    echo '</div>';
    
    include '../pages/inc/footer_admin.inc.php';
    
    }
 else {
    include('index.php');
 }
?>