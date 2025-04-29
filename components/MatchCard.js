export function MatchCard(match) {
  return `<div class='match-card'>
    <h2>${match.team1} vs ${match.team2}</h2>
    <p>Status: ${match.status}</p>
  </div>`;
}
