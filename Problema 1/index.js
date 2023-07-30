function multiply() {
  let x = Number(prompt("Por favor, introduce el primer número"));
  let y = Number(prompt("Por favor, introduce el segundo número"));

  let result = 0;
  for (let i = 0; i < Math.abs(y); i++) {
    result += Math.abs(x);
  }

  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    result = -result;
  }

  console.log(`El resultado de la multiplicación es: ${result}`);
}

multiply();
