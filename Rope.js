
class Rope{
    constructor(bodyA1, p1){
        var options = {
            bodyA : bodyA1,
            pointB: p1,
            stiffness: 0.04,
            length: 30
        }
        this.pointB = p1;
        this.rope1 = Constraint.create(options);
        World.add(world, this.rope1);
    }


    fly(){
        this.rope1.bodyA = null;
    }
    
    display(){
       
if(this.rope1.bodyA){ 
        var pointA = this.rope1.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    
} 
} 
}