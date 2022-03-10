/*16. Faça um programa que leia os valores de A, B e C, calcule o “delta” da equação. Classifique a equação em completa ou incompleta, além disso diga se existe solução. Se não houver, exiba uma mensagem de erro.  
    - A equação é incompleta se alguns de seus coeficientes (a,b ou c) são iguais a 0
    - Se Δ = 0 existe uma raiz real. Imprima a raiz e a mensagem "Raiz  única" e a raiz.
    - Se Δ < 0 não existe raiz real. Imprima a mensagem "Não existe raiz".*/
  
#include <stdio.h>
#include <math.h>


int main(void) {
  double a,b,c, delta, bhaskara1, bhaskara2, solução;

  printf("me informe os falores de a,b,c:\n");
  scanf("%lf",&a);
  scanf("%lf",&b);
  scanf("%lf",&c);

//calculo:
  
  bhaskara1 = (-b +(sqrt(pow(b,2)-(4*a*c))))/(2*a);
  bhaskara2 = (-b -(sqrt(pow(b,2)-(4*a*c))))/(2*a);
  delta = (pow(b,2)-(4*a*c));
  printf("me informe delta %.0lf \n",delta);

//suposição
  if (a==0 || b==0 || c==0) {
    printf("Sua equação é incompleta\n");
  }else{
    printf("Sua equação é completa\n");
  }
  if (delta == 0) {
    printf ("Raiz Única. \n");
      printf ("A raiz é %.2lf", bhaskara1);
  } else if (delta > 0){
      printf ("Tem solução com duas raízes \n A raiz 1 é %.2lf e a raiz 2 é %.2lf", bhaskara1, bhaskara2);
    }

  return 0;
}