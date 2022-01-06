const pessoa = {
    nome: 'miguel' ,
};

const animal = {
    nome: 'julie',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa);
getSomething.call(animal);

//apply