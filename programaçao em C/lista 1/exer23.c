//Faça  uma prova de matemática para crianças que estão aprendendo a somar números inteiros menores do que cem. Escolha números aleatórios entre 1 e 100, e mostre na tela a pergunta: qual é a soma de ”a”+ ”b”, onde ”a”e ”b” são os números aleatórios. Peça resposta. Faça cinco perguntas ao aluno, e mostre para ele as perguntas e as respostas corretas, além de quantas vezes o aluno acertou.

#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

int i,acertos=0;
float a,b,soma,resp;

int main()
{ srand(time(NULL));
for(i=0;i<10;i++){
 a = (rand () % 100) + 1 ;
 b = (rand () % 100) + 1 ;
 soma = a+b;
 resp = soma;
  printf ("qual é a soma de %.0f + %.0f?\n\n",a,b);
 scanf("%f",&resp);
 if (resp != soma)
  printf("resposta errada. a resposta certa e:%f\n",soma);
 else
 acertos ++;
}
printf("voce acertou em:%d\n",acertos);
return 0;

}
