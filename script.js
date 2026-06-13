/* =========================
   STATE
========================= */

let currentQuestion = 0;

/* =========================
   EXTENDED TASTE SYSTEM (22+ GENRES)
========================= */

let taste = {
  Action: 0,
comedy: 0,
romance: 0,
mind: 0,
fantasy: 0,
adventure: 0,
sciFi: 0,
horror: 0,
drama: 0,
emotional: 0,
sliceOfLife: 0,
dark: 0,
wholesome: 0,
psychological: 0,
mystery: 0,
thriller: 0,
sports: 0,
mecha: 0,
isekai: 0,
historical: 0,
music: 0,
supernatural: 0,
nostalgia: 0,
suspense: 0,
satire: 0,
parody: 0,
tragedy: 0,
melodrama: 0,
noir: 0,
surrealism: 0,
experimental: 0,
existential: 0,
philosophical: 0,
cynical: 0,
optimistic: 0,
dystopian: 0,
postApocalyptic: 0,
cyberpunk: 0,
steampunk: 0,
spaceOpera: 0,
urbanFantasy: 0,
highFantasy: 0,
mythological: 0,
alternativeHistory: 0,
contemporary: 0,
rural: 0,
academic: 0,
comingOfAge: 0,
foundFamily: 0,
slowBurn: 0,
ensembleCast: 0,
revenge: 0,
heist: 0,
survival: 0,
political: 0,
biographical: 0,
workplace: 0,
travelogue: 0,
martialArts: 0,
cybernetic: 0,
superhero: 0,
vampire: 0,
zombie: 0,
detective: 0,
courtroom: 0,
medical: 0,
culinary: 0,
gaming: 0,
military: 0
};

/* =========================
   DOM
========================= */

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const quizEl = document.getElementById("quiz");
const progress = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

/* =========================
   40 QUESTION POOL
========================= */

const questionPool = [

/* ================= CORE TASTE ================= */

{
  question: "What excites you most in anime?",
  answers: [
    { text: "Epic battles", score: { action: 3 } },
    { text: "Deep story twists", score: { mind: 3, thriller: 1 } },
    { text: "Romantic feelings", score: { romance: 3 } },
    { text: "Funny chaos", score: { comedy: 3 } }
  ]
},

{
  question: "Pick your vibe",
  answers: [
    { text: "Dark and serious", score: { dark: 3, thriller: 1 } },
    { text: "Bright and happy", score: { wholesome: 3 } },
    { text: "Emotional journey", score: { emotional: 3 } },
    { text: "Mysterious world", score: { mystery: 3 } }
  ]
},

{
  question: "What pacing do you prefer?",
  answers: [
    { text: "Fast and intense", score: { action: 3 } },
    { text: "Slow emotional build", score: { emotional: 3 } },
    { text: "Mind-game focused", score: { mind: 3 } },
    { text: "Relaxed comedy flow", score: { comedy: 3 } }
  ]
},

{
  question: "Your ideal world?",
  answers: [
    { text: "Fantasy kingdom", score: { fantasy: 3 } },
    { text: "Sci-fi future city", score: { sciFi: 3 } },
    { text: "School life", score: { sliceOfLife: 3 } },
    { text: "Survival war zone", score: { action: 3, dark: 1 } }
  ]
},

{
  question: "Favorite MC type?",
  answers: [
    { text: "Genius strategist", score: { mind: 3 } },
    { text: "Overpowered hero", score: { action: 3 } },
    { text: "Emotionally broken", score: { emotional: 3 } },
    { text: "Funny idiot", score: { comedy: 3 } }
  ]
},

{
  question: "Choose a power",
  answers: [
    { text: "Time control", score: { mind: 3, sciFi: 2 } },
    { text: "Magic", score: { fantasy: 3 } },
    { text: "Super strength", score: { action: 3 } },
    { text: "Mind reading", score: { psychological: 3 } }
  ]
},

{
  question: "Pick your setting",
  answers: [
    { text: "High school", score: { sliceOfLife: 3 } },
    { text: "Space exploration", score: { sciFi: 3 } },
    { text: "Medieval world", score: { fantasy: 3 } },
    { text: "Modern city", score: { sliceOfLife: 2 } }
  ]
},

{
  question: "What hits you hardest?",
  answers: [
    { text: "Character death", score: { emotional: 3, dark: 1 } },
    { text: "Love breakup", score: { romance: 3 } },
    { text: "Plot twist", score: { thriller: 3 } },
    { text: "Funny moments", score: { comedy: 3 } }
  ]
},

{
  question: "Pick your companion",
  answers: [
    { text: "Loyal friend", score: { wholesome: 3 } },
    { text: "Rival genius", score: { mind: 3 } },
    { text: "Cute partner", score: { romance: 3 } },
    { text: "Chaos sidekick", score: { comedy: 3 } }
  ]
},

{
  question: "Danger level?",
  answers: [
    { text: "Extreme danger", score: { dark: 3, action: 2 } },
    { text: "Moderate adventure", score: { adventure: 3 } },
    { text: "Safe cozy", score: { wholesome: 3 } },
    { text: "Psychological danger", score: { psychological: 3 } }
  ]
},

/* ================= STORY & EMOTION ================= */

{
  question: "What keeps you watching?",
  answers: [
    { text: "Cliffhangers", score: { thriller: 3 } },
    { text: "Strong emotions", score: { emotional: 3 } },
    { text: "Non-stop fights", score: { action: 3 } },
    { text: "Cute scenes", score: { wholesome: 3 } }
  ]
},

{
  question: "Favorite theme?",
  answers: [
    { text: "Revenge", score: { dark: 3 } },
    { text: "Friendship", score: { wholesome: 3 } },
    { text: "Love", score: { romance: 3 } },
    { text: "Survival", score: { thriller: 3 } }
  ]
},

{
  question: "Biggest fear in story?",
  answers: [
    { text: "Losing loved ones", score: { emotional: 3 } },
    { text: "Mind control", score: { psychological: 3 } },
    { text: "Monsters", score: { horror: 3 } },
    { text: "Nothing scares me", score: { wholesome: 3 } }
  ]
},

{
  question: "Preferred ending?",
  answers: [
    { text: "Happy ending", score: { wholesome: 3 } },
    { text: "Bittersweet ending", score: { emotional: 3 } },
    { text: "Dark ending", score: { dark: 3 } },
    { text: "Open ending", score: { mystery: 3 } }
  ]
},

{
  question: "What motivates characters?",
  answers: [
    { text: "Love", score: { romance: 3 } },
    { text: "Revenge", score: { dark: 3 } },
    { text: "Power", score: { action: 3 } },
    { text: "Survival", score: { thriller: 3 } }
  ]
},

{
  question: "What emotional tone do you prefer?",
  answers: [
    { text: "Very emotional", score: { emotional: 3 } },
    { text: "Balanced", score: { sliceOfLife: 2 } },
    { text: "Light emotions", score: { comedy: 2 } },
    { text: "No emotion, pure action", score: { action: 3 } }
  ]
},

{
  question: "Which story complexity?",
  answers: [
    { text: "Simple", score: { wholesome: 2 } },
    { text: "Medium", score: { sliceOfLife: 2 } },
    { text: "Complex mind games", score: { mind: 3 } },
    { text: "Dark complex plot", score: { thriller: 3, dark: 2 } }
  ]
},

/* ================= STYLE & ACTION ================= */

{
  question: "Fight style?",
  answers: [
    { text: "Strategic fights", score: { mind: 3 } },
    { text: "Explosive power fights", score: { action: 3 } },
    { text: "Fast martial arts", score: { action: 2 } },
    { text: "No fighting", score: { wholesome: 3 } }
  ]
},

{
  question: "Animation style?",
  answers: [
    { text: "Old school", score: { nostalgia: 3 } },
    { text: "Modern clean", score: { action: 2 } },
    { text: "Dark artistic", score: { dark: 3 } },
    { text: "Cute chibi", score: { wholesome: 3 } }
  ]
},

{
  question: "How much action?",
  answers: [
    { text: "Non-stop action", score: { action: 3 } },
    { text: "Balanced", score: { sliceOfLife: 2 } },
    { text: "Low action", score: { emotional: 2 } },
    { text: "No action", score: { wholesome: 3 } }
  ]
},

/* ================= CHARACTER & WORLD ================= */

{
  question: "Team type you like?",
  answers: [
    { text: "Strong friendship group", score: { wholesome: 3 } },
    { text: "Rival groups", score: { mind: 2 } },
    { text: "Solo hero", score: { action: 3 } },
    { text: "Chaotic group", score: { comedy: 3 } }
  ]
},

{
  question: "Villain type?",
  answers: [
    { text: "Pure evil", score: { dark: 3 } },
    { text: "Tragic villain", score: { emotional: 3 } },
    { text: "Smart villain", score: { mind: 3 } },
    { text: "Funny villain", score: { comedy: 2 } }
  ]
},

{
  question: "What matters most?",
  answers: [
    { text: "Story", score: { mind: 2 } },
    { text: "Characters", score: { emotional: 2 } },
    { text: "Action", score: { action: 2 } },
    { text: "Feel-good vibe", score: { wholesome: 3 } }
  ]
},

/* ================= EXTRA 20 QUESTIONS ================= */

{
  question: "Do you like romance subplots?",
  answers: [
    { text: "Yes main focus", score: { romance: 3 } },
    { text: "Yes but small", score: { romance: 2 } },
    { text: "Not really", score: { action: 2 } },
    { text: "No romance at all", score: { dark: 1 } }
  ]
},

{
  question: "Preferred anime length?",
  answers: [
    { text: "Short (12 eps)", score: { sliceOfLife: 2 } },
    { text: "Medium (24 eps)", score: { action: 2 } },
    { text: "Long running", score: { action: 3 } },
    { text: "Movies only", score: { emotional: 2 } }
  ]
},

{
  question: "Do you like plot twists?",
  answers: [
    { text: "Many twists", score: { thriller: 3 } },
    { text: "Some twists", score: { mind: 2 } },
    { text: "Few twists", score: { sliceOfLife: 2 } },
    { text: "No twists", score: { wholesome: 3 } }
  ]
},

{
  question: "Favorite genre energy?",
  answers: [
    { text: "Dark intensity", score: { dark: 3 } },
    { text: "Light happiness", score: { wholesome: 3 } },
    { text: "High tension", score: { thriller: 3 } },
    { text: "Balanced mix", score: { sliceOfLife: 2 } }
  ]
},

{
  question: "What do you prefer in fights?",
  answers: [
    { text: "Strategy", score: { mind: 3 } },
    { text: "Power", score: { action: 3 } },
    { text: "Emotion-driven", score: { emotional: 3 } },
    { text: "No fights", score: { wholesome: 2 } }
  ]
},

{
  question: "Do you like sad anime?",
  answers: [
    { text: "Yes I love it", score: { emotional: 3 } },
    { text: "Sometimes", score: { emotional: 2 } },
    { text: "Rarely", score: { sliceOfLife: 2 } },
    { text: "No sadness", score: { wholesome: 3 } }
  ]
},

{
  question: "How important is art style?",
  answers: [
    { text: "Very important", score: { nostalgia: 2 } },
    { text: "Somewhat", score: { sliceOfLife: 2 } },
    { text: "Not important", score: { action: 2 } },
    { text: "Only story matters", score: { mind: 3 } }
  ]
},

{
  question: "Do you prefer smart MC or strong MC?",
  answers: [
    { text: "Smart MC", score: { mind: 3 } },
    { text: "Strong MC", score: { action: 3 } },
    { text: "Both", score: { action: 2, mind: 2 } },
    { text: "Neither", score: { sliceOfLife: 2 } }
  ]
},

{
  question: "What world feels best?",
  answers: [
    { text: "Fantasy world", score: { fantasy: 3 } },
    { text: "Sci-fi world", score: { sciFi: 3 } },
    { text: "Real world", score: { sliceOfLife: 3 } },
    { text: "Dark world", score: { dark: 3 } }
  ]
},

{
  question: "What type of tension do you like?",
  answers: [
    { text: "Physical fights", score: { action: 3 } },
    { text: "Psychological tension", score: { psychological: 3 } },
    { text: "Emotional tension", score: { emotional: 3 } },
    { text: "No tension", score: { wholesome: 3 } }
  ]
},

{
  question: "Do you like mystery?",
  answers: [
    { text: "Heavy mystery", score: { mystery: 3 } },
    { text: "Some mystery", score: { thriller: 2 } },
    { text: "Light mystery", score: { sliceOfLife: 2 } },
    { text: "No mystery", score: { wholesome: 3 } }
  ]
},

{
  question: "Do you prefer heroes or anti-heroes?",
  answers: [
    { text: "Heroes", score: { wholesome: 2 } },
    { text: "Anti-heroes", score: { dark: 3 } },
    { text: "Both", score: { emotional: 2 } },
    { text: "Villains", score: { psychological: 3 } }
  ]
},

{
  question: "Do you like slow builds?",
  answers: [
    { text: "Yes", score: { emotional: 3 } },
    { text: "Sometimes", score: { sliceOfLife: 2 } },
    { text: "No", score: { action: 3 } },
    { text: "Only fast pacing", score: { thriller: 2 } }
  ]
},

{
  question: "Which tone do you prefer?",
  answers: [
    { text: "Dark", score: { dark: 3 } },
    { text: "Bright", score: { wholesome: 3 } },
    { text: "Neutral", score: { sliceOfLife: 2 } },
    { text: "Chaotic", score: { comedy: 3 } }
  ]
},

{
  question: "What makes a good anime for you?",
  answers: [
    { text: "Story", score: { mind: 2 } },
    { text: "Emotions", score: { emotional: 2 } },
    { text: "Action", score: { action: 2 } },
    { text: "Comedy", score: { comedy: 2 } }
  ]
}

];
/* =========================
   GENERATE 20 UNIQUE QUESTIONS
========================= */

let questions = [];

function generateQuestions() {
  let pool = [...questionPool];
  questions = [];

  for (let i = 0; i < 20 && pool.length > 0; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    questions.push(pool.splice(idx, 1)[0]);
  }
}

/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {
  const q = questions[currentQuestion];

  questionEl.innerText = q.question;
  answersEl.innerHTML = "";

  if (questions.length > 0) {
    progress.style.width = ((currentQuestion + 1) / questions.length) * 100 + "%";
    progressText.innerText = `Question ${currentQuestion + 1} / ${questions.length}`;
  }

  q.answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerText = ans.text;

    btn.onclick = () => {
      answersEl.querySelectorAll("button").forEach(b => b.disabled = true);

      for (let k in ans.score) {
        taste[k] = (taste[k] || 0) + ans.score[k];
      }

      currentQuestion++;

      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };

    answersEl.appendChild(btn);
  });
}

/* =========================
   PERSONALITY
========================= */

function personalityName() {
  let top = "";
  let max = -Infinity;

  for (let k in taste) {
    if (taste[k] > max) {
      max = taste[k];
      top = k;
    }
  }

  const map = {
    action: "⚔️ Battle Seeker",
    mind: "🧠 Genius Thinker",
    romance: "❤️ Emotional Lover",
    comedy: "😂 Chaos Enjoyer",
    fantasy: "✨ Fantasy Dreamer",
    psychological: "🧩 Deep Analyst"
  };

  return map[top] || "🌌 Deep Observer";
}

/* =========================
   API (FIXED + RETRY + CACHE)
========================= */

const cache = new Map();

async function fetchAnime(query, page = 1, retries = 3) {
  const key = `${query}-${page}`;
  if (cache.has(key)) return cache.get(key);

  const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&page=${page}&limit=10`;

  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      const result = data.data || [];

      cache.set(key, result);
      return result;

    } catch (e) {
      await new Promise(r => setTimeout(r, 800 * (i + 1)));
    }
  }

  return [];
}

/* =========================
   QUERY BUILDER
========================= */

function buildQueries(t) {
  let q = [];

  if (t.action > 5) q.push("action");
  if (t.mind > 5) q.push("psychological");
  if (t.romance > 5) q.push("romance");
  if (t.fantasy > 5) q.push("fantasy");
  if (t.sciFi > 5) q.push("sci-fi");
  if (t.horror > 5) q.push("horror");
  if (t.mystery > 5) q.push("mystery");

  return q.length ? q : ["top anime"];
}

/* =========================
   SCORING
========================= */

function calculateScore(anime, t) {
  let score = 0;
  let g = (anime.genres || []).map(x => x.name.toLowerCase());

  for (let key in t) {
    if (g.includes(key.toLowerCase())) {
      score += t[key] * 1.2;
    }
  }

  if (g.includes("psychological")) score += t.mind * 1.5;
  if (g.includes("dark")) score += t.dark * 1.5;

  return score;
}

/* =========================
   EXPLANATION
========================= */

function explain(anime, t) {
  let g = (anime.genres || []).map(x => x.name.toLowerCase());
  let reasons = [];

  if (g.includes("action") && t.action > 3) reasons.push("action match");
  if (g.includes("romance") && t.romance > 3) reasons.push("romance match");
  if (g.includes("psychological") && t.mind > 3) reasons.push("mind match");
  if (g.includes("fantasy") && t.fantasy > 3) reasons.push("fantasy match");

  return reasons.join(", ") || "general match";
}

/* =========================
   RECOMMEND ENGINE
========================= */

async function recommendAnime() {
  const container = document.getElementById("recommendations");
  container.innerHTML = "Analyzing anime DNA...";

  let queries = buildQueries(taste);

  let all = [];

  for (let q of queries) {
    all.push(...await fetchAnime(q, 1));
    all.push(...await fetchAnime(q, 2));
  }

  const unique = {};
  all.forEach(a => unique[a.mal_id] = a);

  const ranked = Object.values(unique).map(a => ({
    title: a.title,
    image: a.images?.jpg?.image_url,
    description: a.synopsis?.slice(0, 120) || "",
    score: calculateScore(a, taste),
    why: explain(a, taste)
  }));

  ranked.sort((a, b) => b.score - a.score);

  showResults(ranked.slice(0, 10));
}

/* =========================
   SHOW RESULTS
========================= */

function showResults(list) {
  const container = document.getElementById("recommendations");
  container.innerHTML = "";

  list.forEach(a => {
    const div = document.createElement("div");
    div.className = "animeCard";

    div.innerHTML = `
      <img src="${a.image}" style="width:100%;border-radius:10px;">
      <h3>${a.title}</h3>
      <p>${a.description}</p>
      <p><strong>Match: ${Math.min(100, Math.floor(a.score * 10))}%</strong></p>
      <p style="font-size:12px;color:gray;">Why: ${a.why}</p>
    `;

    container.appendChild(div);
  });
}

/* =========================
   RESULT FLOW
========================= */

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");

  document.getElementById("personality").innerText = personalityName();

  recommendAnime();
}

/* =========================
   RESTART
========================= */

document.getElementById("restartButton").onclick = () => {
  currentQuestion = 0;

  for (let k in taste) taste[k] = 0;

  resultEl.classList.add("hidden");
  quizEl.classList.remove("hidden");

  generateQuestions();
  showQuestion();
};

/* =========================
   START
========================= */

generateQuestions();
showQuestion();
