/*9. Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
    - Comprando apenas latas de 18 litros;
    - Comprando apenas galões de 3,6 litros;
    - Comprando galões de 18 e 3.6 litros, de forma a minimizar a quantidade de galões.
        - dica
            
            Aqui você usa os mesmos conceitos de divisão e resto de divisão dos exercícios acima.
            
    
    Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.*/

#include <stdio.h>
#include <math.h>

int main(void) {
  float Vlatas, Vgalao, pagar, latas, galao, quad, Nlatas, Ngalao, restog, restal, Qlatas, Qgalao; 
  
  int restoL,quadint,latasing;

    printf("Qual é o tamnho da parede em m²?");
    scanf ("%f",&quad);
    printf("\n\n\n");

//formula 1 
latas= 108;
latas= latas + (latas * 0.1);
Nlatas= quad / latas;
Qlatas= ceil(Nlatas);
Vlatas= Qlatas * 80;

//Comprando apenas latas de 18 litros;

    printf ("A quantidade de necessaria para pinta uma parede de %.0f m²\n", quad);
    printf ("Vão precisar %.0f latas de 18 litros.\n", Qlatas);
    printf ("o valor para pagar essa latas sera de:%.2f\n",Vlatas);
    printf ("\n");

// formula 2

galao= 21.6;
galao= galao + (galao * 0.1);
Ngalao= quad / galao;
Qgalao= ceil(Ngalao);
Vgalao= Qgalao * 25;

//Comprando apenas galões de 3,6 litros;

    printf ("A quantidade de necessaria para pinta uma parede de %.0f m²\n", quad);
    printf ("Vão precisar %.0f latas de 3,6 litros.\n", Qgalao);
    printf ("o valor para pagar essa latas sera de:%.2f\n",Vgalao);

    printf ("\n");

// troca de float pra int

quadint = quad;
latasing = latas;

// formula 3
Nlatas = quad / latas;
restoL = quadint % latasing;
Ngalao = restoL / galao;


Qlatas = floor(Nlatas);
Qgalao = ceil(Ngalao);

// valor final
Vgalao= Qgalao * 25;
Vlatas= Qlatas * 80;
pagar = Vgalao + Vlatas;

//Comprando galões de 18 e 3.6 litros, de forma a minimizar a quantidade de galões

   printf ("A quantidade de necessaria para pinta uma parede de %.0f m²\n", quad);
   printf ("latas para usar nesse ares\n");
   printf ("Vão precisar %.0f galão de 3,6 litros.\n", Qgalao);
   printf ("Vão precisar %.0f latas de 18 litros.\n", Qlatas);
   printf ("o valor final da quantidade de tinta:%.2f", pagar);

  return 0;
}