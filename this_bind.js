const retornaNumeros = function () {
    return this.name;
};

let bruno = retornaNomes.bind({ nome: 'Bruno'});
bruno();