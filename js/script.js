console.log("poda mayiruuuu")
var str =`solo's phone`
console.log(str)
console.log(typeof str)

console.log(`name is ${str}`)
console.log(str+"\n"+str)
console.log(`${str}
${str}`)

//in javascript numbers should be consider as number
let num = 25
let num1 = 25.25
console.log(typeof num)
console.log(typeof num1)
console.log(2 ** 53 -1)
console.log(-(2 ** 53 -1))
console.log(9007199254740991 +4)
console.log(Number.MAX_SAFE_INTEGER)//maximum number range
console.log(Number.MIN_SAFE_INTEGER)//minimum number range
console.log(9007199254740991n +   4n)
console.log(typeof 5n)//n represent type is bigint
// console.log(9007199254740991 +   4n) // error not perfom number operation with bigint
//null 
//it is keyword in js, When the absense of data will be using value called null
//type of null nothing but object
let solo = 90
let hema = null
console.log(typeof null)
console.log(typeof typeof null)
//undefined
var a
// let b
// console.log(a,b)//undefined
//boolean
let bool = true
console.log(bool)
console.log(typeof bool)
//object
let person = {
    name : "solo",
    age : 21,
    behaviour : function(){
        console.log("sleeping");
    },
};
console.log(person)
console.log(typeof person)

//variables 

var a;//declaration
a=10;//initilization
a=50;//re-initilization
var a=70;//re-declaration & re-initilization
var b=80;//declaration & initilization

//-------------------------------------------------------------------

let love;//declaration
love="emma";//initilization
love="mia";//re-initilization
// var love="priya";//(re-declaration & re-initilization is not possible)
var loveinfinite="marriage";//declaration & initilization

//-------------------------------------------------------------------

// const love;//declaration is not possible 
// love="emma";//initilization not possible
// love="mia";//re-initilization not possible
// const love="girl";//(re-declaration & re-initilization is not possible)
const love1="marriage";//declaration & initilization

//type coersion

var a =3
var b = "3"
var result = a + b
console.log(typeof result +"--"+result)//output = 33 type= string

let a1 = 5;
let b1 = "1"
let result1 = a1-b1
console.log(result1+"--"+typeof result1)//output = 4 type = number

let a2 = 5;
let b2 = "1a"
let result2 = a2-b2
console.log(result2+"--"+typeof result2) //output=Nan type=number

console.log(isNaN("3a"))//if it is notanumber(Nan) give true or else give false

console.log(5-true)//output is 4 and type is number(implicit type)

//Browser Objet Model(BOM)
//explicit type coersion
console.log(window.console.log)

//simple alert//if you want alert something and dont want to return anything.it dont have return type
// let a3 = alert("item successfully added")
// console.log(a3)//undefined

//confirm alert//return type is boolean
// let a3 = confirm("Please turn on the location")
// console.log(a3)
// let a3 = false;
// while(a3 == false)
// {
//     a3 = confirm("Click Ok ")
//     if(a3 == true)
//     {
//         window.location = "https://pixabay.com/"
//     }
// }
//or
// let temp = true
// while(temp)
// {
//     let ch = confirm("Click Ok")
//     if(ch)
//     {
//         window.location = "https://pixabay.com/"
//         temp == false
//     }
//     else
//     {
//         temp == true
//     }
// }

//prompt

// let p = prompt("Enter Your Name ");
// console.log(p);
// console.log(typeof p)

// let p1 = Number(prompt("Enter Your Age "));
// console.log(p1);
// console.log(typeof p1);

let n1 = Boolean("");
console.log(n1);
console.log(typeof n1);

let n2 = Boolean(0);
console.log(n2);
console.log(typeof n2);

let n3 = Boolean(null);
console.log(n3);
console.log(typeof n3);

let n4 = Boolean(undefined);
console.log(n4);
console.log(typeof n4);

let n5 = Boolean(false);
console.log(n5);
console.log(typeof n5);