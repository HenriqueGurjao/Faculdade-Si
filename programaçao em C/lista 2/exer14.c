/*14. Construa um programa que leia vários números inteiros e mostre qual foi o maior e o menor valor fornecido. Para cada valor digitado, deve ser solicitado ao usuário que ele digite se ele deseja continuar entrando com valores. 
    - OBS: O usuário deve responder “N” para sair.
*/
#include <stdio.h>

int main(void) {
  int idade = 0, menor = 9999, maior = 0;
  char continuar = 's';
  
  while(continuar == 's'){
    printf("me informe um número inteiro: ");
    scanf("%d", &idade);
    printf("me informe continuar digitando ?(s/n)\n");
    scanf(" %c", &continuar);

    if(idade < menor){
      menor = idade;
    }
    if(idade > maior){
      maior = idade;
    }
  }

printf("A maior idade é: %d\n", maior);
printf("A menor idade é: %d\n", menor);

  return 0;
}