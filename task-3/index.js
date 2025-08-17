let firstTeamScore = 0;
let secondTeamScore = 0;

function updateScore(team, change) {
  if (team === 'team1') {
    firstTeamScore = Math.max(0, firstTeamScore + change);
  } else {
    secondTeamScore = Math.max(0, secondTeamScore + change);
  }
  updateDisplay();
}

function updateDisplay() {
  const scoreElement = document.querySelector('.scoreboard__score');
  const teamNames = document.querySelectorAll('.scoreboard__team-name');
  const firstTeam = teamNames[0];
  const secondTeam = teamNames[1];

  scoreElement.textContent = `${firstTeamScore} : ${secondTeamScore}`;

  firstTeam.classList.remove('scoreboard__team-name--winning', 'scoreboard__team-name--draw');
  secondTeam.classList.remove('scoreboard__team-name--winning', 'scoreboard__team-name--draw');

  if (firstTeamScore > secondTeamScore) {
    firstTeam.classList.add('scoreboard__team-name--winning');
    secondTeam.classList.add('scoreboard__team-name--draw');
  } else if (secondTeamScore > firstTeamScore) {
    secondTeam.classList.add('scoreboard__team-name--winning');
    firstTeam.classList.add('scoreboard__team-name--draw');
  } else {
    firstTeam.classList.add('scoreboard__team-name--draw');
    secondTeam.classList.add('scoreboard__team-name--draw');
  }
}
