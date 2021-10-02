/*
// Seção de Declarações das variáveis
    resultado, valor1, valor2, valor3: inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
    escreval("Digite o primeiro valor")
    leia(valor1)
    escreval("Digite o segundo valor")
    leia(valor2)
    escreval("Digite o terceiro valor")
    leia( valor3)

    resultado := (valor1 + valor2) *  valor3
    escreval("Resultado: ", resultado)
Fimalgoritmo

*/

var v1, v2, v3, Resultado

v1 = prompt("Digite o primeiro valor:")
v2 = prompt("Digite o segundo valor:")
v3 = prompt("Digite o terceiro valor:")

Resultado = (parseInt(v1) + parseInt(v2) + parseInt(v3));
alert("Resultado:" + Resultado)