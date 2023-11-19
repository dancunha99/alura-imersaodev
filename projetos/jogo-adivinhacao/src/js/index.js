var numeroSecreto = 50

while(chute != numeroSecreto) {
    var chute = prompt('Digite um número entre 0 e 100')
    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert('Acertou!')
    } else if (chute > numeroSecreto) {
        alert('Errroou... O número secreto é menor!')
    } else if (chute < NumeroSecreto) {
        alert('Errroou... O número secreto é maior!')
    } 
}