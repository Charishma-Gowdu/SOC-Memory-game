const movesCounter = document.querySelector('#moves');
let movesCnt = 0;

function easy() {
    setupGame(["🤷‍♀️", "🤷‍♀️", "🤗", "🤗", "🥲", "🥲", "😶‍🌫️", "😶‍🌫️", "😣", "😣", "🥸", "🥸"], 'easy');
}

function normal() {
    setupGame(["🤷‍♀️", "🤷‍♀️", "🤗", "🤗", "🥲", "🥲", "😶‍🌫️", "😶‍🌫️", "😣", "😣", "🥸", "🥸", "😎", "😎", "🤯", "🤯"], 'medium');
}

function difficult() {
    setupGame(["🤷‍♀️", "🤷‍♀️", "🤗", "🤗", "🥲", "🥲", "😶‍🌫️", "😶‍🌫️", "😣", "😣", "🥸", "🥸", "😎", "😎", "🤯", "🤯", "😡", "😡", "🥳", "🥳"], 'difficult');
}

function setupGame(emojis, level) {
    const shuffle_emojis = emojis.sort(() => Math.random() - 0.5);
    const gameContainer = document.querySelector('.game');
    gameContainer.innerHTML = ''; // Clear any existing items
    gameContainer.className = 'game'; // Reset class
    gameContainer.classList.add(level); 

    let firstOpen = null;
    let secondOpen = null;
    let lockBoard = false;

    shuffle_emojis.forEach(emoji => {
        let box = document.createElement("div");
        box.className = 'item';
        box.innerHTML = emoji;
        box.dataset.emoji = emoji;

        box.onclick = function() {
            if (lockBoard || this === firstOpen) return;
            this.classList.add('boxOpen');

            if (!firstOpen) {
                firstOpen = this;
                movesCount();
            } else {
                secondOpen = this;
                lockBoard = true;
                movesCount();

                setTimeout(() => {
                    if (firstOpen.dataset.emoji === secondOpen.dataset.emoji) {
                        firstOpen.classList.add('boxMatch');
                        secondOpen.classList.add('boxMatch');
                    } else {
                        firstOpen.classList.remove('boxOpen');
                        secondOpen.classList.remove('boxOpen');
                    }
                    firstOpen = null;
                    secondOpen = null;
                    lockBoard = false;

                    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                        const time = document.getElementById('stopwatch').textContent;
                        localStorage.setItem('winningMessage', `You won with ${movesCnt} moves in ${time} minutes`);
                        window.location.href = 'winnigpage.html'; // Redirect to the winning page
                    }
                }, 500);
            }
        };

        gameContainer.appendChild(box);
    });
}


//Moves counter


function movesCount() {
    movesCnt++;
    movesCounter.textContent = movesCnt;
}

var isStop = true;
var s = 0;
var min = 0;

function start() {
    if (isStop == true) {
        isStop = false;
        timer();
    }
}

//Timer counter

function timer() {
    if (isStop == false) {
        s = parseInt(s);
        min = parseInt(min);

        s++;
        if (s == 60) {
            s = 0;
            min++;
        }

        if (s < 10) {
            s = "0" + s;
        }
        if (min < 10) {
            min = "0" + min;
        }

        stopwatch.innerHTML = min + ":" + s;
        setTimeout("timer()", 1000);
    }
}
