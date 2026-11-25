// Game state variables
let gameStarted = false;
let wins = 0;
let losses = 0;
let draws = 0;
let results = [];

// Start the game after validating player name
function startGame() {
    let name = document.getElementById("playerName").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    gameStarted = true;
    document.getElementById("welcomeMsg").innerHTML = "Welcome, " + name + "!";
    document.getElementById("startTime").innerHTML = "Game started on: " + new Date();
}

// Randomly select rock, paper, or scissors for the computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Play one round and update UI, scores, and history table
function playRound(playerChoice) {
    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    let computerChoice = getComputerChoice();

    // Update choice images
    document.getElementById("playerImg").src = playerChoice + ".png";
    document.getElementById("computerImg").src = computerChoice + ".png";

    let roundResult = "";
    let resultEl = document.getElementById("result");

    // Determine winner
    if (playerChoice === computerChoice) {
        roundResult = "Draw";
        draws++;
        resultEl.style.color = "grey";
        resultEl.innerHTML = "It's a Draw! Both chose " + playerChoice + ".";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        roundResult = "Win";
        wins++;
        resultEl.style.color = "green";
        resultEl.innerHTML = "You Win! " + playerChoice + " beats " + computerChoice + ".";
    } else {
        roundResult = "Lose";
        losses++;
        resultEl.style.color = "red";
        resultEl.innerHTML = "You Lose! " + computerChoice + " beats " + playerChoice + ".";
    }

    // Update scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Store result and append row to history table
    results.push(roundResult);
    let roundNumber = results.length;
    document.getElementById("history").innerHTML +=
        "<tr><td>" + roundNumber + "</td><td>" + playerChoice +
        "</td><td>" + computerChoice + "</td><td>" + roundResult + "</td></tr>";
}

// Loop through results array to calculate and display win percentage
function showSummary() {
    let totalRounds = results.length;

    if (totalRounds === 0) {
        document.getElementById("summary").innerHTML = "No rounds played yet.";
        return;
    }

    let winCount = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === "Win") {
            winCount++;
        }
    }

    let winPercentage = Math.round((winCount / totalRounds) * 100);
    document.getElementById("summary").innerHTML =
        "You played " + totalRounds + " rounds and won " + winPercentage + "%";
}

// Reset scores, history table, and messages back to initial state
function resetGame() {
    wins = 0;
    losses = 0;
    draws = 0;

    results = [];

    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("summary").innerHTML = "";
    document.getElementById("playerName").value = "";
    document.getElementById("welcomeMsg").innerHTML  = "";
   
    // Reset history table back to header row only
    document.getElementById("history").innerHTML =
        "<tr><th>Round</th><th>You</th><th>Computer</th><th>Result</th></tr>";
    
}
