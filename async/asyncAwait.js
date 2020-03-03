async function hola(nombre, miCallback) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla bla bla');
            resolve(nombre);
        }, 1000);        
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);
    });
}

// -- 

async function main(){
    let nombre = await hola('Javier');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso');
}

console.log('Empieza el proceso');
main();

