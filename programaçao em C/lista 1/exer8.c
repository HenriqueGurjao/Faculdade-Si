/*8. Você resolveu dar uma força para a NASA, que deseja calcular o peso das pessoas em diferentes planetas do sistema solar. (Isso vai ter importantes consequências na colonização dos planetas pela humanidade: os gordinhos vão preferir planetas onde baixem de peso, os magrinhos vão querer o contrário). Escreva um programa que recebe o peso de uma pessoa (em newtons) e calcula o novo peso nos corpos celestes, de acordo com as constantes gravitacionais de cada planeta (estas constantes estão normalizadas em relação à constante da Terra), dadas abaixo:
    
    Corpo celeste Fator de conversão
    Mercúrio 0.3649337410
    Vênus 0.9041794087
    Marte 0.3812436289
    Lua 0.1651376146
    Terra 1
    Júpiter 2.6513761467
    Saturno 1.1386340468
    Urano 1.0693170234
    Netuno 1.3506625891
    Plutão 0.2252803261*/

#include <stdio.h>

int main(void) {
  double m, g, pMercúrio, pVênus, pMarte,pLua,pTerra,pJúpiter,pSaturno,pUrano,pNetuno,pPlutão;

    printf ("me informe o seu peso?");
    scanf ("%lf",&m);

  // calculo

pMercúrio = m * 0.3649337410;
pVênus = m * 0.9041794087;
pMarte = m * 0.3812436289;
pLua = m * 0.1651376146;
pTerra = m * 1;
pJúpiter = m * 2.6513761467;
pSaturno = m * 1.1386340468;
pUrano = m * 1.0693170234;
pNetuno = m * 1.3506625891;
pPlutão = m * 0.2252803261;

 printf ("seu peso em casa planeta é:\n Mercúrio= %f\n Vênus=%f\n Marte=%f\n Lua=%f\n Terra=%f\n Júpiter=%f\n Saturno=%f\n Urano=%f\n Netuno=%f\n Plutão=%f\n",pMercúrio, pVênus, pMarte, pLua, pTerra, pJúpiter, pSaturno, pUrano, pNetuno, pPlutão);

  return 0;
}