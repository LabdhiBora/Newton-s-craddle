class Bob  {
    constructor(x, y, radius) {
      var options = {
          isStatic: true,
          'restitution':0.3,
          'friction':0.2,
          'density':0.2,
      }
         this.body = Bodies.circle(x, y, radius, options);
         this.radius=radius;
         
         World.add(world, this.body);
    }
    display(){
         var pos =this.body.position;
         var  angle = this.body.angle;
         
         push();
        //  translate(pos.x, pos.y);
        //  rotate(angle);
         ellipseMode(RADIUS);
         ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
         
         pop();
    }
    }