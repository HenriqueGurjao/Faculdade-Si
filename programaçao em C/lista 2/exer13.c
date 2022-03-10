/*13. Uma pesquisa sobre algumas características físicas da população de uma determinada região coletou os seguintes dados, referentes a cada habitante, para serem analisados: 
    - Sexo → masculino ('m'), feminino ('f')
    - Cor dos olhos → azuis ('a'), verdes ('v'),  castanhos ('c')
    - Cor dos cabelos → louros ('l'), castanhos ('c'), pretos ('p')
    - Idade em anos
    
    Fazer um programa que leia os valores de 50 habitantes e ao final escreva: 
    
    a) a maior idade dos habitantes; 
    
    b) a porcentagem de indivíduos do sexo feminino cuja idade está entre 18 e 35 anos inclusive e que tenham olhos verdes e cabelos louros.
    
    c) a quantidade de indivídos do sexo masculino cuja idade seja menor que 18 anos*/

#include <stdio.h>

int main(void) {

  float porcentagemFeminina = 0;
  int idade = 0, maiorIdade = 0, contPorcentagem = 0, cont = 0;
  char sexo, corOlhos, corCabelos;

    contPorcentagem = 0;
    maiorIdade = 0;
    cont = 0;

  for (int i = 1; i <= 50; i++){
    cont++;
    printf("Informe o sexo:\n");
    scanf(" %c", &sexo);

    printf("Informe a cor dos olhos:\n");
    scanf(" %c", &corOlhos);

    printf("Informe a cor dos cabelos:\n");
    scanf(" %c", &corCabelos);

    printf("Informe a idade:\n");
    scanf("%d", &idade);

    if (sexo == 'f' && ((idade >= 18) && (idade <= 35)) && corOlhos == 'v' && corCabelos == 'l') 
    {
     contPorcentagem++;
    }
    if (idade > maiorIdade) {
       maiorIdade = idade;
      }
  }

printf("Maior idade: %d\n", maiorIdade);
porcentagemFeminina = (100 * contPorcentagem)/50;

printf("Porcentagem feminina com olhos verdes, cabelos louros que estão entre 18 e 35 anos: %.2f\n", porcentagemFeminina);
}