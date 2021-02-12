'use strict';

let yourGrad =0; 
function qOne(){
let r0 =prompt ('Do i prefer coffee black?');
console.log(r0);
if(r0.toLowerCase()==='yes'||r0.toLowerCase()=='y'){
    alert("You'r same me");
    yourGrad++;
}else if(r0.toLowerCase()==='no'||r0.toLowerCase()==='n')
{
  alert('you are do not same me');
}else{
   
    alert('you should answer yes/no');
}}
qOne();
function qTwo(){
 let r1=prompt ('Do you i prefer  color black?');
 console.log(r1);
if(r1.toLowerCase()==='yes'||r1.toLowerCase()=='y'){
    alert("You'r same me");
    yourGrad++;
}else if(r1.toLowerCase()==='no'||r1.toLowerCase()==='n')
{
    alert('you are do not same me');
}else{
    
    alert('you should answer yes/no');
}}
qTwo();
function qThree(){
 let r2 =prompt ('Do you prefer your  footbal?');
 console.log(r2);
if(r2.toLowerCase()==='yes'||r2.toLowerCase()=='y'){
    alert("You'r same me");
    yourGrad++;
}else if(r2.toLowerCase()==='no'||r2.toLowerCase()==='n')
{
    alert('you are do not same me');
}else{
   
    alert('you should answer yes/no');
}}
qThree();
function qFour(){
 let r3 =prompt ('Do i prefer  games?');
console.log(r3);
if(r3.toLowerCase()==='yes'||r3.toLowerCase()=='y'){
    alert("You'r same me");
    yourGrad++;
}else if(r3.toLowerCase()==='no'||r3.toLowerCase()==='n')
{
    alert('you are do not same me');
}else{
   
    alert('you should answer yes/no');
}}
qFour();
function qFive(){
 let r4 =prompt ('Do i prefer  markitng?');
console.log(r4);
if(r4.toLowerCase()==='yes'||r4.toLowerCase()=='y'){
    alert("You'r same me");
    yourGrad++;
}else if(r4.toLowerCase()==='no'||r4.toLowerCase()==='n')
{
  alert('you are do not same me');
}else{
   
    alert('you should answer yes/no');
}}
qFive();
function qSix(){
let userNam =prompt ('Please enter your name?');
alert(userNam +' welcom to my website');



for(let i=0;i<4;i++){

    
let userGues6 =prompt('what is my age?');

 if(parseInt(userGues6) ===30){
    alert('succeed');
    yourGrad++
    break;
}else if(parseInt(userGues6)>30){
    alert('too high')
}
else if(parseInt(userGues6)<30){
    alert('too low')  
}

if(i===3){
    alert('my age is 30 years old');
    break;
}
alert('you will get another try');

}}
qSix();

function qSeven(){
let arr =['red' ,'black','pink','green'];
let flag =1;
for(let i=0;i<6;i++){
let userGues7 =prompt('what is my favorite color?');
for(let j=0;j<arr.length;j++){
    if(userGues7.toString()===arr[j]){
    alert('pass');
    yourGrad++;
    flag=2
    break;
}else{
    alert('try again');
    break;
    }
} 
if(flag === 2){
    break;
}}
alert('this is my favorite colors :  '+arr);}
qSeven();

alert('you are grad is  :'+yourGrad );
