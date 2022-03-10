/*3. Elabore um programa para efetuar o cálculo da quantidade de litros de cerveja consumida por um determinado bloco durante o carnaval. O programa recebe como entrada a quantidade  de packs de cerveja consumidos durante o período. 
    - considerar que o carnaval possui cinco dias;
    - considerar que uma pack de cerveja tem 12 latas;
    - sabe-se que cada lata tem 350ml e que 1litro tem 1000ml;
    - Supondo que cada pack custa R$18.00, informar também o gasto em cerveja do referido bloco;*/
#include <stdio.h>

int main(void) {
  int temp, valor,peck,latas,L,L2, ml ;
  

  printf("Quantos pecks foram consumidos nesse carnaval?");
   scanf("%d",&peck);

temp= 5;
latas= peck * 12;
valor= peck * 18.00;
ml= latas * 350;
L= ml / 1000;
L2= L / 5;

  printf("\n");
  printf("Quantas latas:%d\n", latas);
  printf("\n");
  printf("Qual valor total:%d\n", valor);
  printf("\n");
  printf("Quantos ml:%d\n", ml);
  printf("\n");
  printf("Quantos Litros:%d\n", L);
  printf("\n");
  printf("Foram consumido quantos litros por dias:%d\n", L2);

  return 0;
}