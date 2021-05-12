class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png")
       
        World.add(world, this.body);
      }
      display(){
        push();
        
        if(this.body.speed>3){
          console.log(this.body.speed)
          Matter.World.remove(world,this.body)
          this.visiblity=this.visiblity-10
          tint(255,this.visiblity)
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        }  
        else{
          var angle = this.body.angle;
          var pos= this.body.position;
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
          translate(pos.x, pos.y);
          rotate(angle);
         }
        pop();
      
}
}