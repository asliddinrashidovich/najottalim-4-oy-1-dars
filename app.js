// masala 1

let L = 20;
let m = Math.floor(L/100);
console.log('masala-1 J =',m + 'm')

// masala 2

let M = 2342;
let T = Math.floor(M/1000);
console.log('masala-2 J =',T + 't')

// masala 3

let kilobayts = 1024;
let bayts = 29248;
let KB = Math.floor(bayts/kilobayts);
console.log('masala-3 J =',KB + 'kb')

// masala 4

let A = 49;
let B = 5;
let total4 = Math.floor(A/B);
console.log('masala-4 J =',total4 + ' ta joylashgan')

// masala 5

let A2 = 49;
let B2 = 5;
let total5 = Math.floor(A2/B2);
let qoldiq5 = Math.floor(A2 % B2);
console.log('masala-5 J =',total5 + ' ta joylashgan'  , qoldiq5 + ' joylashmagan' )

// masala 6

let son6 = 34;
let birlar = son6 % 10;
let onliklar = (son6 - birlar) / 10;
console.log('masala-6 J =', onliklar + " o'nlar" ,birlar + ' birlar')

// masala 7

let son7 = 34;
let birliklar7 = son7 % 10;
let onliklar7 = (son7 - birliklar7) / 10;
console.log('masala-7 J =', birliklar7 + onliklar7 + " raqamlar yi'gindisi")

// masala 8

let son8= 34;
let birliklar8 = son8 % 10;
let onliklar8 = (son8 - birliklar8) / 10;
console.log('masala-8 J =', birliklar7 + '' + onliklar7 + " o'rinlarini almashtirilgandagi son")

// masala 9

let son9 = 234;
let yuzlar = (son9 - son9%100)/100;
console.log('masala-9 J =', yuzlar + " yuzlar xonasidagi son")

// masala 10

let son10= 234;
let birliklar10 = son10 % 10;
let onliklar10 = (son10%100 - birliklar10) /10;
console.log('masala-10 J =', birliklar10 + " o'nlar xonasidagi son", onliklar10 + ' birlar xonasidagi son')

// masala 11

let son11 = 234;
let birliklar11 = son11 % 10;
let onliklar11 = (son11%100 -birliklar11) /10;
let yuzlar11 = (son11 - son11%100)/100;
let yigindisi = birliklar11 + onliklar11 + yuzlar11;
console.log('masala-11 J =', yigindisi + " raqamlari yig'indisi")

// masala 12

let son12 = 234;
let birliklar12 = son12 % 10;
let onliklar12 = (son12%100 -birliklar12) /10;
let yuzlar12 = (son12 - son12%100)/100;
let teskarisi12 = `${birliklar12}${onliklar12}${yuzlar12}`;
console.log('masala-12 J =', teskarisi12 + " raqamlari o'rni almashtirilgan")

// masala 13

let son13 = 234;
let birliklar13 = son13 % 10;
let onliklar13 = (son13%100 - birliklar13) /10;
let yuzlar13 = (son13 - son13%100)/100;
let teskarisi13 = `${onliklar13}${birliklar13}${yuzlar13}`
console.log('masala-13 J =', teskarisi13 + " natijadagi son")
