let slides = new Array('s1.jpg','s2.jpg','s3.jpg','s4.jpg','s5.jpg')
let tam = slides.length
let satual = 0

let tmpslider

function trocaAutomatica(){
	satual++
	if(satual >= tam){
		satual=0
	}
	document.getElementById('dvSlider').style.backgroundImage = `url('${slides[satual]}')`
}

function iniciaSlider(){
	document.getElementById('dvSlider').style.backgroundImage = `url('${slides[satual]}')`
	tmpslider = setInterval(trocaAutomatica,2000)
}

function parar(){
	clearInterval(tmpslider)
}

function troca(dir){
	satual += dir
	if(satual < 0){
		satual =4
	}else if(satual >= tam){
		satual = 0
	}
	document.getElementById('dvSlider').style.backgroundImage = `url('${slides[satual]}')`
	clearInterval(tmpslider)
}

//Relogio digital

function relogio(){
	let data = new Date()
	let hor = data.getHours()
	let min = data.getMinutes()
	let seg = data.getSeconds()
	
	if(hor < 10){
		hor = '0' + hor
	}
	if(min < 10){
		min = '0' + min
	}
	if(seg < 10){
		seg = '0' + seg
	}
	
	let horas = hor + ':' + min + ':' + seg
	document.getElementById('rel').value = horas
}

let timer = setInterval(relogio,1000)

//Abertura de janela

let novaJanela

/*
function executar(){
	//novaJanela = window.open('http://www.google.com' , '_blank', 'width=800 height=600')
	novaJanela = window.open('','','width=400 height=300')
	novaJanela.document.write('Está informação será apresentado em uma nova janela')

}

function verificar(){
	document.getElementById('mensagem').innerText = novaJanela.closed
}*/

//definindo o valor do top e left
/*
function executar(){
	novaJanela = window.open('','','width=400 height=300 left=300 top=100')
}
	
function verificar(){
	novaJanela.moveBy(50,50)//horizontal/vertical
	novaJanela.focus()
}*/

//mover positivo(andar para a direita) e mover negativo (andar para a esquerda)

function executar(){
	novaJanela = window.open('','','width=400 height=300 left=300 top=100')
}

function moverPositivo(){
	novaJanela.moveBy(0,50)
	novaJanela.focus()
}

function moverNegativo(){
	novaJanela.moveBy(0,-50)
	novaJanela.focus()
}

function moverUnico(){
	novaJanela.moveTo(100,50)
	novaJanela.focus()
}





/* window.open - para abrir a pagina em uma nova janela;
podemos passar vários parametros dentro do objeto window, o primeiro é
a url, o 2 parametro é o _blank(para abrir uma nova janela)ou o parent ou self
(para abrir na mesma janela) e o terceiro parametro são as dimensões width, 
height(o menor valor é 100) 
moveBy() - para dar movimento a nova janela,o moveBy permite passar 2 parametros
(x,y), quando clicarmos no botão a janela vai andar na tela seguindo os valores
passados nas coordenadas, valores em pixel, pode passar apenas o valor de x ou
somente o de y ou os 2 parametros.
focus()- para colocar a novaJanela como protagonista, ou seja, ficar na frente 
da janela principal.
moveTo() - executa a função 1 unica vez.

*/