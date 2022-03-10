/*1. Calcular a quantidade de dinheiro gasta por um fumante. 
Dados: o número de anos que ele fuma,
o número de cigarros fumados por dia 
e o preço de uma carteira.

var ano = Number(prompt("Desde quando vc fuma cigaro?"))
var dias = Number(prompt("quanto cigaros vc fuma por dias?"))
var PreçoCarteira = Number(prompt("Quanto custou a carteira de cigaro?"))

var a =2021 - ano  
// 16 anos 
var b = a * 12
//192 menes 
var d =30 * dias 
//510 cigaros por mes
//ou 
var e = dias * 31
//527 cigarros por mes
var caixa = d / 20
//25 caixa por mes arredondando
var macocig = PreçoCarteira / 20 //(cada cigarro)
//0,525
var consumoMes = macocig * d
//265.20 reais 
var consumoTotal = consumoMes * b

document.write("<br>Esse fumante consumiu por mês cerca: ",caixa)
document.write(" caixas por mês")
document.write("<br>Esse fumante consumiu por mês cerca:R$ ",consumoMes)
document.write(" no periodo de: ",a)
document.write(" anos")
document.write("<br>Esse fumante durante esse periodo gastou cerca de:R$ ",consumoTotal)
*/

/*2. O triângulo é uma figura geométrica composta por três retas. Ele pode ser classificado conforme sua proporcionalidade. 
Equilátero Isósceles Escaleno. Faça um prompt no qual o usuário informará três números que representam cada
um dos lados de um triângulo e determine sua classificação de proporcionalidade.

var a1 = Number(prompt("me informe o 1ª angulo:"))
var b2 = Number(prompt("me informe o 2ª angulo:"))
var c3 = Number(prompt("me informe o 3ª angulo:"))

if (a1<(b2+c3) && b2<(a1+c3) && c3<(a1+b2)) {
    if (a1==b2 &&  a1==c3){
        document.write('<br>TRIANGULO EQUILÁTERO');
    }
    else if (a1==b2 || a1==c3 || c3==b2 ) { 
        document.write('<br>TRIANGULO ISÓSCELES');
    } else {
    document.write('<br>TRIANGULO ESCALENO');
    } 
} else {
    document.write('<br>NÃO É UM TRIANGULO.');
    }*/

    /*3. Efetue um programa em JS que receba os valor e a A,B,C e D.
    Efetue a soma entre A e C e
    a multiplicação entre B e D , 
    verifique se o resultado da soma é maior, menor ou igual ao da multiplicação.

    var A = Number(prompt("me informe o valor de A:"))
    var B = Number(prompt("me informe o valor de B:"))
    var C = Number(prompt("me informe o valor de C:"))
    var D = Number(prompt("me informe o valor de D:"))

    var a1 = A + C
    var a2 = B * D

    if (a1>a2){
        document.write("o valor da soma de A e C é MAIOR do que o valor da multiplicão de B e D.")
    } else if (a1 < a2){
        document.write("o valor da soma de A e C é MENOR do que o valor da multiplicão de B e D.")
    }else if (a1 == a2){
        document.write("o valor da soma de A e C é IGUAL do que o valor da multiplicão de B e D.")
    }*/
    /*4. Faça um Programa que peça o valor da gasolina e do álcool de um posto e
     diga qual é o combustível mais vantajoso abastecer,
    sabendo que somente é vantagem abastecer álcool se o preço do mesmo é menor ou igual a 70% do valor da gasolina.

    var gasolina = Number(prompt("Quanto ta custando o valo da gasolina?"))
    var alcool = Number(prompt("Quanto ta custando o valo da alcool?"))
    var tanque = Number(prompt("Quanto você pretende colocar?"))

    var a = tanque * gasolina
    var b = 0.7 * a
    var c = tanque * alcool

    if (c<=b){
        document.write("O abastecimento é mais vantajoso com Alcool")
    }
     else {
        document.write("O abastecimento é mais vantajoso com Gasolina Comum")
    }*/

