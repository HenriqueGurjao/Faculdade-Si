//Usando switch, escreva um programa que leia um inteiro entre 1 e 7 e imprima o dia da semana correspondente a este numero. Isto  é, domingo, se 1, segunda-feira, se 2, e assim por diante.

#include <stdio.h>

int main(void) {
  int numero;
  
  printf("me informe numero entre de 1 a 7:\n");
  scanf("%d",&numero);
  
  switch (numero){
    case 1:
      printf("domingo\n");
      break;
    case 2:
      printf("segunda-feira\n");
      break;
    case 3:
     printf("terça-feira\n");
     break;
    case 4:
      printf("quarta=feira\n");
      break;
    case 5:
      printf("quinta-feira\n");
      break;
    case 6:
      printf("sexta-feira\n");
      break;
    case 7:
      printf("sábado\n");
      break;
    default:
      printf("invalido\n");
      break;
  }
  
   if (numero >= 1 && numero <= 7){
    printf("numero valido\n");
    scanf("%d",&numero);  
} 
  else {
    printf("numero invalido");
}


  return 0;
}