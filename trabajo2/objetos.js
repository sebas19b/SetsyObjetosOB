// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const objMy = {
    name: 'Sebastian', last: 'Barreto', age: 25, higth: 187, developer: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior
const miAge = objMy['age']
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const newObj = [objMy,
    {name: 'Edmundo', last: 'Barreto', age: 54, higth: 178, developer: false},
    {name: 'Cleofelina', last: 'Cardenas', age: 85, higth: 167, developer: false},
]
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
newObj.sort((a, b) => b.age - a.age)

//Resultados
//Mi edad
console.log(miAge)
//De Mayor a menor
console.log(newObj)