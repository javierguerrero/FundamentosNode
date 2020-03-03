function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(function() {
        try {
            return 3 + z;
        } catch (err) {
            console.error('error en mi funcion asincrona');
            cb(err);
        }
    });
}

try  {
    //otraFuncion();
    seRompeAsincrona(function() {
        console.log('hay error');
    });
} catch (err){
    console.error('vaya, algo se ha roto...');
    console.error(err.message);
    console.log('pero no pasa nada, lo hemos capturado');
}

console.log('esto de aquí está al final');