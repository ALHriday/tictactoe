let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");
let heading = document.querySelector(".game h1");

toggle.addEventListener("click", function () {
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
        toggle.style.backgroundColor = "white";
        heading.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        toggle.style.backgroundColor = "black";
        heading.style.color = "black";
    }
})


let boxs = document.querySelectorAll(".game-btn button");
let resetBtn = document.querySelector(".reset-btn");
let result = document.querySelector(".result");
let gameBtn = document.querySelector(".game-btn");

let boxbtn = false;

let countXoutput = document.querySelector(".countX-output");
let countOoutput = document.querySelector(".countO-output");

let countX = 0;
let countO = 0;

function disabledBtn() {
    boxs.forEach((e) => {
        e.disabled = true;
    });
}
function enabledBtn() {
    boxs.forEach((e) => {
        e.disabled = false;
    });
}


for (let i = 0; i < boxs.length; i++) {

    boxs[i].addEventListener("click", function () {
        console.log("button clicked");

        if (!boxbtn) {
            boxs[i].innerHTML = "X";
            boxs[i].style.backgroundColor = "red";
            boxs[i].disabled = true;
            boxbtn = true;
            conditionMatch();

        } else {

            if (boxbtn) {
                boxs[i].innerHTML = "O";
                boxs[i].style.backgroundColor = "green";
                boxbtn = false;
                boxs[i].disabled = true;
                conditionMatch();
            } else {
                boxbtn = false;
                boxs[i].disabled = false;
            }
        }

        function conditionMatch() {
            
            if (boxs[0].innerHTML == "X" && boxs[1].innerHTML == "X" && boxs[2].innerHTML == "X" ||
                boxs[3].innerHTML == "X" && boxs[4].innerHTML == "X" && boxs[5].innerHTML == "X" ||
                boxs[6].innerHTML == "X" && boxs[7].innerHTML == "X" && boxs[8].innerHTML == "X" ||
                boxs[0].innerHTML == "X" && boxs[4].innerHTML == "X" && boxs[8].innerHTML == "X" ||
                boxs[2].innerHTML == "X" && boxs[4].innerHTML == "X" && boxs[6].innerHTML == "X" ||
                boxs[0].innerHTML == "X" && boxs[3].innerHTML == "X" && boxs[6].innerHTML == "X" ||
                boxs[2].innerHTML == "X" && boxs[5].innerHTML == "X" && boxs[8].innerHTML == "X" ||
                boxs[1].innerHTML == "X" && boxs[4].innerHTML == "X" && boxs[7].innerHTML == "X"
            ) {
                result.innerHTML = "X is Winner";
                result.style.backgroundColor = "red";
                gameBtn.style.border = "5px solid red";
                countX++;
                countXoutput.innerHTML = `Player-X Won ${countX} Times`;
                disabledBtn();
                
            }else if (boxs[0].innerHTML == "O" && boxs[1].innerHTML == "O" && boxs[2].innerHTML == "O" ||
                boxs[3].innerHTML == "O" && boxs[4].innerHTML == "O" && boxs[5].innerHTML == "O" ||
                boxs[6].innerHTML == "O" && boxs[7].innerHTML == "O" && boxs[8].innerHTML == "O" ||
                boxs[0].innerHTML == "O" && boxs[4].innerHTML == "O" && boxs[8].innerHTML == "O" ||
                boxs[2].innerHTML == "O" && boxs[4].innerHTML == "O" && boxs[6].innerHTML == "O" ||
                boxs[0].innerHTML == "O" && boxs[3].innerHTML == "O" && boxs[6].innerHTML == "O" ||
                boxs[2].innerHTML == "O" && boxs[5].innerHTML == "O" && boxs[8].innerHTML == "O" ||
                boxs[1].innerHTML == "O" && boxs[4].innerHTML == "O" && boxs[7].innerHTML == "O"
            ) {
                result.innerHTML = "O is Winner";
                result.style.backgroundColor = "green";
                gameBtn.style.border = "5px solid green";
                countO++;
                countOoutput.innerHTML = `Player-O Won ${countO} Times`;
                disabledBtn();
            } else {
                result.innerHTML = "Draw";
                result.style.backgroundColor = "gray";
                gameBtn.style.border = "5px solid gray";
            }
        }
        
        function reset() {
            resetBtn.addEventListener("click", function () {
                if (resetBtn) {
                    boxs[i].innerHTML = " ";
                    result.innerHTML = " ";
                    boxbtn = false;
                    boxs[i].disabled = false;
                    boxs[i].style.backgroundColor = "rgba(143, 143, 143, 0.37)";
                    winner = false;
                    gameBtn.style.border = "none";
                    enabledBtn();
                }
            });
        };

        reset();
    });
};




