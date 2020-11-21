class Striker {
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
  
      this.body = Bodies.rectangle(x,y,w,h,options);
     
      this.w = w;
      this.h = h;
  
      World.add(world, this.body);
  
    }
  
    display(){
  
      var pos =this.body.position;
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      rectMode(CENTER);
      strokeWeight(2);
      stroke("blue");
     //fill("");
      fill("white");
      rect(pos.x, pos.y,this.w,this.h);
    }
  }