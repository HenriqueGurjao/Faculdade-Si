/*Faça um programa que leia um valor inteiro em segundos, e depois mostrá-lo em horas, minutos e segundos.
Ex.:
Exemplo de saída do programa:

36800 segundos são 10 horas e 13 minutos e 20 segundos
*/
#include <stdio.h>

int main(void) {
  int hora, segundo, minutos;
   printf("me informe os segundos:");
   scanf("%d",&segundo);

//calculo 
hora= segundo / 3600;
minutos= (segundo % 3600) / 60;
segundo= (segundo % 60);


 printf("%dh:%dmin:%dseg",hora, minutos,segundo );



  return 0;
}