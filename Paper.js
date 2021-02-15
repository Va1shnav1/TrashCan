class Paper{
    constructor(x, y, r){
        var options={
            restitution:0.3,
            density:0.5,
            friction:1.2
        }
        this.r=r;
        this.body = Bodies.circle(x, y, r, options);
        this.img=loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        push();
        var pos=this.body.position;
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.img, 0, 0, this.r+33, this.r+33);
        //ellipseMode(RADIUS);
        //ellipse(0, 0, this.r, this.r);
        pop();
      
        
    }
}