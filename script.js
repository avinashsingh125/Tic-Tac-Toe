let btn = document.querySelectorAll(".btn");
let div = document.querySelector(".main");
let reset = document.querySelector(".reset");
let turn = true;
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "O";
            turn = false;
        }
        else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
let winner = document.createElement("h1");
winner.setAttribute("class", "win");
let gameOver = false;
const checkWinner = () => {
    for (i of winpattern) {
        let pos1val = btn[i[0]].innerText;
        let pos2val = btn[i[1]].innerText;
        let pos3val = btn[i[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                winner.innerText = `Congratulations, Winner is ${pos1val}!`;
                div.before(winner);
                winner.after(reset);
                disableAll();
                gameOver = true;
                return; // stop further checking after winner
            }
        }
    }
    let filled = true;
    btn.forEach((b) => {
        if (b.innerText === "") filled = false;
    });
    if (filled && !gameOver) {
        winner.innerText = "Draw match!";
        div.before(winner);
        winner.after(reset);
        disableAll();   // prevent more moves after draw
        gameOver = true;
    }
}
function disableAll() {
    btn.forEach((b) => (b.disabled = true));
}
reset.addEventListener("click", () => {
    btn.forEach((b) => {
        b.innerText = "";
        b.disabled = false;
    });
    winner.remove();
    gameOver = false;   // reset game state
    turn = true;        // reset turn
    div.after(reset);
});
