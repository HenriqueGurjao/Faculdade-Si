/*Faça um programa que leia o valor da variável A e calcule e imprima o valor de S dado por
S = \dfrac{1}{A} + \dfrac{2}{A-1} + \dfrac{3}{A-2} + ... + A
*/

#include <stdio.h>
#include <math.h>

int main(void) {
  
  float i,A,valor,soma,valorF;
  
  printf ("me informe o valor de A:");
  scanf ("%f",&A);

  for(i=0;i<A;i++){
    valor=A-i;
    valorF=(i+1)/valor;
    soma+=valorF;
    printf("%.1f\n",valorF);
  }

  printf("a soma dos termos é de %.1f",soma);
  return 0;
}