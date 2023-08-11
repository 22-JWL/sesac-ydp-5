class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return `직사각형의 넓이는 ${this.width * this.height} 입니다.`;
  }
}

class Rectangle extends Shape {
  getDig() {
    return `직사각형의 대각선 길이는 ${Math.sqrt(
      this.width ** 2 + this.height ** 2
    )} 입니다.`;
  }
}

class Triangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return `삼각형의 넓이는 ${(this.width * this.height) / 2}입니다.`;
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return `원의 넓이는 ${this.radius ** 2 * Math.PI} 입니다.`;
  }
}

let rec = new Rectangle(4, 20);
let tri = new Triangle(4, 20);
let cir = new Circle(4, 4, 20);
console.log(rec.getArea());
console.log(rec.getDig());
console.log(tri.getArea());
console.log(cir.getArea());
