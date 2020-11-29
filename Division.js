class Divisions
{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.color=color(random(0,255),random(0,255),random(0,255));

        
      }
      display()
      {
        var pos =this.body.position;
        
        fill(this.color);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);

      }
};