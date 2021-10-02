/*
Var
// Seção de Declarações das variáveis
   nome: caractere
   nota1, nota2, media, mediaEscolar: real
   passou: logico



Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
  passou:= falso
  escreval("Digite seu nome:")
  leia(nome)

  escreval("Digite sua primeira nota:")
  leia(nota1)

  escreval("Digite sua segunda nota:")
  leia(nota2)
//mediaEscolar é uma variável recuperado do banco de dados da tabela aluno_nota
  //mediaEscolar = 7
  media := (nota1+nota2)/2

  se media >= 50 entao
     passou:= verdadeiro
  fimse
  se (passou) && (media >=50 || media <=70) entao
     escreval("Aprovado")
  senao
       escreval("Reprovado")
  fimse

*/

var nota01, nota02, media, passou;

passou = false;

nome = prompt("Digite o nome do aluno")
nota01 = prompt("Digite a nota 01 do aluno:")
nota02 = prompt("Digite a nota 02 do aluno:")

//Transformando Notas em inteiros
media = (parseInt(nota01) + parseInt(nota02)) / 2;

if(media >=50)
    passou = true


if(passou || media >=70)
   alert("Aprovado!" + nome)
else 
   alert("Reprovado!" + nome)