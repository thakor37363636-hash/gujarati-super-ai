let coins = 100;
const symbols = ["🍒", "🍋", "🔔", "⭐", "7️⃣"];

const coinDiv = document.getElementById("coins");
const slot = document.getElementById("slot");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  if (coins <= 0) {
    alert("Coins ખતમ 😢");
    return;
  }

  coins -= 10;

  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  slot.textContent = randomSymbol;

  if (randomSymbol === "7️⃣") {
    coins += 100;
    alert("🎉 JACKPOT! તમે જીત્યા 100 coins");
  }

  coinDiv.textContent = "Coins: " + coins;
});
