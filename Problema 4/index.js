function analyzeArray(arr) {
  let arraySize = arr.length;
  let evenNumbers = arr.filter(n => n % 2 === 0).length;
  let oddNumbers = arr.filter(n => n % 2 !== 0).length;
  let greaterThan1000 = arr.filter(n => n > 1000).length;
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);
  let averageValue = arr.reduce((acc, curr) => acc + curr, 0) / arraySize;

  console.log(`Cantidad de elementos del arreglo: ${arraySize}`);
  console.log(`Porcentaje de números pares: ${(evenNumbers / arraySize * 100).toFixed(2)}%`);
  console.log(`Porcentaje de números impares: ${(oddNumbers / arraySize * 100).toFixed(2)}%`);
  console.log(`Porcentaje de números mayores a 1000: ${(greaterThan1000 / arraySize * 100).toFixed(2)}%`);
  console.log(`El valor más grande es: ${maxValue}`);
  console.log(`El valor más pequeño es: ${minValue}`);
  console.log(`Porcentaje del valor mínimo con respecto al máximo: ${(minValue / maxValue * 100).toFixed(2)}%`);
  console.log(`Porcentaje del promedio con respecto al máximo: ${(averageValue / maxValue * 100).toFixed(2)}%`);
}

let arr = [2, 3000, 45, 678, 1234, 5678, 23, 56, 89];
analyzeArray(arr);
