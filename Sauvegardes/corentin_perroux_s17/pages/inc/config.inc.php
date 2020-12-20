<?php
// lien base de donnee
$mysqli = new Mysqli("corentintvcp.mysql.db", "corentintvcp", "Corentin20010702", "corentintvcp");
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
ob_start();
?>