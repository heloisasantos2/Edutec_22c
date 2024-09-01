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
    document.querySelector('.pergunta h2').textContent = question.question;

    const answerElements = document.querySelectorAll('.alternativas form');
    answerElements.forEach((form, index) => {
        const radio = form.querySelector('input[type="radio"]');
        const label = form.querySelector('label');
        radio.id = `alternativa_${index}`;
        radio.name = "answer";
        radio.value = question.answers[index].correct;
        label.innerHTML = `
            <input type="radio" id="alternativa_${index}" name="answer" value="${question.answers[index].correct}">
            <div>
                <span>${String.fromCharCode(65 + index)}</span>
                ${question.answers[index].Option}
            </div>
        `;
        label.style.border = ''; 
    });

    document.querySelector('.progress-bar .progress').style.width = `${(currentQuestionIndex + 1) * 100 / quizzes[0].questions.length}%`;
    document.querySelector('.timer').textContent = '00:00'; 
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const isCorrect = selectedOption.value === 'true';
        const allLabels = document.querySelectorAll('.alternativas label');
        
        allLabels.forEach(label => {
            const input = label.querySelector('input[type="radio"]');
            if (input.value === 'true') {
                label.style.border = '2px solid green';
            } else if (input.checked) {
                label.style.border = '2px solid red'; 
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
