function limpar(){
	document.getElementById('visor').value =' '
}

function preencher(valor){
	document.getElementById('visor').value +=valor
}

function calcular(){
	let result = 0
	result = document.getElementById('visor').value 
	document.getElementById('visor').value =' '
	document.getElementById('visor').value = eval(result)
	}

//Intervalo de tempo
let tmp

function mudaCor(){
	let obj = document.getElementById('div1')
	let r = Math.floor(Math.random() * 255)
	let g = Math.floor(Math.random() * 255)
	let b = Math.floor(Math.random() * 255)
	obj.style.backgroundColor = `rgb(${r},${g},${b})`
}

/*let temp = setTimeout(mudaCor,3000)
window.addEventListener('load',mudaCor)*/



function iniciar(){
	tmp = setInterval(mudaCor,3000)
}

function parar(){
	clearInterval(tmp)
}

function addEventos(){
	document.getElementById('bt1').addEventListener('click',iniciar)
	document.getElementById('bt2').addEventListener('click',parar)
}

window.addEventListener('load',addEventos)