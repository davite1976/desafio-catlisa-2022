const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');
const listaPersonagens = [];

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
    } else if (data.species == 'Alien') {
        return 'Alienígena'; 
    } else {
        return data.species;
    }
}

buscarPersonagem = () => {
    let numerosAleatorios = this.gerarIdsAleatorios();
    return fetch(`https://rickandmortyapi.com/api/character/${numerosAleatorios[0]},${numerosAleatorios[1]},${numerosAleatorios[2]}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        // Ao Iniciar a pagina ira trazer 3 personagens aleatorios e carregar o 1 no html
        imagem.src = data[0].image;
        imagem.alt = data[0].name;
        nomeDoPersonagem.innerHTML = data[0].name;
        especie.innerHTML = traduzirEspecie(data[0]);
        condicao.innerHTML = traduzirCondicao(data[0]);

        // Atribuindo na lista de personagem 
        this.listaPersonagens = data;
    });
}

gerarIdsAleatorios = () => {
    const ids = [];
    ids[0] = Math.floor(Math.random() * 671);
    ids[1] = Math.floor(Math.random() * 671);
    ids[2] = Math.floor(Math.random() * 671); 
    return ids; 
}

navegarPersonagens = () => {
    // Ja buscou os personagens?
    if (listaPersonagens.length == 0) {
        buscarPersonagem();
    } else {
        // senao navegar na lista
        
    }
}

botao.onclick = navegarPersonagens;