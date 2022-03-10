/*Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele. Em seguida, pede ao usuário para que entre com as notas AV1 de todos os alunos da sala, um por vez. Por fim, o programa deve mostrar a média aritmética, da turma.*/


#include <stdio.h>

int main(void) {
  int aluno,i;
  float media , nota,notaF=0;

  printf ("me informa a quantidade de alunos na sua sala?");
  scanf("%d",&aluno);

  for(i=0;i<aluno;i++){
    printf("%d)qual é sua nota da av1?",i+1);
    scanf("%f",&nota);
    notaF+=nota;
    media=notaF/aluno;
  }

 printf("a media da turma é:%.1f",media);


  return 0;
}