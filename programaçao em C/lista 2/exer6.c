/*Faça um programa em C que leia um valor X e calcule e imprima os 20 primeiros termos da série:

S = \dfrac{1}{x+1} + \dfrac{1}{x+2} + \dfrac{1}{x+3} + ...
*/


#include <stdio.h>
//#include <math.h>

int main(void) {
  int x,i;
   printf("Diga o valor de x:");
   scanf("%d",&x);

    for (i=0;i<20;i++){
      printf("1/%d\n",x+i+1);  
  }

  return 0;
}