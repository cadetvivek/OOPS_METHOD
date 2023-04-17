// Create a class Employee Having 3 attributes (name, year of joining, address)

// Create a constructor to initialize the attributes in realtime on object creation.

// Create a function print_details to print the details of the employee. (it should be just separated by a space).

// Example:- (there is only space in between of name, year, address)

// Robert      1994        64C-WallsStreet

// Sam        2000        68D-WallsStreet

// John        1999        26B-WallsStreet.

// Use the help of hints if Stuck

// Write Down the Entire Code for the above Question in your IDE and copy paste the code here.

// Since OOPS is a very important Topic this task will be checked Manually by the mentor during the mock interview ::).

// If there is any confusion make sure to ask the mentor and get it resolved .
class Employee {
  //Write the code here
  constructor(name, year_of_joining, address) {
    this.name = name;
    this.year_of_joining = year_of_joining;
    this.address = address;
  }
  print_details() {
    console.log(`${this.name} ${this.year_of_joining} ${this.address}`);
  }
}

var t = new Employee("ram", 1992, "Bangalore");
t.print_details();

var x = new Employee("shyam", 2010, "Lucknow");
x.print_details();

var y = new Employee("babu_rao", 2015, "Delhi");
y.print_details();
