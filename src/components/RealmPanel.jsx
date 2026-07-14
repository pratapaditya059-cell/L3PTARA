import { trees } from "../data/trees";
import "./RealmPanel.css";
import { arrays } from "../data/arrays";
import { graphs } from "../data/graphs";
import { dp } from "../data/dp";

const realmData = {
  trees,
  arrays,
  graphs,
  dp,
};

function RealmPanel({ realm, onClose }) {
  if (!realm) return null;

  const recommendation = realmData[realm][0];

  return (
    <div className="realm-panel">
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>

<h1>
{
realm==="trees"
? "🌲 Trees Realm"
: realm==="arrays"
? "🏘️ Arrays Realm"
: realm==="graphs"
? "⚡ Graphs Realm"
: "⛰️ DP Realm"
}
</h1>

<p className="realm-subtitle">
{
realm==="trees"
? "Master recursion and tree traversal through progressively challenging problems."
: realm==="arrays"
? "Strengthen your fundamentals with essential array problems."
: realm==="graphs"
? "Learn graph traversal, shortest paths and advanced graph algorithms."
: "Master optimization techniques through dynamic programming."
}
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
      </div>
    </div>
  );
}

export default RealmPanel;