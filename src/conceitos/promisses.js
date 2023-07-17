'use strict'
console.log('Iniciando sistema...');

const dirigir = new Promise(
    (resolve, reject) => {
        const temGasolina = true;

        if (temGasolina) {
            resolve('O carro funcionou...');
        }

        reject('O carro não tem gasolina...');
    }
);

//console.log(typeof dirigir);

//console.log(dirigir);


dirigir
    .then((resultado) => {
        console.log(resultado);
    }).catch((error) => {
        console.log(error);
    })

console.log('Finalizando sistema...');