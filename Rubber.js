class Rubber {
constructor(body1, body2){
var p = {
bodyA:body1,
bodyB:body2,
stiffness:0.5,
length:50
}
this.attachment = Matter.Constraint.create (p);
World.add (world,this.attachment)
}
display(){
var point1 = this.attachment.bodyA.position
var point2 = this.attachment.bodyB.position
line(point1.x, point1.y, point2.x, point2.y)
}
}