/*
   nome: caractere
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
     escreval("Digite o nome:")
     leia(nome)
     escreval("Digite o numero:")
     leia(numero)
     
     escreval(nome, " : ", numero)
Fimalgoritmo
*/

var nome, numero;

nome = prompt("Digite o nome:")
numero = prompt("Digite o numero:")

//Objeto Dom, adicionando o texto dentro do elemento pelo id dele
document.getElementById("paragrafo").innerText = nome + " : " + numero

