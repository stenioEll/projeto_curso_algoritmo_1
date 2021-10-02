/*
// Seção de Declarações das variáveis
     valor1, valor2, resultado: real
     operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
      escreva("A proposta é calcular dois valores baseados na operação")
      escreva("Digite o primeiro valor:")
      leia(valor1)
      escreva("Digite a operação: Ex: +, -, *, /")
      leia(operacao)
      escreva("Digite o segundo valor:")
      leia(valor2)

      se (operacao = "+" ) entao
         resultado := valor1 + valor2
      senao
         se (operacao = "-" ) entao
            resultado := valor1 - valor2
         senao
            se (operacao = "*" ) entao
               resultado := valor1 * valor2
            senao
               se(operacao = "/") entao
                     resultado := valor1 / valor2
               fimse
            fimse
         fimse
      fimse
      escreval("Resultado do calculo é:", resultado)
Fimalgoritmo
*/




function acaoBotao(){

    var valor1, valor2, resultado, operacao

    valor1 = prompt("Digite o primeiro valor:")
    operacao = prompt("Digite a operacao desejada: Ex: +, -, *, /")
    valor2 = prompt("Digite o segundo valor:")

    switch(operacao){
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2)
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2)
            break; 
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2)
            break;      
    }

    document.getElementById("paragrafo").innerText = "O resultado foi: " + resultado
        
}
