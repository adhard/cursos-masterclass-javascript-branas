Number("10");
// > 10

Number("9.9");
// 9.9

Number("0xFF");
// 255

Number("0b10");
// 2

Number("0o10");
// 8

Number();
// 0

Number("Javascript")
// NaN

//Utilizando coerção de tipos

~~"10";
// 10 (em número)

+"10";
// 10 (em número)

"10" - 0;
// 10 (em número)

"10" * 1;
// 10 (em número)

"10" / 1;
// 10 (em número)


// Utilizando ParseInt
// 10, após a virgula pega o número inteiro. (base 10)

parseInt("9.9", 10);
// 9

parseInt("10");
// 10

parseInt("10", 10);
// 10

parseInt("010");
// 10

NaN === NaN
// false

isNaN(NaN)
// true