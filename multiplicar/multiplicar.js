const fyleSystem = require('fs');
const colors = require('colors');

const listarTabla = (base, limite = 10) => {


    console.log('================='.green);
    console.log(`tabla de ${base}`.green); //De esta forma se usa la libreria colors
    console.log('================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}


const crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}'\n`;
        };


        fyleSystem.writeFile(`tablas/tabla- ${base}-al- ${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al- ${limite}.txt ha sido creado`)
        });
    });
};


module.exports = {
    crearArchivo,
    listarTabla
}