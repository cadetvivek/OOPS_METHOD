// Create a class Triangle Having 3 sides as attributes (side1, side2, side 3).

// Create a constructor to initialize the sides in realtime on object creation.

// Create 2 functions calculate_area and calculate_perimeter

// calculate_area functions returns the area of the triangle ( side1 * side2 * side3)

// calculate_perimeter functions returns the perimeter of the triangle (side1+side2+side3).

// Use the help of hints if Stuck

// Since OOPS is a very important Topic this task will be checked Manually by the mentor during the mock interview ::).

// If there is any confusion make sure to ask the mentor and get it resolved .
class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  calculate_area() {
    const area = this.side1 * this.side2 * this.side3;
    //const area = Math.sqrt(s * (this.side1) * (this.side2) * (this.side3));
    return area;
  }

  calculate_perimeter() {
    const perimeter = this.side1 + this.side2 + this.side3;
    return perimeter;
  }
}
