var daniel = {
    nome: "Daniel",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var rafa = {
    nome: "Rafa",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var gui = {
    nome: "Gui",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var renato = {
    nome: "Renato",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var elementoTabela = document.getElementById("tabelaJogadores");
  
  exibirNaTela();
  
  function exibirNaTela() {
    elementoTabela.innerHTML = `
        <tr>
            <td>${daniel.nome}</td>
            <td>${daniel.vitoria}</td>
            <td>${daniel.empate}</td>
            <td>${daniel.derrota}</td>
            <td>${daniel.pontos}</td>
            <td><button onClick="adicionarVitoria(daniel)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(daniel)">Empate</button></td>
            <td><button onClick="adicionarDerrota(daniel)">Derrota</button></td>
        </tr>

        <tr>
            <td>${rafa.nome}</td>
            <td>${rafa.vitoria}</td>
            <td>${rafa.empate}</td>
            <td>${rafa.derrota}</td>
            <td>${rafa.pontos}</td>
            <td><button onClick="adicionarVitoria(rafa)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(rafa)">Empate</button></td>
            <td><button onClick="adicionarDerrota(rafa)">Derrota</button></td>

        </tr>

        <tr>
            <td>${gui.nome}</td>
            <td>${gui.vitoria}</td>
            <td>${gui.empate}</td>
            <td>${gui.derrota}</td>
            <td>${gui.pontos}</td>
            <td><button onClick="adicionarVitoria(gui)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(gui)">Empate</button></td>
            <td><button onClick="adicionarDerrota(gui)">Derrota</button></td>

        </tr>
    `;
  }
  
  function adicionarVitoria(jogador) {
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
    exibirNaTela();
  }
  
  function adicionarEmpate(jogador) {
    jogador.empate++;
    jogador.pontos++;
    exibirNaTela();
  }
  
  function adicionarDerrota(jogador) {
    jogador.derrota++;
    exibirNaTela();
  }






