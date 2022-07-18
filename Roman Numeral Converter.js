/*
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    var newArr = [];
    
    var M = parseInt(num / 1000);
    if(M > 0)
    (newArr.push(M = "M".repeat(M)));
    num = num % 1000;

    var CM = parseInt(num / 900);
    if(CM > 0)
    (newArr.push(CM = "CM".repeat(CM)));
    num = num % 900;

    var D = parseInt(num / 500);
    if(D > 0)
    (newArr.push(D = "D".repeat(D)));
    num = num % 500;

    var CD = parseInt(num / 400);
    if(CD > 0)
    (newArr.push(CD = "CD".repeat(CD)));
    num = num % 400;

    var C = parseInt(num / 100);
    if(C > 0)
    (newArr.push(C = "C".repeat(C)));
    num = num % 100;

    var XC = parseInt(num / 90);
    if(XC > 0)
    (newArr.push(XC = "XC".repeat(XC)));
    num = num % 90;

    var L = parseInt(num / 50);
    if(L > 0)
    (newArr.push(L = "L".repeat(L)));
    num = num % 50;

    var XL = parseInt(num / 40);
    if(XL > 0)
    (newArr.push(XL = "XL".repeat(XL)));
    num = num % 40;

    var X = parseInt(num / 10);
    if(X > 0)
    (newArr.push(X = "X".repeat(X)));
    num = num % 10;

    var IX = parseInt(num / 9);
    if(IX > 0)
    (newArr.push(IX = "IX".repeat(IX)));
    num = num % 9;

    var V = parseInt(num / 5);
    if(V > 0)
    (newArr.push(V = "V".repeat(V)));
    num = num % 5;

    var IV = parseInt(num / 4);
    if(IV > 0)
    (newArr.push(IV = "IV".repeat(IV)));
    num = num % 4;

    var I = parseInt(num / 1);
    if(I > 0)
    (newArr.push(I = "I".repeat(I)));
    num = num % 1;

    return newArr.toString().replace(/,/g, "");
   
}
   convertToRoman(3999);