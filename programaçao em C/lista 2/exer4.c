/*Ler um número (limite superior), um incremento e outro número (limite inferior). Exiba os números compreendidos entre o limite inferior e o limite superior (inclusive os limites), considerando o incremento

EX.:
|Valores lidos: 11 (limite inferior) 4 (incremento) 25 (limite superior)
Será impresso na tela: 11 15 19 23
obs: Considerar a hipótese de o valor inicial ser maior que o valor final|

*/

#include <stdio.h>

int main(void) {
  int valorsuperior, valorinferior,razao,i;
  
  printf("me informe o valor inferior: ");
  scanf("%d",&valorinferior);

  printf("me informe o valor superior: ");
  scanf("%d",&valorsuperior);
  
  printf("me informe o  incremento: ");
  scanf("%d",&razao);

  for(;;){
    if (valorinferior <= valorsuperior){
      printf("%d ",valorinferior);
      if(valorinferior + razao <= valorsuperior){
      valorinferior += razao;
      } else{
      break;
      } 
    } 
    if(valorinferior > valorsuperior){
        printf("\nValor inicial é superior ao valor final\nisso ta errado \ntente novamente");
        break;
      }
  }
  

  return 0;
}