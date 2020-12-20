<!-- formulaire vérification administrateur -->
    <div class="formulaire_admin">
        <form method="post" action="">
                <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Saisir votre email.">
            <label for="mdp">Mot de passe</label>
            
            <input type="password" name="mdp" id="mdp" placeholder="Saisir votre mot de passe.">
            <input class="button" type="submit" value="Envoyer">
        </form>
        <?php
        ?>



<?php

if(!empty($_POST)) {
    // securisation des champs
    $_POST['email'] = htmlentities($_POST['email'], ENT_QUOTES);
    $_POST['mdp'] = htmlentities($_POST['mdp'], ENT_QUOTES); 
    // encryptation du mot de passe
    $mdp_entre = $_POST['mdp'];
    $mdp_encrypt = sha1($mdp_entre);
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // var_dump($mdp_encrypt);
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        $result = $mysqli->query("SELECT * FROM utilisateur WHERE email = '$_POST[email]' AND password = '$mdp_encrypt'");
        
        
        $utilisateur = $result->fetch_assoc();
        // verification avec base de donnee
        if (!empty($_POST)) {
            if ($mdp_encrypt == $utilisateur['password']) {
            $_SESSION['email'] = $utilisateur['email'];
            $_SESSION['mdp'] = $utilisateur['mdp'];
           header('Location: https://corentinperroux/admin');
             } else {
                 echo '<p>Votre email ou votre mot de passe sont erronés</p>';
             }
        }

    
}

    ?>
