let fome = 50;
  let felicidade = 50;
  let emoji = '🐶';
  let isAlive = true;

  setInterval(() => {
    perderFelicidade();
    ganharFome();
    verificarEstado();
  }, 10000);

  function alimentar() {
    if (isAlive) {
      fome -= 20;
      if (fome <= -20) {
        fome = -20;
        isAlive = false;
        emoji = '💀';
        console.log('Seu Tamagotchi morreu de excesso de alimentação. 😢');
        exibirMensagem('O bichinho morreu pelo excesso de alimento...', 'mensagemMorte', 'saltarMorte');
        atualizarInfo();
      } else {
        console.log('Você alimentou o Tamagotchi!');
        exibirMensagem('Yummy!', 'mensagemAlimentar', 'saltarEsquerdaSuperior');
        atualizarInfo();
      }
    } else {
      console.log('O Tamagotchi está morto. Não é possível alimentá-lo.');
    }
  }

  function carinho() {
    if (isAlive) {
      felicidade += 15;
      console.log('Você deu carinho no Tamagotchi!');
      exibirMensagem('❤️', 'mensagemCarinho', 'saltarDireitaSuperior');
      atualizarInfo();
    } else {
      console.log('O Tamagotchi está morto. Não é possível dar carinho.');
    }
  }

  function passear() {
    if (isAlive) {
      felicidade += 10;
      console.log('Você levou o Tamagotchi para passear!');
      exibirMensagem('😊', 'mensagemPassear', 'saltarEsquerdaInferior');
      atualizarInfo();
    } else {
      console.log('O Tamagotchi está morto. Não é possível levá-lo para passear.');
    }
  }

  function trocarRoupa() {
    if (isAlive) {
      emoji = getRandomEmoji();
      console.log('Você trocou a roupa do Tamagotchi para:', emoji);
      exibirMensagem('😎', 'mensagemTrocarRoupa', 'saltarDireitaInferior');
      atualizarInfo();
    } else {
      console.log('O Tamagotchi está morto. Não é possível trocar a roupa.');
    }
  }

  function getRandomEmoji() {
    const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🐮', '🐷', '🐸', '🐙', '🦄', '🐵', '🐒', '🦍', '🐔', '🐧', '🐦', '🐤', '🐥', '🦆', '🦢', '🦉', '🦚', '🦜', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🐊', '🐢', '🦕', '🦑', '🐙', '🦐', '🐠', '🐟', '🐡', '🦈', '🐬', '🐳', '🐋', '🐊'];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }

  function perderFelicidade() {
    if (isAlive) {
      felicidade -= 5;
    }
  }

  function ganharFome() {
    if (isAlive) {
      fome += 10;
    }
  }

  function verificarEstado() {
    if (fome >= 100 || felicidade <= 0) {
      isAlive = false;
      emoji = '💀';
      console.log('Seu Tamagotchi morreu. 😢');
      exibirMensagem('O bichinho morreu de fome.', 'mensagemMorte', 'saltarMorte');
      atualizarInfo();
    } else {
      document.getElementById('tamagotchi').textContent = emoji;
      atualizarInfo();
      console.log(`Fome: ${fome}, Felicidade: ${felicidade}, Emoji: ${emoji}`);
    }
  }

  function atualizarInfo() {
    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `Fome: ${fome}, Felicidade: ${felicidade}, Emoji: ${emoji}`;
  }

  function exibirMensagem(mensagem, elementoId, animacao) {
    const mensagemDiv = document.getElementById(elementoId);
    mensagemDiv.textContent = mensagem;
    mensagemDiv.style.display = 'block'; // Adiciona essa linha para exibir as mensagens
    mensagemDiv.style.animationName = 'none'; // Reinicia a animação
    void mensagemDiv.offsetWidth; // Atualiza o layout para reiniciar a animação
    mensagemDiv.style.animationName = animacao;

    // Adiciona um evento para manter a mensagem visível após a animação
    if (elementoId === 'mensagemMorte') {
      mensagemDiv.style.animationFillMode = 'forwards';
    }
    
    // Adiciona um evento para remover a mensagem após a animação (exceto para 'mensagemMorte')
    mensagemDiv.addEventListener('animationend', () => {
      if (elementoId !== 'mensagemMorte') {
        mensagemDiv.style.display = 'none';
      }
    });
  }
