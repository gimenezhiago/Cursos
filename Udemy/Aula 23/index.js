let a = "A"
let b = "B"
let c = "C"

const tem = a

a = b
b = c
c = tem

[varA, varB, varC] = [varB, varC, varA]


console.log(a, b, c)