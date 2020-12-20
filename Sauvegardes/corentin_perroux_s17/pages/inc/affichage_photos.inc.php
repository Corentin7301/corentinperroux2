<div class="img_space">
<?php
$dos = "../images/".$page_img;
$dir = opendir($dos);
// on verifie si ce sont des images
while($file = readdir($dir)){
    $allow_ext = array('jpg','jpeg','png');
    $ext = strtolower(substr($file,-3));
    if(in_array($ext,$allow_ext)){
        ?>
        <!-- on affiche les images -->
            <img src="../images/<?php echo $page_img.'/'.$file; ?>" alt="Corentin PERROUX">
        <?php
 }
}
?>
</div>