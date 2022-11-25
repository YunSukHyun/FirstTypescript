{
  const fruits: string[] = ['a', 'b'];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  //Tuple not recommended ex) react useState
  let student: [string, number];
  student = ['name', 123];
  student[0]// name
  student[1]// 123
  const [name, age] = student;
  
}