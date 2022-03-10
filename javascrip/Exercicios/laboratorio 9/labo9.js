function somar(){
	let s1 = document.getElementById('n1').value
	let s2 = document.getElementById('n2').value
	let s3 = Number(s1) + Number(s2)
    let s4 = Number(s1) - Number(s2)
    let s5 = Number(s1) * Number(s2)
    let s6 = Number(s1) / Number(s2)
	alert(s3)
	document.write('<br>A soma de s1 + s2 = ' + s3)
	document.write('<br>A subtração de s1 - s2 = ' + s4)
	document.write('<br>A multiplicação de s1 * s2 = ' + s5)
	document.write('<br>A divisão de s1 / s2 = ' + s6)

}

function calcularMedia(){
	let d = parseFloat(document.getElementById('nota1').value)
	let e = parseFloat(document.getElementById('nota2').value)
	let f = parseFloat(document.getElementById('nota3').value)

	
	let media =(d + e + f)/3
	
	if(media >=6)
		if(media == 10)
			document.write('<br>Uau!Aprovadissímo!!!'+ media)
		else
			document.write('<br>Parabéns! Aprovado! Média ' + media)
	else
		document.write('<br>Reprovado'+ media)
}

// numero 3

function TerceitoNumero(){
    let g = parseFloat(document.getElementById('NUM1').value)
    let h = parseFloat(document.getElementById('NUM2').value)
    let N3 = (g - h)
    document.write('<br>Primero Numero:' + g)
    document.write('<br>Segunta Numero:' + h)
    document.write('<br>Resultado da subtração é:' + N3)

}