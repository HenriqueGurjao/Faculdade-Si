/*Escreva um programa que recebe um horário (horas, minutos, segundos) e determina quantos segundos já se passaram desde que o dia começou e quantos segundos faltam para o fim do dia. Assuma 24h*/

#include <stdio.h>

int main(void) {
//receber horario

   int hora, segundo, minutos, dia, falta,cons;
   printf("me informe os hora:");
   scanf("%d:",&hora);
   printf("me informe os minutos:");
   scanf("%d:",&minutos);
   printf("me informr os segundo:");
   scanf("%d", &segundo);

//determina quantos segundos já se passaram desde que o dia começou 
  printf("Passaram-se %d segundos\n ", hora*3600+minutos*60+segundo);


//quantos segundos faltam para o fim do dia. Assuma 24h
 printf("faltaram %d segundos",hora*3600+minutos*60+segundo-84600);

  return 0;
}