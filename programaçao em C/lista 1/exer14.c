/*Fazer um programa em "C" que leia o preço de um produto. Se o preço for menor que R$500,00, conceda um desconto de 8,7%.  Acima deste valor, conceda um desconto de 10%*/

#include <stdio.h>

int main(void) {
  float produto, desconto;

  printf("Me informe o valor do produto:");
  scanf ("%f",&produto);
 //if (salario >= 601 && salario <=1200) {salario = salario - (salario* 0.2);

  if (produto<500) {
    produto =  produto - (0.087 * produto );
    printf("Seu produto ira receber 8,7 porcento de desconto");
    printf("seu produto ira custa:R$%.2f",produto);
  } else if (produto >= 501) {
    produto = produto - (produto * 0.1);
    printf("Seu produto ira receber 10 porcento de desconto");
    printf("seu produto ira custa:R$%.2f",produto);
  }

  











  return 0;
}