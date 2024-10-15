const nome = "Hiago";
const sobrenome = "Gimenez";
const idade = 16;
const peso = 72;
const alturaM = 1.8;
let imc = peso / (alturaM * alturaM);
let anoNascimento = 2024 - idade;

console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaM} de altura e seu IMC é de ${imc}`
);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)