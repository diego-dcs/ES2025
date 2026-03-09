let hora = 24;
let saudaçao;

if (hora < 12 && hora != null ) {
    saudaçao = "Bom dia!"
} else if (hora >= 12 && hora < 18) {
    saudaçao = "Boa tarde!"
} else if (hora >= 18 && hora < 24) {
    saudaçao = "Boa noite!"
} else {
    saudaçao = "Saudações!"
}
console.log("Olá " + saudaçao)