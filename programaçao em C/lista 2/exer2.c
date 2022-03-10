/*Faça um programa que leia a quantidade e o preço de 50 produtos que foram comprados
por uma empresa. Ao final deve ser escrito o total gasto pela empresa.*/
#include <stdio.h>

int main(void) {
  float i, valor,gasto=0, quant;
 
  for(i=0;i<50;i++){
    printf("me informe o valor do produto:");
    scanf("%f",&valor);
    printf("me informe quantos comprou?");
    scanf("%f",&quant);
    valor=quant*valor;
    gasto=gasto+valor;
  }
  
  printf("o total gasto pela empresa:%.2f",gasto);

  return 0;
}