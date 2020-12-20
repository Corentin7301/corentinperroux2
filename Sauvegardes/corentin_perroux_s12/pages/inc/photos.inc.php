<?php
    if(!empty($_FILES)){
        // on a besoin de imgClass.php
        require('../images/imgClass.php');
        $img = $_FILES['img'];
        // on renvoi une chaine en minuscule et on recupere l'extention
        $ext = strtolower(substr($img['name'],-3));
        // on fait un tableau de valeur avec les valeurs qu'on veut
        $allow_ext = array('jpg','jpeg','png');
        // si valeur ext appartient au tableau allow_ext
        if(in_array($ext,$allow_ext)){
            // on envoi le fichier à ce chemin
            move_uploaded_file($img['tmp_name'],"../images/".$page_img.'/'.$img['name']);
            // on convertie les miniatures en jpg
            Img::convertirJPG("../images/".$page_img.'/'.$img['name']);
        }
        else{
            $erreur = "Votre fichier n'est pas une image.";
        }
    }


?>






<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
</head>

<body>

    <?php
// on affiche le texte erreur si il y en a une
    if(isset($erreur)){
        echo $erreur;
    }
?>
<!-- formulaire de mise en ligne des photos -->
    <div class="formulaire">
        <form method="post" action="" enctype="multipart/form-data">
            <input type="file" name="img">
            <input type="submit" name="Envoyer" value="Mettre en ligne">
        </form>
    </div>
    <?php
    // miniatures
    include 'affichage_photos.inc.php';
?>




</body>

</html>