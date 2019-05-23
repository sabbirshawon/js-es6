function calc_bill(total, tax = 0.13, tip = 0.15) {
  return total + (total * tax) + (total * tip);
}
const total_bill = calc_bill(100, undefined, 0.25);
console.log(total_bill);
