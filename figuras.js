// Código del Cuadrado
console.group("Cuadrado");

const perimetroCuadrado = (lado) => lado * 4;
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado(2) + "cm");

const areaCuadrado = (lado) => lado * lado;
// console.log("El área del cuadrado es: " + areaCuadrado(2) + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulo");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
// console.log(
//   "El perímetro del triángulo mide: " + perimetroTriangulo(4, 4, 8) + "cm"
// );

const areaTriangulo = (base, altura) => (base * altura) / 2;
// console.log("El área del triángulo es: " + areaTriangulo(4, 8) + "cm^2");

console.groupEnd();

// Código del Círculo
console.group("Círculos");

const PI = Math.PI;

const diametroCirculo = (radio) => radio * 2;
// console.log("El diámetro es de: " + diametroCirculo(4));

const circunferencia = (radio) => Math.round(diametroCirculo(radio) * PI);
// console.log("El perímetro del círculo mide: " + circunferencia(4) + "cm");

const areaCirculo = (radio) => Math.round(radio * radio * PI);
// console.log("El área del círculo es de: " + areaCirculo(4) + "cm^2");

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const lado = input.value;
  const perimetro = perimetroCuadrado(lado);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const lado = input.value;
  const area = areaCuadrado(lado);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("inputTriangulo1");
  const input2 = document.getElementById("inputTriangulo2");
  const input3 = document.getElementById("inputTriangulo3");
  const lado1 = parseInt(input1.value);
  const lado2 = parseInt(input2.value);
  const base = parseInt(input3.value);
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input1 = document.getElementById("inputTriangulo1");
  const input3 = document.getElementById("inputTriangulo3");
  const lado1 = parseInt(input1.value);
  const base = parseInt(input3.value);
  const area = areaTriangulo(lado1, base);
  alert(area);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  const radio = parseInt(input.value);
  const perimetro = circunferencia(radio);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const radio = parseInt(input.value);
  const area = areaCirculo(radio);
  alert(area);
}
