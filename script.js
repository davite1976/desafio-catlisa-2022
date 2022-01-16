const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');
const listaPersonagens = [];
const itemAtual = '';

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
    } else if (data.species == 'Mythological Creature') { 
        return 'Criatura mitológica';
    } else if (data.species == 'Robot') { 
        return 'Robô';
    }else {
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
        carregarPersonagemNoHtml(data[0]);

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
    if (this.listaPersonagens == undefined || this.listaPersonagens.length == 0) {
        buscarPersonagem();
    } else {
        // Navegar na lista
        // Descobrir posição do item que ja esta sendo exibido
        const posicao = this.listaPersonagens.findIndex(x => x.name == this.itemAtual);

        // Validar se eh o ultimo item
        if ((posicao + 1) == this.listaPersonagens.length) {
            carregarPersonagemNoHtml(this.listaPersonagens[0]);
        } else {
            // senao ir para proximo da lista
            carregarPersonagemNoHtml(this.listaPersonagens[posicao + 1]);
        }
    }
}

botao.onclick = navegarPersonagens;

carregarPersonagemNoHtml = (data) => {
    this.itemAtual = data.name;
    imagem.src = data.image;
    imagem.alt = data.name;
    nomeDoPersonagem.innerHTML = data.name;
    especie.innerHTML = traduzirEspecie(data);
    condicao.innerHTML = traduzirCondicao(data);
}