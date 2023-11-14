var numeroSecreto = parseInt(Math.random() * 1000) + 1
var tentativas = 0
var chute

while (chute != numeroSecreto){
    tentativas++
    chute = prompt('Digite um número entre 1 e 1000:')
    if (chute == numeroSecreto) alert('Parabéns, você acertou!')
    else if(chute>numeroSecreto) alert('Você errou! O número secreto é menor do que o número ' + chute)
    else alert('Você errou! O número secreto é maior do que o número ' + chute)
}

alert('Número de tentativas: ' + tentativas)
