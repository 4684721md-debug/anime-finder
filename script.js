/* =========================
   STATE
========================= */

let currentQuestion = 0;

/* =========================
   PRO TASTE SYSTEM (WEIGHTED AI STYLE)
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
  thriller: 0
};

/* =========================
   DOM
========================= */

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const result = document.getElementById("result");
const quiz = document.getElementById("quiz");
const progress = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

/* =========================
   500 QUESTION POOL (SHORT SAMPLE + EXPANDABLE)
   You can keep adding questions easily
========================= */

const questionPool = [

/* =========================
   CORE TASTE
========================= */

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
    { text: "Emotional journey", score: { emotional: 3, drama: 2 } },
    { text: "Mysterious world", score: { mystery: 3 } }
  ]
},
{
  question: "Your ideal story type?",
  answers: [
    { text: "War and survival", score: { action: 3, dark: 2 } },
    { text: "Love and life", score: { romance: 3, sliceOfLife: 2 } },
    { text: "Magic adventure", score: { fantasy: 3 } },
    { text: "Future tech world", score: { sciFi: 3 } }
  ]
},

/* =========================
   CHARACTER PREFERENCES
========================= */

{
  question: "What type of main character do you like?",
  answers: [
    { text: "Overpowered hero", score: { action: 2 } },
    { text: "Genius strategist", score: { mind: 3 } },
    { text: "Emotionally deep character", score: { emotional: 3 } },
    { text: "Funny idiot hero", score: { comedy: 3 } }
  ]
},
{
  question: "Pick a personality trait in characters",
  answers: [
    { text: "Cold and calculating", score: { mind: 2, dark: 2 } },
    { text: "Kind and loving", score: { romance: 3, wholesome: 2 } },
    { text: "Fearless and strong", score: { action: 3 } },
    { text: "Weird and chaotic", score: { comedy: 3 } }
  ]
},

/* =========================
   WORLD BUILDING
========================= */

{
  question: "Where would you rather live?",
  answers: [
    { text: "Fantasy kingdom", score: { fantasy: 3 } },
    { text: "Modern city", score: { sliceOfLife: 2 } },
    { text: "Post-apocalyptic world", score: { dark: 3, action: 2 } },
    { text: "Space universe", score: { sciFi: 3 } }
  ]
},
{
  question: "Choose a setting",
  answers: [
    { text: "School life", score: { sliceOfLife: 2, comedy: 2 } },
    { text: "War zone", score: { action: 3 } },
    { text: "Mystery city", score: { mystery: 3 } },
    { text: "Magical world", score: { fantasy: 3 } }
  ]
},

/* =========================
   STORY STYLE
========================= */

{
  question: "What pacing do you prefer?",
  answers: [
    { text: "Fast action-packed", score: { action: 3 } },
    { text: "Slow emotional build", score: { emotional: 3 } },
    { text: "Mind-heavy story", score: { mind: 3 } },
    { text: "Light comedy flow", score: { comedy: 3 } }
  ]
},
{
  question: "Choose story focus",
  answers: [
    { text: "Plot twists", score: { mind: 3, thriller: 2 } },
    { text: "Character emotions", score: { emotional: 3 } },
    { text: "World building", score: { fantasy: 3 } },
    { text: "Romance development", score: { romance: 3 } }
  ]
},

/* =========================
   EMOTIONAL STYLE
========================= */

{
  question: "What kind of ending do you prefer?",
  answers: [
    { text: "Happy ending", score: { wholesome: 3 } },
    { text: "Sad emotional ending", score: { emotional: 3 } },
    { text: "Twist ending", score: { mind: 3, thriller: 2 } },
    { text: "Open ending", score: { mystery: 3 } }
  ]
},
{
  question: "What hits you the most?",
  answers: [
    { text: "Character death", score: { dark: 3, emotional: 2 } },
    { text: "Love story", score: { romance: 3 } },
    { text: "Battle scenes", score: { action: 3 } },
    { text: "Comedy moments", score: { comedy: 3 } }
  ]
},

/* =========================
   EXTRA TASTE DEPTH
========================= */

{
  question: "Pick your power",
  answers: [
    { text: "Super strength", score: { action: 3 } },
    { text: "Time control", score: { mind: 3, sciFi: 2 } },
    { text: "Magic powers", score: { fantasy: 3 } },
    { text: "Charisma", score: { romance: 3 } }
  ]
},
{
  question: "Pick a companion",
  answers: [
    { text: "Loyal friend", score: { wholesome: 3 } },
    { text: "Rival genius", score: { mind: 3 } },
    { text: "Cute partner", score: { romance: 3 } },
    { text: "Funny sidekick", score: { comedy: 3 } }
  ]
},

/* =========================
   MORE STORY ENERGY
========================= */

{
  question: "What keeps you watching?",
  answers: [
    { text: "Cliffhangers", score: { thriller: 3 } },
    { text: "Emotional moments", score: { emotional: 3 } },
    { text: "Fight scenes", score: { action: 3 } },
    { text: "Cute scenes", score: { wholesome: 3 } }
  ]
},
{
  question: "Choose danger level",
  answers: [
    { text: "Very high danger", score: { dark: 3, action: 2 } },
    { text: "Moderate adventure", score: { adventure: 3 } },
    { text: "Safe and cozy", score: { wholesome: 3 } },
    { text: "Mind danger only", score: { mind: 3 } }
  ]
},

/* =========================
   FINAL STYLE QUESTIONS
========================= */

{
  question: "Pick your dream anime genre",
  answers: [
    { text: "Action fantasy", score: { action: 2, fantasy: 2 } },
    { text: "Romantic drama", score: { romance: 3, drama: 2 } },
    { text: "Psychological thriller", score: { mind: 3, thriller: 2 } },
    { text: "Comedy slice of life", score: { comedy: 3, sliceOfLife: 2 } }
  ]
},
{
  question: "What energy do you prefer?",
  answers: [
    { text: "Intense and serious", score: { dark: 3 } },
    { text: "Relaxed and funny", score: { comedy: 3 } },
    { text: "Emotional and deep", score: { emotional: 3 } },
    { text: "Magical and fantasy", score: { fantasy: 3 } }
  ]
},

/* =========================
   BONUS QUESTIONS (VARIETY)
========================= */

{
  question: "Pick a fear you enjoy watching",
  answers: [
    { text: "Losing loved ones", score: { emotional: 3 } },
    { text: "Mind games", score: { mind: 3 } },
    { text: "Monsters", score: { horror: 3 } },
    { text: "Nothing scary", score: { wholesome: 3 } }
  ]
},
{
  question: "What anime style do you like?",
  answers: [
    { text: "Old school classics", score: { nostalgia: 1 } },
    { text: "Modern animation", score: { action: 2 } },
    { text: "Dark artistic style", score: { dark: 3 } },
    { text: "Cute anime style", score: { wholesome: 3 } }
  ]
}

];

/* =========================
   RANDOM 20 QUESTIONS
========================= */

let questions = [];

function generateQuestions() {
  questions = [];
  for (let i = 0; i < 20; i++) {
    const rand = questionPool[Math.floor(Math.random() * questionPool.length)];
    questions.push(rand);
  }
}

/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {
  const q = questions[currentQuestion];

  question.innerText = q.question;
  answers.innerHTML = "";

  progress.style.width =
    ((currentQuestion + 1) / questions.length) * 100 + "%";

  progressText.innerText =
    `Question ${currentQuestion + 1} / ${questions.length}`;

  q.answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerText = ans.text;

    btn.onclick = () => {
      for (let k in ans.score) {
        taste[k] += ans.score[k];
      }

      currentQuestion++;

      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };

    answers.appendChild(btn);
  });
}

/* =========================
   PERSONALITY
========================= */

function personalityName() {
  const max = Math.max(...Object.values(taste));

  if (max === taste.action) return "⚔️ Battle Seeker";
  if (max === taste.mind) return "🧠 Genius Thinker";
  if (max === taste.romance) return "❤️ Emotional Lover";
  if (max === taste.comedy) return "😂 Chaos Enjoyer";
  if (max === taste.fantasy) return "✨ Fantasy Dreamer";
  return "🌌 Deep Observer";
}

/* =========================
   API FETCH (MULTI PAGE)
========================= */

async function fetchAnime(query, page = 1) {
  try {
    const url = `https://api.jikan.moe/v4/anime?q=${query}&page=${page}&limit=10`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data || [];
  } catch {
    return [];
  }
}

/* =========================
   BUILD SMART QUERIES
========================= */

function buildQueries(t) {
  let q = [];

  if (t.action > 5) q.push("action battle");
  if (t.mind > 5) q.push("psychological thriller");
  if (t.romance > 5) q.push("romance drama");
  if (t.fantasy > 5) q.push("fantasy magic");
  if (t.sciFi > 5) q.push("sci-fi future");
  if (t.horror > 5) q.push("horror dark");
  if (t.mystery > 5) q.push("mystery detective");

  if (q.length === 0) q = ["top anime", "popular anime"];

  return q;
}

/* =========================
   AI-STYLE SCORING
========================= */

function calculateScore(anime, t) {
  let score = 0;

  let g = anime.genres.map(x => x.name.toLowerCase());

  const map = {
    action: ["action"],
    comedy: ["comedy"],
    romance: ["romance"],
    fantasy: ["fantasy"],
    adventure: ["adventure"],
    sciFi: ["sci-fi"],
    horror: ["horror"],
    drama: ["drama"],
    sliceOfLife: ["slice of life"],
    psychological: ["psychological"],
    mystery: ["mystery"],
    thriller: ["thriller"]
  };

  for (let key in map) {
    map[key].forEach(tag => {
      if (g.includes(tag)) score += t[key] * 1.2; // weighted boost
    });
  }

  if (g.includes("dark")) score += t.dark * 1.5;
  if (g.includes("psychological")) score += t.psychological * 1.5;

  return score;
}

/* =========================
   WHY MATCH EXPLANATION
========================= */

function explain(anime, t) {
  let g = anime.genres.map(x => x.name.toLowerCase());
  let reasons = [];

  if (g.includes("action") && t.action > 3)
    reasons.push("high action preference");

  if (g.includes("romance") && t.romance > 3)
    reasons.push("romance match");

  if (g.includes("psychological") && t.mind > 3)
    reasons.push("mind games preference");

  if (g.includes("fantasy") && t.fantasy > 3)
    reasons.push("fantasy interest");

  return reasons.join(", ") || "general taste match";
}

/* =========================
   MAIN ENGINE
========================= */

async function recommendAnime() {
  const container = document.getElementById("recommendations");
  container.innerHTML = "Analyzing deep anime DNA... 🧠";

  let queries = buildQueries(taste);

  let all = [];

  for (let q of queries) {
    let page1 = await fetchAnime(q, 1);
    let page2 = await fetchAnime(q, 2);
    all = all.concat(page1, page2);
  }

  let unique = {};
  all.forEach(a => (unique[a.mal_id] = a));

  let ranked = Object.values(unique).map(a => {
    return {
      title: a.title,
      image: a.images?.jpg?.image_url,
      description: a.synopsis?.substring(0, 120) || "",
      score: calculateScore(a, taste),
      why: explain(a, taste)
    };
  });

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

    let percent = Math.min(100, Math.floor(a.score * 10));

    div.innerHTML = `
      <img src="${a.image}" style="width:100%;border-radius:10px;">
      <h3>${a.title}</h3>
      <p>${a.description}</p>
      <p><strong>Match: ${percent}%</strong></p>
      <p style="font-size:12px;color:gray;">Why: ${a.why}</p>
    `;

    container.appendChild(div);
  });
}

/* =========================
   RESULT FLOW
========================= */

function showResult() {
  quiz.classList.add("hidden");
  result.classList.remove("hidden");

  document.getElementById("personality").innerText =
    personalityName();

  recommendAnime();
}

/* =========================
   RESTART
========================= */

document.getElementById("restartButton").onclick = () => {
  currentQuestion = 0;

  Object.keys(taste).forEach(k => (taste[k] = 0));

  result.classList.add("hidden");
  quiz.classList.remove("hidden");

  generateQuestions();
  showQuestion();
};

/* =========================
   START
========================= */

generateQuestions();
showQuestion();
