const resultsContainer = document.getElementById('results-container');

function exibirResultados(resultados) {
  resultsContainer.innerHTML = '';

  const resultadoElement = document.createElement('div');
  resultadoElement.classList.add('resultado');

  const acertosElement = document.createElement('p');
  acertosElement.textContent = `Você acertou ${resultados.acertos} de ${resultados.total} perguntas!`;
  resultadoElement.appendChild(acertosElement);

  const porcentagemElement = document.createElement('p');
  porcentagemElement.textContent = `Porcentagem de acertos: ${resultados.porcentagem}%`;
  resultadoElement.appendChild(porcentagemElement);

  const mensagemElement = document.createElement('p');
  mensagemElement.textContent = resultados.mensagem;
  resultadoElement.appendChild(mensagemElement);

  resultsContainer.appendChild(resultadoElement);
}

const resultados = {
  acertos: 7,
  total: 10,
  porcentagem: 70,
  mensagem: 'Parabéns! Você está no caminho certo!'
};
exibirResultados(resultados);



