const questions = [

{
question:"What kind of anime do you enjoy most?",
answers:[
{text:"Intense Action",score:{action:3}},
{text:"Funny Comedy",score:{comedy:3}},
{text:"Romance",score:{romance:3}},
{text:"Mind Games",score:{mind:3}}
]
},

{
question:"Which protagonist do you like?",
answers:[
{text:"Overpowered Hero",score:{action:2}},
{text:"Smart Genius",score:{mind:2}},
{text:"Cute & Funny",score:{comedy:2}},
{text:"Kind Romantic",score:{romance:2}}
]
},

{
question:"Pick a setting",
answers:[
{text:"Fantasy World",score:{fantasy:3}},
{text:"Modern City",score:{comedy:1}},
{text:"War Zone",score:{action:2}},
{text:"High School",score:{romance:2}}
]
},

{
question:"Choose a weapon",
answers:[
{text:"Sword",score:{action:2,fantasy:1}},
{text:"Magic",score:{fantasy:3}},
{text:"Brain",score:{mind:3}},
{text:"Love Letter",score:{romance:3}}
]
},

{
question:"Favorite ending?",
answers:[
{text:"Epic Victory",score:{action:2}},
{text:"Everyone Laughs",score:{comedy:2}},
{text:"Couple Together",score:{romance:2}},
{text:"Plot Twist",score:{mind:2}}
]
},

{
question:"Pick a color",
answers:[
{text:"Red",score:{action:2}},
{text:"Purple",score:{mind:2}},
{text:"Pink",score:{romance:2}},
{text:"Yellow",score:{comedy:2}}
]
},

{
question:"Weekend plan?",
answers:[
{text:"Fight Monsters",score:{action:2}},
{text:"Watch Memes",score:{comedy:2}},
{text:"Date",score:{romance:2}},
{text:"Solve Mysteries",score:{mind:2}}
]
},

{
question:"Best anime power?",
answers:[
{text:"Super Strength",score:{action:2}},
{text:"Time Travel",score:{mind:2}},
{text:"Magic",score:{fantasy:2}},
{text:"Charm",score:{romance:2}}
]
},

{
question:"Choose a pet",
answers:[
{text:"Dragon",score:{fantasy:3}},
{text:"Dog",score:{action:1}},
{text:"Cat",score:{comedy:1}},
{text:"Fox",score:{mind:2}}
]
},

{
question:"Favorite weather?",
answers:[
{text:"Storm",score:{action:2}},
{text:"Sunny",score:{comedy:2}},
{text:"Rain",score:{romance:2}},
{text:"Fog",score:{mind:2}}
]
},

{
question:"Choose a food",
answers:[
{text:"Steak",score:{action:2}},
{text:"Cake",score:{comedy:2}},
{text:"Coffee",score:{mind:2}},
{text:"Chocolate",score:{romance:2}}
]
},

{
question:"Favorite pace?",
answers:[
{text:"Fast",score:{action:2}},
{text:"Slow Story",score:{mind:2}},
{text:"Relaxed",score:{comedy:2}},
{text:"Emotional",score:{romance:2}}
]
},

{
question:"Choose a companion",
answers:[
{text:"Warrior",score:{action:2}},
{text:"Wizard",score:{fantasy:2}},
{text:"Detective",score:{mind:2}},
{text:"Best Friend",score:{comedy:2}}
]
},

{
question:"Pick a movie genre",
answers:[
{text:"Action",score:{action:2}},
{text:"Fantasy",score:{fantasy:2}},
{text:"Comedy",score:{comedy:2}},
{text:"Romance",score:{romance:2}}
]
},

{
question:"Your personality?",
answers:[
{text:"Fearless",score:{action:2}},
{text:"Funny",score:{comedy:2}},
{text:"Calm",score:{mind:2}},
{text:"Caring",score:{romance:2}}
]
},

{
question:"Choose a season",
answers:[
{text:"Summer",score:{action:2}},
{text:"Spring",score:{romance:2}},
{text:"Winter",score:{mind:2}},
{text:"Autumn",score:{fantasy:2}}
]
},

{
question:"Pick an animal",
answers:[
{text:"Tiger",score:{action:2}},
{text:"Owl",score:{mind:2}},
{text:"Rabbit",score:{romance:2}},
{text:"Monkey",score:{comedy:2}}
]
},

{
question:"Choose a hobby",
answers:[
{text:"Training",score:{action:2}},
{text:"Reading",score:{mind:2}},
{text:"Gaming",score:{comedy:2}},
{text:"Drawing",score:{romance:2}}
]
},

{
question:"Ideal journey?",
answers:[
{text:"Adventure",score:{fantasy:2}},
{text:"Battle",score:{action:2}},
{text:"Mystery",score:{mind:2}},
{text:"Love Story",score:{romance:2}}
]
},

{
question:"Final choice",
answers:[
{text:"Become King",score:{action:3}},
{text:"Save Everyone",score:{fantasy:3}},
{text:"Outsmart Everyone",score:{mind:3}},
{text:"Find True Love",score:{romance:3}}
]
}

];

let currentQuestion=0;

let taste={
action:0,
comedy:0,
romance:0,
mind:0,
fantasy:0
};

const question=document.getElementById("question");
const answers=document.getElementById("answers");
const result=document.getElementById("result");
const quiz=document.getElementById("quiz");
const progress=document.getElementById("progressBar");
const progressText=document.getElementById("progressText");
function showQuestion() {

const q = questions[currentQuestion];

question.innerText = q.question;

answers.innerHTML = "";

progress.style.width =
((currentQuestion + 1) / questions.length) * 100 + "%";

progressText.innerText =
"Question " +
(currentQuestion + 1) +
" / " +
questions.length;

q.answers.forEach(function(answer){

const button = document.createElement("button");

button.className = "option";

button.innerText = answer.text;

button.onclick = function(){

for(let key in answer.score){

taste[key] += answer.score[key];

}

currentQuestion++;

if(currentQuestion < questions.length){

showQuestion();

}else{

showResult();

}

};

answers.appendChild(button);

});

}

function personalityName(){

const max = Math.max(

taste.action,

taste.comedy,

taste.romance,

taste.mind,

taste.fantasy

);

if(max===taste.action){

return "⚔️ Tactical Warrior";

}

if(max===taste.mind){

return "🧠 Master Strategist";

}

if(max===taste.romance){

return "❤️ Hopeless Romantic";

}

if(max===taste.comedy){

return "😂 Chaos Enjoyer";

}

return "✨ Fantasy Dreamer";

}

function setMeter(id,value){

document.getElementById(id).style.width=(value*10)+"%";

}

function showResult(){

quiz.classList.add("hidden");

result.classList.remove("hidden");

setMeter("actionMeter",taste.action);

setMeter("comedyMeter",taste.comedy);

setMeter("romanceMeter",taste.romance);

setMeter("mindMeter",taste.mind);

setMeter("fantasyMeter",taste.fantasy);

document.getElementById("personality").innerText =
personalityName();

recommendAnime();

}
const animeDatabase = [

{
title:"Attack on Titan",
description:"Dark action with incredible plot twists.",
tags:["action","mind"]
},

{
title:"Code Geass",
description:"Strategic battles and genius planning.",
tags:["mind","action"]
},

{
title:"Vinland Saga",
description:"Epic fights with emotional storytelling.",
tags:["action"]
},

{
title:"Death Note",
description:"Psychological cat-and-mouse thriller.",
tags:["mind"]
},

{
title:"Steins;Gate",
description:"Time travel and brilliant mysteries.",
tags:["mind"]
},

{
title:"Kaguya-sama: Love is War",
description:"Comedy mixed with romance and mind games.",
tags:["romance","comedy","mind"]
},

{
title:"Your Name",
description:"Beautiful romance with fantasy elements.",
tags:["romance","fantasy"]
},

{
title:"Spy x Family",
description:"Funny family adventure packed with action.",
tags:["comedy","action"]
},

{
title:"Konosuba",
description:"Fantasy adventure with hilarious characters.",
tags:["fantasy","comedy"]
},

{
title:"Frieren",
description:"Peaceful fantasy journey with emotional depth.",
tags:["fantasy"]
}

];

function recommendAnime(){

const container=document.getElementById("recommendations");

container.innerHTML="";

let ranked=[];

animeDatabase.forEach(function(anime){

let score=0;

anime.tags.forEach(function(tag){

score+=taste[tag]||0;

});

ranked.push({

title:anime.title,

description:anime.description,

score:score

});

});

ranked.sort(function(a,b){

return b.score-a.score;

});

ranked.slice(0,5).forEach(function(anime){

const card=document.createElement("div");

card.className="animeCard";

card.innerHTML=`

<h3>${anime.title}</h3>

<p>${anime.description}</p>

<p><strong>Match Score: ${anime.score}</strong></p>

`;

container.appendChild(card);

});

}

document.getElementById("restartButton").onclick=function(){

currentQuestion=0;

taste={

action:0,

comedy:0,

romance:0,

mind:0,

fantasy:0

};

result.classList.add("hidden");

quiz.classList.remove("hidden");

showQuestion();

};

showQuestion();