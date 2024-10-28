// primero importamos la libreria de readline
import readline from "readline";

//luego creamos una interfaz usando tal libreria y la creamos con una constante para que no cambie 
const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//luego creamos una funcion de flecha la cual va ha recursiva porque se va a invocar a si misma
// en esta funcion vamos ha hacer dos preguntas al usuario y las vamos a almacenar en un evento callback
const volverHaHacerPregunta = () => interfaz.question("porfavor ingrese su nombre ", (nombre) => {
    interfaz.question("porfavor ingrese su edad ", (edad) =>{

        //saludamos al usuario con su nombre y su edad
        console.log("hola! " + nombre + " su edad es : " + edad);

        //ahora necesitamos transformar la edad que me ingreso el usuario en dato numerico
        //porque sucede que readline la informacion la guarda en string
        //entonces creamos una variable la cual su valor sera igual la transformacion de la edad en numero
        let num = parseInt(edad)

        //y aca evaluamos la edad
        //si el usuario es mayor o igual a 18 años entonces
        if (num >= 18) {
            //entonces va a suceder esto
            console.log("eres mayor de edad");
            //tambien se resetea la interfaz invocandola a si misma
            volverHaHacerPregunta()
            
        // si lo anterior no se cumple entonces 
        //evalua lo siguiente si el usuario es mayor o igual a 13 años y tambien es menor o igual a 15 años
        // entonces los usuarios de entre 13 a 15 años (respectivamente de 13 , 14, y 15)

        }else if (num >= 13 && num <=15) {
            //los usuarios que tengan desde 13 a 15 años se les va a mostrar este mensaje
            //entonces se va a cumplir lo siguiente
            // y se va a ejecutar esto
            console.log("eres adolescente porque tienes " + num);
            //tambien se resetea la interfaz invocandola a si misma
            volverHaHacerPregunta()
        
        //si lo anterior no se cumple entonces evalua lo siguiente
        // y es que si los usuarios mayores o igual a 16 y tambien menores o iguales a 16 años 
        //se va a evaluar y ejecutar lo siguiente
        }else if(num >= 16 && num <=17){
            //si la condicion se cumple entonces ejecuta esto
            console.log("eres un adolescente mayor"+ num);
            //tambien se resetea la interfaz invocandola a si misma
            volverHaHacerPregunta()
            
        //entonces si lo anterior no se cumple
        // si el usuario es menor o igual a 12 años
        // entonces evalua y ejecuta lo siguiente
        }else if (num <= 12) {
            //si se cumple se va a ejecutar lo siguiente
            console.log("eres un niño menor de edad" + num);
            //tambien se resetea la interfaz invocandola a si misma
            volverHaHacerPregunta()
            
        }else{
            //de lo contrario si el usuario me ingresa numeros invalidos o un rango que existe
            // retornale el siguente mensaje
            console.log("rango de edades invalidas");
            //tambien se resetea la interfaz invocandola a si misma
            volverHaHacerPregunta()
            
        }
        
    })
})

volverHaHacerPregunta()
