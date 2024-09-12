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

function shuffleQuestions() {
    quizzes[0].questions = quizzes[0].questions.sort(() => Math.random() - 0.5);
}

function highlightSelectedAlternative() {
    const allAlternatives = document.querySelectorAll('.alternativa');
    
    allAlternatives.forEach(alternative => {
        alternative.style.backgroundColor = ''; 
    });
    
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const selectedAlternative = selectedOption.closest('.alternativa');
        selectedAlternative.style.border = '2px solid green'; 
        alternative.style.borderRadius = '30px'; 
    }
}

function showQuestion() {
    if (currentQuizfacilhtml >= quizzes[0].questions.length) {
        showResult();
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

        // Adiciona o evento para destacar a alternativa quando for selecionada
        radioInput.addEventListener('change', highlightSelectedAlternative);
    });

    const progressPercentage = ((currentQuizfacilhtml + 1) / quizzes[0].questions.length) * 100;
    document.querySelector('.progress').style.width = `${progressPercentage}%`;

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
            currentQuizfacilhtml++;
            showQuestion();
        }, 1000);
    } else {
        alert('Por favor, selecione uma resposta.');
    }
}

function showResult() {
    document.querySelector('.pergunta h2').textContent = `Você terminou o quiz! Sua pontuação é ${score} de ${quizzes[0].questions.length}.`;
    document.querySelector('.alternativas').innerHTML = ''; 
    
    document.querySelector('.progress-bar').style.display = 'none';
    document.querySelector('.progress-b').style.display = 'none';

    document.getElementById('nextButton').style.display = 'none';
}

window.onload = function() {
    shuffleQuestions();
    showQuestion(); 
};

document.getElementById('nextButton').addEventListener('click', nextQuestion);

document.querySelectorAll('input[name="answer"]').forEach(option => {
    option.addEventListener('change', highlightSelectedAlternative);
});
