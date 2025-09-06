// Hear Icon Functionality


let count = 0;
let heartCountEl = document.getElementById("heart-count");

let heartButtons = document.querySelectorAll(".heart-button");

heartButtons.forEach(button => {
    button.addEventListener("click", () => {
        count++;
        heartCountEl.textContent = count;
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

        coins -= 20;
        coinElement.innerText = coins;

        const card = button.closest(".box");
        const title = card.querySelector(".card-title").innerText;
        const number = card.querySelector(".card-number").innerText;

        alert(`${title} ${number}`);

        const now = new Date();
        const time = now.toLocaleTimeString();

        const entryCard = document.createElement("div");
        entryCard.className = "bg-gray-100 rounded-lg p-2 flex justify-between items-center shadow";

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

        const timeEl = document.createElement("span");
        timeEl.className = "text-xs text-gray-600";
        timeEl.textContent = time;

        entryCard.appendChild(leftDiv);
        entryCard.appendChild(timeEl);

        callHistoryContainer.appendChild(entryCard);
    });
});

clearHistoryButton.addEventListener("click", () => {
    callHistoryContainer.innerHTML = "";
});


//Copy Button


const copyCount = document.getElementById("copy-count");

document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".box");
        const number = card.querySelector(".card-number").innerText;

        let count = parseInt(copyCount.innerText, 10);
        count++;
        copyCount.innerText = count;

        navigator.clipboard.writeText(number).then(() => {
            alert(`Number ${number} copied!`);
        }).catch(err => {
            console.error("Failed to copy:", err);
        });
    });
});




