class Blocks extends BaseClass {
    constructor(x, y,width,height ){
      var options = {
        'restitution':0.1,
        'friction':0
        
    }
      super(x,y,width,height);
      this.Visibility = 255
    }

    display(){

      if(this.body.speed < 3){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visibility = this.Visibility - 5;
         tint(255,this.Visibility);
       
         pop();
       }
       
     }
     score(){

      if(this.Visibility<0 &&this.Visibility>-105){

        Score++;

      }

     }
    }
  
  