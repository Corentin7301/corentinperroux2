<a class="deconnection" href="?logout=1">Déconnexion</a>

<?php if(!empty($_GET['logout'])) {
            session_destroy();
            header("Location: ../admin/index.php");
        }
        ?>
<menu>
    <div class="link-menu">
        <div class="link-menu-admin">
            <a href="accueil_admin.php?admin_page=accueil">accueil</a>
            <a href="accueil_admin.php?admin_page=animaliere">photographie animaliere</a>
            <a href="accueil_admin.php?admin_page=portrait">photographie de portrait</a>
            <a href="accueil_admin.php?admin_page=artistique">photographie artistique</a>
        </div>
    </div>
</menu>
</body>

</html>