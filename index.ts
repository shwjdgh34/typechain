const nickname = "mrnonono",
    age = "27",
    gender = "Male";

const sayHi = (nname,age,gender?) => {
    console.log(`hi, im ${nname}. i am ${age} years old. i am ${gender}`);
}

sayHi(nickname,age,gender);
sayHi(nickname,age);