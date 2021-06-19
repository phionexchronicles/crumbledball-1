class Paper{
    constructor(x,y,r){
        var Options = {
            isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

        }
this.body = Bodies.circle(x,y,r, Options)
this.r = r
this.x = x
this.y = y
    }
    display(){
        var paperpos=this.body.position;		

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.r, this.r);
        pop()
    }
}