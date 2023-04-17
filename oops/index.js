// Create a class named 'Student' with String variable 'name' and integer variable 'roll_no'.

// Create a constructor through which you can assign values through objects on creation of objects.

// if No value is passed through object then by default name should be initialized to "john" and roll_no as 2
class Student {
  constructor(name = "john", roll_no) {
    this.name = name;
    this.roll_no = roll_no;
  }
}
// Create three instances of the Student class
// const student1 = new Student("vaibhav", 1);
// const student2 = new Student("rahul", 2);
// const student3 = new Student();
