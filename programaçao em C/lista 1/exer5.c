/*5.  Escreva um programa para um terminal de banco, que recebe um valor inteiro R e determina o número de notas de 100, 50, 10, 5 e 1 reais necessárias para pagar a quantia R. Faça de forma que o número de notas usado seja o menor possível. 
    
    Exemplo: para R ⇒ 45 deve dar: 
    
    0 notas de 100
    
    0 notas de 50
    
    4 notas de 10
    
    1 notas de 5
    
    0 notas de 1*/
#include <stdio.h>

int main(void) {
  
  int sal,n100,n50,n10,n5,n1,r100,r50,r10,r5,r1;
    printf("quanto vc possui na conta?");
     scanf("%d",& sal);

//calculo
n100 = sal / 100;
r100 = sal % 100;
n50 = r100 / 50;
r50 = r100 % 50;
n10 = r50 / 10;
r10 = r50 % 10;
n5 = r10 / 5;
r5 = r10 % 5;
n1 = r5 / 1;
r1 = r5 % 1;

    printf("Você ira receber notas de 100: %d\n",n100);
    printf("Você ira receber notas de 50: %d\n",n50);
    printf("Você ira receber notas de 10: %d\n",n10);
    printf("Você ira receber notas de 5: %d\n",n5);
    printf("Você ira receber notas de 1: %d\n",n1);





  return 0;
}