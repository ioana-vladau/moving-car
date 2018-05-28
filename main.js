window.addEventListener("load", init);

let stage, box, circle, car, bullets=[];

// window.addEventListener('keyup', (e)=>{
//     // console.log("key up")
//     console.log(`key pressed: ${e.code}`)
// })

// window.addEventListener('keydown', ()=>{
//     // console.log("key down")
// })

// window.addEventListener('keypress', ()=>{
//     // console.log("key press")
// })

const settings = {
    speed: 10,
    bulletSpeed: 20,
    width: 600, 
    height: 400,
    carWidth: 300,
    keys: {
        left: false,
        right: false,
        up: false,
        down: false
    }
}

function init(){
    stage = new createjs.Stage("stage"); //the id of the canvas
    createjs.Ticker.framerate = 60;
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


    window.addEventListener("keydown", e=>{
        // console.log(e);
        if(e.key==="ArrowLeft"){
            console.log("arrow left-moving left")
            settings.keys.left=true;
        } 
        
        if(e.key==="ArrowRight"){
            console.log("arrow left-moving right")
            settings.keys.right=true;
        }

        if(e.key==="ArrowUp"){
            console.log("arrow left-moving right")
            settings.keys.up=true;
        }

        if(e.key==="ArrowDown"){
            console.log("arrow left-moving right")
            settings.keys.down=true;
        }

        //THIS WORKS
        /*
        if(e.key==="d" || e.code==="ArrowRight"){
            console.log("you pressed d")
            car.direction="right";
        } else if(e.key==="a" || e.code==="ArrowLeft"){
            car.direction="left";
        }
        */
    });

    window.addEventListener("keyup", (e) => {
        console.log(e.key)
        if(e.key === "ArrowLeft"){
           settings.keys.left=false;
        }
        if(e.key === "ArrowRight"){
            settings.keys.right=false;
        }
        if(e.key === "ArrowUp"){
        settings.keys.up=false;
        }
        if(e.key === "ArrowDown"){
        settings.keys.down=false;
        }
        if(e.key === " "){
            shoot();
        }
    });

    function shoot(){
        let bullet = new createjs.Shape();
        bullet.graphics.beginFill("#fff").drawCircle(0,0,4);
        bullet.x = car.x;
        bullet.y = car.y;
        bullets.push(bullet);
        stage.addChild(bullet);
    }

    stage.addChild(car);
}

function moveBullets(){
    bullets.forEach(b=>{
        b.y-=settings.bulletSpeed;
    })
}

function tock(e){
    moveBullets();
    // console.log(settings.keys)
    if(settings.keys.left){
        car.x-=settings.speed;
    };
    if(settings.keys.right){
        car.x+=settings.speed;
    };
    if(settings.keys.up){
        car.y-=settings.speed;
    };
    if(settings.keys.down){
        car.y+=settings.speed;
    };

// IT'S WORKING
   /* if(car.direction==="right"){
        car.x+=settings.speed/2;
        if(car.x>settings.width-settings.carWidth){
            car.direction="left";
        }
    } else {
        car.x-=settings.speed/2;
        if(car.x<=0){
            car.direction="right";
        }
    }*/
// END OF IT
    stage.update(e);
}
