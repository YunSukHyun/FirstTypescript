{
  /**
    * JavaScript
    * Primitive: number, string, boolean, bigint, symbol, null, undefined
    * Object: function, array...
  */
  
  //number
  const num: number = 1;

  //string
  const str: string = 'hello';

  //boolean
  const bool:boolean = false;
  
  //undefined
  let name: undefined;  //💩
  let age: number | undefined
  age = undefined;
  age = 1;
  let person: null; //💩
  let person2: string | null;
  
  //unknown
  let notSure : unknown = 0; //💩
  notSure = 'he';
  
  //any
  let anything: any = 0; //💩
  anything = 'hello';

  // void
  function print(): void {
    console.log('hi');
    return;
  }
  let unusable: void = undefined; //💩

  //never
  function throwError(msg: string): never {
    throw new Error(msg);
    while(true){}
  }
  let neverEnding: never; //💩

  let obj: object;  //💩
  function acceptSomeObject(obj: object){

  }
  acceptSomeObject({name: 'ellie'});
  acceptSomeObject({animal: 'dog'});
}