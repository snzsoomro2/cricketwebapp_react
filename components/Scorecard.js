export function Scorecard(score) {
  return `<div class='scorecard'>
    <p>Total: ${score.total}</p>
    <p>Extras: ${score.extras}</p>
  </div>`;
}
