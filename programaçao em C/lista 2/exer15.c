/*Faça um programa que solicite ao usuário para digitar valores numéricos inteiros positivos. Encerre a entrada de dados quando for digitado um número negativo ou zero. Calcule a média dos números positivos digitados.*/

#include <stdio.h>

int main(void) {
  int n1,n2=0;
  float contador = 0;

  while(1==1){
    printf("me informe um numero:\n");
    scanf("%d",&n1);
    n2++;
    if(n1>0){
      contador += n1;
    }else if( n1 <= 0){
      break;
    }
  }

printf("media dos numeros digitados é:%f",contador / n2);
  return 0;
}