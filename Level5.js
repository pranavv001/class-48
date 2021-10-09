class Level5{
    constructor(){
       this.plunger1 = new Plunger(970,height+10)
      this.wall1 = new Ground(200,height-40,15,100)
      this.wall2 = new Ground(600,40,15,100)
      this.wedge1 = new Wedge(400,height/2+25)
      this.wedge2 = new Wedge(800,height/2+25)
    
        
    }
    display() {
        this.plunger1.display(true)
        this.wall1.display()
        this.wall2.display()
       
        this.wedge1.display()
        this.wedge2.display()
        
    }
    remove() {
        this.plunger1.remove()
       this.wall1.remove()
       this.wall2.remove()
      
       this.wedge1.remove()
       this.wedge2.remove()
    }
    checkCollision() {
        if (Matter.SAT.collides(ball.body,this.plunger1.body).collided) {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:99,y:-60})  
          }
          
    
}
}