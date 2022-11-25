{
  //JS
  // function jsAdd(n1, n2){
  //   return n1 + n2;
  // }
  // function jsFetchNum(){
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   })
  // }
  //TS
  function add(n1: number, n2: number): number{
    return n1 + n2;
  }

  function fetchNum(id: string): Promise<number>{
    return new Promise((resolve, reject) => {
      resolve(100);
    })
  }

  function printName(firstName: string, lastName?: string){ //optional parameter
    console.log(firstName);
    console.log(lastName);
  }
  printName('good');
  function printMsg(msg: string = 'default'){
    console.log(msg);
  }
  printMsg();
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a,b) => a+b);
  }
}