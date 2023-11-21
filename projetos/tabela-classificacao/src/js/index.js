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
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var renato = {
    nome: "Renato",
    vitoria: 10,
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






