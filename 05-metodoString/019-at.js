let vogais ="AEIOU"
/*
para contar a quantidade 
de caractere de uma string
*/
let qtd = vogais.length;

/* para pegar o 1º e o ultimo

let primeira = vogais.charAt(0);
let ul =
vogais.charAt(vogais.length -1)

com a vinda da versão 
ECMA scrpt 2022 podemos 
simplificar com at()
*/
let primeira = vogais.at(0);
let ul = vogais.at(-1)

console.log(
    `Temos ${qtd} vogais
    a 1ª é ${primeira}
    a ultima é ${ul}`
)