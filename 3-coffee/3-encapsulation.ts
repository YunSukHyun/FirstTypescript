{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker{
    private static BEANS_GRAM_PER_SHOT: number = 7; //  class level
    private coffeeBeans: number = 0;  //  instance level

    private constructor(coffeeBeans: number){
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker{ // 생성자 대신 이걸로 만들게 유도를 위해 생성자를 private 
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number){
      if(beans < 0){
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }
    makeCoffee(shots: number): CoffeeCup{
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      }
    }
  }
  const maker = CoffeeMaker.makeMachine(11);
  const maker2 = CoffeeMaker.makeMachine(12);
  const maker3 = CoffeeMaker.makeMachine(12);
  maker.fillCoffeeBeans(10);

  class User {
    get fullName(): string{
      return `${this.firstName} ${this.lastName}`;
    };
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number){
      if(this.internalAge < 0){
        throw new Error('')
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string){}
  }
  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.age = 6;
}