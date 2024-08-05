function parimp(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

h = 5;
var res = parimp(h);

console.log(res);



function soma(n1, n2 = 0) {
  r = n1 + n2;
  return r;
}

console.log(soma(4));



var v = function (x) {
  return x * 2;
};
console.log(v(4));



function fatorial(n) {
  let fat = 1;
  for (let c = n; c > 1; c--) {
    fat *= c;
  }
  return fat;
}
console.log(fatorial(5));
