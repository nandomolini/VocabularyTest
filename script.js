const questionsBasic1 = [
    { question: "What is the translation for 'apple'?", options: ["Maçã", "Banana", "Pêra", "Laranja"], answer: "Maçã" },
    { question: "What is the translation for 'dog'?", options: ["Cachorro", "Gato", "Pássaro", "Peixe"], answer: "Cachorro" },
    { question: "What is the translation for 'chair'?", options: ["Cadeira", "Mesa", "Janela", "Porta"], answer: "Cadeira" },
    { question: "What is the translation for 'book'?", options: ["Livro", "Caderno", "Caneta", "Lápis"], answer: "Livro" },
    { question: "What is the translation for 'dog'?", options: ["Cachorro", "Gato", "Cavalo", "Vaca"], answer: "Cachorro" },
    { question: "What is the translation for 'sun'?", options: ["Sol", "Lua", "Estrela", "Céu"], answer: "Sol" },
    { question: "What is the translation for 'water'?", options: ["Água", "Fogo", "Terra", "Ar"], answer: "Água" },
    { question: "What is the translation for 'tree'?", options: ["Árvore", "Flor", "Grama", "Folha"], answer: "Árvore" },
    { question: "What is the translation for 'car'?", options: ["Carro", "Moto", "Bicicleta", "Caminhão"], answer: "Carro" },
    { question: "What is the translation for 'river'?", options: ["Rio", "Mar", "Lago", "Oceano"], answer: "Rio" },
    { question: "What is the translation for 'school'?", options: ["Escola", "Faculdade", "Universidade", "Biblioteca"], answer: "Escola" },
    { question: "What is the translation for 'computer'?", options: ["Computador", "Televisão", "Rádio", "Telefone"], answer: "Computador" },
    { question: "What is the translation for 'shoe'?", options: ["Sapato", "Camiseta", "Calça", "Chapéu"], answer: "Sapato" },
    { question: "What is the translation for 'bird'?", options: ["Pássaro", "Peixe", "Cachorro", "Gato"], answer: "Pássaro" },
    { question: "What is the translation for 'train'?", options: ["Trem", "Carro", "Ônibus", "Avião"], answer: "Trem" },
    { question: "What is the translation for 'phone'?", options: ["Telefone", "Computador", "Relógio", "Televisão"], answer: "Telefone" },
    { question: "What is the translation for 'window'?", options: ["Janela", "Porta", "Parede", "Teto"], answer: "Janela" },
    { question: "What is the translation for 'door'?", options: ["Porta", "Cadeira", "Mesa", "Sofá"], answer: "Porta" },
    { question: "What is the translation for 'milk'?", options: ["Leite", "Água", "Suco", "Café"], answer: "Leite" },
    { question: "What is the translation for 'house'?", options: ["Casa", "Apartamento", "Loja", "Escritório"], answer: "Casa" }
    // Mais perguntas
];

let currentQuestionIndex = 0;
let score = 0;
let currentLevel = 1;
const totalQuestions = 20;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');

function startGame(level) {
    let questions = questionsBasic1;
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(questions[currentQuestionIndex], questions);
}

function showQuestion(questionObj, questions) {
    optionsContainer.innerHTML = '';
    resultElement.textContent = '';

    questionElement.textContent = questionObj.question;
    questionObj.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(option, questionObj.answer, questions));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedOption, correctAnswer, questions) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption && selectedOption !== correctAnswer) {
            button.classList.add('wrong');
        }
        button.disabled = true;
    });

    if (selectedOption === correctAnswer) {
        score++;
        resultElement.textContent = "Correto!";
    } else {
        resultElement.textContent = "Errado!";
    }

    nextButton.style.display = 'block';
    nextButton.addEventListener('click', () => nextQuestion(questions));
}

function nextQuestion(questions) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex], questions);
    } else {
        endLevel();
    }
    nextButton.style.display = 'none';
}

function endLevel() {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 70) {
        resultElement.textContent = `Parabéns! Você passou com ${percentage}% de acertos.`;
        currentLevel++;
        startGame(currentLevel);
    } else {
        resultElement.textContent = `Você não atingiu a pontuação necessária. Tente novamente.`;
        startGame(currentLevel);
    }
}

startGame(currentLevel);
