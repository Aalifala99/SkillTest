<?php
function faktorial($x){
	$angka = 1;
	$faktorial = 1;
	 while($angka <= $x){
		 $faktorial = $faktorial * $angka;
		 $angka = $angka + 1;
	 }
	  return $faktorial;
}
echo faktorial(5);
echo "&nbsp";
echo faktorial(7);
?>
