var numbers = [20,7,90.101,118];

var maks = Math.max.apply(Math, numbers);
document.write("angka terbesar " + maks );
/*
Description:
Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.


Returm null if the argument is invalid.

maxRedigit(123) --> 321
maxRedigit(231) --> 321
maxRedigit(321) --> 321

maxRedigit(-1)  --> null 
maxRedigit(0)   --> null
maxRedigit(99)  --> null
maxRedigit(1000) --> null 
*/