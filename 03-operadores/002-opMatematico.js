// Array recebe 2 numeros
let numero = [ 5, 2 ]

// Declarando operadores
let adição, subitração, div, mult, mod;

// Armazenando resultado de cada operação
adição = numero[0] + numero[1];
subitração = numero[0] - numero[1];
div = numero[0] / numero[1];
mult = numero[0] * numero[1];
mod = numero[0] % numero[1]

console.log(
`${numero[0]} + ${numero[1]} = ${adição}
${numero[0]} - ${numero[1]} = ${subitração}
${numero[0]} ÷ ${numero[1]} = ${div}
${numero[0]} × ${numero[1]} = ${mult}
${numero[0]} % ${numero[1]} = ${mod}`
);