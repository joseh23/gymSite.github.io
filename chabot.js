// chatbot section.
document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const responses = {
        "hello": "Hello! How can I assist you today?",
        "how are you": "I'm just a bot, but thanks for asking!",
        "name": "I'm a chatbot. You can call me ChatGPT.",
        "help": "I can help answer questions about our services. Just ask!",
        "location": "We are located at Kiambu town near Kamindi selfridges  ",
        "booking": "Follow the main page on the booking section to book a day",
    };

    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value;
        if (userMessage) {
            appendUserMessage(userMessage);
            // You can add your own logic to handle user input and generate bot responses.
            const botResponse = generateBotResponse(userMessage);
            appendBotMessage(botResponse);
            userInput.value = "";
        }
    });

    function appendUserMessage(message) {
        const userMessageDiv = document.createElement("div");
        userMessageDiv.className = "chat-message user";
        userMessageDiv.innerHTML = `<p>${message}</p>`;
        chatBox.appendChild(userMessageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function appendBotMessage(message) {
        const botMessageDiv = document.createElement("div");
        botMessageDiv.className = "chat-message bot";
        botMessageDiv.innerHTML = `<p>${message}</p>`;
        chatBox.appendChild(botMessageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function generateBotResponse(userMessage) {
        const lowerUserMessage = userMessage.toLowerCase();
        for (const keyword in responses) {
            if (lowerUserMessage.includes(keyword)) {
                return responses[keyword];
            }
        }
        return "I'm sorry, I don't understand. please feel free to email us for more!!.";
        
        
        
    }
});


// sache game Js


const player = document.querySelector('.player');
const object = document.querySelector('.object');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Move player left and right using arrow keys
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        movePlayer(-20);
    } else if (e.key === 'ArrowRight') {
        movePlayer(20);
    }
});

function movePlayer(offset) {
    const playerPosition = player.getBoundingClientRect();
    const gameContainer = player.parentElement.getBoundingClientRect();

    if (playerPosition.left + offset >= gameContainer.left && playerPosition.right + offset <= gameContainer.right) {
        player.style.left = `${playerPosition.left + offset}px`;
    }
}

// Create a falling object
function createObject() {
    object.style.top = '0';
    const randomPosition = Math.floor(Math.random() * (300 - 30 + 1) + 30); // Random x position
    object.style.left = `${randomPosition}px`;
}

// Check for collisions and update score
function checkCollisions() {
    const playerPosition = player.getBoundingClientRect();
    const objectPosition = object.getBoundingClientRect();

    if (
        playerPosition.left < objectPosition.right &&
        playerPosition.right > objectPosition.left &&
        playerPosition.bottom > objectPosition.top
    ) {
        // Collision detected
        score++;
        scoreDisplay.textContent = score;
        createObject();
    }
}

const weights = document.querySelectorAll('.weights');
const score_display = document.getElementById('score1');
let score1 = 0;

weights.forEach(weight => {
    weight.addEventListener('click', () => {
        liftWeight(weight);
    });
});

function liftWeight(weight) {
    score++;
    weight.style.display = 'none';
    scoreDisplay.textContent = score;
}

// Generate new weights to lift at random positions
function generateWeights() {
    weights.forEach(weight => {
        weight.style.display = 'block';
        weight.style.top = `${Math.floor(Math.random() * 250)}px`;
        weight.style.left = `${Math.floor(Math.random() * 250)}px`;
    }
)}

setInterval(generateWeights, 3000); // Generate new weights every 3 seconds
