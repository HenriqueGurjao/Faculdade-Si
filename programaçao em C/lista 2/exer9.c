/*9. Faça um programa em C que leia um conjunto de 365 registros, cada um contendo a temperatura de um dia do ano, onde os valores são lidos ordenados por dia. O programa deverá calcular e imprimir:
    - Temperatura média do ano;
    - Número de dias do ano em que a temperatura foi superior a 27º .
*/

#include <stdio.h>

int main(void) {
  int cont1, cont2=0, dia1, dia2;
  char op;
  float temp,media;

dia1 = 365;
dia2 = 366;

  printf ("Esse ano é bisexto?(S/N)");
  scanf("%c",&op);

  if (op == 's'){
  
   for (int i= 0;i <= dia1 ; i++){
      printf ("\nme informe a temperatura do dia:");
      scanf ("%f",&temp);
      
      if (temp > 27){
        cont2++;
      }
      if (temp > 0){
        cont1+=temp;
        media= cont1/dia1 ;
      }
    }
  } else if (op == 'n'){

    for (int i= 0;i <= dia2; i++){
      printf ("\nme informe a temperatura do dia:");
      scanf ("%f",&temp);
      
      if (temp > 27){
        cont2++;
      }
      if (temp > 0){
        cont1+=temp;
        media= cont1/dia2;
      }
    }
  }


printf("\na temperatura media do ano foi de %.2f\n",media);
printf("Este ano possui %d dias acima de 27ºC",cont2);



  return 0;
}