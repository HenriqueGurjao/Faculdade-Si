/*2. Faça um programa que solicite ao usuário a digitação de 2 números e informe:
    - A soma dos números;
    - O produto do primeiro número pelo quadrado do segundo;
    - O resto da divisão do primeiro número pelo segundo*/
#include <stdio.h>

int main(void) {
  int x, y, soma, produto, resto;

  printf("me informe um número?");
  scanf("%d",&x);
  printf("me informe outro número?");
  scanf("%d",&y);


soma = x + y;
produto = x * (y * y);
resto = (x  %  y);
 
  printf("a soma dos dois números são:%d\n", soma);
  printf("o produtos primeiro número pelo quadrado do segundo:%d\n",produto);
  printf("oo resto da divisão do primeiro é:%d\n",resto);
  return 0;
}