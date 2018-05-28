window.addEventListener("load", init);

let stage, box, circle, car, speed=10;

window.addEventListener('keyup', (e)=>{
    console.log("key up")
    console.log(`key pressed: ${e.code}`)
})

window.addEventListener('keydown', ()=>{
    console.log("key down")
})

window.addEventListener('keypress', ()=>{
    console.log("key press")
})

const settings = {
    speed: 10,
    width: 600, 
    height: 400,
    carWidth: 300
}

function init(){
    stage = new createjs.Stage("stage"); //the id of the canvas
    createjs.Ticker.framerate = 30;
    createjs.Ticker.addEventListener("tick", tock);
    console.log("load event happened");

    car = new createjs.Container();
    car.brand = "Ferrari";
    car.direction = "right";
    box = new createjs.Shape();
    box.graphics.beginFill("#bada55");
    box.graphics.drawRect(0,0,settings.carWidth,100);
    box.x=0;
    box.y=400/4;
    // box.x=100;
    // box.y=100;
    car.addChild(box);

    circle = new createjs.Shape();
    circle.graphics.beginFill("#c0ffee");
    circle.graphics.drawCircle(0,0,40);
    circle.x=400/2;
    circle.y=400/2;
    car.addChild(circle);


    window.addEventListener("keydown", (e)=>{
        let key = e.key;
        console.log(e)
        console.log(key)
        // console.log(e)
        if(key==="d" || e.keyCode===39){
            console.log("you pressed d")
            car.direction="right";
        } else if(key==="a" || e.keyCode===37){
            car.direction="left";
        }

        // if(car.direction==="right"){
        //     car.direction="left";
        // } else {
        //     car.direction="right";
        // }
    });

    stage.addChild(car);

}

function tock(e){
    // console.log("redraw");
    // box.x+=5;
    // box.y+=2;
    // box.rotation++;
    // car.x+=10;

    

// IT'S WORKING
    if(car.direction==="right"){
        car.x+=settings.speed;
        if(car.x>settings.width-settings.carWidth){
            car.direction="left";
        }
    } else {
        car.x-=settings.speed;
        if(car.x<=0){
            car.direction="right";
        }
    }
// END OF IT





    // if(car.x > 600){
    //     car.x -= 10;
    // }
        
    // circle.rotation+=20;
    // circle.skewY++;
    // car.x+=3;
    stage.update(e);
}
