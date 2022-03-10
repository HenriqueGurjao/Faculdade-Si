// operadores de atribuição +=, -=, *=, /=


/*var n1 = 20
n1= n1 + 15
console.log(n1)

n1+= 15
console.log(n1)
document.write ("A soma é: "+ n1)

var n2 = Number(prompt('Digite um numero'))
n2 -= 10
console.log(n2)
document.write("<br>A subtração é :", n2)

var n3 = + (prompt('Digite um numero'))
n1 *= 2
document.write("<br>A multiplicação é :", n3)


// incremento++, pos-incremento, decremento --, pos decremento


var i = 0
console.log(i++) //pos-incremento
console.log(i)

var  x = 0 
++x // incremento
console.log(x)
var z = 10
console.log(z--) //pos-decremento
console.log(z)

var  a = 20
--a // decremento
console.log(a)


// outra formna de converter string em numero


var num1 = prompt("Digite o valor de num1")
var num2 = prompt("Digite o valor de num2")

num1 = parseInt(num1)
num2 = parseInt(num2)

var total = num1 + num2 

console.log ("a soma de num1 + num2 = "+ total)
//console.log ("a soma de num1 + num2 = "+ (num1 + num2))
document.write ("a soma de num1 + num2 = "+ (num1 + num2))
//alert ("a soma de num1 + num2 = "+ (num1 + num2))


// template literal (string) - `${}` é crase não aspas 

document.write(`a soma de num1 + num2 = ${total}`)
console.log(`a soma de num1 + num2 = ${total}`)

document.write(`a soma de num1 + num2 = ${num1 + num2}`)


// operadores de comparação( relacionais)

// operado igual ==  (se os dados são iguais) 
var a = 10
var b = "10"

document.write("o valor de a é igual ao valor de b? " + (a == b))

// operador igual identico === (verifica se os dados e o tipo são iguais) 

var e = 10
var r = "10"

document.write("<br>o valor de a é igual ao valor de b? " + (e === r))
document.write(`<br>o valor de a é igual ao valor de b? ${e === r}`)

//operado de diferente  != (se os dados são diferente)

var d = 8
document.write ("<br> o valor de D é diferente?" + (d != "8"))

//operado de diferente  !== (se os dados e tipos são diferente)

var t = 8
document.write ("<br> o valor de t é diferente?" + (t !== "8"))


// operador maior >

var f = Number(prompt('entre com um numero'))
document.write("<br> o valor de F é maior que 20?" + (f > 20))

// ou 

var g = prompt('entre com um numero')
g = Number(g)
document.write("<br> o valor de g é maior que 20?" + (g > 20))

// operador maior <

var h = Number(prompt('entre com um numero'))
var i = Number(prompt('entre com um numero'))

document.write("<br> o valor de H é maior que 20?" + (h < i))

// operador maior >= serve para <=

var j = Number(prompt('entre com um numero'))
var k = Number(prompt('entre com um numero'))

document.write("<br> o valor de H é maior que 20?" + (j >= k))

// operador lógico && , || (ou)

var n = Number(prompt('entre com um numero')) 
document.write("<br> o valor esta no intervalo que foi determinado?"+ ((n>= 1) && (n<= 10)))

var l = Number(prompt('entre com um numero')) 
document.write("<br> o valor esta no intervalo que foi determinado?"+ ((l>= 1) || (l<= 10)))

// constantes  - o  valor não ´pde alterado (const)
const o = 5 
const p = 5 
const q = 10
document.write(" <br> resultado da expressão é :"+ o * p /q)
document.write(` <br> resultado da expressão é :${o * p /q}`)*/

// metado de comfirmação

//confirm (" tem certeza que deseja salvar?") execita sem salvar 

/*var confirma = confirm ("realmente deseja apagar:")
console.log(confirma)*/ //executa e salvar