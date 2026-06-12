// --- Data Pools ---
const allQuestions = [
    { text: "Do you like dark, psychological thrillers?", genre: "Mystery", options: ["Yes", "No"] },
    // ... add all 50 question objects here ...
    { text: "Do you prefer high-energy battle shonen?", genre: "Action", options: ["Yes", "No"] }
];

const allAnime = [
    { title: "Death Note", genre: "Mystery", match: "95%" },
    { title: "Attack on Titan", genre: "Action", match: "98%" },
    // ... add all 200 anime objects here ...
];

// --- State Management ---
let activeQuestions = []; // Will hold the 20 randomized questions
let currentQuestionIndex = 0;
let userScores = {}; 

// --- Logic ---
function startQuiz() {
    // Randomize and select 20 questions
    activeQuestions = [...allQuestions]
        .sort(() => 0.5 - Math.random())
        .slice(0, 20);
    
    currentQuestionIndex = 0;
    userScores = {};
    showScreen(quizScreen);
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= 20) {
        showResults();
        return;
    }

    const q = activeQuestions[currentQuestionIndex];
    questionText.innerText = q.text;
    answersContainer.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'answer-btn';
        btn.onclick = () => {
            // Scoring logic: Increment genre count based on the question's genre
            userScores[q.genre] = (userScores[q.genre] || 0) + 1;
            currentQuestionIndex++;
            updateProgress();
            loadQuestion();
        };
        answersContainer.appendChild(btn);
    });
}

function showResults() {
    showScreen(resultsScreen);
    
    // Sort genres by score
    const sortedGenres = Object.keys(userScores).sort((a, b) => userScores[b] - userScores[a]);
    
    // Filter anime based on top genre
    const topGenre = sortedGenres[0];
    const filteredAnime = allAnime.filter(a => a.genre === topGenre).slice(0, 4);

    // Render results... (same logic as before)
}

