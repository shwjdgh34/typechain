class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const nick = new Human("nick", 27, "male");

const sayHi = (person: Human): string => {
  return `hi, im ${person.name}. i am ${person.age} years old. i am ${person.gender}`;
};

console.log(sayHi(nick));

export {};
