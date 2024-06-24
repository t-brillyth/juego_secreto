let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 3 ;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento); 
    titulo.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos}  ${(intentos === 1) ? 'vez'  : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // El usuario NO acerto
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número es Menor');
        }else{
            asignarTextoElemento('p', 'El número es Mayor');
        }
        intentos++;
        limpiaCaja();
        
    }
    return;
}

function limpiaCaja(){
    let limpiar = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
//YA sorteamos todos los numeros
if(listaNumeroSorteado.length == numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
}else{
//Si el numero generado YA esta en la lista
if(listaNumeroSorteado.includes(numeroGenerado)){
    return generarNumeroSecreto();
       }else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
       }
}

   
} 

function CondicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    intentos=1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego(){
    //Limpiar caja
limpiaCaja();
    //reiniciar mensaje de inicio
    //Generar numero aleatorio
    //Inicializar # de intentos
CondicionesIniciales();
     //Deshabilitar btn Nuevo Juego
     document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}



CondicionesIniciales();

