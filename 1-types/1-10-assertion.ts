{
  // Type Assertion 별로 좋지 않은 습관
  function jsStringFunc(): any{
    return 2;
  }
  const result = jsStringFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  //console.log((wrong as Array<number>).push(1)); //err
  function findNum(): number[] | undefined{
    return undefined;
  }
  const numbers = findNum();
  //numbers!.push(2); //err
}