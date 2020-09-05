class SlingShot{
    constructor(bodyA, pointB){
    var option = {
    length: 10,
    stiffness: 0.4,
    bodyA: bodyA,
    pointB: pointB
  }
  this.sling = Constraint.create(option);
  this.pointB = pointB;
  World.add(world, this.sling);
    }

    fly(){
      this.sling.bodyA = null;
    }

    attach(body){
      this.sling.bodyA = body
    }
    
    display(){ 
        if(this.sling.bodyA){
          var pointA = this.sling.bodyA.position;
          var pointB = this.pointB;
          strokeWeight(4);
          line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
      }
  }