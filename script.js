const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

traduzirEspecie = (data) => {
    if(data.species == 'Human') {
        return 'Humano';
    } else if (data.species == 'Humanoid') {
        return 'Humanóide';
    } else if (data.species == 'unknown') {
        return 'Desconhecida';
    } else {
        return data.species;
    }
}

buscarPersonagem = () => {
    let numeroAleatorio = 1;
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = traduzirEspecie(data);
        condicao.innerHTML = traduzirCondicao(data);
    });
}