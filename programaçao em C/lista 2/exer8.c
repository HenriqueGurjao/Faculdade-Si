/*Faça um programa que solicite ao usuário para digitar valores numéricos inteiros positivos. Encerre a entrada de dados quando for digitado um número negativo ou zero. Calcule a média dos números positivos digitados.*/
#include <stdio.h>

int main(void) {
  float num,i,cont=0,media,soma;

  for(;;){
    
    printf("me informe um valor:");
    scanf("%f",&num);

    if(num<0){ 
      num=0;
    }

    cont++;
    soma+=num;
    media=soma/(cont-1);

    if(num<=0){
      break;
    }
  }
    printf(" media de numeros citados são:%f",media);
  return 0;
}