<?php
    include('inc/header.inc.php');
    // mot pour chemin dossier pour /*min.inc.php */ et /*photos.inc.php*/
    if(isset($_GET['page'])) {
    
        $page_img = $_GET['page'];
    } else {
        $page_img = 'accueil';
    }
    ?>


<content>
<div class="top" id="button_top">
        <a href="#top"><i class="fas fa-arrow-circle-up"></i></a>
    </div>
    <div class="img-content">

    <?php
        include 'inc/affichage_photos.inc.php';
    ?>

    </div>
</content>

<?php
    include('inc/footer.inc.php');
?>