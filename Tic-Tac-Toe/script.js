var count = 0;
var boxes = document.querySelectorAll('.box');
var userPlay = 'X';
var gameFinished = false;
var message = document.getElementById('userMessage');

beginGame();

// Function that checks if there is a full row
function fullRow(q, r, s, t, u, v) {
    if ((q.length == 1) && (q == r) && (r == s)) {
        gameFinished = true; 
        
        document.getElementById(t).style.color = '#115C44;';
        document.getElementById(u).style.color = '#115C44;';
        document.getElementById(v).style.color = '#115C44;';

        message.innerHTML = "Congratulations! " + s + " wins!";
    }
}

// After 5 moves, function checks if there are 3 in a row
function winnerCheck() {
    if (count >= 5) {
        fullRow(boxes[0].innerHTML, boxes[4].innerHTML, boxes[8].innerHTML, boxes[0].id, boxes[4].id, boxes[8].id);
        fullRow(boxes[0].innerHTML, boxes[3].innerHTML, boxes[6].innerHTML, boxes[0].id, boxes[3].id, boxes[6].id);
        fullRow(boxes[0].innerHTML, boxes[1].innerHTML, boxes[2].innerHTML, boxes[0].id, boxes[1].id, boxes[2].id);
        fullRow(boxes[1].innerHTML, boxes[4].innerHTML, boxes[7].innerHTML, boxes[1].id, boxes[4].id, boxes[7].id);
        fullRow(boxes[2].innerHTML, boxes[4].innerHTML, boxes[6].innerHTML, boxes[2].id, boxes[4].id, boxes[6].id);
        fullRow(boxes[2].innerHTML, boxes[5].innerHTML, boxes[8].innerHTML, boxes[2].id, boxes[5].id, boxes[8].id);
        fullRow(boxes[3].innerHTML, boxes[4].innerHTML, boxes[5].innerHTML, boxes[3].id, boxes[4].id, boxes[5].id);
        fullRow(boxes[6].innerHTML, boxes[7].innerHTML, boxes[8].innerHTML, boxes[6].id, boxes[7].id, boxes[8].id);
    }

    if ((count == 9) && (gameFinished == false)) {
        gameFinished = true;
        message.innerHTML = 'This match was a draw!';
    }
}

// starts the game when a user clicks
function beginGame() {
    for (x = 0; x < boxes.length; x++)
        {
            boxes[x].addEventListener('click', function(e){
                play(e);
            });

        }
}

function play(e) {
    // checks to see if there is anything in the HTML div
    if(e.target.innerText == '') {
        // if not, then it runs through the steps
        //if the play equals X, it writes X in the inner HTML and changes variable to 'O' for the next turn
        if (userPlay === 'X'){
            e.target.innerText = 'X';
            userPlay = 'O';
        }
        //if the play equals O, it writes X in the inner HTML and changes variable to 'X' for the next turn
        else {
            e.target.innerText = 'O'
            userPlay = 'X'
        }

        // increments count by 1 to check for the winnerCheck() function
        ++count;
        //Calls winner check to see if it can find a winner
        winnerCheck();
    }
}

// resets the game by reloading the whole webpage
    var resetbutton = document.getElementById('restart');
    resetbutton.addEventListener('click', function() {
       // console.log('test');
        location.reload();
    });

    // TO DO
    // 1 - Get the message to display a draw when there is a draw game
    // 2 - Center the inner text of the div's (X's and O's)