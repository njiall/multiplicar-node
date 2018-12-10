// Requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base (${base}) no es válida`); //No corta la ejecución
            return; //Forzamos la ruptura de ejecución
        }
        if (!Number(limite)) {
            reject(`El límite (${limite}) no es válido`); //No corta la ejecución
            return; //Forzamos la ruptura de ejecución
        }
        let contenido = '';
        for (let i = 1; i <= limite; i++) {
            contenido += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/Tabla del ${base}.txt`, contenido, (err) => {
            if (err) reject(err);
            else resolve(`tablas/Tabla del ${base}.txt`);
            console.log('Se ha salvado el archivo');
        });
    })
}


let listarTabla = (base, limite) => {
    console.log('===================================='.red);
    console.log(` Tabla de multiplicar del ${base} `.blue);
    console.log('===================================='.red);
    console.log(`           Argumentos               `.blue);
    console.log(`Base: ${base}`.rainbow);
    console.log(`Límite: ${limite}`.random);
    console.log('===================================='.red);

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base (${base}) no es válida`); //No corta la ejecución
            return; //Forzamos la ruptura de ejecución
        }
        if (!Number(limite)) {
            reject(`El límite (${limite}) no es válido`); //No corta la ejecución
            return; //Forzamos la ruptura de ejecución
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
        }
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}