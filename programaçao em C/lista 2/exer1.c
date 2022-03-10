/* Faça um programa que leia uma sequência de 100 números e informe quantos números digitados são negativos.*/

#include <stdio.h>

int main(void) {
  float i, num,cont=0;
 
  for(i=0;i<10;i++){
   printf("me informe um numero:");
   scanf("%f",&num);
    if(num<0){
      cont++;
    }
  }

  printf("possui %.0f negativos",cont);
  return 0;
}