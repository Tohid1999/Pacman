
var world = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2 ],
    [0, 10, 10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0 ],
    [0, 10,1, 0, 0, 0, 0, 0, 6, 10,5, 10,8, 0, 0, 0, 0, 0, 2, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,0, 11,8, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 6, 11,0, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,4, 0, 0, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 0, 0, 3, 10,0 ],
    [0, 10,10,10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,10,10,0 ],
    [0, 10,1, 0, 0, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 0, 0, 2, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,0, 11,8, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 6, 11,0, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,4, 0, 0, 0, 0, 0, 6, 10,7, 10,8, 0, 0, 0, 0, 0, 3, 10,0 ],
    [0, 10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0 ],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3 ]
]


var pacman = {
    x: 1,
    y: 1
}

var ghost = {
    x: 19,
    y: 13
}


var score = 0 ;


function displayWorld(){
    var output = '';
    for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>\n"
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 0)
                output += "<div class='brick'></div>";
            else if(world[i][j] == 1)
                output += "<div class='brick lefttop'></div>";
            else if(world[i][j] == 2)
                output += "<div class='brick righttop'></div>";
            else if(world[i][j] == 3)
                output += "<div class='brick rightbottom'></div>";
            else if(world[i][j] == 4)
                output += "<div class='brick leftbottom'></div>";
            else if(world[i][j] == 5)
                output += "<div class='brick top'></div>";
            else if(world[i][j] == 6)
                output += "<div class='brick right'></div>";
            else if(world[i][j] == 7)
                output += "<div class='brick bottom'></div>";
            else if(world[i][j] == 8)
                output += "<div class='brick left'></div>";

            else if(world[i][j] == 9)
                output += "<div class='empty'></div>";    
            else if(world[i][j] == 10)
                output += "<div class='coin'></div>";
            else if(world[i][j] == 11)
                output += "<div class='cherries'></div>";
        }
        output += "\n</div>"
    }
    $('#world').html(output);
}


function displayPacman(){
    document.getElementById('pacman').style.left = pacman.x*20+"px";
    document.getElementById('pacman').style.top = pacman.y*20+"px";
}

function displayGhost(){
    document.getElementById('ghost').style.left = ghost.x*20+"px";
    document.getElementById('ghost').style.top = ghost.y*20+"px";
}




function displayScore(){
    document.getElementById('score').innerHTML = score;
}



document.onkeydown = function(e){

    if(e.keyCode == 37 && (world[pacman.y][pacman.x-1]==9 || world[pacman.y][pacman.x-1]==10 || world[pacman.y][pacman.x-1]==11)){
        $('#pacman').removeClass('right');
        $('#pacman').removeClass('up');
        $('#pacman').removeClass('down');
        $('#pacman').addClass('left');
        pacman.x --;
    }

    else if(e.keyCode == 39 && (world[pacman.y][pacman.x+1]==9 || world[pacman.y][pacman.x+1]==10 || world[pacman.y][pacman.x+1]==11)){
        $('#pacman').removeClass('left');
        $('#pacman').removeClass('up');
        $('#pacman').removeClass('down');
        $('#pacman').addClass('right');
        pacman.x ++;
    }

    else if(e.keyCode == 38 && (world[pacman.y-1][pacman.x]==9 || world[pacman.y-1][pacman.x]==10 || world[pacman.y-1][pacman.x]==11)){
        $('#pacman').removeClass('right');
        $('#pacman').removeClass('up');
        $('#pacman').removeClass('left');
        $('#pacman').addClass('down');
        pacman.y --;
    }
//UP
    else if(e.keyCode == 40 && (world[pacman.y+1][pacman.x]==9 || world[pacman.y+1][pacman.x]==10 || world[pacman.y+1][pacman.x]==11)){
        $('#pacman').removeClass('right');
        $('#pacman').removeClass('left');
        $('#pacman').removeClass('down');
        $('#pacman').addClass('up');
        pacman.y ++;
    }    

    if(world[pacman.y][pacman.x] == 10){
        world[pacman.y][pacman.x] = 9;
        score+=10;
        displayWorld();
        displayScore();
    }

    if(world[pacman.y][pacman.x] == 11){
        world[pacman.y][pacman.x] = 9;
        score+=50;
        displayWorld();
        displayScore();
    }
    displayPacman()
    checkend()
}




function getRandom() {
    var random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    return random;
}

var currentDirection = 1;

function ghostMove(){
    var newDirection = getRandom();
    

    if(
        ((currentDirection == 1 || currentDirection == 2) && (world[ghost.y+1][ghost.x]==9 || world[ghost.y+1][ghost.x]==10 || world[ghost.y+1][ghost.x]==11 || world[ghost.y+1][ghost.x]==12 || world[ghost.y-1][ghost.x]==9 || world[ghost.y-1][ghost.x]==10 || world[ghost.y-1][ghost.x]==11 || world[ghost.y-1][ghost.x]==12))
        ||
        ((currentDirection == 3 || currentDirection == 4) && (world[ghost.y][ghost.x+1]==9 || world[ghost.y][ghost.x+1]==10 || world[ghost.y][ghost.x+1]==11 || world[ghost.y][ghost.x+1]==12 || world[ghost.y][ghost.x-1]==9 || world[ghost.y][ghost.x-1]==10 || world[ghost.y][ghost.x-1]==11 || world[ghost.y][ghost.x-1]==12))
    ){
        while(newDirection == currentDirection){
            newDirection = getRandom();
        }
  
        currentDirection = newDirection;
    }
    
    if(currentDirection ==  1 && (world[ghost.y][ghost.x-1]==9 || world[ghost.y][ghost.x-1]==10 || world[ghost.y][ghost.x-1]==11 || world[ghost.y][ghost.x-1]==12)){
        ghost.x --;

    }else if(currentDirection == 2 && (world[ghost.y][ghost.x+1]==9 || world[ghost.y][ghost.x+1]==10 || world[ghost.y][ghost.x+1]==11 || world[ghost.y][ghost.x+1]==12)){

        ghost.x ++;
    }else if(currentDirection == 3 && (world[ghost.y-1][ghost.x]==9 || world[ghost.y-1][ghost.x]==10 || world[ghost.y-1][ghost.x]==11 || world[ghost.y-1][ghost.x]==12)){

        ghost.y --;
    }else if(currentDirection == 4 && (world[ghost.y+1][ghost.x]==9 || world[ghost.y+1][ghost.x]==10 || world[ghost.y+1][ghost.x]==11 || world[ghost.y+1][ghost.x]==12)){

        ghost.y ++;
    }
    displayGhost();   
}


setInterval(ghostMove, 100)


//CHECK FOR GAME END
function checkend(){
    if((pacman.x == ghost.x) && (pacman.y == ghost.y)){
        $('#gameover').fadeIn();
    }
}



$(document).ready(function(){
    displayWorld();
    displayPacman();
    displayGhost();
    displayScore();
    


    
})
