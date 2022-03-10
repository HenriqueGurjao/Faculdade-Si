/*
.Construa um programa que peça um número 
.informe se ele é ou não é perfeito

Chama-se perfeito a um número inteiro não negativo que seja igual a soma dos seus divisores, exceto ele mesmo.

exemplo:

O número 6 possui divisores 1, 2, 3 e 6, portanto 1+2+3=6; 6 é um número perfeito. 

O número 8 possui divisores 1, 2, 4 e 8, portanto 1+2+4=7; 8 não é um número perfeito.
*/
#include <stdio.h>

int main(void) {
  int num, i, cont=0;

  printf("me informe um numero:");
  scanf ("%d",&num);
  
  for (i = 1; i < num; i++){
    if (num % i == 0){
      cont = cont + i;
      printf("%d ",i);      
    } 
  }

  if (num == cont){
    printf("\nO numero %d e perfeito\n", num);
  }else {
    printf("\nO numero %d nao e perfeito\n", num);
  }

  return 0;
}
