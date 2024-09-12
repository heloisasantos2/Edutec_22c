const quizzes = [
    {
        "title": "Medio",
        "icon": "../assets/images/nivel-medio.png",
        "questions": [
            {
                question: "Qual é a principal diferença entre uma teia alimentar e uma cadeia alimentar?",
                answers: [
                    { Option: "A teia alimentar é linear, enquanto a cadeia alimentar é complexa.", correct: false },
                    { Option: "A cadeia alimentar é linear, enquanto a teia alimentar é uma rede complexa de interações.", correct: true },
                    { Option: "A cadeia alimentar envolve todos os organismos em um ecossistema, enquanto a teia alimentar envolve apenas predadores.", correct: false },
                ],
            },
            {
                question: "Qual dos seguintes organismos é geralmente o produtor em uma cadeia alimentar?",
                answers: [
                    { Option: "Um coelho", correct: false },
                    { Option: "Uma alga", correct: true },
                    { Option: "Um leão", correct: false },
                ],
            },
            {
                question: "Em uma cadeia alimentar, qual é a função principal dos decompositores?",
                answers: [
                    { Option: "Eles produzem energia a partir do sol.", correct: false },
                    { Option: "Eles consomem todos os herbívoros", correct: false },
                    { Option: "Eles quebram matéria orgânica morta, devolvendo nutrientes ao solo.", correct: true },
                ],
            },
            {
                question: "O que acontece com a energia à medida que se move através dos níveis tróficos em uma cadeia alimentar?",
                answers: [
                    { Option: "Ela aumenta", correct: false },
                    { Option: "Ela diminui", correct: true },
                    { Option: "Ela permanece constante", correct: false },
                ],
            },
            {
                question: "Qual é o papel de um herbívoro em uma cadeia alimentar?",
                answers: [
                    { Option: "Consumir outros animais.", correct: false },
                    { Option: "Produzir energia através da fotossíntese", correct: false },
                    { Option: "Consumir plantas e servir de alimento para carnívoros", correct: true },
                ],
            },
            {
                question: "Se um animal no topo de uma cadeia alimentar desaparecer, o que pode acontecer com o ecossistema?",
                answers: [
                    { Option: "Nada mudará", correct: false },
                    { Option: "O equilíbrio ecológico pode ser perturbado, afetando toda a teia alimentar", correct: true },
                    { Option: "Apenas os produtores serão afetados", correct: false },
                ],
            },
            {
                question: "Em uma teia alimentar, qual grupo de organismos é considerado o mais flexível em termos de dieta?",
                answers: [
                    { Option: "Carnívoros", correct: false },
                    { Option: "Herbívoros", correct: false },
                    { Option: "Onívoros", correct: true },
                ],
            },
            {
                question: "Por que as plantas são sempre a base de uma cadeia alimentar?",
                answers: [
                    { Option: "Porque produzem sua própria energia através da fotossíntese", correct: true },
                    { Option: "Porque elas consomem outros organismos", correct: false },
                    { Option: "Porque elas precisam de nutrientes do solo", correct: false },
                ],
            },
            {
                question: "Qual das seguintes é uma consequência de uma cadeia alimentar desequilibrada?",
                answers: [
                    { Option: "Crescimento saudável da população de predadores", correct: false },
                    { Option: "Declínio ou colapso de uma população de presas", correct: true },
                    { Option: "Aumento da biodiversidade.", correct: false },
                ],
            },
            {
                question: "O que representa o nível trófico em uma cadeia alimentar?",
                answers: [
                    { Option: "O número de presas consumidas.", correct: false },
                    { Option: "A posição de um organismo na sequência de consumo de energia.", correct: true },
                    { Option: "O tempo que um organismo sobrevive", correct: false },
                ],
            }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const question = quizzes[0].questions[currentQuestionIndex];
    const questionContainer = document.querySelector('.pergunta h2');
    const alternativesContainer = document.querySelector('.alternativas');

    questionContainer.textContent = `${currentQuestionIndex + 1}. ${question.question}`;

    alternativesContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const alternativeDiv = document.createElement('div');
        alternativeDiv.classList.add('alternativa');

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.id = `alternativa_${index}`;
        radioInput.name = 'answer';
        radioInput.value = answer.correct;

        const label = document.createElement('label');
        label.setAttribute('for', `alternativa_${index}`);
        label.textContent = `${String.fromCharCode(65 + index)}. ${answer.Option}`;

        alternativeDiv.appendChild(radioInput);
        alternativeDiv.appendChild(label);
        alternativesContainer.appendChild(alternativeDiv);
    });

    const progress = (currentQuestionIndex + 1) * 100 / quizzes[0].questions.length;
    document.querySelector('.progress-bar .progress').style.width = `${progress}%`;
    document.getElementById('progress').textContent = currentQuestionIndex + 1;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const isCorrect = selectedOption.value === 'true';
        const allAlternatives = document.querySelectorAll('.alternativa');

        allAlternatives.forEach(alternative => {
            const input = alternative.querySelector('input[type="radio"]');
            if (input.value === 'true') {
                alternative.style.border = '2px solid green';
                alternative.style.borderRadius = '30px';
            } else if (input.checked) {
                alternative.style.border = '2px solid red';
                alternative.style.borderRadius = '30px';
            }
        });

        if (isCorrect) {
            score++;
        }
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizzes[0].questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }, 1000);
    } else {
        alert('Por favor, selecione uma resposta.');
    }
}

function showResult() {
    document.querySelector('.pergunta h2').textContent = `Você terminou o quiz! Sua pontuação é ${score} de ${quizzes[0].questions.length}.`;
    document.querySelector('.alternativas').innerHTML = '';
    document.querySelector('.progress-bar').style.display = 'none';
    document.getElementById('nextButton').style.display = 'none';
}

document.getElementById('nextButton').addEventListener('click', nextQuestion);

window.onload = function() {
    showQuestion();
};



let currentQuizfacilhtml = 0;
let pontuaçao = 0;

// Embaralha as perguntas para que sejam exibidas em ordem aleatória
function shuffleQuestions() {
    quizzes[0].questions = quizzes[0].questions.sort(() => Math.random() - 0.5);
}

function showQuestion() {
    if (currentQuizfacilhtml >= quizzes[0].questions.length) {
        showResult(); // Se já exibiu todas as perguntas, exibe o resultado
        return;
    }

    const question = quizzes[0].questions[currentQuizfacilhtml];
    const questionContainer = document.querySelector('.pergunta h2');
    const alternativesContainer = document.querySelector('.alternativas');

    questionContainer.textContent = `${currentQuizfacilhtml + 1}. ${question.question}`;

    alternativesContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const alternativeDiv = document.createElement('div');
        alternativeDiv.classList.add('alternativa');

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.id = `alternativa_${index}`;
        radioInput.name = 'answer';
        radioInput.value = answer.correct;

        const label = document.createElement('label');
        label.setAttribute('for', `alternativa_${index}`);
        label.textContent = `${String.fromCharCode(65 + index)}. ${answer.Option}`;

        alternativeDiv.appendChild(radioInput);
        alternativeDiv.appendChild(label);
        alternativesContainer.appendChild(alternativeDiv);
    });

    // Atualiza a barra de progresso
    const progressPercentage = ((currentQuizfacilhtml+ 1) / quizzes[0].questions.length) * 100;
    document.querySelector('.progress').style.width = `${progressPercentage}%`;

    // Atualiza o texto da barra de progresso
    document.getElementById('progresso').textContent = `${currentQuizfacilhtml + 1}/${quizzes[0].questions.length}`;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const isCorrect = selectedOption.value === 'true';
        const allAlternatives = document.querySelectorAll('.alternativa');

        allAlternatives.forEach(alternative => {
            const input = alternative.querySelector('input[type="radio"]');
            if (input.value === 'true') {
                alternative.style.border = '2px solid green'; // Marca a resposta correta
            } else if (input.checked) {
                alternative.style.border = '2px solid red'; // Marca a resposta errada
            }
        });

        if (isCorrect) {
            score++;
        }
        
        setTimeout(() => {
            currentQuizfacilhtml++; // Vai para a próxima pergunta
            showQuestion(); // Exibe a próxima pergunta
        }, 1000); // Espera um segundo antes de avançar
    } else {
        alert('Por favor, selecione uma resposta.');
    }
}

function showResult() {
    document.querySelector('.pergunta h2').textContent = `Você terminou o quiz! Sua pontuação é ${score} de ${quizzes[0].questions.length}.`;
    document.querySelector('.alternativas').innerHTML = ''; 
    
    // Esconde a barra de progresso
    document.querySelector('.progress-bar').style.display = 'none';
    document.querySelector('.progress-b').style.display = 'none';

    // Esconde o botão de próximo
    document.getElementById('nextButton').style.display = 'none';
}

// Inicia o quiz embaralhando as perguntas
window.onload = function() {
    shuffleQuestions(); // Embaralha as perguntas
    showQuestion(); // Exibe a primeira pergunta
};

document.getElementById('nextButton').addEventListener('click', nextQuestion);



