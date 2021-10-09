class Level4{
    constructor(){
       this.plunger1 = new Plunger(900,height+10)
      this.wall1 = new Ground(200,height-40,15,100)
      this.wall2 = new Ground(200,40,15,100)
      this.wall3 = new Ground(300,40,15,100)
      this.wall4 = new Ground(300,height-40,15,100)
      this.wall5 = new Ground(400,40,15,100)
      this.wall6 = new Ground(400,height-40,15,100)
      this.wedge1 = new Wedge(600,height/2+25)
      this.wedge2 = new Wedge(800,height/2+25)
    
        
    }
    display() {
        this.plunger1.display(true)
        this.wall1.display()
        this.wall2.display()
        this.wall3.display()
        this.wall4.display()
        this.wall5.display()
        this.wall6.display()
        this.wedge1.display()
        this.wedge2.display()
        
    }
    remove() {
        this.plunger1.remove()
       this.wall1.remove()
       this.wall2.remove()
       this.wall3.remove()
       this.wall4.remove()
       this.wall5.remove()
       this.wall6.remove()
       this.wedge1.remove()
       this.wedge2.remove()
    }
    checkCollision() {
        if (Matter.SAT.collides(ball.body,this.plunger1.body).collided) {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:99,y:-6})  
          }
          
    
}
}