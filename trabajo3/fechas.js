// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fechaHoy = new Date()
console.log(fechaHoy)
// - La fecha de tu nacimiento
const DB = new Date(1997, 0, 16)
console.log(DB)
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const fechaUp = fechaHoy > DB
console.log(fechaUp)
// - Una variable que contenga el día de tu nacimiento
const DayDB = DB.getDate()
console.log(DayDB)
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mounthDB = DB.getMonth() + 1
console.log(mounthDB)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const yearDB = DB.getFullYear()
console.log(yearDB)
