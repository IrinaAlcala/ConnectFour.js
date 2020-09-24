//Selectors

var tableRow = document.getElementsByTagName("tr");
var tableCell = document.getElementsByTagName("td");
var tableSlot = document.querySelector(".slot");
const playerTurn = document.querySelector(".player-turn");
const reset = document.querySelector(".reset");

for(i = 0; i < tableCell.length; i++){
    tableCell[i].addEventListener("click", (e) =>{
        console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
});
};

while (!player1) {
    var player1 = prompt('Player One: Enter your name. You will be red color');

};
  player1Color = 'red';

while (!player2) {
    var player2 = prompt('player Two: Enter your name. You will be yellow color');
};
  player2Color = 'yellow';

 var currentPlayer = 1;
 let winner;
 playerTurn.textContent = `${player1}'s turn!`

 Array.prototype.forEach.call(tableCell, (cell) => {
     cell.addEventListener('click', changeColor);
    cell.style.backgroundColor = 'white';
 });

function changeColor(e) {
    let column = e.target.cellIndex;
    let row = [];

    for (i = 5; i > -1; i--){
        if (tableRow[i].children[column].style.backgroundColor == 'white') {
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1){
                row[0].style.backgroundColor == 'red';
                if (horizontalCheck() || diagonalCheck() || diagonalCheck2()) {
                    playerTurn.textContent = `${player1} WINS!!!`;
                    playerTurn.style.color = player1Color;
                    return alert(`${player1} WINS!!!`);

                } else if (drawCheck()){
                    playerTurn.textContent = 'DRAW';
                    return alert('DRAW');
                } else {
                    playerTurn.textContent = `${player2}'s turn`
                    return currentPlayer = 2;
                } 
            } else {
                row[0].style.backgroundColor = 'yellow';
                if (horizontalCheck() || verticalCheck() || diagonalCheck() || diagonalCheck2()){
                  playerTurn.textContent = `${player2} WINS!!!`;
                  playerTurn.style.color = player2Color;
                  return alert(`${player2} WINS!!!`);

                }else if (drawCheck()){
                    playerTurn.textContent = 'DRAW';
                    return alert('DRAW!!!');
                } else {
                    playerTurn.textContent = `${player1}'s turn`;
                    return currentPlayer = 1;
                }
            }
        }
    }
}

