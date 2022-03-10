//Lista de exercício 3
document.write ("<br><br><br><br>questão 1<br><br><br><br>")
/*1. Faça um programa que sortei um numero de 0 a 9999 e mostre na tela cada um dos dígitos separadamente.
exemplo: unidade: 4 dezena: 3 centena: 8 milhar*/

var num1 = Math.round(Math.random()* 10000) + 1 
document.write("o numero aleatorio é :",num1)

var unidade = (num1 / 1)%10
var dezena = (num1 / 10)%10
var centena = (num1 / 100)%10
var milhar = (num1 / 1000)%10

if (num1 > 9) { 
    document.write("<br>Unidade é ", Math.trunc(unidade))
}
if (num1 > 9) { 
    document.write("<br>Dezena é ", Math.trunc(dezena))
}
if (num1 > 99) { 
    document.write('<br>Centena é ',Math.trunc(centena))
}
 if (num1 >999) {
    document.write('<br>Milhar é ',Math.trunc(milhar))
} 

document.write ("<br><br><br><br>questão 2<br><br><br><br>")
/*2.Escreva um programa que faça o computador "pensar" em um numero inteiro entre 0 e 5 e peça para o usuário tentar 
descobrir qual foi o numero escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.*/

var numb2= Number ( prompt('descubra o numero que computador vai colocar?'))

var num2 = Math.round(Math.random()* 5)
document.write("O numero aleatorio é :",num2)

if (numb2 == num2){
    document.write ("<br>Você acertou")
} 
else {
    document.write("<br>Você errou <br> tente novamente mais tarde")
}
document.write ("<br><br><br><br>questão 3<br><br><br><br>")
/*3.Escreva um programa que leia a velocidade de um carro. Se ele ultrapassar 80Km/h, mostre uma mensagem dizendo que ele foi multado. 
A multa vai custar R$7,00 por cada KM acima do limite.*/

var velo = Number(prompt('Me informe a sua velocidade:'))

if (velo > 80){
    var multa = (velo - 80)*7
    document.write("Você foi multado por alta velocidade")
    document.write("<br>O valor da multa sera de:R$ ",multa.toFixed(2))
}
document.write ("<br><br><br><br>questão 4<br><br><br><br>")
/*4.Desenvolva um programa que pergunte a distância de uma viagem em Km. Calcule o preço da passagem, cobrando R$0,50 por KM para viagens 
de até 200Km e R$0,45 para viagens mais longos.*/

var dist = Number(prompt('Me informe a distancia da viagem:'))

if (dist < 200){
    var preço = (dist)*0.5
    document.write("Você ira percorrer cerca de ",dist)
    document.write(" km de distancia")
    document.write("<br>O valor da viagem sera de:R$ ",preço.toFixed(2))
} else if (dist > 200){
    var preço2 = (dist)*0.45
    document.write("Você ira percorrer cerca de ",dist)
    document.write(" km de distancia")
    document.write("<br>O valor da viagem sera de:R$ ",preço2.toFixed(2))
}
document.write ("<br><br><br><br>questão 5<br><br><br><br>")
/*5.Faça um programa que leia um ano qualquer e mostre se ele é Bissexto.*/

var ano = Number(prompt('Me informe o ano?'))

if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
    document.write("É ano bissexto!!")
} else {
    document.write("Não é bissexto")
}
document.write ("<br><br><br><br>questão 6<br><br><br><br>")
/*6.Faça um programa que leia 3 números e mostre qual é o maior e qual é o menor.*/

var n1 = Number(prompt('Me informe um numero?'))
var n2 = Number(prompt('Me informe outro numero?'))
var n3 = Number(prompt('Me informe outro numero?'))

document.write("a sequência é ",n1)
document.write(", ",n2)
document.write(", ",n3)

document.write("<br>O menor valor da lista é: ", Math.max (n1,n2,n3))
document.write("<br>O maior valor da lista é: ", Math.min (n1,n2,n3))

document.write ("<br><br><br><br>questão 7<br><br><br><br>")
/*7.Escreva um programa que pergunte o salário de um funcionário e calcule o valor do seu aumento. 
Para salários superiores a R$1.250,00, calcule um aumento de 10%. Para os inferiores ou iguais, o numero é de 15%*/

var salario = Number(prompt('Me informe seu salario?'))

document.write("Sua salario de ",salario)

if (salario > 1250){
    var Snovo = (salario * 0.1)
    var Snovo2 = (Snovo + salario)
    document.write(" recebera um aumento de 10%: R$ ",Snovo.toFixed(2))
    
}
if (salario <= 1250){
    var Snovo = (salario * 0.15)
    var Snovo2 = (Snovo + salario)
    document.write(" recebera um aumento de 15%: R$ ",Snovo.toFixed(2))
    document.write("<br> O Total do seu salario sera de: R$ ",Snovo2.toFixed(2))
}











