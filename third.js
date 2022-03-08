// Question-3) Write a “person” class to hold all the details.
// Answer-->



class Person{
static CompanyName="Amazon";//static member variable
constructor(name,age,address){
this.name=name;
this.age=age;
this.address=address;
}
//instance method
getData(){
let personData=`
Name:${this.name}
Age:${this.age}
Address:${this.address}
`
console.log(personData)
}
//static method
static getCompanyName(){
    console.log(Person.CompanyName);//Amazon
}
}

class Employee extends Person{
static CompanyNew="google"
constructor(name,age,address,designation,salary){
super(name,age,address);
this.designation=designation;
this.salary=salary;
}
//instance method
getData(){
let employeeData=`
Name:${this.name}
Age:${this.age}
Address:${this.address}
Designation:${this.designation}
Salary:${this.salary}`
console.log(employeeData)
}
//static method
static getCompanyName(){
console.log(Employee.CompanyNew);//google
}
}

//create an object of Employee
let employee1= new Employee("Virat",23,"Bengaluru","Manager","500000")
employee1.getData();//access of instance method
Employee.getCompanyName()//access of static method
//create object of person class
let person1=new Person("Rohit",35,"Mumbai");
person1.getData();//access of instance method
Person.getCompanyName()//access of static method

