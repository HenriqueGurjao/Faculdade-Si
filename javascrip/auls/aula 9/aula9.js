//exemplo alterando os elementos html pelo id - getElementById

let b = document.getElementById('a')

b.style.color = 'yellow'
b.style.fontSize = '25pt'
b.style.fontFamily = 'Bodoni'
b.innerHTML= 'Estou alterando a palavra testando para <b> Testando 1</b>'

//exemplo alterando os elementos html pelo name - getElementsByName()

let c = document.getElementsByName('b')[0]

c.style.color = 'yellow'
c.style.fontSize = '25pt'
c.style.fontFamily = 'Bodoni'
c.innerText= 'Testando 2'

//exemplo alterando os elementos html pela classe - getElementsByClassName()

let d = document.getElementsByClassName('c')[0]

d.style.color = '#AACCBB'
d.style.fontSize = '25pt'
d.style.fontFamily = 'Arial'
d.innerText= 'Boa noite!'
d.style.background = '#FF55FF'

//exemplo alterando os elementos html pelo seletor - querySelector()

let e = document.querySelector('div#a')

e.innerHTML = 'Query <u> Selector </u>'
e.style.fontSize = '25pt'

let f = document.querySelector('div.c')

f.innerText = 'Olá!'
f.style.fontSize = '25pt'

//Eventos do mouse

let x = document.getElementById('teste')
//let x = document.querySelector('div#teste')

function clicar(){
	x.innerText='Clicou!'
	x.style.background = 'pink'
}

x.addEventListener('click',clicar)

function entrar(){
	x.innerText = 'Entrou!'
}

x.addEventListener('mouseenter', entrar)

function sair(){
	x.innerText = 'Saiu!'
	x.style.background = 'red'
}
x.addEventListener('mouseout',sair)

//Exemplo com imagem

function acendeLampada(){
	document.getElementById('luz').src='acesa.jpg'
}

function apagaLampada(){
	document.getElementById('luz').src='apagada.jpg'
}

function quebraLampada(){
	document.getElementById('luz').src='quebrada.jpg'
}

//exemplo de onmousedown e onmouseup

function mDown(obj){
	obj.style.backgroundColor='#1Ec5e5'
	obj.innerText = 'Evento'
}

function mUp(obj){
	obj.style.backgroundColor='#DDAADD'
	obj.innerText = 'Boa semana!'
}