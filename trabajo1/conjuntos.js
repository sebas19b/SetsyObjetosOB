// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
const family = ['Sebastian', 'Ines', 'Cleofelina', 'Edmundo']
// - Un nuevo Set con los nombres de tu familia
const setFamily = new Set(family)
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFamily.add('Sebastian')
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamily.add('JavaScript')

//Resultados
//Set original
console.log(family)
//Set modificado
console.log(setFamily)
