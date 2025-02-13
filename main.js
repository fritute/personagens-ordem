const imagemContainer = document.getElementById('imagemContainer');
const legendaPersonagem = document.getElementById('legendaPersonagem');
const botaoDeMudarImagem = document.getElementById('trocarPersonagem');

const personagens = [
    { imagem: './img/personagem1.png', legenda: 'Jorel Lagos(Caçador de Gente)' },
    { imagem: './img/personagem2.png', legenda: 'Olivier Florence' },
    { imagem: './img/personagem3.png', legenda: 'Sr.Verissimo' },
    { imagem: './img/personagem4.png', legenda: 'Arthur Severo' },
];

let indice = 0;

function trocarImagem() {
    indice = (indice + 1) % personagens.length; 
    const personagemAtual = personagens[indice]
    
  
    imagemContainer.style.backgroundImage = `url(${personagemAtual.imagem})`
    legendaPersonagem.textContent = personagemAtual.legenda; 
}


botaoDeMudarImagem.addEventListener('click', trocarImagem);