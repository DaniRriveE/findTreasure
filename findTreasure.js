let width = 400;
let height = 400;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

let clicks = 0;
let clicksLeft = 15;
$("#map").click(function (event) {
    clicks++;
    clicksLeft--;
    
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);

    if (distance < 8) {
        alert("Found the treasure in " + clicks + " clicks!");
        return;
        //clear p's and remove click handler
        //draw circle where the treasure was, and for every click different circles maybe
        //restart game
    }

    if (clicksLeft === 0) {
        alert ("Game over!");
        return;
        //restart game
    }
    $("#clicksLeft").text("Clicks left: " + clicksLeft);
});

function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}

function getDistance(event, target) {
    let dX = event.offsetX - target.x;
    let dY = event.offsetY - target.y;
    return Math.sqrt((dX*dX) + (dY * dY));
}

function getDistanceHint(distance) {
    if (distance < 10) {
        return "Boiling hot!";
    } else if (distance < 20) {
        return "Really hot!"; 
    } else if (distance < 40) {
        return "Hot"; 
    } else if (distance < 80) {
        return "Warm"; 
    } else if (distance < 160) {
        return "Cold"; 
    } else if (distance < 320) {
        return "Really cold"; 
    } else {
        return "Freezing!";
    }
}