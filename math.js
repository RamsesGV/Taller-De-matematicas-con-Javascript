// Cuadrado. 
console.group('cuadrado')

const ladoCuadrado = 5 ;
const perimetroCuadrado =  ladoCuadrado * 4;
const areaCuadrado =  ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
})

// con funcion 

const calculaCuadrado = lado => { 
return{
    perimetro: lado * 4, 
    area: lado * lado
}
} 
console.groupEnd('cuadrado')

// Triangulo. 
console.group('triangulo')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase ,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});

// con funcion 

const calculaTriangulo = (lado1,lado2,base,altura) => { 
   return {
    perimetro: lado1 + lado2 + base ,
    area: (base * altura ) / 2
   };
}

// triangulo isoceles en busca de la altura 

const calcularAlturaTriangulo = (lados,base) => { 
const altura = Math.sqrt((lados ** 2) - ((base ** 2) / 4))
lados == base ? console.error('no es un triangulo isoceles')
: console.log({altura})
}

// triangulo escaleno en busca de su altura 

const calcularEscaleno = (a,b,c) => { 
    if (a === b || a === c || b === c) {
        // No es un triángulo escaleno
        return false;
      }
      const s = (a + b + c) / 2;
      const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      const altura = (2 * area) / a;
      return altura;
    }

console.groupEnd('triangulo')

// Circulo.

console.group('circulo')

const radioCirculo = 3; 
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;
const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({ 
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
})

// con funcion

const calcularCirculo = R => { 
    const diametro = R * 2
    const radioAlCuadrado = Math.pow(R , 2)
    return { 
        circunferencia: diametro * Math.PI.toFixed(2),
        area: radioAlCuadrado * Math.PI.toFixed(2)
    }
}


console.groupEnd('circulo')

//const  h = Math.sqrt(lado1**2 - base ** 2 / 4)
 
//const descuento = (p,d) => { 
   // return (p * (100 - d) / 100)
//}