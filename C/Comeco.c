#include <stdio.h>

#define texto "Bem vindo"

int main(){
	printf("%s\n", texto);
	
	int idade = 0;
	float altura = 0.0;
	char nome[50] = "";
	
	printf("Digite a sua idade:\n");
	scanf("%d", &idade);
	
	printf("Digite a sua altura:\n");
	scanf("%f", &altura);
	
	printf("Digite o seu nome:\n");
	scanf("%s", nome);
	
	printf("Dados informados:\n");
	printf("A sua idade: %d.\n", idade);
	printf("A sua altura: %.2f.\n", altura);
	printf("O seu nome: %s.\n", nome);
}