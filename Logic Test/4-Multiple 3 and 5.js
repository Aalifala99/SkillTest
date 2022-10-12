var a = 3;
var b = 5;
for (var i=0; i<=100; i++){
  if((i%a==0) && (i%b==0)){
      document.write("angka = " + i + "<br>")
  }
}

/*
Create solution function that accept 1 parameter that be will multiple number 3 and 5 while each result of that multiplication is still lower than parameter inputed

solution (10) // => 23 = 3 + 5 + 6 + 9
solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18
*/

