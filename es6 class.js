// class myClass{
//     fun(){
//         console.log('hello world')
//     }
//     fun2(){
//         console.log('hello world')
//     }
//     fun(name){
//         console.log(name)
//     }
//     fun2(name){
//         console.log(name)
//     }
// }
//
// let obj= new myClass();
//
// obj.fun()
// obj.fun2()
// obj.fun('Hello bangladesh')
// obj.fun2('How are you')



// es6 class constructor

// class  myClass{
//     constructor() {
//         console.log("hello Bangladesh")
//     }
// }
//  new myClass()


// myClass{
//     constructor(name) {
//         console.log(name)
//     }
// }
//  new myClass('Hello bangladesh')


//class constructor
class MyClass {
    constructor(a,b) {
        this.FirtNumber=a
        this.SecentNumber=a
    }
   add(){
     let results=   this.FirtNumber+this.SecentNumber
       console.log(results)
   }
}

let obj=new MyClass(10,30);
obj.add()






