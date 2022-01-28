let billion = 1_000_000_000;

console.log(billion)

//we use the constans defined by javaScript as Math object:

Math.pow(2, 53); //2 to the power 53

console.log(Math.round(.6)) //round to the nearest integer 

Math.ceil(.6) //round up to an integer 

Math.floor(.6) //round down to an integer 

Math.abs(-5) //absolute value

Math.max(x,y,z) //return the largest argument 
Math.min(x,y,z) //return the smallest argument 

Math.random() //Pseudo-random number x where 0 <= x < 1.0
Math.PI //circumference of a circle / diameter
Math.E //the base of the natural logarithm 
Math.sqrt(3) //the square root of 3
Math.pow(3, 1/3) //the cube root of 3 
Math.sin(0)//Trigonometry: aslo Math.cos, Math.atan, etc.

Math.log(10) //Natural logarithm of 10 


Math.log(100)/Math.LN10 //base 10 logarithm of 100
Math.log(512)/Math.LN2 //base 2 logarithm of 512

Math.exp(3) //Math.E cubed

//ES6 defines more functions on the Math object 

Math.cbrt(27) //cube root 
Math.hypot(3, 4) //square root of sum of squares of all arguments 

Math.log10(100) //base-10 logarithm
Math.log2(1024) //Base-2 logarithm 
Math.log1p(x) //Natural log of (1+x); accurate for very small x
Math.expm1(x) //the inverse of Math.log1p()

Math.sign(x) //-1, 0, or 1 for arguments <, ==, or > 0



Math.imul(2, 3) //optimixed multiplication of 32-bit integers

Math.clz32(0xf) // number of leading zero bits in a 32-bit integer 
Math.trunc(3.9) //convert to an integer by truncating fractional part 


Math.fround(x) //Round to nearest 32-bit float number 

Math.sinh(x) //Hyperbolic sine. Also Math.cosh(), Math.tanh()

Math.asinh(x) //Hyperbolic arcsine. Also Math.acosh(), Math.atanh().

