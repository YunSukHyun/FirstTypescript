{
  //alias
  type Text = string;
  const name: Text = 'ellie';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  }
  const student: Student = {
    name: 'ellie',
    age: 12,
  }

  //String Literal type
  type Name = 'name';
  let ellieName: Name;
  //ellieName = 'd'; err
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  
}