class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,45,options);
        this.radius = 45;
        this.image = loadImage("images/Walking Frame/1.png","images/Walking Frame/2.png","images/Walking Frame/3.png","images/Walking Frame/4.png","images/Walking Frame/5.png","images/Walking Frame/6.png","images/Walking Frame/7.png","images/Walking Frame/8.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}