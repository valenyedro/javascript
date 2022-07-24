alert("¡Bienvenido a la barbería!")
let nombreCliente = prompt("¿Cómo es tu nombre?")
let diaElegido
let mesElegido
let horarioElegido
let servicioElegido
let precioTotal = 0

mostrarMenu(nombreCliente)

let opcion = parseInt(prompt("Ingresa el número de la opción que deseas (0 para salir): "))
console.log(opcion)
while(opcion!==0){
    switch(opcion){
        case 1:
            alert("¡Buena elección! Se añadió a tus servicios el corte de pelo.")
            precioTotal+= 700
            break
        case 2:
            alert("¡Buena elección! Se añadió a tus servicios el corte de barba.")
            precioTotal+= 300
            break
        case 3:
            alert("¡Buena elección! Se añadió a tus servicios el corte de cejas.")
            precioTotal+= 200
            break
        case 4:
            alert("¡Buena elección! Se añadió a tus servicios la tintura de pelo.")
            precioTotal+= 1200
            break
    }

    mostrarMenu(nombreCliente)

    opcion = parseInt(prompt("Si deseas otro servicio, ingresa el numero de opción correspondiente (0 para salir): "))
}

alert(nombreCliente + ", el precio total a pagar es " + precioTotal)

diaElegido = prompt("¿Que dia de la semana quieres el turno?\n" +
                    "Recuerda que solo damos turno entre hoy y la semana entrante.")

horarioElegido = prompt("¿En que horario quieres el turno? (escribir con forma hh:mm)")
horarioInt = parseInt(horarioElegido.slice(0, -3))

while(horarioInt < 9 || horarioInt > 18){
    alert("Horario no disponible. ¡Abrimos de 09:00 a 18:00!")
    horarioElegido = prompt("¿En que horario quieres el turno? (escribir con forma hh:mm)")
    horarioInt = parseInt(horarioElegido.slice(0, -3))
}

alert("¡Perfecto! Tu turno ha sido agendado para el " + diaElegido + " a las " + horarioElegido + "hs.")
alert("A continuación se imprime el comprobante con los datos de la operación:")
alert("NOMBRE DEL CLIENTE: " + nombreCliente +
    "\nDIA DEL TURNO: " + diaElegido +
    "\nHORARIO DEL TURNO: " + horarioElegido)
alert("¡Muchas gracias por elegirnos!")






function mostrarMenu(nombreCliente){
    alert("Hola " + nombreCliente + " ¿qué servicio deseas pedir?\n" +
    "1- Corte de pelo ($700)\n" +
    "2- Corte de barba ($300)\n" +
    "3- Corte de cejas ($200)\n" +
    "4- Tintura de pelo ($1200)\n")
}