/*O número de Fibonacci Fn para n>0 é definido da seguinte maneira:
F1 = 1
F2 = 1
Fn = Fn-1 + Fn-2 para n>2.
Escreva um programa que dado um n (maior que 0), calcule o n-ésimo número da série de fibonacci*/
#include <stdio.h>

int main(void) {

  int atual=1, ultimo=1, penultimo=1, n, i;
    printf("me indorme um numero:");
    scanf("%d", &n);
    for(i=0; i<n-2; ++i){
      atual = ultimo+penultimo;
      penultimo = ultimo;
      ultimo = atual;    
    }
    
  printf("O %d-esimo termo eh: %d\n", n, atual);

    return 0;
}