// Hear Icon Functionality


let count = 0;
let heartCountEl = document.getElementById("heart-count");

// Select ALL heart buttons
let heartButtons = document.querySelectorAll(".heart-button");

// Add click listener to each button
heartButtons.forEach(button => {
    button.addEventListener("click", () => {
        count++;
        heartCountEl.textContent = count; // update the shared counter
    });
});


// Call Alert + Coin Deduction Functionality + Call History

const callButtons = document.querySelectorAll(".call-button");
const coinElement = document.getElementById("coin-amount");
const callHistoryContainer = document.getElementById("call-history-entries");
const clearHistoryButton = document.getElementById("clear-history");

callButtons.forEach(button => {
    button.addEventListener("click", () => {
        let coins = parseInt(coinElement.innerText);

        if (coins < 20) {
            alert("Insufficient balance");
            return;
        }

        // Deduct 20 coins
        coins -= 20;
        coinElement.innerText = coins;

        // Get card info
        const card = button.closest(".box");
        const title = card.querySelector(".card-title").innerText;
        const number = card.querySelector(".card-number").innerText;

        // Show alert
        alert(`${title} ${number}`);

        // Get current time
        const now = new Date();
        const time = now.toLocaleTimeString(); // e.g., "12:34:56 PM"

        // Create a new history entry card
        const entryCard = document.createElement("div");
        entryCard.className = "bg-gray-100 rounded-lg p-2 flex justify-between items-center shadow";

        // Left side: title + number (vertical)
        const leftDiv = document.createElement("div");
        leftDiv.className = "flex flex-col";

        const titleEl = document.createElement("span");
        titleEl.className = "font-semibold text-sm";
        titleEl.textContent = title;

        const numberEl = document.createElement("span");
        numberEl.className = "font-bold text-sm";
        numberEl.textContent = number;

        leftDiv.appendChild(titleEl);
        leftDiv.appendChild(numberEl);

        // Right side: time
        const timeEl = document.createElement("span");
        timeEl.className = "text-xs text-gray-600";
        timeEl.textContent = time;

        // Append left and right to entry card
        entryCard.appendChild(leftDiv);
        entryCard.appendChild(timeEl);

        // Append entry card to history container
        callHistoryContainer.appendChild(entryCard);
    });
});

// Clear history
clearHistoryButton.addEventListener("click", () => {
    callHistoryContainer.innerHTML = "";
});




