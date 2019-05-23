// When you really need `this`
  const button = document.querySelector('#pushy');
  button.addEventListener('click', function() {
    console.log(this);
    this.classList.toggle('on');
  });
  // When you need a method to bind to an object
  const person = {
    points: 23,
    score() {
      console.log(this);
      this.points++;
    }
  }
  // When you need to add a prototype method
  class Car {
    constructor(make, colour) {
      this.make = make;
      this.colour = colour;
    }
  }
  const audie = new Car('audie', 'blue');
  const feerari = new Car('Feerari', 'white');
  Car.prototype.summarize = function() {
     return `This car is a ${this.make} in the colour ${this.colour}`;
  };
  // When you need arguments object
  const orderChildren = function() {
    const children = Array.from(arguments);
    return children.map((child, i) => {
      return `${child} was child #${i + 1}`;
    })
    console.log(arguments);
  }
