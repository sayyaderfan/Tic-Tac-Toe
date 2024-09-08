let boxes = document.querySelectorAll('.box');
let msgContainer = document.querySelector('.msg-container');
let msg = document.getElementById('msg');
let newBtn = document.getElementById('newBtn');
let resetBtn = document.getElementById('resetBtn');

let turn = true;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn) {
            box.innerText = "X";
            turn = false;
        }
        else {
            box.innerText = "0";
            turn = true;
        }

        box.disabled = true;

        chackWinner();
    })
})

let chackWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos1Val == pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

let showWinner = (win) => {
    msg.innerText = `Congratulation Winner is " ${win} " `;
    msgContainer.classList.remove("hide");
    disableBtn();
}

let disableBtn = () => {
    for (let disableBtn of boxes) {
        disableBtn.disabled = true;
    }
}

function resetGame() {
    turn = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

let enableBtn = () => {
    for (let enableBtn of boxes) {
        enableBtn.disabled = false;
        enableBtn.innerText = "";
    }
}

newBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);