#include <stdio.h>

/*Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o tipo de funcionário, conforme a tabela abaixo. Faça um programa que leia o salário e o tipo de um funcionário e calcule o novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá, então, receber 40% de aumento. Mostre o salário antigo, o novo salário e a diferença


cod-tipo-porcentual
101-1-10%
102-2-20%
103-3-30%

*/

int main(void) {
 int cargo;
 float salario, Nsalario;

  printf("me informe seu cargo");
  scanf("%d",&cargo);

  printf("me informe seu salario");
  scanf("%f",&salario);

  //suposição 
    if (cargo == 101){
      Nsalario = salario + (salario * 0.1);
      printf("Seu cargo é do Tipo: 1\n");
      printf("Seu salario sera:\n R$ %.2f",Nsalario);
    } else if (cargo == 102){
      Nsalario = salario + (salario * 0.2);
      printf("Seu cardo é do Tipo: 2\n");
      printf ("Seu salario sera:\n R$ %.2f",Nsalario);
    } else if (cargo == 103){
      Nsalario = salario + (salario * 0.3);
      printf("Seu cardo é do Tipo: 3\n");
      printf("Seu salario sera: R$ %.2f",Nsalario);
    } else {
      Nsalario = salario + (salario * 0.4);
      printf("Seu cardo é do Tipo: 4\n");
      printf("Seu salario sera: R$ %.2f",Nsalario);
    }


  return 0;
}
