const promedio = array =>  { 
let suma = 0 
array.forEach(Element => {
suma += Element
});
sumaConsola = suma / array.length
console.log(sumaConsola.toFixed(0))
}




const promedioReduce = lista => { 
sumaLista = lista.reduce((valorinicial, nuevoValor) => { 
return valorinicial + nuevoValor
})
const promedio = sumaLista / lista.length
console.log(promedio.toFixed(0) )
}


/* 
el codigo de abajo fue optimizado con solo unos pequenios detalles
como vemos fue eliminado las llaves y el return 
quedando solamente la suma del valor inicial y el nuevo valor 
esto pasa por que en las arrow function 
esa sintaxis es valida! mientras que solo tenga un argumento. 

ademas agregamos al promedio el metodo Math.round 
que hace practicamente lo mismo que toFixed
pero en caso de tener muchos decimalos es mucho mas efectivo 
y aprueba de errores. 
*/


const promedioReduceOptimizado = lista => { 
sumaLista = lista.reduce((valorinicial, nuevoValor)  =>  valorinicial + nuevoValor)
const promedio = Math.round(sumaLista / lista.length)
console.log(promedio)
}