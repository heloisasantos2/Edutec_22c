const quizzes = [
    {
        "title": "Facil",
        "icon": "../assets/images/nivel-facil.png",
        "questions": [
            {
                question: "O que é uma cadeia alimentar?",
                answers: [
                    { Option: "Um tipo de planta", correct: false },
                    { Option: "A sequência de organismos que se alimentam uns dos outros", correct: true },
                    { Option: "Um ciclo de água", correct: false },
                ],
            },
            {
                question: "Quem está no topo da cadeia alimentar?",
                answers: [
                    { Option: "Produtores", correct: false },
                    { Option: "Consumidores primarios", correct: false },
                    { Option: "Predadores", correct: true },
                ],
            },
            {
                question: "Quem são os produtores em uma cadeia alimentar?",
                answers: [
                    { Option: "Animais carnívoros", correct: false },
                    { Option: "Plantas e algas", correct: true },
                    { Option: "Decompositores", correct: false },
                ],
            },
            {
                question: "Qual o papel dos consumidores secundários em uma cadeia alimentar?",
                answers: [
                    { Option: "Comer plantas", correct: false },
                    { Option: "Comer consumidores primários", correct: true },
                    { Option: "Produzir energia", correct: false },
                ],
            },
            {
                question: "O que é uma teia alimentar?",
                answers: [
                    { Option: "Um único caminho de alimentação", correct: false },
                    { Option: "Uma rede complexa de cadeias alimentares interconectadas", correct: true },
                    { Option: "Um tipo de solo", correct: false },
                ],
            },
            {
                question: "Qual dos seguintes é um exemplo de consumidor primário?",
                answers: [
                    { Option: "Leão", correct: false },
                    { Option: "Vaca", correct: true },
                    { Option: "Águia", correct: false },
                ],
            },
            {
                question: "O que são decompositores?",
                answers: [
                    { Option: "Organismos que quebram matéria orgânica morta", correct: true },
                    { Option: "Animais que caçam outros animais", correct: false },
                    { Option: "Plantas que fazem fotossíntese", correct: false },
                ],
            },
            {
                question: "Em uma teia alimentar, quem come um herbívoro?",
                answers: [
                    { Option: "Um produtor", correct: false },
                    { Option: "Um carnívoro", correct: true },
                    { Option: "Um decompositor", correct: false },
                ],
            },
            {
                question: "O que acontece se um predador em uma cadeia alimentar for removido?",
                answers: [
                    { Option: "Nada muda", correct: false },
                    { Option: "A população dos consumidores primários pode aumentar", correct: true },
                    { Option: "A cadeia alimentar fica mais curta", correct: false },
                ],
            },
            {
                question: "Qual dos seguintes não faz parte de uma cadeia alimentar?",
                answers: [
                    { Option: "Sol", correct: true },
                    { Option: "Planta", correct: false },
                    { Option: "Predador", correct: false },
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
                alternative.style.borderRadius = '30px'
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










