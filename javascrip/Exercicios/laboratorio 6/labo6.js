/*1. sortear 6 números de 1 a 60 e guardar em um  array. Depois peça para o usuário dizer 6 números, um de cada vez  e guarde-os em uma outra array. 
Aí diga quantos números ele acertou. Sim, é a loteria certinha desta vez! Tente acertar os 6 números. Depois faça as contas de quantas chances você 
tem de acertar todos os 6. Você nunca mais vai jogar na loteria!*/
//var num = Math.random()*60

var num = []
var Seunumero = []
var ganhou = []
for(var i=0;i<6;i++){
    Seunumero[i] = Number(prompt("Me informe um numero:"))
    num[i] = Number(Math.round(Math.random() * 60))
}
document.write("<b>Numeros sorteados:</b><br>")
for (var i = 0;i<6;i++){
    num[i] = Number(Math.round(Math.random() * 60))
    if(num[i] != num[i-1] && num[i] != num[i-2] && num[i] != num[i-3] && num[i] != num[i-4] && num[i] != num[i-5] && num[i] != num[i-6]  ) {
      document.write(num[i].toFixed(0) + " ,") 
      } else {
        i--
    }
}
for(var i=0; i<Seunumero.length; i++) {
    if(num.indexOf(Number(Seunumero[i])) > -1) {
        ganhou.push(Seunumero[i])
    }
}

Seunumero.sort((a, b) => a - b)
num.sort((a, b) => a - b)

document.write("<br> Você acertou " + ganhou.length + " números: ", ganhou + "<br>")
document.write("Seus numeros são:<br>")
for (var i = 0;i<6;i++){
    console.log(num)
    console.log(Seunumero)

    document.write(Seunumero[i].toFixed(0) + " ," ) 
}

if (num === Seunumero){
    document.write("PARABÉNS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
} else {
    document.write("<br> PERDEUUUUUUUUU LIXO BURRO BURRO BURRO NUNCA ganha")
}