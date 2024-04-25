let currPomTile;
let currPlantTile;
let button
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();

    const buttons = document.getElementById("button1");
    if(buttons){
    buttons.addEventListener('click', changeItem);
    function changeItem(){
        document.getElementById("score").innerText = "Set Volume: " + score.toString()+"%"; //update score html
        gameOver = true;
        }
    }
    buttons.addEventListener('click', () => {
        const btnClass = buttons.getAttribute('id');
        if (btnClass === 'button1') {
          buttons.setAttribute('id','restart');
          buttons.textContent = 'Restart';
          score = 0
        } else {
          buttons.setAttribute('id','button1');
          buttons.textContent = 'Volume';
          gameOver = false;
        }
      });
}

function setGame() {
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setPom, 2000); // 1000 miliseconds = 1 second, every 1 second call setMole
    setInterval(setPlant, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setPom() {
    if (gameOver) {
        return;
    }
    if (currPomTile) {
        currPomTile.innerHTML = "";
    }
    let pom = document.createElement("img");
    pom.src = "./Pompompurin.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currPomTile = document.getElementById(num);
    currPomTile.appendChild(pom);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./cactus.png";

    let num = getRandomTile();
    if (currPomTile && currPomTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
        if (gameOver) {
            return;
        }
        if (this == currPomTile) {
            score += 1;
            document.getElementById("score").innerText = score.toString()+"%"; 
        }
        if (score <= 0){
            score = 1
        }
    else if (this == currPlantTile) {
            score -= 1;
            document.getElementById("score").innerText = score.toString()+"%";
        }
    }