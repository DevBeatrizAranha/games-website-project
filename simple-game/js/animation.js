const personagem = document.querySelector('.personagem');
const pirulito = document.querySelector('.pirulito');

const jump = () => {
    personagem.classList.add('jump');

   setTimeout(() => {
      personagem.classList.remove('jump');
   }, 500)
}

const loop = setInterval(() =>{
    const pirulitoPosition = pirulito.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px','');
    console.log(personagemPosition)

    if (pirulitoPosition <= 46 && pirulitoPosition > 0 && personagemPosition < 95) {
        pirulito.style.animation = 'none';
        pirulito.style.left = `${pirulitoPosition}px`;

        personagem.style.animation = 'none';
        personagem.style.bottom = `${personagemPosition}px`;

        personagem.src = './images/game-over.gif';
        personagem.style.width = '70px' ;
        personagem.style.left = `${pirulitoPosition-40}px`;
        personagem.style.bottom = `${personagemPosition}px`;

        clearInterval(loop);
       
    }

},10);

document.addEventListener('keydown', jump);   