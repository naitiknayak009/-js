// console.log("hello world !!");

// let a =3.5;
// let b = 4.5;
// let d = a**b;
// a++;
// let c = a+b;
// console.log(a);
// console.log("a+b = ",c);
// console.log("a power b",d);
// let cond1 = a == b ;
// let cond2 = a >= b;
// console.log("con1 && con2"  , cond1 && cond2);
// let x = 7;
// let y = "7";
// console.log("7 = 7",x===y);//=== checks data type also

// if(x===y){
//     console.log("equal");
// }
// else{
//     console.log("not equal");
// }


// let mode = "dark";
// let color;
// if(mode == "dark"){
//     color = "black";
// }
// console.log(color);

// // let name = prompt("hello");
// // console.log(name);

// // let num = prompt("enter a number::");
// // // if(num%5===0){
// // //     console.log("number is multiple of five");
// // // }
// // // else{
// // //     console.log("not a multiple of five");
// // // }
// // let sum = 0;
// // for(var i = 0 ; i < 7 ; i++){
// //         console.log("*naitik*");
// //         sum++
// //         console.log(sum);
// //     }

// // console.log(i);

// let naame = "Naitik is good boy";
// console.log(naame);
// console.log(naame.length); 


// let marks = [10,20,30,40,50];
// console.log(marks);
// for(let i = 0 ; i < 5 ; i++){
//     console.log(i ,"=" , marks[i]);
// }

// for(let i = 0 ; i<5 ; i++){
//     marks[i]= marks[i]-(marks[i] / 10);
//     console.log("Value after discounting is ", marks[i] );
// }
// console.log(marks);

// marks.push(1,2,3,4,5);
// console.log(marks);
// console.log(marks.toString());
// let str = marks.toString();
// console.log(str[11],str[12],str[13],str[14]);

// function myfunc(msg){
//     console.log(msg + " abhilasha");
// }

// myfunc("i love naitik");

// function sum(a,b){
//     console.log(a+b);
//     return a+b;
// }

// function vowel(str){
//     let count = 0;
//     for(let i= 0;i<str.length;i++){
//         if(str[i]=="a" | str[i]=="i" |str[i]=="o" |
//         str[i]=="u"){
//             count++;
//         }
        
//     }
//     let fin = count;
//     console.log(fin);

// }

// vowel("Naitik");

// alert("Hello");

// console.log(window);

// let heading = document.getElementById("heading");
// console.dir(heading);

// let heading2 = document.getElementById("heading2");
// console.dir(heading2);

// let headings = document.getElementsByClassName("headi");
// console.log(headings);
// console.dir(headings);

// let para = document.querySelector("p");
// console.log(para);

// let alle = document.querySelectorAll("p");
// console.log(alle);

// console.dir(document.body.children);

// let nai = document.getElementById("main");
// console.dir(nai);

// nai = h1.innerText + "natiik";

// let divs = document.getElementById("main");
// divs[0].innerText = "new value";
//declaration of object 
const person = {
    firstname: "john",
    lastname: "doe",
    age : 50,
    eyecolor: "blue",
    email: "naitiknayak009@gmail.com" 
};
//printing each object key value
console.log(person.firstname);
console.log(person.eyecolor);
console.log(person["email"]);
//altering a key value 
person.email = "naitik@gmail.com";
console.log(person["email"])
//freezing object keys
// Object.freeze(person)
person.firstname = "naitik"
console.log(person.firstname)

person.greeting = function(){
    console.log("HEllo JS USer")
}
person.greeting2 = function(){
    console.log(`HEllo JS USer ${this.firstname}`)
}
console.log(person.greeting());
console.log(person.greeting2());

const tinderuser = {
    id : "123abc",
    name: "Samarpan",
    isprin : "Naitik",
    fullname:{
        thname : "hero",
        bname:{
            cname:"sweta",
            dname:"chinta"
        }
    }
}
tinderuser.islogin = false;

console.log(tinderuser)
console.log(tinderuser.fullname.bname.dname);

const ob1 = {1:"a",2:"b"}
const ob2 = {3:"c",4:"d"}

const ob3 = Object.assign({},ob1 ,ob2)
console.log(ob3);

const obj3 = {...ob1, ...ob2}
console.log(obj3)

// console.log(ob1.keys(tinderuser));

// console.log(ob1.keys(tinderuser));

console.log(Object.isFrozen(ob1));
console.log("121e11");
Object.freeze(ob1);
console.log(Object.isFrozen(ob1));



const ob5 = {
    1: "the",
    2: "man"
}

console.log(obj3.keys);
