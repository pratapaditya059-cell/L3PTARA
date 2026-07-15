import { trees } from "../data/trees";
import "./RealmPanel.css";
import { arrays } from "../data/arrays";
import { graphs } from "../data/graphs";
import { dp } from "../data/dp";

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

  const recommendation = realmData[realm][0];

  return (
    <div className="realm-panel">
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>

<h1>{realmInfo[realm].title}</h1>

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
      </div>
    </div>
  );
}

export default RealmPanel;