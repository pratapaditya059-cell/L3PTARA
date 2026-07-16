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

  const problems = realmData[realm];

  const recommendation = problems[0];

  const [showPath,setShowPath]=useState(false);

  const [solvedProblems,setSolvedProblems]=useState([]);

  console.log(solvedProblems);
  
  useEffect(()=>{

const storedProblems=
JSON.parse(
localStorage.getItem(
`${realm}Solved`
)
) || [];

setSolvedProblems(storedProblems);

},[realm]);

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
<p className="problem-count">
    {problems.length} Curated Problems
</p>

<p className="realm-subtitle">
    {realmInfo[realm].subtitle}
</p>

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
        ○ {problem.title}
    </p>

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

const updated=[

...prev,
problem.id

];

localStorage.setItem(

`${realm}Solved`,

JSON.stringify(updated)

);

return updated;

});
}}
>
    I've Solved It
</button>

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
    </div>
  );
}

export default RealmPanel;