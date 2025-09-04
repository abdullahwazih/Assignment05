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


// Call Alert + Coin Deduction Functionality

const callButtons = document.querySelectorAll(".call-button");

callButtons.forEach(button => {
    button.addEventListener("click", () => {
        const coinElement = document.getElementById("coin-amount"); // select by ID
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
    });
});




