import { trees } from "../data/trees";
import "./RealmPanel.css";
import { arrays } from "../data/arrays";
import { graphs } from "../data/graphs";
import { dp } from "../data/dp";
import { useState,useEffect } from "react";

const realmInfo = {
  trees: {
    title: "🌲 Trees Realm",
    subtitle:
      "Master recursion and tree traversal through progressively challenging problems.",
  },

  arrays: {
    title: "🏘️ Arrays Realm",
    subtitle:
      "Strengthen your fundamentals with essential array problems.",
  },

  graphs: {
    title: "⚡ Graphs Realm",
    subtitle:
      "Learn graph traversal, shortest paths and advanced graph algorithms.",
  },

  dp: {
    title: "⛰️ DP Realm",
    subtitle:
      "Master optimization techniques through dynamic programming.",
  },
};

const realmData = {
  trees,
  arrays,
  graphs,
  dp,
};

function RealmPanel({ realm, onClose }) {
  if (!realm) return null;

  const [showPath,setShowPath]=useState(false);

  const [solvedProblems,setSolvedProblems]=useState([]);

  const [xp,setXp]=useState(0);

  const problems = realmData[realm];

  const unsolvedProblems=problems.filter(
(problem)=>!solvedProblems.includes(problem.id)
);

const completedProblems =
problems.length - unsolvedProblems.length;

const completionPercentage = Math.floor(
(completedProblems*100)/problems.length
);
const nextTitle=getNextTitle();

  const recommendation=

unsolvedProblems.length>0

?

unsolvedProblems[0]

:

null;

  console.log(unsolvedProblems);

  console.log(solvedProblems);

  console.log(completedProblems);

console.log(completionPercentage);
  
  useEffect(()=>{
const storedProblems=
JSON.parse(
localStorage.getItem(
`${realm}Solved`
)
) || [];

setSolvedProblems(storedProblems);

},[realm]);

useEffect(()=>{
const storedXp=
JSON.parse(
localStorage.getItem("xp")
) || 0;

setXp(storedXp);

},[]);

function getNextTitle(){

if(xp<100){
return{
title:"PROBLEM EXPLORER",
remaining:100-xp
};
}


if(xp<250){
return{
title:"REALM EXPLORER",
remaining:250-xp
};
}


if(xp<500){
return{
title:"TREE SAGE",
remaining:500-xp
};
}


if(xp<1000){
return{
title:"DSA CONQUEROR",
remaining:1000-xp
};
}


return{
title:"MAX TITLE ACHIEVED",
remaining:0
};

}

function getLevel(){

return Math.floor(xp/100)+1;

}

function getTitle(){

if(xp<100){
return "DSA NOVICE";
}

if(xp<250){
return "PROBLEM EXPLORER";
}

if(xp<500){
return "REALM EXPLORER";
}

if(xp<1000){
return "TREE SAGE";
}

return "DSA CONQUEROR";

}

function getXp(problem){

  if(!problem){
    return 0;
  }

if(problem.difficulty==="Easy"){
    return 25;
}

if(problem.difficulty==="Medium"){
    return 50;
}

return 100;

}
console.log(
getXp(recommendation)
);

  const stages={};
  problems.forEach((problem)=>{

    if(!stages[problem.stage]){

        stages[problem.stage]=[];

    }

    stages[problem.stage].push(problem);

});
console.log(stages);
  return (
    <div className="realm-panel">
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>

<h1>{realmInfo[realm].title}</h1>
<h3>
{getTitle()}
</h3>
<h4>
LEVEL : {getLevel()}
</h4>

<p>
XP : {xp}
</p>

<p>
Next Title :
{nextTitle.title}
</p>

<p>
{nextTitle.remaining}
XP remaining.
</p>

<p>
{completedProblems}/{problems.length}
Completed
</p>
<div className="progress-bar">

<div
className="progress-fill"
style={{
width:`${completionPercentage}%`
}}
>

</div>

</div>

<p>
Progress : {completionPercentage}%
</p>

<p>
{realmInfo[realm].description}
</p>
<p className="problem-count">
    {problems.length} Curated Problems
</p>

<p className="realm-subtitle">
    {realmInfo[realm].subtitle}
</p>
{
  recommendation
  ?
  (

      <div className="recommendation-card">
        <p className="card-label">🌟 L3PTARA Sage Recommends</p>

        <h2>{recommendation.title}</h2>

        <span className="difficulty easy">
          {recommendation.difficulty}
        </span>

        <div className="concepts">
          {recommendation.concepts.map((concept) => (
            <span key={concept} className="chip">
              {concept}
            </span>
          ))}
        </div>

        <p className="reason">{recommendation.why}</p>

        <a
          className="solve-btn"
          href={recommendation.leetcode}
          target="_blank"
          rel="noreferrer"
        >
          Solve on LeetCode →
        </a>
        <button
onClick={()=>
setShowPath(!showPath)
}
>
Explore Learning Path
</button>
{
showPath &&
(
<div>

{
showPath && (

<div>

{

Object.entries(stages).map(
([stage,problems])=>(

<div key={stage}>

<h1>
    Stage {stage}
</h1>


{

problems.map((problem)=>(

<div key={problem.id}>

    <p>
        {

solvedProblems.includes(problem.id)

?

"✓"

:

"○"

}

{problem.title}
    </p>

   {
solvedProblems.includes(problem.id)

?

(

<button>

Solved

</button>

)

:

(

<>

<button
onClick={()=>
window.open(
problem.leetcode,
"_blank"
)
}
>
Solve
</button>


<button
onClick={()=>{

setSolvedProblems((prev)=>{

if(prev.includes(problem.id)){
return prev;
}


const updated=[

...prev,
problem.id

];


localStorage.setItem(

`${realm}Solved`,

JSON.stringify(updated)

);

console.log("Button clicked mf");
console.log(problem.difficulty);
console.log(getXp(problem));

const earnedXp=getXp(problem);

setXp((prev)=>{

const updatedXp=prev+earnedXp;

localStorage.setItem(
"xp",
JSON.stringify(updatedXp)
);

return updatedXp;

});

return updated;

});

}}
>
I've Solved It
</button>

</>

)

}

</div>

))

}


</div>

)

)

}

</div>

)
}

</div>
)
}
      </div>
      )

:

(

<div>

<h1>

REALM COMPLETED !!

</h1>


<p>

Congratulations Sage.

</p>

</div>

)

}
    </div>
  );
}

export default RealmPanel;