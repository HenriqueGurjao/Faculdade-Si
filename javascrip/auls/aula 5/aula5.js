//Função - function()

/*function somar(x,y){
	document.write('A soma de x + y = ' + (x + y))
	document.write(`<br>A soma de x + y = ${(x + y)}`)
}
somar(20,40)

function somar1(x1,y1,z1){
	document.write('<br>A soma de x1 + y1 + z1 = ' + (x1 + y1 + z1))
	document.write(`<br>A soma de x1 + y1 + z1= ${(x1 + y1 + z1)}`)
}
somar1(20,40,10)

//exemplo de função entrando com valores externos

function multiplicar(a,b){
	document.write('<br>A multiplicação de a * b = ' + (a * b))
	document.write(`<br>A multiplicação de a * b = ${(a * b)}`)
}
var a = Number(prompt('Entre com o valor de a '))
var b = Number(prompt('Entre com o valor de b '))
multiplicar(a,b)

//exemplo de função para calcular a media

function calcularMedia(av1,av2,av3){
	document.write('<br>A media do aluno é = '+ (av1 + av2 + av3)/3)
	document.write(`<br>A media do aluno é = ${(av1 + av2 + av3)/3}`)
}
var av1 = +(prompt("Entre com a nota da Av1"))
var av2 = +(prompt("Entre com a nota da Av2"))
var av3 = +(prompt("Entre com a nota da Av3"))
calcularMedia(av1,av2,av3)

function pularLinha(){
	document.write('<br>')
}

//exemplo chamando a função

pularLinha()
for(i=0; i<=12; i++){
	document.write(i + ' ')
}

//Array
//exemplo de método construtor - new Array()

const arr = new Array()
console.log(arr)

const arr2 = new Array(true, 'Dimitri', 20, new Array(1,2,3))
console.log(arr2)

//para saber o elemento que se encontra em uma determinada posição usamos o indice

//pularLinha()
document.write('<br>O elemento da posição 2 é : ' + arr2[2])
document.write('<br>O elemento da posição 3 é : ' + arr2[3])
document.write('<br>O elemento da posição 3 é : ' + arr2[3][1])

//função length()

document.write('<br>A quantidade de elementos dentro do array é: ' + arr2.length)

//função indexOf() - para identificar a posição do elemento no array

document.write('<br>A posição do elemento no array é: ' + arr2.indexOf('Dimitri'))

//função lastIndexOf()- para informar qual a ultima ocorrência de um determinado elemento

const arr3 = new Array(true,'Dimitri', 20, new Array(1,2,3),'Dimitri',false,'Dimitri')

document.write('<br>A ultima ocorrência do elemento no array é: ' + arr3.lastIndexOf('Dimitri'))

const arr4 = new Array(true,'Dimitri', 20, new Array(1,2,3))
console.log(arr4[3][0])
console.log(arr4[3].length)

//método literal - []

const x =[]
console.log(x)

const prova = ['AV1', 'AV2', 'AV3']
console.log(prova)

//exemplo recebendo valores externos

var notas = []
for(i=0; i < 3; i++){
	notas[i] = Number(prompt(`Digite o valor da nota ${i}`))
}
//document.write(`<br>Notas dos alunos: ${notas[0]},${notas[1]},${notas[2]}`)
document.write("<br>Notas dos alunos: " + notas[0] + ','+ notas[1]+ ',' + notas[2])
/*document.write(`<br>Nota 1 do aluno: ${notas[0]}`)
document.write("<br>Nota 1 do aluno: " + notas[0])
document.write(`<br>Nota 2 do aluno: ${notas[1]}`)
document.write("<br>Nota 2 do aluno: " + notas[1])
document.write(`<br>Nota 3 do aluno: ${notas[2]}`)
document.write("<br>Nota 3 do aluno: " + notas[2])
//calcularMedia(notas)

//exemplo com string

const nome = 'Henrique'
document.write("<br>A string tem " + nome.length + " elementos")

//outro exemplo

const teste = ['Lylian', 27 , [2,4,6], false]
console.log(teste)
teste[4] = 'Novo valor'//inserindo novo valor no array
console.log(teste)
teste[teste.length]='Novo valor 1'//inserindo novo valor no array
console.log(teste)

//iterar array - usando for

const pessoa = ['João','Robinson','Nayara','Lylian']
for(var i=0; i < pessoa.length; i++){
	document.write('<br>' + pessoa[i])
}

//função de ordenação
//reverse() - inverte a ordem do array

const pessoas = ['João','Robinson','Nayara','Lylian']
document.write('<br>A ordem do array é: '+ pessoas)
document.write('<br>A ordem inversa do array é: '+ pessoas.reverse())
document.write(`<br>A ordem inversa do array é: ${pessoas.reverse()}`)

//sort() - para colocar em ordem alfabética

document.write('<br>A ordem alfabética do array é: '+ pessoas.sort())

//método join - para alterar o separador

document.write('<br>' + pessoas.join(' - '))
document.write('<br>' + pessoas.join(' * '))
document.write('<br>' + pessoas.join(' / '))
document.write('<br>' + pessoas.join(' '))

//outro exemplo

const nome1 = ['Thereza', 'Daigaro', 'Sávio','Robinson']
nome1.sort(),nome1.reverse()
document.write('<br>'+nome1.join(' - '))*/