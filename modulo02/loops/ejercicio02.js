//Usa un foin para imprimir por consola los datos del alienigena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
let message = "";

for (const data in alien) {  
    message = message + data+":"+ alien[data] +" , "
    }

console.log(message)
