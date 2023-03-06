console.log(salarios);

//Analisis personal para juanita 
const personita = salarios.find((persona) => persona.name == 'Juanita')

const encontrarPersona = personaEnBusqueda => salarios.find(persona => persona.name == personaEnBusqueda)
/* 

En el método find() de JavaScript, el argumento de la función de callback se refiere al elemento actual que se está procesando en el array. Puedes nombrar el argumento de la función de callback como quieras, no necesariamente tiene que ser llamado "persona", podrías llamarlo "i", "elem", "item", etc. Pero es una buena práctica nombrar el argumento de la función de callback de manera que refleje lo que está almacenado en el array, para que el código sea más fácil de entender para las personas que lo leen.

En este caso, se utiliza el nombre "persona" para el argumento de la función de callback porque el array de salarios parece contener objetos que representan personas con información sobre sus salarios. Entonces, el uso de "persona" como nombre de variable es descriptivo y ayuda a entender mejor qué está sucediendo en el código.

En resumen, el nombre de la variable utilizada como argumento de la función de callback en find() no afecta la funcionalidad del método, pero es una buena práctica nombrarla de manera descriptiva y que refleje el contenido del array.
*/

const medianaPorPersona = (nombrePersona) => { 
    const trabajos = encontrarPersona(nombrePersona).trabajos
    const salarios = trabajos.map(e => e.salario)
    const medianaSalario = Mathematics.calcularMediana(salarios)
    console.log(medianaSalario);
    return medianaSalario
}

const proyeccionPorPersona = (nombrePersona) => { 
const trabajos = encontrarPersona(nombrePersona).trabajos
let porcentajesCrecimiento = [] 
for (let i = 1; i < trabajos.length; i++) {
const SalarioActual = trabajos[i].salario
const salarioPasado = trabajos[i - 1].salario
const crecimiento = SalarioActual - salarioPasado
const porcentajeDeCrecimiento = crecimiento / salarioPasado


porcentajesCrecimiento.push(porcentajeDeCrecimiento)

}

const medianaPorcentajesCrecimiento = Mathematics.calcularMediana(porcentajesCrecimiento)


console.log({porcentajesCrecimiento , medianaPorcentajesCrecimiento});

const ultimoSalario = trabajos[trabajos.length - 1].salario
const aumento = ultimoSalario * medianaPorcentajesCrecimiento
const nuevoSalario = ultimoSalario + aumento
return nuevoSalario
}

