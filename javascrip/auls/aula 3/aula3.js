/*//Métodos Math - para executar os operadores

//abs - para transformar numero negativo em numero absoluto(positivo)

var n1 = Math.abs(-19)
document.write("O valor absoluto de n1 é: " + n1)
document.write(`<br>O valor absoluto de n1 é: ${n1}`)
console.log(`O valor absoluto de n1 é: ${n1}`)

var n2 = Number(prompt("Entre com o valor de n2"))
document.write("<br>O valor absoluto de n1 é: " + Math.abs(n2))
document.write(`<br>O valor absoluto de n2 é: ${Math.abs(n2)}`)
console.log(`O valor absoluto de n2 é: ${Math.abs(n2)}`)
alert(`O valor absoluto de n2 é: ${Math.abs(n2)}`)

//max() - para mostrar o maior valor da lista

const n3 = Math.max(12,43,5,67,54,21,98)
document.write("<br>O maior valor da lista é: " + n3)
document.write(`<br>O maior valor da lista é: ${n3}`) 

//min() - para mostrar o menor valor da lista

/*const n4 = Math.min(56,43,23,1,2,4,5)
document.write("<br>O menor valor da lista é: " + n4)
document.write(`<br>O menor valor da lista é: ${(n4)}`)

//pow() - para calcular a potência

var n5 = Math.pow(5,2)//o primeiro valor e a base e o segundo e valor é a potência
document.write("<br>O numero elevado é: " + n5)
document.write(`<br>O numero elevado é: ${n5}`)
console.log(`O numero elevado é: ${n5}`)

// outro exemplo recebendo valores externos

var n6 = +(prompt('Entre com um numero'))
var n7 = +(prompt('Entre com o valor da potência'))
document.write("<br>O numero elevado é: " + Math.pow(n6,n7))
alert(`O numero elevado é: ${Math.pow(n6,n7)}`)

//round() - para arredondar matemáticamente, a partir do 5 arredonda para cima

var n8 = Math.round(9.5)
document.write("<br>O numero arredondado matematicamente é: " + n8)
alert(`O numero arredondado matematicamente é: ${n8}`)

var n9 = parseFloat(prompt('Digite um numero'))
document.write("<br>O numero arredondado matematicamente é: " + Math.round(n9))
alert(`O numero arredondado matematicamente é:${Math.round(n9)}`)

//ceil() - para arredondar obrigatóriamente para cima

var n10 = parseFloat(prompt('Digite um numero'))
document.write("<br>O numero arredondado matematicamente é: " + Math.ceil(n10))
alert(`O numero arredondado matematicamente é:${Math.round(n10)}`)

//floor() - para arredondar obrigatóriamente para baixo

var n11 = parseFloat(prompt('Digite um numero'))
document.write("<br>O numero arredondado matematicamente é: " + Math.floor(n11))
alert(`O numero arredondado matematicamente é: ${Math.floor(n11)}`)

//trunc() - retorna a parte inteira do valor

var n12 = parseFloat(prompt('Digite um valor'))
document.write("<br>A parte inteira do numero é: " + Math.trunc(n12))
document.write(`<br>A parte inteira do numero é: ${Math.trunc(n12)}`) 

//random() - para gerar numeros aleatórios entre 0(inclusivo) e 1(exclusivo)

var num13 = Math.random()
document.write("<br>O valor sorteado foi: " + num13)

//toFixed()- para fixar a quantidade de casas decimais após a virgula

document.write("<br>O valor sorteado foi: " + num13.toFixed(2))
document.write(`<br>O valor sorteado foi: ${num13.toFixed(2)}`)

//para gerar numeros aleatório em um intervalo pre-defindo

var num14 = Math.random()* 50 //o numero 50 é exclusivo
document.write("<br>O valor sorteado foi: " + num14.toFixed(0))
document.write(`<br>O valor sorteado foi: ${num14.toFixed(2)}`)

//para gerar numeros aleatórios com intervalo fechado

var num15 = Math.round(Math.random()* 10) + 1 //numeros aleatorios entre 0 e 10 ambos inclusivos
document.write("<br>O valor sorteado foi: " + num15)

//sqrt() - para calcular a raiz quadrada

var num15 = Math.sqrt(49)
document.write("<br>A raiz quadrada de num15 é: " + num15.toFixed(1))

var num16 = Number(prompt("Digite um valor"))
document.write("<br>A raiz quadrada é: " + Math.sqrt(num16).toFixed(2))

//cbrt() - para calcular a raiz cubica

var num17 = Number(prompt("Digite um valor"))
document.write("<br>A raiz cubica é: " + Math.cbrt(num17).toFixed(2))

//condicionais if/else/else if

var idade = 8
	if(idade <=10){
		document.write("<br>Criança!")
	}

//exemplo de if/else
	
var idade1 = parseInt(prompt("Qual a sua idade?"))
	if(idade1 <=10){
		//document.write("<br>Criança!")
		document.write(`<br>Criança!Tem ${idade1} anos`)
	}
	else{
		document.write("<br>Pré-adolescente!")
	} 
	
//else if

var idade3 =parseInt(prompt("Qual a sua idade?"))
	if(idade3 <=10){
		document.write(`<br>Criança!Tem ${idade3} anos`)
	}
	else if(idade3 > 10 && idade3 <= 15){
		document.write(`<br>Pré-adolescente!Tem ${idade3} anos`)
	}
	else if(idade3 >15 && idade3 <= 21){
		document.write(`<br>Adolescente!Tem ${idade3} anos`)
	}
	else if(idade3 > 21 && idade3 <= 60){
		document.write(`<br>Adulto!Tem ${idade3} anos`)
	}
	else{
		document.write(`<br>Melhor idade!Tem ${idade3} anos`)
	}
	
//exemplo de if dentro do else
	
var nota = parseFloat(prompt('digite a nota: '))
	if(nota >= 6){
		document.write(`<br>A nota foi ${nota}. Aluno aprovado`)
	}
	else{
		document.write(`<br>A nota foi ${nota}. Aluno reprovado`)
		if(nota <= 5 && nota >= 3)
			document.write("<br>Aluno em recuperação")
	}
	
*/
