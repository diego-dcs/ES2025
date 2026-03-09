let numero = [ 5, 2 ];

let soma, sub, div, mult, res;

const op = [
    "a soma: ","a subtração: ",
    "a divisão: ","a multiplicação: ",
    "o resto da divisão: "
];
let list = [
    soma = numero[0] + numero[1],
    sub = numero[0] - numero[1],
    div = numero[0] / numero[1],
    mult = numero[0] * numero[1],
    res = numero[0] % numero[1]
];

let texto = 
`Você digitou ${numero[0]} e ${numero[1]}<br>`;

for (let i = 0; i < list.length; i++) {
    texto += op[i] + list[i] + "<br>"
}
document.writeln( texto )
