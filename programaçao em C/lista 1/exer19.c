//19. Faça um programa que leia dia, mês e ano. Depois verifique se foi digitada uma data válida. Ou seja, veriﬁque se o mês está entre 1 e 12, e se o dia existe naquele mês. Note que Fevereiro tem 29 dias em anos bissextos, e 28 dias em anos não bissextos. Um ano é bissexto se o ano é divisível por 400. Ou se o ano é divisível por 4 e não é divisível por 100

#include <stdio.h>

int main(void) {

//variavel
int  dia, mes, ano, anobi;

//
  printf("Que dia é hoje?(ex.:dd,mm,aaaa)\n");
  scanf ("%d,%d,%d",&dia,&mes,&ano);
  

//suposição

if (ano % 100 != 0 && mes > 0 && mes <=12){
  if (mes == 1 && dia > 0 && dia <= 31  ){
    printf("valido\n");
    printf("Dia %d de Janeiro de %d\n",dia,ano);
} else if (mes == 2 && dia > 0 && dia <= 29 && (/*a % 400 == 0 && */(ano % 4 == 0 && ano % 100 != 0))){
    printf("valido\n");
    printf("Dia %d de Fevereiro de %d\n",dia,ano);
    //printf("ano bissexto %d",ano);
  } else if ( mes == 3 && dia > 0 && dia <= 31){
    printf("valido\n");
    printf("Dia %d de Março de %d\n",dia,ano);
    //printf("ano bissexto %d",ano);
  } else if (mes == 4 && dia > 0 && dia <= 30){
    printf("valido\n");
    printf("Dia %d de Abril de %d\n",dia,ano);
    //printf("ano bissexto %d",ano);
  } else if (mes == 5 && dia > 0 && dia <= 31){
    printf("valido\n");
    printf("Dia %d de Maio de %d\n",dia,ano);
    //printf("ano bissexto %d",ano);
  } else if (mes == 6 && dia > 0 && dia <= 30){
    printf("valido\n");
    printf("Dia %d de Junho de %d\n",dia,ano);
    //printf("ano bissexto %d",ano);
  } else if (mes == 7 && dia > 0 && dia <= 31){
    printf("valido\n");
    printf("Dia %d de Julho de %d\n",dia,ano);
   // printf("ano bissexto %d",ano);
  } else if (mes == 8 && dia > 0 && dia <= 31){
    printf("valido\n");
    printf("Dia %d de Agosto de %d\n",dia,ano);
    //printf("ano bissexto %d",ano);
  } else if (mes == 9 && dia > 0 && dia <= 30){
    printf("valido\n");
    printf("Dia %d de Setembro de %d\n",dia,ano);
    //printf("ano bissexto %d",ano);
  } else if (mes == 10 && dia > 0 && dia <= 31){
    printf("valido\n");
    printf("Dia %d de Outubro de %d\n",dia,ano);
   // printf("ano bissexto %d",ano);
  } else if (mes == 11 && dia > 0 && dia <= 30){
    printf("valido\n");
    printf("Dia %d de Novembro de %d\n",dia,ano);
   // printf("ano bissexto %d",ano);
  } else if (mes == 12 && dia > 0 && dia <= 31){
    printf("valido\n");
    printf("Dia %d de Dezembro de %d\n",dia,ano);
    //printf("ano bissexto %d",ano);
  } else
          printf("\nData invalida.\n");}
        else{ 
          printf("\nData invalida.\n");
          }

  return 0;
}