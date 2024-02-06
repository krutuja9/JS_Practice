let DATA = "secrete information"

class User{
  constructor (name, email){
    this.name = name;
    this.email=email
  }

  viewData (){
    console.log("data= ", DATA)
  }
}

let student1 = new User('rutuja','kruutja')




// class Car {
//   start (){
//     console.log("start");
//   }

//   stop(){
//     console.log("stop")
//   }
// }

// let fortuner = new Car();


// inheritance :passing down properties and method from parent class to child class

// class Parent {
//   hello(){
//     console.log("hello")
//   }
// } 

// class Child extends Parent{

// }
// let obj = new Child

// class person{
//   eat(){
//     console.log("eating")
//   }
//   walk(){
//     console.log("walking")
//   }
// }

// class engineer extends person {
//   work (){
//     console.log("problem solver, build something awsome")
//   }
// }

// let rutujaObj = new engineer();





// const student = {
//   fullName: "rutuja",
//   marks: 94,
//   printMarks :  function(){
//     console.log("Marks ", this.marks)
//   }

// }

// console.log(student.printMarks())