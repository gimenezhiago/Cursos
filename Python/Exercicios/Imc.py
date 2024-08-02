print("Bem vindo à calculadora IMC(Índice de massa corporal)")
peso = eval(input("Qual o seu peso: "))
nome = input("Qual seu nome: ")
altura = eval(input("Qual sua altura: "))

conta = peso/(altura**2)

print('{}, seu IMC é {}'.format(nome, conta))