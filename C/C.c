/*

//Estrutura de menu
int main(){
}

//Saída de dados 
printf("oi");

//Especificadores %
d ou i = Z base decimal
x = Z base hexadecimal
f = Ponto com casas decimais
e = Notação com casas decimais
c = Texto letra
s = Texto palavra
.<num> = Quantos números dps virgula
[^chars] = chars:coloque a palavra excluída

//Escape
\n = Quebra linha
\a = Som
\b = Espaço
\t = Tab
\r = Inicio linha
\0 = Nulo
\v = Quebra coluna
\\ = \
\' = '
\" = "
\? = ?
\123 = Octal
\x12 = Hexadecimal
%% = %

//Entrada de dados
scanf("%d", &idade);

//Tipos de dados
char - 8bits
int(short) - 16bits
int(long) - 32bits
float - 32bits
double - 64bits

//Constante
#define

//Variável
int idade = 0;
float altura = 0.0;
char nome[50] = "";

//Operações aritméticas
Soma: +
Subtração: -
Multiplicação: *
Divisão: /
Resto: %

//Atribuições aritméticas
mais 1: ++
menos 1: --
incremento: +=
decremento: -=
com multi: *=
com div: /=

//Lógico-relacionais
maior: >
maior ou igual: >=
menor: <
menor ou igual: <=
igual: ==
diferente: !=

//Condição
if (m >= 7.0) {
		printf("Aprovado!\n");
}

if (m >= 7.0) {
		printf("Aprovado!\n");
} else {
		printf("Reprovado!\n");
}

//Operadores lógicos
conjução(e): &&
disjunção(ou): ||
inversão(não): !

//Comando switch-case
switch(d){
	case 1:
		printf("Domingo.\n");
		break;
	case 2:
		printf("Segunda.\n");
		break;
	case 3:
		printf("Terça.\n");
		break;
	case 4:
		printf("Quarta.\n");
		break;
	default:
		printf("Sem dia correspondente.\n");
		break;
	}

//Laço while
	int i = 1;
	while(i<= 10) {
		printf("%d ", i);
		i++;
	}

//Laço do-while
	int i = 1;
	do{
		printf("%d", i);
		i++;
	}while(i<= 10);

//Laço for
	int h = 10;
	for(int i=1; i<=h; i++){
		printf("%d ", i);
	}

//Break, para interação no escopo
	if(i == 5) {
		break;
	}

//Continue, continua a interação próximo escopo
	if(i == 5) {
		continue;
	}

//Arrays(vetores) com números
int v[5];
v[0] = 50;
v[1] = 40;
v[2] = 30;
v[3] = 20;
v[4] = 10;
int v[5] = {10, 20, 30, 40, 50};


//Arrays com strings
char s[10];

//Pegar dado do teclado, para n dar erro com irmão de entrada 'descarga'
fflush(stdin);

//Scanf convencional para no espaço para arrays com strings
	printf("Digite algo (scanf convencional):\n");
	scanf("%s", s);
	fflush(stdin); //pegar dado do teclado, para n dar erro com irmão de entrada

//Scanf aprimorado com o espaço para arrays com strings
	printf("Digite algo (scanf aprimorado):\n");
	scanf("%10[^\n]s", s);
	fflush(stdin);

//Funções para entrada de dados
	printf("Digite algo (scanf convencional):\n");
	gets(s);
	fflush(stdin);

	printf("Digite algo (scanf aprimorado):\n");
	fgets(s, 10, stdin);
	fflush(stdin);

//Função para saída de dados
	puts("Resultado:");
	puts(s);
	puts("");

//Biblioteca string.h
	strcpy(destino,origem); //Muda o valor da string
	strcat(); //Junta valores de strings
	strlen{}; //Tamanho da string
	strcmp{}; //Compara de é igual=0

//Biblioteca locale.h
	setlocale(LC_ALL,"Portuguese"); //Coloca acentos

*/