// Perguntas para o Nível Básico 1
const questionsBasic1 = [
    { question: "What is the translation for 'apple'?", options: ["Pêra", "Banana", "Maçã", "Laranja"], answer: "Maçã" },
    { question: "What is the translation for 'dog'?", options: ["Cachorro", "Gato", "Pássaro", "Peixe"], answer: "Cachorro" },
    { question: "What is the translation for 'chair'?", options: ["Janela", "Cadeira", "Porta", "Mesa"], answer: "Cadeira" },
{ question: "What is the translation for 'book'?", options: ["Caneta", "Lápis", "Livro", "Caderno"], answer: "Livro" },
{ question: "What is the translation for 'dog'?", options: ["Cavalo", "Gato", "Vaca", "Cachorro"], answer: "Cachorro" },
{ question: "What is the translation for 'sun'?", options: ["Céu", "Estrela", "Sol", "Lua"], answer: "Sol" },
{ question: "What is the translation for 'water'?", options: ["Fogo", "Água", "Terra", "Ar"], answer: "Água" },
{ question: "What is the translation for 'tree'?", options: ["Folha", "Árvore", "Flor", "Grama"], answer: "Árvore" },
{ question: "What is the translation for 'car'?", options: ["Moto", "Carro", "Caminhão", "Bicicleta"], answer: "Carro" },
{ question: "What is the translation for 'river'?", options: ["Mar", "Rio", "Oceano", "Lago"], answer: "Rio" },
{ question: "What is the translation for 'school'?", options: ["Faculdade", "Escola", "Biblioteca", "Universidade"], answer: "Escola" },
{ question: "What is the translation for 'computer'?", options: ["Computador", "Telefone", "Televisão", "Rádio"], answer: "Computador" },
{ question: "What is the translation for 'shoe'?", options: ["Chapéu", "Camiseta", "Calça", "Sapato"], answer: "Sapato" },
{ question: "What is the translation for 'bird'?", options: ["Peixe", "Cachorro", "Pássaro", "Gato"], answer: "Pássaro" },
{ question: "What is the translation for 'train'?", options: ["Carro", "Avião", "Trem", "Ônibus"], answer: "Trem" },
{ question: "What is the translation for 'phone'?", options: ["Relógio", "Televisão", "Telefone", "Computador"], answer: "Telefone" },
{ question: "What is the translation for 'window'?", options: ["Porta", "Teto", "Janela", "Parede"], answer: "Janela" },
{ question: "What is the translation for 'door'?", options: ["Mesa", "Cadeira", "Sofá", "Porta"], answer: "Porta" },
{ question: "What is the translation for 'milk'?", options: ["Água", "Leite", "Suco", "Café"], answer: "Leite" },
{ question: "What is the translation for 'house'?", options: ["Apartamento", "Casa", "Loja", "Escritório"], answer: "Casa" }

    // Adicione mais perguntas aqui
];

// Perguntas para o Nível Básico 2
const questionsBasic2 = [
    { question: "What is the translation for 'car'?", options: ["Avião", "Ônibus", "Navio", "Carro"], answer: "Carro" },
    { question: "What is the translation for 'house'?", options: ["Casa", "Apartamento", "Escritório", "Loja"], answer: "Casa" },
    { question: "What is the translation for 'bicycle'?", options: ["Bicicleta", "Carroça", "Moto", "Patinete"], answer: "Bicicleta" },
{ question: "What is the translation for 'umbrella'?", options: ["Guarda-chuva", "Casaco", "Chapéu", "Jaqueta"], answer: "Guarda-chuva" },
{ question: "What is the translation for 'airport'?", options: ["Porto", "Aeroporto", "Rodoviária", "Estação"], answer: "Aeroporto" },
{ question: "What is the translation for 'library'?", options: ["Biblioteca", "Livraria", "Museu", "Teatro"], answer: "Biblioteca" },
{ question: "What is the translation for 'mountain'?", options: ["Montanha", "Colina", "Vulcão", "Planície"], answer: "Montanha" },
{ question: "What is the translation for 'mirror'?", options: ["Janela", "Espelho", "Vidro", "Porta"], answer: "Espelho" },
{ question: "What is the translation for 'bottle'?", options: ["Copo", "Garrafa", "Tigela", "Caneca"], answer: "Garrafa" },
{ question: "What is the translation for 'hospital'?", options: ["Clínica", "Farmácia", "Hospital", "Laboratório"], answer: "Hospital" },
{ question: "What is the translation for 'ceiling'?", options: ["Teto", "Parede", "Chão", "Porta"], answer: "Teto" },
{ question: "What is the translation for 'furniture'?", options: ["Móveis", "Acessórios", "Eletrodomésticos", "Decoração"], answer: "Móveis" },
{ question: "What is the translation for 'shoulder'?", options: ["Ombro", "Braço", "Perna", "Cabeça"], answer: "Ombro" },
{ question: "What is the translation for 'battery'?", options: ["Pilha", "Energia", "Carregador", "Eletricidade"], answer: "Pilha" },
{ question: "What is the translation for 'keyboard'?", options: ["Teclado", "Mouse", "Monitor", "Impressora"], answer: "Teclado" },
{ question: "What is the translation for 'password'?", options: ["Senha", "Nome de usuário", "Código", "Chave"], answer: "Senha" },
{ question: "What is the translation for 'envelope'?", options: ["Carta", "Envelope", "Papel", "Pacote"], answer: "Envelope" },
{ question: "What is the translation for 'neighborhood'?", options: ["Bairro", "Cidade", "Rua", "Avenida"], answer: "Bairro" },
{ question: "What is the translation for 'traffic'?", options: ["Trânsito", "Engarrafamento", "Sinal", "Cruzamento"], answer: "Trânsito" },
{ question: "What is the translation for 'neighbor'?", options: ["Vizinho", "Amigo", "Colega", "Parente"], answer: "Vizinho" }

    // Adicione mais perguntas aqui
];

// Níveis de perguntas
const levels = {
    1: questionsBasic1,
    2: questionsBasic2,
    // Você pode adicionar mais níveis aqui
};

let currentQuestionIndex = 0;
let score = 0;
let currentLevel = 1;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');

// Função para iniciar o jogo com o nível apropriado
function startGame(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(levels[currentLevel][currentQuestionIndex]);
}

// Função para exibir a pergunta atual e opções
function showQuestion(questionObj) {
    // Resetando o estado
    optionsContainer.innerHTML = '';
    resultElement.textContent = '';
    nextButton.style.display = 'none';

    questionElement.textContent = questionObj.question;
    questionObj.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(option, questionObj.answer));
        optionsContainer.appendChild(button);
    });
}

// Função para selecionar uma opção e verificar se está correta
function selectOption(selectedOption, correctAnswer) {
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
}

// Função para passar para a próxima pergunta ou finalizar o nível
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < levels[currentLevel].length) {
        showQuestion(levels[currentLevel][currentQuestionIndex]);
    } else {
        endLevel();
    }
    nextButton.style.display = 'none';
}

// Função para finalizar o nível e mostrar o resultado
function endLevel() {
    const totalQuestionsInLevel = levels[currentLevel].length; // Calcula o total de perguntas no nível atual
    const percentage = (score / totalQuestionsInLevel) * 100; // Calcula o percentual corretamente com base no número de perguntas

    if (percentage >= 70) {
        resultElement.textContent = `Parabéns! Você passou de nível com ${percentage.toFixed(2)}% de acertos.`;
        currentLevel++;
        if (currentLevel in levels) {
            startGame(currentLevel);
        } else {
            resultElement.textContent = "Você completou todos os níveis!";
        }
    } else {
        resultElement.textContent = `Você não atingiu a pontuação necessária. Tente novamente. Sua pontuação: ${percentage.toFixed(2)}%`;
        startGame(currentLevel); // Reinicia o mesmo nível
    }
}

// Inicializar o jogo no nível básico 1
startGame(currentLevel);

// Evento para o botão "Próxima Pergunta"
nextButton.addEventListener('click', nextQuestion);
