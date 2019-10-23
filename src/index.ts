interface Human {
  name: string;
  age: number;
  gender: string;
}
const person = {
  name: "nojeongho",
  age: 27,
  gender: "male"
};

const sayHi = (person: Human): string => {
  return `hi, im ${person.name}. i am ${person.age} years old. i am ${person.gender}`;
};

console.log(sayHi(person));

export {};
