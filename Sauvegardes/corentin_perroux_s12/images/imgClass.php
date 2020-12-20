<?php

class Img{

	

	static function convertirJPG($img){
		if(substr(strtolower($img),-4)==".jpg"){$image = imagecreatefromjpeg($img); }
		else if(substr(strtolower($img),-4)==".png"){$image = imagecreatefrompng($img); }
		else if(substr(strtolower($img),-4)==".gif"){$image = imagecreatefromgif($img); }
		// L'image ne peut etre redimensionne
		else{return false; }
		unlink($img);
		imagejpeg($image,substr($img,0,-3)."jpg",90);
		return true;
	}
}

?>
