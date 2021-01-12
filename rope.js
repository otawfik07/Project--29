class Rope {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = (x,y,10,100,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };