/* Um vendedor necessita de um programa que calcule o preço total devido por um cliente, que comprou um produto em sua loja.
  1) O programa deve receber o código do produto e a quantidade comprada
  2)para então calcular e imprimir na tela o preço total

cod. do produto - preço unico
1001 - 5,32
1324 - 6,45
6548 - 2,37
0987 - 5,32
7623 - 6,45

*/

#include <stdio.h>

int main(void) {
  

//variavei
  float valor, produto, codigo, quantidade,total;



//inicio
  printf("me informe o códico do produto:\n");
    scanf("%f",&codigo);
  printf("me informe a quantidade vai comprar:\n");
    scanf("%f",&quantidade);
  
// suposição
  if(codigo == 1001){
    valor = quantidade * 5.32;
    printf ("o total da compra foi: %.1f", valor);
  }else if (codigo == 1324){
    valor = quantidade * 6.45;
    printf ("o total da compra foi: %.1f", valor);
  }else if (codigo == 6548){
    valor = quantidade * 2.37;
    printf ("o total da compra foi: %.1f", valor);
  }else if (codigo == 987){
    valor = quantidade * 5.32;
    printf ("o total da compra foi: %.1f", valor);
  }else if (codigo == 7623){
    valor = quantidade * 6.45;
    printf ("o total da compra foi: %.1f", valor);
  }


  //fim 
   
  return 0;
}