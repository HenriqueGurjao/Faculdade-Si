/*Elabore um programa que leia um número de 50 idades. Calcule e escreva a idade média deste grupo de indivíduos. */

#include <stdio.h>

int main(void) {
  int i, idade=1,idadeF;
  float media;

  for(i=0;i<50;i++){
    printf("fale sua idade?");
    scanf("%d",&idade);
    idadeF+=idade;
  }

  media=idadeF/50;

printf("a medias das idades é de %.1f",media);

  return 0;

}