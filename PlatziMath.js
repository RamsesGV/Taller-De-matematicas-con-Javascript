const Mathematics = {}





Mathematics.promedio = array =>  { 
let suma = 0 
array.forEach(Element => {
suma += Element
});
sumaConsola = suma / array.length
console.log(sumaConsola.toFixed(0))
}




Mathematics.promedioReduce = lista => { 
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


Mathematics.promedioReduceOptimizado = lista => { 
sumaLista = lista.reduce((valorinicial, nuevoValor)  =>  valorinicial + nuevoValor)
const promedio = Math.round(sumaLista / lista.length)
console.log(promedio)
}

Mathematics.esPar = (list) => { 
return (list.length % 2 === 0)  
} 

Mathematics.esImpar = (listt) => { 
return !(listt.length % 2 === 0)
} 

Mathematics.calcularMediana = (listadesor) => { 
const lista = Mathematics.ordenarLista(listadesor)
const listaEsPar = Mathematics.esPar(lista)

if (listaEsPar) { 
const indexMitad1ListaPar = (lista.length / 2) - 1 
const indexMitad2ListaPar = lista.length / 2

Mathematics.promedio([lista[indexMitad1ListaPar] ,lista[indexMitad2ListaPar]])

}else{
const indexMitadListaImpar = Math.round(lista.length / 2) 
const medianaImparLista = lista[indexMitadListaImpar];
return medianaImparLista;
}
}

Mathematics.ordenarLista = (ListaDesordenada) => {

    const ordenarListaSort = (valorAcumulado, nuevoValor) => { 
    //if ( valorAcumulado > nuevoValor) { 
    //return 1
    //}else if   (valorAcumulado == nuevoValor) { 
    //return 0
    //} else if (valorAcumulado < nuevoValor) { 
    //return -1 
    //}
    return valorAcumulado - nuevoValor
    //return 5 - 10 -> -5 *no se moveria 
    //return 5 - 5 -> 0 *no se moveria 
    // return 10 - 5 -> 5 *haria el flio cambiaria de lugar moviendo el 10 a un luigar mas arriba
    // solo se hace el cambio cuando es numero positivo. del 1 en adelante
    //si quisieramos ordenar la lista de mayor a menor simplemente hacemos:
    // return nuevoValor - Valor acumulado 
    //osea al revez. 

} 
/*
en el comentario de abajo 
vemos como suele ser el metodo sort. 
pero si entiendes toda la logica de como llegamos al resultado
te daras cuenta que a es el valor acumulado y nuevovalor es b 
por eso inmediatamente despues es a-b lo mismo que hicimos arriba. 
*/
//const lista = ListaDesordenada.sort((a,b) => a-b )

    const lista = ListaDesordenada.sort(ordenarListaSort )
    
    
    return lista
}

Mathematics.calcularModa = (lista) => { 
    const listaCount = {}

    for(let i = 0; i < lista.length; i++) { 
    const elemento = lista[i]

    if(listaCount[elemento]) { 
    listaCount[elemento] += 1;  

    }else{ 
    listaCount[elemento] = 1
}
}

const listaArray = Object.entries(listaCount)
const listaOrdenada = ordenarListaBidimensional(listaArray,1)
const ListaOrdenadaMaxNumber = listaOrdenada[listaArray.length - 1]
//console.log(listaCount,listaArray,listaOrdenada,ListaOrdenadaMaxNumber);
console.log(`la moda es ${ListaOrdenadaMaxNumber[0]}`);



}
/*
En la l??nea if(listaCount[elemento]) {, el c??digo comprueba si la clave elemento ya existe en el objeto listaCount. Si la clave existe, entonces listaCount[elemento] devuelve su valor actual, que ser?? un n??mero mayor o igual a 1, porque ya se ha contado el elemento al menos una vez. Por lo tanto, la expresi??n if(listaCount[elemento]) se eval??a como verdadera si el elemento ya ha aparecido antes.

En la l??nea listaCount[elemento] = 1, el c??digo establece el valor del contador del elemento actual en 1 si no ha aparecido antes. En otras palabras, el else se ejecuta cuando la clave elemento no existe en el objeto listaCount, lo que significa que el elemento no ha aparecido antes.

En resumen, el c??digo utiliza el objeto listaCount para llevar un registro de cu??ntas veces ha aparecido cada elemento en la lista, y comprueba si un elemento ha aparecido antes o no utilizando el m??todo listaCount[elemento].




*/
Mathematics.ordenarListaBidimensional = (listaDesordenada , i) => {
const lista = listaDesordenada.sort((a,b) => a[i] - b[i] )
return lista
}


console.log(Mathematics)