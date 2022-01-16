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