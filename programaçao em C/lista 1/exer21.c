/*Leia a distância em Km e a quantidade de litros de gasolina consumidos por um carro em um percurso, calcule o consumo em Km/l e escreva uma mensagem de acordo com a tabela abaixo:

consumo|km/L | mensagem
menor que	|8|	Venda o carro!
entre |	8 e 14|	Econômico
maior que |	14 |	Super econônico
*/
#include <stdio.h>

int main(void) {
 float km,l,result;

  printf("me informe quantos km você percorreu:");
  scanf("%f",&km);
  printf("me informe a quantidade L que foi usado:");
  scanf("%f",&l);

//calculo
result = km / l;

//suposição 

  if(result < 8)
  {
    printf("Venda seu carro!");
  }else if(result >= 8 && result <= 14)
  {
    printf("Econômico!");
  }else
  printf("Super econômico!");
  return 0;
}