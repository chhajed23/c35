var ball;
var db,pos,loc;

function setup(){
    createCanvas(500,500);
    db=firebase.database();
    

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    loc=db.ref('Ball/Position');
    loc.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(pos!==undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
}
    drawSprites();
}

function writePosition(x,y){
    db.ref('Ball/Position').set({
        x:pos.x+x,
        y:pos.y+y
    });

   
}

function readPosition(data){
    pos=data.val();
    ball.x=pos.x;
    ball.y=pos.y;
}

function showError(error){
    console.log("error: "+ error);
}
