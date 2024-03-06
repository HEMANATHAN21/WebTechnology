// console.log("poda mayiruuuu")
// var str =`solo's phone`
// console.log(str)
// console.log(typeof str)

// console.log(`name is ${str}`)
// console.log(str+"\n"+str)
// console.log(`${str}
// ${str}`)

//in javascript numbers should be consider as number
// let num = 25
// let num1 = 25.25
// console.log(typeof num)
// console.log(typeof num1)
// console.log(2 ** 53 -1)
// console.log(-(2 ** 53 -1))
// console.log(9007199254740991 +4)
// console.log(Number.MAX_SAFE_INTEGER)//maximum number range
// console.log(Number.MIN_SAFE_INTEGER)//minimum number range
// console.log(9007199254740991n +   4n)
// console.log(typeof 5n)//n represent type is bigint
// console.log(9007199254740991 +   4n) // error not perfom number operation with bigint
//null 
//it is keyword in js, When the absense of data will be using value called null
//type of null nothing but object
// let solo = 90
// let hema = null
// console.log(typeof null)
// console.log(typeof typeof null)
//undefined
// var a
// let b
// console.log(a,b)//undefined
//boolean
// let bool = true
// console.log(bool)
// console.log(typeof bool)
//object
// let person = {
//     name : "solo",
//     age : 21,
//     behaviour : function(){
//         console.log("sleeping");
//     },
// };
// console.log(person)
// console.log(typeof person)

//variables 

// var a;//declaration
// a=10;//initilization
// a=50;//re-initilization
// var a=70;//re-declaration & re-initilization
// var b=80;//declaration & initilization

//-------------------------------------------------------------------

// let love;//declaration
// love="emma";//initilization
// love="mia";//re-initilization
// var love="priya";//(re-declaration & re-initilization is not possible)
// var loveinfinite="marriage";//declaration & initilization

//-------------------------------------------------------------------

// const love;//declaration is not possible 
// love="emma";//initilization not possible
// love="mia";//re-initilization not possible
// const love="girl";//(re-declaration & re-initilization is not possible)
// const love1="marriage";//declaration & initilization

//type coersion

// var a =3
// var b = "3"
// var result = a + b
// console.log(typeof result +"--"+result)//output = 33 type= string

// let a1 = 5;
// let b1 = "1"
// let result1 = a1-b1
// console.log(result1+"--"+typeof result1)//output = 4 type = number

// let a2 = 5;
// let b2 = "1a"
// let result2 = a2-b2
// console.log(result2+"--"+typeof result2) //output=Nan type=number

// console.log(isNaN("3a"))//if it is notanumber(Nan) give true or else give false

// console.log(5-true)//output is 4 and type is number(implicit type)

//Browser Objet Model(BOM)
//explicit type coersion
// console.log(window.console.log)

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

// let n1 = Boolean("");
// console.log(n1);
// console.log(typeof n1);

// let n2 = Boolean(0);
// console.log(n2);
// console.log(typeof n2);

// let n3 = Boolean(null);
// console.log(n3);
// console.log(typeof n3);

// let n4 = Boolean(undefined);
// console.log(n4);
// console.log(typeof n4);

// let n5 = Boolean(false);
// console.log(n5);
// console.log(typeof n5);

//scope
//Characteristics of var,let,const
//scenario 1
// console.log("start");
// {
//     let a = 10;
//     console.log(a);
// }
// console.log("end");

// let a4 = "smith"; // String literal stack area
// let a5 = new String("smith");//String object reference area
//new
//it is special operator in js
//it will craete new memory in reference area
//new followed by constructor it will create instance(xerox) of an object
//use instanceof only at the time creating object with new keyword
// console.log(a4 instanceof String);
// console.log(a5 instanceof String);
// console.log(a4 instanceof Number);

//primitive and non primitive.
//primitive data types stored in stack area
//non primitive stored in reference area

// let a = "smith";
// let b1 = (a[0] = "z");
// console.log(a);
// console.log(b1);

// let arr = [1,2,3,4,5];
// console.log((arr[0] = "smith"));
// console.log(arr);

// let a = "smith";
// let b = "smith";

// console.log(a == b); //primitive to primitve is comparable 

// let a1 = new String("smith");
// console.log(a == a1); //primitive to nonprimitve is comparable 

// let a2 = new String("smith");
// console.log(a1 == a2); //noprimitive to nonprimitve is not comparable
// console.log(a1 == a2.valueOf()); //noprimitive to nonprimitve is now comparable using valueof()

// let x1 = true;
// let x2 =1;
// console.log(x1 == x2);

// let a = 5;
// console.log(a.toString(2));
// console.log(typeof a.toString(2));

//strictly equal (===) used to check value and datatype
// let a = "smith";
// let b = "smith";

// let a1 = new String("smith");

// console.log(a===b); // primitive to primitive is comparable
// console.log(a===a1); // primitive to non primitive is not comparable

// let a2 = new String("smith");
// console.log(a1===a2); // non primitive to non primitive is not comparable
// console.log(a1.valueOf() === a2.valueOf()); // non primitive to non primitive is now comparable using valueof() using both non primitive

//call  by value And call by reference

// let hema = {
//     name : "hemanathan"
// }
// let solo = hema;
// console.log(solo.name);
// console.log(hema.name="dilli do some changes")
// console.log(solo.name);

// let a1 ="js";
// let b1 = a1;

// console.log(a1);
// console.log(b1);

// b1 = "java";
// console.log(a1);
// console.log(b1);

//function declaration
// console.log("start");
// var a = 10;
// function sum(a1,a2)
// {
//     var a = 80;
//     console.log(a1 + a2);
//     console.log(a);
// }

// sum(10,20);
// console.log(a);
// console.log("end")

// console.log("start");
// function fire(){
//     console.log("I am Fire");
//     water();
//     console.log("My work is done");
// }
// function water(){
//     console.log("I am Water");
// }
// fire();
// console.log("fire");
// console.log("Water");
// console.log("end");

// console.log("start")
// let a = 20;
// let b = 40;
// let sum = function(a1,b1){
//     console.log(a1+b1);
// }
// sum(a,b)
// sum(10,20)
// console.log(sum)
// console.log("end")


// console.log("start")
// add(10,20);
// let add = function sum(a1,b1){
//     console.log(a1+b1)
// }
// add(20,20);
// console.log("end")