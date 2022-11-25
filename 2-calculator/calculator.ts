type cmd = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';
function calc(cmd: cmd, a:number, b: number): number {
  switch(cmd){
    case 'add':
      return a+b;
    case 'subtract':
      return a-b;
    case 'multiply':
      return a*b;
    case 'divide':
      return a/b;
    case 'remainder':
      return a%b;
    default:
      throw new Error('unknown command');
  }
}

console.log(calc('add', 1, 3));
console.log(calc('subtract', 1, 3));
console.log(calc('multiply', 1, 3));
console.log(calc('divide', 1, 3));
console.log(calc('remainder', 1, 3));