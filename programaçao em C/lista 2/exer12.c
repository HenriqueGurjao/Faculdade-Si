/*12. Faça um programa que leia a idade de 100 pessoas. Ao final:
    - Calcule e mostre a idade média desse grupo de indivíduos.
    - Escreva também a porcentagem de pessoas entre 21 e 65 anos.*/

#include <stdio.h>

int main(void) {

  float idade = 0, soma = 0, cont = 0;

  for (int i = 1; i <= 10; i++)
  {
    printf("Digite sua idade: ");
    scanf("%f", &idade);

    soma += idade;

    if(idade > 21 && idade < 65)
    {
      cont++;
    }
  }

  printf("A idade média das 100 pessoas é: %.2f\n", soma/10);

  printf("Porcentagem de pessoas entre 21 e 65 anos é: %.0f", cont);

  return 0;
}