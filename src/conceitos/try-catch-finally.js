//Tratativa de erros

try {
    throw new Error('Servidor fora do ar...');

    console.log('Sistema foi iniciado...');
} catch (error) {
    console.log(error);

} finally {
    console.log('Sistema foi encerrado...');
}