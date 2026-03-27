let texto = 
"Apple, Banana, Kiwi";

let x = 
texto.replace("n","N");
//troca apenas o 1º n

x = x.replace(/a/g,"4");
/*A expressão /g global pega 
todos "a" menusculos por 4*/

x = x.replace(/E/i,"3")
/*A expressão /i troca 
maiuscos e menusculas 
tbm é possivel usar 
replaceAll()*/
console.log(x)