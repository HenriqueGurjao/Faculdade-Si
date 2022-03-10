/*4.Escreva um programa que recebe as dimensões (em metros) de um terreno retangular e em seguida as dimensões de uma casa (também em metros e retangular) sobre este terreno. Em seguida calcule e apresente a área livre do terreno, em metros quadrados e em percentagem.*/

#include <stdio.h>

int main(void) {
 int a, b , c, d,rest1,rest2, AL, porcentagem;
  printf("qual é a dimenção do seu terreno?\n");
   scanf("%d",&a);
   scanf("%d",&b);
  

  printf("qual é a dimenção da seu casa?\n");
   scanf("%d",&c);
   scanf("%d",&d);
  

//calculo
rest1=a * b;
rest2=c * d;
AL=rest1 - rest2;
porcentagem = (rest2 * 100)/(rest1);

//fim

  printf("Seu terrenos tem: %d m²\n",rest1);
  printf("Seu área da sua casa é: %d m²\n",rest2);
  printf("Seu terrenos livre è: %d m²\n",AL);
  printf("porcentagem do terreno livre: %d porcentagem\n",100 - porcentagem);
  return 0;
}