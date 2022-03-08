//create a class circle
//https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
// Answer-->

class Circle{
    setRadius(radius){
        this.radius=radius;
    }
    setColor(color){
        this.color=color;
    }
    getRadius(){
        console.log(this.radius);
    }
   
    getColor(){
        console.log(this.color);
    }
    toString(){
        console.log(`"Circle[${this.radius},${this.color}]"`);
    }
    getArea(){
        let area=Math.PI*this.radius*this.radius;
        console.log(area);
    }
    getCircumference(){
        let circumference=Math.PI*2*this.radius;
        console.log(circumference);
    }

}
let circle1=new Circle();
circle1.setRadius(1);
circle1.getRadius();//1
circle1.setColor("red");
circle1.getColor();//red
circle1.toString();//"Circle[1,red]"
circle1.getArea();//3.141592653589793
circle1.getCircumference();//6.283185307179586
