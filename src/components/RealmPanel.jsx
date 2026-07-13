import { trees } from "../data/trees";
import "./RealmPanel.css";

function RealmPanel({ realm, onClose }) {
  if (!realm) return null;

  const recommendation = trees[0];

  return (
    <div className="realm-panel">
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>

      <h1>🌲 Trees Realm</h1>

      <p className="realm-subtitle">
        Master recursion and tree traversal through progressively challenging
        problems.
      </p>

      <div className="recommendation-card">
        <p className="card-label">🌟 Tree Sage Recommends</p>

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