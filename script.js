// ===============================
// ANIME ORACLE V2 - PART 1
// CORE SETTINGS + DATA
// ===============================

const QUESTIONS_PER_QUIZ = 30;

const GENRES = [
"action",
"adventure",
"fantasy",
"romance",
"comedy",
"drama",
"mystery",
"psychological",
"thriller",
"horror",
"sciFi",
"supernatural",
"historical",
"military",
"sports",
"music",
"sliceOfLife",
"mecha",
"isekai",
"school",
"crime",
"survival",
"magic",
"strategy",
"adultCast"
];

let taste = {};

GENRES.forEach(function(genre){
taste[genre] = 0;
});

const personalities = {

action:{
name:"⚔️ Tactical Emperor",
description:"You love powerful conflicts and epic battles."
},

fantasy:{
name:"🧙 Fantasy Sage",
description:"Magic and impossible worlds fascinate you."
},

romance:{
name:"❤️ Eternal Romantic",
description:"You value emotional connections."
},

comedy:{
name:"😂 Chaos Goblin",
description:"You enjoy fun and unpredictable adventures."
},

psychological:{
name:"🧠 Dark Strategist",
description:"Mind games and intelligence attract you."
},

mystery:{
name:"🕵️ Mystery Hunter",
description:"You love discovering hidden truths."
},

military:{
name:"🏰 Kingdom Builder",
description:"Leadership and strategy fascinate you."
},

survival:{
name:"🔥 Iron Survivor",
description:"You admire resilience and determination."
},

sciFi:{
name:"🚀 Cosmic Explorer",
description:"Technology and the future excite you."
},

sliceOfLife:{
name:"☕ Peaceful Wanderer",
description:"Simple moments are often the most meaningful."
}

};

const questionPool = [

{
question:"A mysterious door appears in front of you. What do you do?",
answers:[
{
text:"Kick it open",
score:{action:3}
},
{
text:"Investigate carefully",
score:{mystery:3}
},
{
text:"Study ancient books first",
score:{magic:2,fantasy:2}
},
{
text:"Bring friends with you",
score:{comedy:2,sliceOfLife:2}
}
]
},

{
question:"Which ending do you prefer?",
answers:[
{
text:"A shocking twist",
score:{psychological:3,thriller:2}
},
{
text:"A happy romance",
score:{romance:3}
},
{
text:"The hero wins",
score:{action:3}
},
{
text:"An emotional farewell",
score:{drama:3}
}
]
},

{
question:"Which world would you visit?",
answers:[
{
text:"A magical kingdom",
score:{fantasy:3,magic:2}
},
{
text:"A cyberpunk city",
score:{sciFi:3}
},
{
text:"A war-torn empire",
score:{military:3,strategy:2}
},
{
text:"A peaceful countryside",
score:{sliceOfLife:3}
}
]
},

{
question:"What is your greatest strength?",
answers:[
{
text:"Courage",
score:{action:3}
},
{
text:"Intelligence",
score:{psychological:2,strategy:2}
},
{
text:"Kindness",
score:{romance:2,drama:2}
},
{
text:"Creativity",
score:{music:2,fantasy:2}
}
]
},

{
question:"Which protagonist sounds most interesting?",
answers:[
{
text:"A genius criminal",
score:{crime:3,psychological:2}
},
{
text:"A dragon slayer",
score:{fantasy:3,action:2}
},
{
text:"A struggling musician",
score:{music:3,drama:2}
},
{
text:"A sports underdog",
score:{sports:3}
}
]
}

];

let selectedQuestions = [];

let currentQuestion = 0;

// ===============================
// QUIZ BUILDER
// ===============================

function buildQuiz(){

selectedQuestions =
[...questionPool]
.sort(()=>Math.random()-0.5)
.slice(0,Math.min(QUESTIONS_PER_QUIZ,questionPool.length));

}

// ===============================
// SHOW QUESTION
// ===============================

function showQuestion(){

const q = selectedQuestions[currentQuestion];

question.innerText = q.question;

answers.innerHTML = "";

progress.style.width =
((currentQuestion + 1) / selectedQuestions.length) * 100 + "%";

progressText.innerText =
"Question " +
(currentQuestion + 1) +
" / " +
selectedQuestions.length;

q.answers.forEach(function(answer){

const button =
document.createElement("button");

button.className = "option";

button.innerText = answer.text;

button.onclick = function(){

for(let key in answer.score){

if(taste[key] === undefined){

taste[key] = 0;

}

taste[key] += answer.score[key];

}

currentQuestion++;

if(currentQuestion < selectedQuestions.length){

showQuestion();

}else{

showResult();

}

};

answers.appendChild(button);

});

}

// ===============================
// PERSONALITY ENGINE
// ===============================

function getTopGenres(limit = 5){

return Object.entries(taste)
.sort((a,b)=>b[1]-a[1])
.slice(0,limit);

}

function personalityName(){

const topGenre =
getTopGenres(1)[0]?.[0];

if(
topGenre &&
personalities[topGenre]
){

return personalities[topGenre].name;

}

return "🎌 Anime Explorer";

}

function personalityDescription(){

const topGenre =
getTopGenres(1)[0]?.[0];

if(
topGenre &&
personalities[topGenre]
){

return personalities[topGenre].description;

}

return "Your anime taste is still being explored.";

}
// ===============================
// TOP GENRES DISPLAY
// ===============================

function renderTopGenres(){

const container =
document.getElementById("topGenres");

if(!container) return;

container.innerHTML = "";

getTopGenres(5).forEach(function(entry){

const genre = entry[0];

const score = entry[1];

const badge =
document.createElement("div");

badge.className = "genreBadge";

badge.innerText =
genre +
" • " +
score;

container.appendChild(badge);

});

}
// ===============================
// GENRE METERS
// ===============================

function renderGenreMeters(){

const container =
document.getElementById("genreMeters");

if(!container) return;

container.innerHTML = "";

getTopGenres(10).forEach(function(entry){

const genre = entry[0];

const score = entry[1];

const row =
document.createElement("div");

row.className = "tasteRow";

row.innerHTML = `

<span>${genre}</span>

<div class="meter">

<div style="width:${Math.min(score*5,100)}%"></div>

</div>

`;

container.appendChild(row);

});

}
// ===============================
// RESULT SCREEN
// ===============================

function showResult(){

quiz.classList.add("hidden");

result.classList.remove("hidden");

document.getElementById("personality")
.innerText =
personalityName();

const profile =
document.getElementById(
"profileDescription"
);

if(profile){

profile.innerText =
personalityDescription();

}

renderTopGenres();

renderGenreMeters();

updateStats();

recommendAnime();

}
// ===============================
// STATS
// ===============================

function updateStats(){

const topGenre =
getTopGenres(1)[0];

const totalGenres =
Object.values(taste)
.filter(score=>score>0)
.length;

const totalGenresEl =
document.getElementById(
"totalGenres"
);

const dominantGenreEl =
document.getElementById(
"dominantGenre"
);

const animeMatchesEl =
document.getElementById(
"animeMatches"
);

if(totalGenresEl){

totalGenresEl.innerText =
totalGenres;

}

if(dominantGenreEl){

dominantGenreEl.innerText =
topGenre
? topGenre[0]
: "-";

}

if(animeMatchesEl){

animeMatchesEl.innerText =
animeDatabase.length;

}

}
// ===============================
// SHARE BUTTON
// ===============================

const shareButton =
document.getElementById(
"shareButton"
);

if(shareButton){

shareButton.onclick =
function(){

const text =
`I got "${personalityName()}" on Anime Oracle!`;

if(
navigator.share
){

navigator.share({

title:"Anime Oracle",

text:text

});

}else{

navigator.clipboard
.writeText(text);

alert(
"Result copied to clipboard!"
);

}

};

}
// ===============================
// ANIME DATABASE V2
// ===============================

const animeDatabase = [

{
title:"Monster",
description:"A brilliant psychological thriller about morality and evil.",
year:2004,
hiddenGem:false,
tags:[
"psychological",
"mystery",
"crime",
"adultCast",
"thriller"
]
},

{
title:"Mushishi",
description:"A peaceful supernatural journey through strange phenomena.",
year:2005,
hiddenGem:true,
tags:[
"supernatural",
"fantasy",
"sliceOfLife"
]
},

{
title:"Vinland Saga",
description:"A brutal story of revenge, war and growth.",
year:2019,
hiddenGem:false,
tags:[
"action",
"historical",
"military",
"drama"
]
},

{
title:"Steins;Gate",
description:"Time travel and consequences.",
year:2011,
hiddenGem:false,
tags:[
"sciFi",
"psychological",
"mystery",
"thriller"
]
},

{
title:"Kaguya-sama: Love is War",
description:"Romance becomes a strategic battlefield.",
year:2019,
hiddenGem:false,
tags:[
"romance",
"comedy",
"school",
"strategy"
]
},

{
title:"Kingdom",
description:"Military campaigns and kingdom building.",
year:2012,
hiddenGem:true,
tags:[
"military",
"historical",
"strategy",
"action"
]
}

];
// ===============================
// ANIME SCORING
// ===============================

function getAnimeScore(anime){

let score = 0;

anime.tags.forEach(function(tag){

score += taste[tag] || 0;

});

return score;

}
// ===============================
// HIDDEN GEMS
// ===============================

function showHiddenGems(ranked){

const container =
document.getElementById(
"hiddenGems"
);

if(!container) return;

container.innerHTML = "";

ranked
.filter(anime=>anime.hiddenGem)
.slice(0,5)
.forEach(function(anime){

const card =
document.createElement("div");

card.className =
"animeCard";

card.innerHTML = `

<h3>${anime.title}</h3>

<p>${anime.description}</p>

<div class="matchBadge">
💎 Hidden Gem
</div>

`;

container.appendChild(card);

});

}
// ===============================
// RECOMMENDATION ENGINE
// ===============================

function recommendAnime(){

const container =
document.getElementById(
"recommendations"
);

if(!container) return;

container.innerHTML = "";

let ranked =
animeDatabase.map(function(anime){

return {

...anime,

score:getAnimeScore(anime)

};

});

ranked.sort(function(a,b){

return b.score - a.score;

});

ranked
.slice(0,10)
.forEach(function(anime){

const maxScore =
Math.max(
1,
getTopGenres(1)[0]?.[1] || 1
);

const percent =
Math.min(
100,
Math.round(
(anime.score/maxScore)*20
)
);

const card =
document.createElement("div");

card.className =
"animeCard";

card.innerHTML = `

<h3>${anime.title}</h3>

<p>${anime.description}</p>

<div class="matchBadge">
${percent}% Match
</div>

`;

container.appendChild(card);

});

showHiddenGems(ranked);

}
document
.getElementById(
"restartButton"
)
.onclick = function(){

currentQuestion = 0;

taste = {};

GENRES.forEach(function(genre){

taste[genre] = 0;

});

buildQuiz();

result.classList.add(
"hidden"
);

quiz.classList.remove(
"hidden"
);

showQuestion();

};
buildQuiz();
showQuestion();
