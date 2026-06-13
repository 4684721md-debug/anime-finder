/* =========================
   STATE
========================= */

let currentQuestion = 0;

/* =========================
   EXTENDED TASTE SYSTEM (22+ GENRES)
========================= */

let taste = {
  action: 0,
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
  nostalgia: 0
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
{
  question: "What excites you most in anime?",
  answers: [
    { text: "Epic battles", score: { action: 3 } },
    { text: "Deep story twists", score: { mind: 3 } },
    { text: "Romantic feelings", score: { romance: 3 } },
    { text: "Funny chaos", score: { comedy: 3 } }
  ]
},
{
  question: "Pick your vibe",
  answers: [
    { text: "Dark and serious", score: { dark: 3, thriller: 2 } },
    { text: "Bright and happy", score: { wholesome: 3 } },
    { text: "Emotional journey", score: { emotional: 3 } },
    { text: "Mysterious world", score: { mystery: 3 } }
  ]
},
{
  question: "Your ideal world?",
  answers: [
    { text: "Fantasy kingdom", score: { fantasy: 3 } },
    { text: "Future sci-fi city", score: { sciFi: 3 } },
    { text: "Realistic school life", score: { sliceOfLife: 3 } },
    { text: "War zone survival", score: { action: 3, dark: 2 } }
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
  question: "Choose power",
  answers: [
    { text: "Time control", score: { mind: 3, sciFi: 2 } },
    { text: "Magic", score: { fantasy: 3 } },
    { text: "Super strength", score: { action: 3 } },
    { text: "Mind reading", score: { psychological: 3 } }
  ]
},
{
  question: "Pick setting",
  answers: [
    { text: "School", score: { sliceOfLife: 3 } },
    { text: "Space", score: { sciFi: 3 } },
    { text: "Medieval world", score: { fantasy: 3 } },
    { text: "Modern city", score: { sliceOfLife: 2 } }
  ]
},
{
  question: "What pacing?",
  answers: [
    { text: "Fast action", score: { action: 3 } },
    { text: "Slow emotional", score: { emotional: 3 } },
    { text: "Mind-heavy", score: { mind: 3 } },
    { text: "Comedy flow", score: { comedy: 3 } }
  ]
},
{
  question: "What hits you hardest?",
  answers: [
    { text: "Character death", score: { emotional: 3, dark: 2 } },
    { text: "Love story", score: { romance: 3 } },
    { text: "Plot twist", score: { thriller: 3 } },
    { text: "Funny moments", score: { comedy: 3 } }
  ]
},
{
  question: "Pick companion",
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
    { text: "Very high", score: { dark: 3, action: 2 } },
    { text: "Moderate", score: { adventure: 3 } },
    { text: "Safe cozy", score: { wholesome: 3 } },
    { text: "Mental danger only", score: { psychological: 3 } }
  ]
},
{
  question: "What keeps you watching?",
  answers: [
    { text: "Cliffhangers", score: { thriller: 3 } },
    { text: "Emotions", score: { emotional: 3 } },
    { text: "Fights", score: { action: 3 } },
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
  question: "Pick fear",
  answers: [
    { text: "Losing loved ones", score: { emotional: 3 } },
    { text: "Mind control", score: { psychological: 3 } },
    { text: "Monsters", score: { horror: 3 } },
    { text: "Nothing", score: { wholesome: 3 } }
  ]
},
{
  question: "Animation style?",
  answers: [
    { text: "Old school", score: { nostalgia: 3 } },
    { text: "Modern clean", score: { action: 2 } },
    { text: "Dark art", score: { dark: 3 } },
    { text: "Cute style", score: { wholesome: 3 } }
  ]
},
{
  question: "Dream anime genre?",
  answers: [
    { text: "Action fantasy", score: { action: 2, fantasy: 2 } },
    { text: "Romance drama", score: { romance: 3, drama: 2 } },
    { text: "Psychological thriller", score: { mind: 3, thriller: 2 } },
    { text: "Comedy slice", score: { comedy: 3, sliceOfLife: 2 } }
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
