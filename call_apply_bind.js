// =============== CALL ===============
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);
// Expected output: "cheese"

// =============== APPLY ===============
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2

// =============== BIND ===============
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42

const module = {
  id: 42,
  method_1() {
    function func() {
      return this?.id
    }
    return func.bind(this)()
  },
  method_2() {
    const func = () => {
      return this.id
    }
    return func()
  }
}

console.log(module.method_1())
console.log(module.method_2())
