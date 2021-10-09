class Level3{
    constructor(){
       this.plunger1 = new Plunger(200,height+10)
      this.wall1 = new Ground(width/3-80,height-50,15,100)
      this.wall2 = new Ground(500,50,15,100)
      this.wall3 = new Ground(900,50,15,100)
      this.wedge = new Wedge(700,height/2+25)
    
        
    }
    display() {
        this.plunger1.display(true)
        this.wall1.display()
        this.wall2.display()
        this.wall3.display()
        this.wedge.display()
        
    }
    remove() {
        this.plunger1.remove()
       this.wall1.remove()
       this.wall2.remove()
       this.wall3.remove()
       this.wedge.remove()
    }
    checkCollision() {
        if (Matter.SAT.collides(ball.body,this.plunger1.body).collided) {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:99,y:-6})  
          }
          
    
}
}