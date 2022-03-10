//Função para mudar a cor de fundo

function mudaCor(cor){
	document.bgColor = cor
}

//Exemplo com botão

function displayDate(){
	document.getElementById('a').innerText = Date()
}

//Exemplo de soma

function somar(){
	let a = document.getElementById('n1')
	let b = document.getElementById('n2')
	let c = document.getElementById('resp')
	
	resp.innerText=('A soma de n1 + n2 = ' + (parseInt(a.value)+ parseInt(b.value)))
}

/*fazendo a mesma coisa de maneira diferente

function somar(){
	let s1 = document.getElementById('n1').value
	let s2 = document.getElementById('n2').value
	let s3 = Number(s1) + Number(s2)
	alert(s3)
	document.write('<br>A soma de s1 + s2 = ' + s3)
	document.write(`<br>A soma de ${s1} + ${s2} = ${s3}`)
	console.log(`A soma de ${s1} + ${s2} = ${s3}`)
}*/

//exemplo de média

function calcularMedia(){
	let d = parseFloat(document.getElementById('nota1').value)
	let e = parseFloat(document.getElementById('nota2').value)
	
	let media =(d + e)/2
	
	if(media >=6)
		if(media == 10)
			document.write('<br>Uau!Aprovadissímo!!!'+ media)
		else
			document.write('<br>Parabéns! Aprovado! Média ' + media)
	else
		document.write('<br>Reprovado'+ media)
}

//Exemplo de conversão

function convcm(){
	let m = document.getElementById('m')
	let cm = document.getElementById('cm')
	
	cm.innerText=(`O valor em cm é ${parseFloat(m.value*100)}`)
}

function convmm(){
	let m = document.getElementById('m')
	let mm = document.getElementById('mm')
	
	mm.innerText=(`O valor em mm é ${parseFloat(m.value*1000)}`)
}

/*outra forma de fazer

function convcm(){
	let m = parseFloat(document.getElementById('m').value)
	let x = m * 100
	
	document.write(`O valor em cm é ${x}`)
}

function convmm(){
	let m = parseFloat(document.getElementById('m').value)
	let y = m * 1000
	
	document.write(`O valor em mm é ${y}`)
}*/

//Formulário

let nome
let email
let num=0

function escrever(tela){
	info = 'Usuário numero: ' + (++num) + '\n'
	info +='Nome: ' + nome + '\n'
	info +='email: ' + email + '\n'
	tela.value +=info
}