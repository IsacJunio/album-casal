// Texto digitando

const palavras = ["Te amo ❤️", "Desde 25 de Julho de 2024 💍", "Para sempre juntos 💕", "Com você eu me alegro"];
    let i = 0; // Índice da palavra
    let j = 0; // Índice da letra
    let apagando = false;
    let velocidade = 120; // Velocidade de digitação
    let textoAtual = "";
    let elemento = document.getElementById("efeitoTexto");

    function digitar() {
      let palavra = palavras[i];

      if (apagando) {
        textoAtual = palavra.substring(0, j--);
      } else {
        textoAtual = palavra.substring(0, j++);
      }

      elemento.textContent = textoAtual;

      if (!apagando && j === palavra.length + 1) {
        apagando = true;
        setTimeout(digitar, 1500); // Espera antes de apagar
        return;
      }

      if (apagando && j === 0) {
        apagando = false;
        i = (i + 1) % palavras.length;
      }

      setTimeout(digitar, apagando ? 60 : velocidade);
    }

    digitar();

    // Musica Botão

    const botaoMusica = document.getElementById("botaoPlayPause");
    const musica = document.getElementById("musica");

    botaoMusica.addEventListener("click", ()=> {
        if (musica.paused){
            musica.play();
            botaoMusica.textContent = "⏸️";
        }else{
            musica.pause();
            botaoMusica.textContent = "▶️";
        }
    });

    // Carrocel

    const carrossel = document.getElementById('carrossel');
    const imagens = carrossel.querySelectorAll('img');
    const btnProximo = document.querySelector('.proximo');
    const btnAnterior = document.querySelector('.anterior');

    let index = 0;

    function atualizarCarrossel() {
      carrossel.style.transform = `translateX(${-index * 100}%)`;
    }

    btnProximo.addEventListener('click', () => {
      index = (index + 1) % imagens.length;
      atualizarCarrossel();
    });

    btnAnterior.addEventListener('click', () => {
      index = (index - 1 + imagens.length) % imagens.length;
      atualizarCarrossel();
    });

    // Suporte a toque (mobile)
    let startX = 0;

    carrossel.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });

    carrossel.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (diff > 50) {
        index = (index + 1) % imagens.length;
        atualizarCarrossel();
      } else if (diff < -50) {
        index = (index - 1 + imagens.length) % imagens.length;
        atualizarCarrossel();
      }
    });

// Contador 

function calcularTempoNamoro() {
    const inicioNamoro = new Date("2025-03-4"); // ❤️ Altere essa data para o início do namoro
    const hoje = new Date();

    let anos = hoje.getFullYear() - inicioNamoro.getFullYear();
    let meses = hoje.getMonth() - inicioNamoro.getMonth();
    let dias = hoje.getDate() - inicioNamoro.getDate();

    if (dias < 0) {
      meses--;
      const ultimoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 0);
      dias += ultimoMes.getDate();
    }

    if (meses < 0) {
      anos--;
      meses += 12;
    }

    const texto = `${anos} ano(s), ${meses} mês(es) e ${dias} dia(s) juntos 💖`;
    document.getElementById("contador").innerText = texto;
  }

  calcularTempoNamoro();
  setInterval(calcularTempoNamoro, 86400000); // Atualiza a cada 24h

