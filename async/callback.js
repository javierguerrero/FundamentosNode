//como se gestiona algo asíncrono

function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso...');
hola('Javier', function(nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso...');
    });
});
