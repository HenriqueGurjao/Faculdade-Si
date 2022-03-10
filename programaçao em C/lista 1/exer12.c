/*Faça um programa que receba o salário de um trabalhador e o valor da prestação de um empréstimo, se a prestação for maior que 20% do salário imprima: Empréstimo não concedido, caso contrário imprima: Empréstimo concedido*/
#include <stdio.h>
#include<math.h>

int main(void) {
  int salario, porcentagem, prestimo, prestação, c;

  printf("quando que você ganhou no salario:");
  scanf("%d",&salario);
  printf("qual é o valor da prestação:");
  scanf("%d",&prestação);

//calculo 

c =(salario * 0.2);


//suposição 
  if (prestação > c){
    printf("Empréstimo não concedido");
  } else {
    printf("Empréstimo concedido");
  }

  return 0;
}