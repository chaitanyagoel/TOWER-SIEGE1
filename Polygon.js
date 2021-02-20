class Polygon {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, 20, options);
    this.width =30;
    this.height = 30;
    this.image= loadImage("polygon.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
   // strokeWeight(4);
    //stroke("green");
    //fill(255);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};
