class Slingshot{

    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.sling = Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB = pointB;
        World.add(world,this.sling);
    }
    display(){
        
        if(this.sling.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    attach(body){
        this.sling.bodyA = this.bodyA;
    }
    fly(){
        this.sling.bodyA = null;

    }

}