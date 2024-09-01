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
    document.querySelector('.pergunta h2').textContent = question.question;

    const answerElements = document.querySelectorAll('.alternativas form');
    answerElements.forEach((form, index) => {
        const radio = form.querySelector('input[type="radio"]');
        const label = form.querySelector('label');
        radio.id = `alternativa_${index}`;
        radio.name = "answer"; // Ensure all radio buttons have the same name
        radio.value = question.answers[index].correct;
        label.innerHTML = `
            <input type="radio" id="alternativa_${index}" name="answer" value="${question.answers[index].correct}">
            <div>
                <span>${String.fromCharCode(65 + index)}</span>
                ${question.answers[index].Option}
            </div>
        `;
        label.style.border = ''; // Clear previous borders
    });

    document.querySelector('.progress-bar .progress').style.width = `${(currentQuestionIndex + 1) * 100 / quizzes[0].questions.length}%`;
    document.querySelector('.timer').textContent = '00:00'; // Timer estático por enquanto
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const isCorrect = selectedOption.value === 'true';
        const allLabels = document.querySelectorAll('.alternativas label');
        
        allLabels.forEach(label => {
            const input = label.querySelector('input[type="radio"]');
            if (input.value === 'true') {
                label.style.border = '2px solid green'; // Bordas verdes para as corretas
            } else if (input.checked) {
                label.style.border = '2px solid red'; // Bordas vermelhas para as erradas
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
    document.querySelector('.timer').style.display = 'none';
}

document.querySelector('button').addEventListener('click', nextQuestion);

window.onload = function() {
    showQuestion();
};
