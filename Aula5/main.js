var num1 = 10
var num2 = 2

/* Operações básicas
+ → soma → 10 + 2 = 12 ✅
- → subtração → 10 - 2 = 8 ✅
* → multiplicação → 10 * 2 = 20 ✅
/ → divisão → 10 / 2 = 5 ✅
% → resto da divisão → 10 % 2 = 0 ✅
** → potência → 10² = 100 ✅ */

console.log(num1 + num2) //12
console.log(num1 - num2) //8
console.log(num1 * num2) //20
console.log(num1 / num2) //5
console.log(num1 % num2) //0
console.log(num1 ** num2) //100

/*2️⃣ Incremento e decremento

Aqui está onde muitas pessoas se confundem. Existem dois tipos:

Pós-fixo: num1++ ou num1--
Primeiro retorna o valor atual, depois incrementa ou decrementa.

Pré-fixo: ++num1 ou --num1
Primeiro incrementa ou decrementa, depois retorna o valor.

Vamos ver seu código passo a passo:

a) console.log(num1++)
num1 = 10
num1++ → retorna 10 primeiro, depois faz num1 = 11
Saída no console: 10
Agora num1 = 11

b) console.log(num1--)
num1 = 11 (após o passo anterior)
num1-- → retorna 11 primeiro, depois faz num1 = 10
Saída no console: 11
Agora num1 = 10
c) console.log(++num1)
num1 = 10
++num1 → incrementa primeiro → num1 = 11, retorna 11
Saída no console: 11

d) console.log(--num1)
num1 = 11 (após o passo anterior)
--num1 → decrementa primeiro → num1 = 10, retorna 10
Saída no console: 10*/

console.log("num1 = 10 --> num1++") 
console.log(num1++) //10 
console.log(num1)
console.log("num1 = 11 --> num1--") 
console.log(num1--) //11
console.log(num1)
console.log("num1 = 10 --> ++num1") 
console.log(++num1) //11
console.log(num1)
console.log("num1 = 11 --> --num1") 
console.log(--num1) //10
console.log(num1)

/* Comparações
console.log(num1 == num2) // 10 == 2 → false
console.log(num1 != num2) // 10 != 2 → true
console.log(num1 > num2)  // 10 > 2 → true
console.log(num1 < num2)  // 10 < 2 → false
== → igual
!= → diferente
> → maior que
< → menor que*/

console.log(num1 == num2) //false
console.log(num1 != num2) //true
console.log(num1 > num2) //true
console.log(num1 < num2) //false
