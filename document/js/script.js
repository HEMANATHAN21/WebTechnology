console.log(window.document)
console.log(document.all);
//how to manipulate the existing dom
//! Methods And Properties
// getElementById()
// getElementByclassName()
// getElementByTagName()
// QuerySelector()
// QuerySelectorAll()

//? getElementById()
// let myDiv = document.getElementById("parent");
// console.log(myDiv);
// myDiv.style.backgroundColor="blue";

//? getElementByclassName()
// let para = document.getElementsByClassName("para");
// console.log(para)
// para[0].style.backgroundColor="red";
// console.log(para.length);
// for(i =0 ; i<para.length;i++)
// {
//     if(i % 2 == 0){
//         para[i].style.backgroundColor="red";
//     }
//     else{
//         para[i].style.backgroundColor="blue";
//     } 

// }

//? getElementByTagName()
// let tag = document.getElementsByTagName("li");
// console.log(tag);
// tag[0].style.backgroundColor="green";
//how to create element from dom
//how to add events
//how events works

//!Change TextContent
//? methods: textcontent,innertext,innerhtml
// let para = document.getElementsByClassName("para");
// console.log(para)
// // para[0].style.backgroundColor="red";
// console.log(para.length);
// for(i =0 ; i<para.length;i++)
// {
//     //  para[i].style.backgroundColor="red";
//     para[i].textContent = "Solo Hema"

// }

//? QuerySelector()
// let myDiv = document.querySelector("#parent")
// console.log(myDiv);
// myDiv.style.backgroundColor="blue";

// let para = document.querySelector(".para");
// console.log(para);//it will target always 1st node
// console.log((para.style.backgroundColor="red"))

// let para = document.querySelector("#parent .para");
// console.log((para.style.backgroundColor="red"))

//? QuerySelectorAll()
// let para = document.querySelectorAll("#parent .para");
// console.log(para[0]);
// console.log(Array.isArray(para))//it return false because of it is not an array


//////////////////////////////////////////
//!DOM Properties
let myDiv = document.getElementById("parent");
console.log('myDiv');
myDiv.style.border="1px solid black";
myDiv.firstChild.textContent = "this is first child";
myDiv.firstElementChild.textContent="this is first child from dom";

myDiv.lastChild.textContent="last child";
myDiv.lastElementChild.textContent="last child element"

myDiv.nextElementSibling.children[1].style.backgroundColor="red";
