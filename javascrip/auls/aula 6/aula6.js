//matado de concat () - para contatenar elementos no final do array 
/*
const nome = ['pedro','dimitri', 'henrique', 'joão']
//document.write(nome.concat(' Nayara', 'Lylian', 'marina').join(' - '))

// concatenando a parte de 2 array

const masculino = ['pedro','dimitri','henrique','joão']
const feminino = ['Nayara','Lylian','Marina']
const pessoas = feminino.concat(masculino).join(' / ')
//document.write('<br>' + pessoas)

/////concatenando a parte de 3 array

const a1 = ['pedro','dimitri','henrique','joão']
const a2 = ['Nayara','Lylian','Marina']
const a3 = ['mariana','robinson','christian']
const a4 = a2.concat(a3,a1).join(' | ')
//document.write('<br>'+ a4)

//metado slice() - para dividir um array sem alterar a array principal 
const pessoal = ['mariana','robinson','christian','Nayara','Lylian','Marina','pedro','dimitri','henrique','joão']
//document.write('<br>' + pessoas.slice(3))
//document.write ('<br>' + pessoas)

// metado splice() - para excluir/incluir novos elementos 

const pessoa2 = ['mariana','robinson','christian','Nayara','Lylian','Marina','pedro','dimitri','henrique','joão']
Document.write('<br>' + pessoa2.splice(2,1,'daigaro','Andre'))

// esse comentario esta classe room da aula de js
document.write('<br>' + pessoa2)


//metado push() - add um novo elemento no final do array e mostra a quantidade 

const pessoa3 = ['mariana','robinson','christian']
document.write('<br> a quantidade de elemento no array é ', pessoa3.push('Nayara','Lylian','Marina'))
document.write('<br>' + pessoa3)

 // pop() = para remover o ultimo elemento do array
 const pessoa4 = [ "Nayara" , "Lylian", "Marina" ] 
 document.write("<br>" + pessoa4.pop())
 document.write("<br>" + pessoa4)

 // metodo unshift() - para inserir novos elementos no inicio do array
 const pessoa5 = [ "Nayara" , "Lylian", "Marina" ] 
 document.write("<br>" + pessoa5.unshift('thereza','andre','paulo'))
 document.write("<br>" + pessoa5)

//metado shift () - para remover a primeiro elemento da fila do array

document.write('<br> o elemento removido foi:' + pessoa5.shift())
document.write('<br>' + pessoa5)
//
document.write('<br> o elemento removido foi:' + pessoa5.shift())
document.write('<br>' + pessoa5)
*/

// função every () - verificar se todos os elementos atendem a condição
const pessoa6 = ['mariana','robinson','christian', "Nayara" , "Lylian", "Marina"]
function p(elem){
    return(typeof elem == 'string')
}
document.write('<br> os elementos atende a condição estabelecida?'+ pessoa6.every(p))

// outra 

const pessoa7 = ['mariana','robinson','christian', "Nayara" ,1234, "Lylian", "Marina"]
function p2(elem){
    return(typeof elem == 'string')
}
document.write('<br> os elementos atende a condição estabelecida?'+ pessoa7.every(p2))