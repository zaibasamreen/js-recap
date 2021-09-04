//javascript is a most popular programming language and it is embedded using script tag.
//keywords: special words which define a particular meaning.

//the programming langauges are categgorised into 2 types
// statiscally and dynamically

//Datatypes:
//1. primitive datatype
//2. referential datatype

//primitive datatype:1. string
                    // 2.number
                    // 3.boolean
                    // 4.null
                    // 5.undefined
                    // 6.symbol
f=4;
                    
//number
var a=2;
console.log(a);
console.log(typeof a);
 //string
let b="hello";
console.log(b);
console.log(typeof b);
//null
let c=null;
console.log(c);
console.log( typeof c);
//undefined
let e;
console.log(e);
console.log(typeof e);
//boolean
let d=false;
console.log(d);
console.log(typeof d);

//operators:Arithmetic,assignment,comparison,Equality,logical (&&,||,!)
var g=5;
var h=4;
console.log(g+h);

//hoisting: this is javascrpts default behavior of moving variables and function declarations to the top of the current 
//scope before code execution. -> variable hoisting and function hoisting
var f;
console.log(f);

//statements: set of instructions is called statements.
let x= true;
if (x){
    console.log("this is true");
} else {
    console.log("this is false");
}

//Referential datatypes
//1.functions
//2. arrays

//3. objects:collection of properties
 var student = {
     name:"zaiba",
     age:20,
     mobile:8792189156,
     address:{
         city:"rmgn",
         state:"karnataka"
     }
 }
 student.gender="female";
 console.log(student);
 console.log(student.address.state);

 //accessing objects using []notation
 console.log(student["age"]);

//reference by address
var student1=student;
student.graduate=true;
console.log(student1);

//calling the function
var hello = {
    school:function(){

   
    timing:[1,2,3]
}

}
console.log(hello.school);




//Arrays:arrays is a variable where we can store more than one value.
//1.length 0-9
//2.array index(n-1)
//3.for(i=0;i<=length-1;i++)
// push:to push an element at the beginning.
// pop:to delete an element at the beginning
// unshift:to add an element at the end.
// shift:to deelte an element at the end
// splice:it will override the original Array.
// concat:merging 2 arrays
// reversing:to reverse the Array
// iterating over an array:

var students=["joe","jon","hel","don"]
console.log(students);//to display the elements
console.log(students.length); // to find the length
console.log(students[3]);//to access using index value

students.push("harry"); //to add
console.log(students);
students.unshift("lara");
students.splice(2,0,"hela");
console.log(students);
students.pop("harry");
console.log(students);

//concat
var m=[3,4];
var n=[2,3];
var z=m.concat(n);
console.log(z);

//iterating
for ( i=0;i<=students.length-1;i++)
{
    console.log(students[i]);
}
//array of objects using loops

var fruits = [
    {
    fruit1:"mango",
    rate:20
    },
    {
    fruit2:"apple",
    rate:30,
},
{
    fruit3:"orange",
    rate:40,
},

]
console.log(fruits);

for (let i=0;i<=fruits.length-1;i++){
    console.log(fruits[i]);
}
 let data = ["zaiba","cs",083]
 for (i=0;i<=data.length-1;i++){
     console.log(data[i]);
 }
//ES6-stands for ecmascript 6. It is the 6th version of ecmascript, publishedd in the year 2015.
//let and const
function es6test(){
    let p=1;
    if(true){
        let p=2;
        console.log(p);
    }
    console.log(p);

}
es6test()

//Es6 arrow function to solve the binding problems
//functions
function mul(h,r){
    return h*r;
}

 
//function expression
var mul2 = function(h,r){
    return h*r;
}
//arrow function
const mul3 = (h,r) =>{
    return h*r;
}

//arrow function in one statement
const add = (k,j) => k+j;
var res = add(2,4);
console.log(res);

const add2=(u,v=9)=>u+v ;
var result = add2(5);
console.log(result);   

//string concatenation
var have="have";
var anice=" a nice";
var message = have+anice+" day";
console.log(message);

//template literals
var mes = 'have a nice day';
console.log(mes);

//arrays
const array=[1,2,3,4];
const arr = [];
for (i=0;i<=array.length-1;i++){
    arr.push(array[i]+4)
}
console.log(arr);

//array helper method:map,find, filter,for each,reduce

const add5=array.map(function(e)
{
    console.log(e)
})
console.log(add5);

//DOM-document object model represents the html document that is displayed in browsers window.
console.log(document);
//document.title ="";
//console.log(document.title);
//console.log(document);

//selectors:1.get ElementById
// 2.getElementByClassName
// 3.getElementByTagName
// 4.querySelectors
// 5.querySelectorAll

let here = document.querySelector("h1");
console.log(here);
let her = document.querySelectorAll(".box");
console.log(her);

//creating new element
var div =document.createElement("div");
console.log(div);
//creting a text node
var newtext=document.createTextNode("hello everyone");
console.log(newtext);
//adding the text node to the created div
div.appendChild(newtext);

//dom set attributes
//selecting the element by id
// var btn=document.getElementById("mybtn")
// //setting new attributes
// btn.setAttribute("class","click-btn");
// console.log(btn);

const citizen={
    name:"zaiba",
    place:"mys",
    country:"india"
}
const{f1,f2,f3}=citizen;
console.log(citizen);

//object destructing
const num1=[1,2,3,]
const num2=[4,5,6]
const merge=[num1+num2]
console.log(merge);

//spread operator
const spread=[...num1,...num2]
console.log(spread);
const mix=[...num1,num3=[456],...num2]
console.log(mix);

//array helper methods
//for each
const arr2=[1,10,20,30];
let sum=0;
arr2.forEach((item) => {
    sum+=item;
});
console.log(sum);

//filter
const arr4=[2,3,4,5];
const need=arr4.filter((item)=>
{
    return item>2;
})
console.log(need);
//reduce
const arr6=[4,5,6,7]
const req=arr6.reduce((item,lift)=>
{
    item+=lift;
    return item ;
})
console.log(req);