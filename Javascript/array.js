let num = [7, 2, 1, 6];

num[3] = 0;
num.push(8);
num.length;
num.sort();
console.log(`O vetor é ${num}`);
num.indexOf(7)

for (var pos = 0; pos < num.length; pos++) {
  console.log(num[pos]);
}

for (var pos in num ) {
    console.log(num[pos])
}
