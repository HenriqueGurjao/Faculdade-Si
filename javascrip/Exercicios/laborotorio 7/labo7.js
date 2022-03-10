//Questao 1

var num = prompt("Digite uma temperatura em celsos")
function temp(x){
    return ((x * 9/5) + 32);

}
document.write(temp(num) + "fº")

//Questao 2

var n1= []
var n2= parseInt(0)
for (var i = 0;i<10;i++){
    n1[i] = parseInt(Math.random(100)*100).toFixed(0)
    n2+= parseInt(n1[i])
}
document.write("<br>A soma dos numeros do array" + "[" + n1 + "] é:" + n2 )

//questao 3
var n3= []
for(var i= 0;i<10;i++){
    n3[i] = parseInt(Math.random(100)*100).toFixed(0)
}

var n4 = Math.max(...n3) 
document.write("<br> O Array:" + n3)
document.write("<br>O maior numero:" + n4)