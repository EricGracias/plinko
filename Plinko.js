class Plinko {
  constructor(x,y) {
    var options = {
        isStatic: true,
        restitution:1,
        friction:0
    }
    this.r = 10;

    this.body = Bodies.circle(x,y,this.r,options);
   
    World.add(world, this.body);

  }

  display(){
    var angle = this.body.angle;
    var pos =this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(2);
    stroke("blue");
   //fill("");
    fill("white");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
  }
}