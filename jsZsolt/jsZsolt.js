let ballGraphical= document.getElementById('ball');
let fieldGraphical= document.getElementById('field');
let goButton= document.getElementById('startMovement');

let field={
    topBorder:0,
    leftBorder:0,
    rightBorder:fieldGraphical.clientWidth,
    bottomBorder:fieldGraphical.clientHeight
    }

let ball = {
     speed : 400,
     radius: ballGraphical.clientHeight/2,
     direction: { x:1,y:1},
}

goButton.onclick=function(){
    setInterval(moveBall,10);
    console.log("Clicked");
}

function moveBall(){
    let moveHorizontal=ball.direction.x*ball.speed*0.01;
    let moveVertical=ball.direction.y*ball.speed*0.01;

    let newHorizontalPosition= ballGraphical.offsetLeft+moveHorizontal;
    let newVerticalPosition = ballGraphical.offsetTop+moveVertical;

    //check collision

    if(newHorizontalPosition<=0 || 
        newHorizontalPosition>=field.rightBorder-ball.radius*2 || 
        newVerticalPosition <=0 || 
        newVerticalPosition >= field.bottomBorder-ball.radius*2){

        ballGraphical.style.left=newHorizontalPosition+'px';
        ballGraphical.style.top=newVerticalPosition+'px';

        if(newHorizontalPosition<=0 || 
            newHorizontalPosition>=field.rightBorder-ball.radius*2){
                ball.direction.x=-1*ball.direction.x;

        }

        else{
            ball.direction.y=-1*ball.direction.y;

        }




    }

    else{
        ballGraphical.style.left=newHorizontalPosition+'px';
        ballGraphical.style.top=newVerticalPosition+'px';
    }

}