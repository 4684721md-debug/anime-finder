/* =========================
   STATE
========================= */

let currentQuestion = 0;

let taste = {
  action: 0,
  romance: 0,
  emotional: 0,
  comedy: 0,
  fantasy: 0,
  mind: 0,
  thriller: 0,
  mystery: 0,
  psychological: 0,
  sciFi: 0,
  dark: 0,
  wholesome: 0,
  sliceOfLife: 0,
  horror: 0,
  adventure: 0,
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
   const question = pool.splice(idx, 1)[0];

question.answers.sort(() => Math.random() - 0.5);

questions.push(question);
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
  const highest = Object.entries(taste)
    .sort((a, b) => b[1] - a[1])[0][0];

  const names = {
    action: "⚔️ Battle Junkie",
    mind: "🧠 Deep Thinker",
    emotional: "💔 Emotional Soul",
    comedy: "😂 Chaos Lover",
    fantasy: "✨ Dream Explorer",
    romance: "❤️ Romantic Dreamer",
    thriller: "🔥 Thrill Seeker",
    mystery: "🕵️ Mystery Hunter",
    wholesome: "🌸 Comfort Seeker"
  };

  return names[highest] || "🌌 Balanced Watcher";
}

 

/* =========================
   API (FIXED + RETRY + CACHE)
========================= */

const cache = new Map();

async function fetchAnime(genre) {
  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
        query ($genre: String) {
          Page(perPage: 50) {
            media(
              type: ANIME
              genre: $genre
              sort: SCORE_DESC
            ) {
              title {
                romaji
              }
              description
              genres
              averageScore
              coverImage {
                large
              }
            }
          }
        }
      `,
      variables: {
        genre: genre
      }
    })
  });

  const data = await res.json();

  if (!data?.data?.Page?.media) {
    return [];
  }

  return data.data.Page.media;
}
/* =========================
   QUERY BUILDER
========================= */

function buildQueries(t) {

  return Object.entries({
    action: "Action",
    romance: "Romance",
    fantasy: "Fantasy",
    sciFi: "Sci-Fi",
    mystery: "Mystery",
    horror: "Horror",
    comedy: "Comedy",
    adventure: "Adventure",
    psychological: "Psychological",
    thriller: "Thriller"
  })
    .sort((a, b) => t[b[0]] - t[a[0]])
    .slice(0, 3)
    .map(x => x[1]);

}

/* =========================
   SCORING
========================= */

function calculateScore(anime, t) {
  let score = 0;

  const genres = (anime.genres || []).map(g => g.toLowerCase());
  const rating = anime.averageScore || 0;

  if (genres.includes("action")) score += (t.action || 0) * 2;
  if (genres.includes("romance")) score += (t.romance || 0) * 2;
 if (genres.includes("psychological"))
  score += ((t.mind || 0) + (t.psychological || 0)) * 2;
  if (genres.includes("comedy")) score += (t.comedy || 0) * 2;
  if (genres.includes("fantasy")) score += (t.fantasy || 0) * 2;
  if (genres.includes("sci-fi")) score += (t.sciFi || 0) * 2;
  if (genres.includes("horror")) score += (t.horror || 0) * 2;
  if (genres.includes("mystery")) score += (t.mystery || 0) * 2;
if (genres.includes("slice of life"))
  score += (t.sliceOfLife || 0) * 2;
if (genres.includes("drama"))
  score += (t.emotional || 0) * 2;
if (genres.includes("psychological"))
  score += (t.psychological || 0) * 2;
  
   score += rating / 5;

   return score;
}

/* =========================
   EXPLANATION
========================= */

function explain(anime, t) {
  let g = (anime.genres || []).map(x => x.toLowerCase());
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
  container.innerHTML = "Finding anime for your taste...";

 const queries = buildQueries(taste);
  let all = [];

  for (let q of queries) {
    const result = await fetchAnime(q);
    all.push(...result);
  }

  const unique = [...new Map(
  all.map(a => {

    let baseTitle = a.title.romaji
      .replace(/season\s*\d+/gi, "")
      .replace(/final season/gi, "")
      .replace(/part\s*\d+/gi, "")
      .replace(/movie/gi, "")
      .trim();

    return [baseTitle, a];
  })
).values()];

const ranked = unique.map(a => ({
  title: a.title.romaji,
  image: a.coverImage.large,
  description: (a.description || "")
    .replace(/<[^>]*>/g, "")
    .slice(0, 120),
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
