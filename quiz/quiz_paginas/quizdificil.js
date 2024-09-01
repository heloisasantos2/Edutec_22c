const quizzes = [
    {
        "title": "Difícil",
            "icon": "../assets/images/nivel-dificil.png",
            "questions": [
                {
                    "question": "Como o conceito de eficiência ecológica afeta o tamanho das populações nos níveis tróficos superiores?",
                    "answers": [
                        { "Option": "A eficiência ecológica permite que a energia se acumule nos níveis tróficos superiores.", correct: false },
                        { "Option": "A eficiência ecológica é baixa, o que limita a quantidade de energia disponível nos níveis superiores.", correct: true },
                        { "Option": "A eficiência ecológica é irrelevante para o tamanho das populações.", correct: false }
                    ]
                },
                {
                    "question": "O que define o papel de um organismo como consumidor primário em uma cadeia alimentar complexa?",
                    "answers": [
                        { "Option": "Sua capacidade de decompor matéria orgânica.", correct: false },
                        { "Option": "Seu consumo direto de produtores como plantas e algas.", correct: true },
                        { "Option": "Sua posição no topo da cadeia alimentar.", correct: false }
                    ]
                },
                {
                    "question": "Em uma teia alimentar, o que acontece quando uma espécie-chave é removida?",
                    "answers": [
                        { "Option": "Outras espécies se ajustam rapidamente e não há impacto significativo.", correct: false },
                        { "Option": "A estrutura da teia alimentar pode colapsar, afetando múltiplas espécies.", correct: true },
                        { "Option": "As espécies nos níveis tróficos superiores sempre se beneficiam.", correct: false }
                    ]
                },
                {
                    "question": "Como a bioacumulação afeta predadores de topo em uma teia alimentar?",
                    "answers": [
                        { "Option": "Os predadores de topo acumulam menos toxinas devido à sua posição.", correct: false },
                        { "Option": "Os predadores de topo acumulam toxinas em níveis mais altos devido à biomagnificação.", correct: true },
                        { "Option": "A bioacumulação só afeta os produtores.", correct: false }
                    ]
                },
                {
                    "question": "Qual é o impacto de espécies invasoras em teias alimentares complexas?",
                    "answers": [
                        { "Option": "Elas sempre equilibram a teia alimentar ao introduzir novos predadores.", correct: false },
                        { "Option": "Elas podem desestabilizar as teias alimentares ao competir com espécies nativas.", correct: true },
                        { "Option": "Elas geralmente têm pouco impacto devido à sua baixa eficiência ecológica.", correct: false }
                    ]
                },
                {
                    "question": "Por que os níveis tróficos superiores geralmente têm menos organismos que os níveis inferiores em uma cadeia alimentar?",
                    "answers": [
                        { "Option": "Porque os organismos superiores são mais eficientes na conversão de energia.", correct: false },
                        { "Option": "Porque há menos energia disponível em cada nível sucessivo devido à perda de energia.", correct: true },
                        { "Option": "Porque os níveis inferiores têm menos predadores.", correct: false }
                    ]
                },
                {
                    "question": "Como a perda de habitat pode afetar a estrutura de uma teia alimentar?",
                    "answers": [
                        { "Option": "Apenas as espécies no topo da teia alimentar são afetadas.", correct: false },
                        { "Option": "Pode levar à extinção de várias espécies e ao colapso da teia alimentar.", correct: true },
                        { "Option": "As espécies podem facilmente migrar para novos habitats sem impacto.", correct: false }
                    ]
                },
                {
                    "question": "O que é um consumidor secundário em uma cadeia alimentar?",
                    "answers": [
                        { "Option": "Um organismo que consome diretamente os produtores.", correct: false },
                        { "Option": "Um organismo que consome herbívoros.", correct: true },
                        { "Option": "Um organismo que realiza fotossíntese.", correct: false }
                    ]
                },
                {
                    "question": "Como a introdução de um superpredador pode alterar uma teia alimentar existente?",
                    "answers": [
                        { "Option": "O superpredador não afeta as espécies de nível trófico inferior.", correct: false },
                        { "Option": "Pode levar ao declínio de outros predadores e à reorganização das relações tróficas.", correct: true },
                        { "Option": "Aumenta a biodiversidade sem alterar a teia alimentar.", correct: false }
                    ]
                },
                {
                    "question": "Por que as cadeias alimentares marinhas tendem a ser mais longas que as terrestres?",
                    "answers": [
                        { "Option": "Devido à maior eficiência energética nos ecossistemas marinhos.", correct: true },
                        { "Option": "Porque há menos predadores nos oceanos.", correct: false },
                        { "Option": "Porque os produtores marinhos são menos abundantes.", correct: false }
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
