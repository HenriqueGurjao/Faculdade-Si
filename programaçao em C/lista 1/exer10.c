/* Se você estiver a uma altura h (em metros) sobre o nível do mar, sua distância d (também
em metros) até o horizonte é dada aproximadamente pela fórmula

d= raiz quadrada de h2+2rh

onde r é o raio da Terra (cerca de 6378150 metros)

- Escreva um programa que recebe uma altura h e determina a que distância está o horizonte, sabendo que em C a função que calcula raízes quadradas se chama sqrt() e para usá-la você tem que usar a biblioteca math.h.

Alturas de alguns locais interessantes:

Torre de Pisa (topo) -	55m
Monte everest	 - 8830m
Torre Eiffel (plataforma 3) -	276m
Pão de acúcar	- 394m
*/
#include <stdio.h>
#include <math.h>

int main(void) {

  float D, H, R;
    
    printf("digite sua altura:");
    scanf ("%f",&H);

//calculo
R = 6378150; 
D = sqrt((H * H) + (2* R * H));



    printf("Sua distancia é relação ao horizonte é:%.2f", D);

  return 0;
}