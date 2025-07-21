const gameData = {
  "Peak": {
    title: "Peak",
    description: "É um jogo cooperativo de escalada, onde jogadores trabalham juntos para sobreviver e alcançar o topo de uma montanha em constante mudança.",
    download: "<a href='https://tech.animerigel.com/Peak' target='_blank'>⬇️ Baixar Peak</a>"
  },
  "Palworld": {
    title: "Palworld",
    description: "É um jogo de sobrevivência e crafting em mundo aberto, onde os jogadores exploram um ambiente hostil com criaturas chamadas Pals.",
    download: "<a href='https://tech.animerigel.com/Palworld' target='_blank'>⬇️ Baixar Palworld</a>"
  },
  "Devour": {
    title: "Devour",
    description: "É um jogo de terror cooperativo para 1 a 4 jogadores onde o objetivo é impedir que líderes de culto possuídos arrastem os jogadores para o inferno",
    download: "<a href='https://tech.animerigel.com/Devour' target='_blank'>⬇️ Parte 1</a> | <a href='https://tech.animerigel.com/Devour2' target='_blank'>⬇️ Parte 2</a>"
  },
  "Outlast": {
    title: "Outlast",
    description: "É um jogo de terror em primeira pessoa onde o jogador assume o papel do jornalista independente Miles Upshur, que investiga um asilo de doentes mentais chamado Mount Massive, nas montanhas do Colorado.",
    download: "<a href='https://tech.animerigel.com/Outlast' target='_blank'>⬇️ Parte 1</a> | <a href='https://tech.animerigel.com/Outlast2' target='_blank'>⬇️ Parte 2</a>"
  },
  "Grounded": {
    title: "Grounded",
    description: "Sobrevivência em um quintal onde você é do tamanho de uma formiga.",
    download: "<a href='https://tech.animerigel.com/Grounded' target='_blank'>⬇️ Baixar Grounded</a>"
  },
  "Stray": {
    title: "Stray",
    description: "É um jogo de aventura em terceira pessoa que coloca o jogador no controle de um gato de rua em uma cidade cibernética decadente",
    download: "<a href='https://tech.animerigel.com/Stray' target='_blank'>⬇️ Parte 1</a> | <a href='https://tech.animerigel.com/Stray2' target='_blank'>⬇️ Parte 2</a>"
  },
  "Drive Beyond Herizons": {
    title: "Drive Beyond Herizons",
    description: "É um jogo de exploração e aventura em mundo aberto, onde os jogadores podem dirigir veículos personalizáveis por paisagens extensas e geradas processualmente.",
    description2: "⚠️ Para baixar, use o link Magnet em seu cliente torrent.  Senha:online-fix.me ⚠️ magnet:xt=urn:btih:60ac50b1fe5959c8b6843391aa9a674a0f298fa6&dn=Drive%20Beyond%20Horizons&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337"
  },
  "Cuphead": {
    title: "Cuphead",
    description: "É um clássico jogo de ação de corridas e armas altamente focalizado em batalhas de chefes.",
    download: "<a href='https://tech.animerigel.com/EYCdlwh' target='_blank'>⬇️ Baixar Cuphead</a>"
    },
    
  "PokéMMO": {
    title: "PokéMMO",
    description: "É um jogo online multijogador massivo (MMO) baseado nos jogos clássicos de Pokémon, permitindo que jogadores explorem o mundo, lutem e troquem Pokémon com amigos e outros jogadores ao redor do mundo.",
    download: "<a href='https://pokemmo.com/pt-BR/downloads/' target='_blank'>⬇️ Baixar PokéMMO</a> | <a href='https://tech.animerigel.com/8G1F8v' target='_blank'>⬇️Baixar Roms</a>"
  },
  "Resident Evil 4  REMAKE": {
    title: "Resident Evil 4  REMAKE",
    description: "É uma reimaginação do clássico jogo de 2005, oferecendo uma experiência de terror de sobrevivência modernizada com gráficos, jogabilidade e enredo atualizados.",
    description2: "⚠️ Para baixar, use o link Magnet em seu cliente torrent.⚠️   magnet:?xt=urn:btih:A4349A511DAFAA704C33A25065C34AB980803707&dn=Resident.Evil.4-EMPRESS&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce"
  },
};

function showInfo(gameName) {
  const info = gameData[gameName];
  if (info) {
    document.getElementById("infoSection").style.display = "block";
    document.getElementById("gameTitle").innerHTML = info.title;
    document.getElementById("gameDescription").innerHTML = info.description;

    
    const desc2El = document.getElementById("gameDescription2");
    if (info.description2 && info.description2.trim() !== "") {
      desc2El.innerHTML = info.description2;
      desc2El.style.display = "block"; 
    } else {
      desc2El.style.display = "none"; 
    }

    const downloadEl = document.getElementById("gameDownload");
    if (info.download && info.download.trim() !== "") {
      downloadEl.innerHTML = info.download;
      downloadEl.style.display = "block"; 
    } else {
      downloadEl.style.display = "none";  
    }

    
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}

function filterGames() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const games = document.querySelectorAll(".game");

  games.forEach(game => {
    const name = game.querySelector("p").textContent.toLowerCase();
    if (name.includes(input)) {
      game.style.display = "flex";
    } else {
      game.style.display = "none";
    }
  });
}
function sortGamesAlphabetically() {
  const grid = document.getElementById("gameGrid");
  const games = Array.from(grid.querySelectorAll(".game"));

  games.sort((a, b) => {
    const nameA = a.querySelector("p").textContent.toLowerCase();
    const nameB = b.querySelector("p").textContent.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  
  games.forEach(game => grid.appendChild(game));
  }

  
  window.addEventListener("DOMContentLoaded", () => {
    sortGamesAlphabetically();
});
 
