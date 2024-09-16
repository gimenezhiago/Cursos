#Print no terminal
print("Hello world")

#Declarar variável
nome = "Hiago"

#Formatar em uma frase
nome = "João"
peso = 50.7
idade = 10
print("Nome:{} Peso:{} Idade:{}".format(nome, peso, idade))

#Operações
x = 10
y = 10
soma = x + y
subtracao = x - y
multiplicacao = x * y
divisao = x / y
potencia = x**2
resto = x % 2
maior = 11 > y
maior_ou_igual = 11 >= y
menor = y < 11
menor_ou_igual = y <= 11 
igual = 10 == x
diferente = 9 != y 

#Operadores logícos
##e = and
##ou = or

#Pegar o valor da variável
nome = input("Digite seu nome:")

#Condições if e else
idade = 19
if idade >= 18:
    print('Maior de idade')
else:
    print('Menor de idade') 

#Loops for com números
for numero in range(0,5):
    print(numero) 

#Loops for com letra
for letra in 'batata':
    print(letra)

#Loops while 
while nome != "sair":
    nome = input('Digite seu nome novamente ou ent digite sair para sair: ')

#Loops while infinito
while idade >= 10:
    print(idade)
    idade = idade + 1

#Funções sem parâmetros
def numerosAleatorios():
    print(1)
    print(3)
    print(18)
numerosAleatorios()

#Funções com parâmetros
def soma(n1, n2):
    soma = n1 + n2
    print(soma)
soma(1,345)

#Funções declarada em uma variável
def soma(n1, n2):
    soma = n1 + n2
    return soma
resultado = soma(1,345)
resultado += 10
print(resultado)

#Vetores
vetor = [4, 30, 23, 14, 89]
print(vetor[2])

#Mudar vetor
vetor[2] = 6

