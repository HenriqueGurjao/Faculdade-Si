function pularLinha(){
	document.write('<br>')
}


/*1.Criar um array com 20 elementos inteiros.
    Imprimir o maior e o menor valor , 
    sem ordenar,
    o percentual de números pares e 
    a média dos elementos do vetor.
*/

const arr = new Array (1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)

var Maior = arr[0]
var Menor = arr[0]

    for(var i = 0; i <= 20; i++){
        if (Maior < arr[i]){
            Maior = arr[i]
        }
    }
    for(var i = 0; i <= 20; i++){
        if (Menor > arr[i]){
            Menor = arr[i]
        }
    }

    console.log ("O maior numero é:", Maior)
    document.write ("O maior numero é:", Maior)
pularLinha()
    console.log ("O menor numero é:", Menor)
    document.write ("O maior numero é:", Menor)

pularLinha()
pularLinha()

const porarr = arr.filter( function ( porce){
    return porce % 2 ==0
})
console.log (porarr.length, " de ", arr.length)
document.write (porarr.length, " de ", arr.length)

pularLinha()
pularLinha()
    
const mediarr = arr.reduce( function( prevVal, elem ) {
    return prevVal + elem
}, 0 );
document.write ("a media de seguencia é : ", mediarr / 20)
console.log ("a media de seguencia é : ", mediarr / 20)

pularLinha()
/*2.Escreva um programa que receba do usuário 3 notas para dado aluno, 
 armazenando-as em um array; em seguida,
o programa deve imprimir na tela tais notas. */
pularLinha()


const notas = [ ]
    for(i=0; i < 3; i++){
        notas[i] = Number(prompt(`Digite o valor da nota ${i}`))
    }

document.write ("as notas do aluno são: ", notas)

pularLinha()

/*3. Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. 
Faça uma função que receba 2 parâmetros, DANO e SAÚDE. A função deve retornar verdadeiro se 
o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e falso caso contrário.*/

var saude = Number(prompt("Qual sua quantidade de vida ne jogo:"))
var dano = Number(prompt("Quanto de Dano vc recebeu?"))

vidafinal = saude - dano

function danofinal(vidafinal){
    if (vidafinal <= 0){
        console.log ("verdade vc morreu")
    } else {
        console.log ("falso vc ainda ta vivo")
    }
}
    if (vidafinal <= 0){
        document.write("<br>O seu personagem MORREU <br>" ) 
        document.write ("Dano recebido foi de ",dano , "<br>seu personagem ficou com ",vidafinal, " vida") 
        danofinal(vidafinal)       
    } else if (vidafinal > 0 || vidafinal < 30){
        document.write("<br>O seu personagem estar QUASE morrendo <br>"," Seu personagem precisa de se curar URGENTIMENTE!!! <br>" ) 
        document.write ("Dano recebido foi de ",dano , "<br>seu personagem ficou com ",vidafinal, " vida")  
        danofinal(vidafinal)      
    } else if (vidafinal > 30){
        document.write("<br>O seu personagem ainda esta VIVO <br>" ) 
        document.write ("Dano recebido foi de ",dano , "<br>seu personagem ficou com ",vidafinal, " vida")  
        danofinal(vidafinal)      
    }

