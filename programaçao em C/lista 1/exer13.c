/*13. Entrar com o salário de uma pessoa e imprimir o salário descontado do INSS segundo a tabela abaixo: 
    - menor ou igual a R$ 600,00 – isento
    - maior que R$ 600,00 e menor ou igual a R$ 1200,00 – 20%
    - maior que R$ 1200,00 e menor ou igual a R$2000,00 – 25%
    - maior que R$ 2000,00 – 30%

------------exemplo----------
digite o salario: 1850
o salario final e 1387.50

*/



#include <stdio.h>

int main(void) {
  int salario, desconto;
  
  printf("me informe seu salario:");
  scanf("%d",&salario);

// suposição 
    if (salario <= 600) {
      printf ("voçê ira receber:%d reais",salario);
    } else if (salario >= 601 && salario <=1200) {
      salario = salario - (salario* 0.2); 
      printf("voçê ira receber:%d reais",salario);
    } else if (salario >= 1201 && salario <+ 2000){
       salario = salario - (salario* 0.25);
      printf("voçê ira receber:%d reais",salario);         
    } else if (salario > 2001 ) {
       salario = salario - (salario* 0.30);
      printf("voçê ira receber:%d reais",salario);
    }

  return 0;
}