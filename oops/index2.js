// A class named 'Student' with String variable 'name' and integer variable 'roll_no' and Constructor is already created.

// Create a method display to print the attributes name and roll_no.

// Watch the hints if you are stuck.

// If there is any confusion make sure to ask the mentor and get it resolved .

class Student {
  constructor(name = "john", a = 2) {
    this.name = name;
    this.roll_no = a;
  }
  //create the method display below
}

var x = new Student("vaibhav", 101);

console.log(x.name);
console.log(x.roll_no);
var y = new Student("rahul", 102);

console.log(y.name);
console.log(y.roll_no);

var z = new Student();

console.log(z.name);
console.log(z.roll_no);
