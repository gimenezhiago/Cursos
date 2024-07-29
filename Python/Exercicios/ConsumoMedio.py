combustivelGasto = eval(input("Quanto de combustível foi gasto na viagem (em Litros): "))
kmPercorridos = eval(input("Qual foi a distância na viagem (Em Quilometros): "))

consumoMedio = kmPercorridos/combustivelGasto

print("O consumo médio foi {} km/l".format(consumoMedio))