/*
   nome: caractere
   idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite a quantidade que será verificado a idade")
   leia(limite)
   
   contador := 0
   
   enquanto contador < limite faça
            escreva("Digite o nome da pessoa:")
            leia(nome)
            escreval("Digite a idade do ", nome, ": ")
            leia(idade)
            se idade >= 18 entao
               escreval(nome, " é maior de idade")
            senao
               escreval(nome, " é menor de idade")
            fimse
            contador:= contador +1
   fimenquanto
Fimalgoritmo
*/

function acaoBotao(){

    var nome, idade, limite, contador
    limite = prompt("Digite a quantidade que será verificado a idade ")
    contador = 0

    while(contador < limite){
        nome = prompt("Digite o nome da pessoa:")
        idade = prompt("Digite a idade do "+ nome + ": ")

        if (idade > 18)
            document.getElementById("paragrafo").innerText = nome + " é maior de idade "
        else 
            document.getElementById("paragrafo").innerText = nome + " é menor de idade " 
        contador++
    }        
}

