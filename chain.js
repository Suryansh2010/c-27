class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:1,
            length:103
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        push();
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(6);
        stroke("blue");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}