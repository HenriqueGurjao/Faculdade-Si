/*Construir um programa que indique se o número digitado está compreendido entre 20 e 90 ou não.*/
#include <stdio.h>

int main(void) {
  
  int numero;

  printf("me informe um número");
  scanf("%d",&numero);

  if (numero >= 20 && numero<=90) {
    printf("esse se incontra entre 20 e 90");
  } else {
    printf("esse número se incontra entre 20 e 90");
  } 

    
  return 0;
}