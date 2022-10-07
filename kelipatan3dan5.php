<?php
//menampilkan angka 1-15 
for ($i = 1; $i <= 15; $i++) {
  if ($i % 5 == 0 && $i % 3 == 0) {
    echo "fizzbuzz\n";
  } elseif ($i % 3 == 0) {
    echo "fizz\n";
  } elseif ($i % 5 == 0) {
    echo "buzz\n";
  } else {
    echo $i . "\n";
  }
}
