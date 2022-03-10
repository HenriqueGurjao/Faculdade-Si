/*15. Escrever um programa que lê um conjunto de 4 valores *i,a,b,c*, onde *i* é um valor inteiro e positivo e *a,b,c*, são quaisquer valores reais e os escreva na tela da seguinte forma:
    - os três valores *a,b,c* em ordem crescente, se *i* = 1
    - os três valores *a,b,c* em ordem decrescente, se *i* = 2,
    - os três valores *a,b,c* de forma que o maior dentre *a,b,c* fique entre os outros dois valores, se *i* = 3.*/

#include <stdio.h>

int main(void) {
  int i;
  float a,b,c;

  printf("Escolha uma das 3 opcões pra i= 1 ou 2 ou 3 ou :\n");
  scanf("%d",&i);
  printf("me informe três valores para A , B, C:\n");
  scanf("%f",&a);
  scanf("%f",&b);
  scanf("%f",&c);

//suposição
  if(i == 1){
    if(a < b && b < c){
      printf("%.0f < %.0f < %.0f", a,b,c);
    }else if (a < b && c < b){
      printf("%.0f < %.0f < %.0f", a,c,b);
    }else if (b < c && c < a){
      printf("%.0f < %.0f < %.0f", b,c,a);
    }else if (b < c && a < c){
      printf("%.0f < %.0f < %.0f", b,a,c);
    }else if (c < a && a < b){
     printf("%.0f < %.0f < %.0f", c,a,b); 
    }else if (c < b && b < a){
     printf("%.0f < %.0f < %.0f", c,b,a);
    } 
  } else if(i == 2){
      if(a > b && b > c){
        printf("%.0f > %.0f > %.0f", a,b,c);
        }else if (a > b && c > b){
        printf("%.0f > %.0f > %.0f", a,c,b);
        }else if (b > c && c > a){
        printf("%.0f > %.0f > %.0f", b,c,a);
        }else if (b > c && a > c){
        printf("%.0f > %.0f > %.0f", b,a,c);
        }else if (c > a && a > b){
        printf("%.0f > %.0f > %.0f", c,a,b); 
        }else if (c > b && b > a){
        printf("%.0f > %.0f > %.0f", c,b,a);
        }
  } else if(i == 3){
      if(a < b && b > c){
        printf("%.0f < %.0f > %.0f", a,b,c);
        }else if (a < b && c > b){
        printf("%.0f < %.0f > %.0f", a,c,b);
        }else if (b < c && c > a){
        printf("%.0f < %.0f > %.0f", b,c,a);
        }else if (b < c && a > c){
        printf("%.0f < %.0f > %.0f", b,a,c);
        }else if (c < a && a > b){
        printf("%.0f < %.0f > %.0f", c,a,b); 
        }else if (c < b && b > a){
        printf("%.0f < %.0f > %.0f", c,b,a);
        }   
  }
  return 0;
}
