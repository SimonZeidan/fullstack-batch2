function attack(){
    let monsterScore = document.getElementById("monster").value;
    let myScore = document.getElementById("player").value;

    const randomMonster = Math.floor(Math.random() * 40);
    const randomSelf = Math.floor(Math.random() * 40);

    monsterScore -= randomMonster;
    myScore -= randomSelf;


    if (monsterScore <= 0 || myScore <= 0){
        if (monsterScore > 0 ){
            document.getElementById("logs").innerHTML = `<h2 style="color:red">Monster Wins</h2>`;
            document.getElementById("player").value = 0;
            document.getElementById("logs").innerHTML += `<input type="button" value="Restart" onclick="onRestart()">`;
            
        }
        else if (myScore > 0){
            document.getElementById("logs").innerHTML = `<h2 style="color:green">Player Wins</h2>`;
            document.getElementById("monster").value = 0;
            document.getElementById("logs").innerHTML += `<input type="button" value="Restart" onclick="onRestart()">`;
        }
        else {
           document.getElementById("logs").innerHTML = `<h2 style="color:grey">Draw</h2>`;
           document.getElementById("monster").value = 0;
           document.getElementById("player").value = 0;
           document.getElementById("logs").innerHTML += `<input type="button" value="Restart" onclick="onRestart()">`;
        }
        document.getElementById("heal").disabled = true;
        document.getElementById("giveUp").disabled = true;
        document.getElementById("attack").disabled = true;
        document.getElementById("spattack").disabled = true;
    }
    else{
        document.getElementById("monster").value = +monsterScore;
        document.getElementById("player").value = +myScore;
        document.getElementById("logs").innerHTML += `<h3>Monster attacks and deals <span style="color:red">` +  randomMonster+ `</span></h3>`;
        document.getElementById("logs").innerHTML += `<h3>Player attacks and deals <span style="color:green">` + randomSelf+ `</span></h3>`;
    } 
}
let counter = 0;
const onHeal  = () => {
    let myScore = document.getElementById("player").value;
    const randomHeal = Math.floor(Math.random() * 40);
    
    myScore += randomHeal;

    if(counter < 3){
        counter ++;
        if (myScore + randomHeal > 100){
            myScore = 100;
        }
        document.getElementById("player").value = myScore;
        document.getElementById("logs").innerHTML += `<h3>Player heals himself for ` + randomHeal+ `</h3>`;
    }
}

const onSpecialAttack = () => {
    let monsterScore = document.getElementById("monster").value;
    let myScore = document.getElementById("player").value;
    if (myScore + 20 < monsterScore ) {
        randomDamage = monsterScore - myScore ;
        monsterScore = myScore;
        document.getElementById("monster").value = monsterScore;
        document.getElementById("logs").innerHTML += `<h3>Player uses speacial attacks and deals <span style="color:red">` 
        + randomDamage+ `</span></h3>`;
    }

}

const onRestart = () => {
    counter = 0;
    document.getElementById("monster").value = 100;
    document.getElementById("player").value = 100;
    document.getElementById("logs").innerHTML = '';
    document.getElementById("heal").disabled = false;
    document.getElementById("attack").disabled = false;
    document.getElementById("spattack").disabled = false;
    document.getElementById("giveUp").disabled = false;
}

function onGiveUp () {
    document.getElementById("heal").disabled = true;
    document.getElementById("attack").disabled = true;
    document.getElementById("spattack").disabled = true;
    document.getElementById("giveUp").disabled = true;
    document.getElementById("logs").innerHTML = `<h3>Player Give Up</h3>`;
    document.getElementById("logs").innerHTML += `<input type="button" value="Restart" onclick="onRestart()">`;
}