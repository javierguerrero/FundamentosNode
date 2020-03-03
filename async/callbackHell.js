function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(function(){
        console.log('Bla bla bla');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}

// --

/*
console.log('Iniciando proceso...');
hola('Javier', function(nombre) {
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nombre, function() {
                    console.log('Terminando proceso...');
                });
            });    
        });
    });
});
*/

function conversacion(nombre, veces, callback) {
    if(veces > 0) {
        hablar(function(){
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

console.log('Iniciado proceso');
hola('Javier', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado');
    });
});
