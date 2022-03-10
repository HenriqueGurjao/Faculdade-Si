/*Uma empresa contrata um encanador a R$ 30.00 por dia. Crie um programa que solicite o número de dias trabalhados pelo encanador e imprima a quantia líquida que deverá ser paga, sabendo-se que são descontados 8% para imposto de renda.*/

#include <stdio.h>
#include <math.h> 

int main(void) {
  int dias, T, resut1, desc;
  float resut2;
  printf("quantos dias você trabalhou?");
  scanf("%d",&dias); 

T= 30;
desc= 8;
resut1= T * dias;
resut2= resut1 - (resut1 * desc / 100);

  printf("Você ira receber pelo seu trabalho:%f",resut2);
 
  return 0;
}