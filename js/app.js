'use strict';
// alert('hellllllllllo');
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
}

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
}

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
}

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
}


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

}


let arr =['red' ,'black','pink','green'];


let x=yourGrad+1;
let y=x;
// alert(x);
for(let i=0;i<6;i++){
    //alert(i);
let userGues7 =prompt('what is my favorite color?');

switch(userGues7.toString()){
    
    case 'red' :
                alert('win');
                yourGrad++
                break;
    case 'black':
               alert('win');
               yourGrad++
               break;
    case 'pink':
                alert('win');
                yourGrad++
                break;
    case 'green':
                alert('win');
                yourGrad++
                break;
                default:
                    alert ('incorrect answer');
  }
      if(y === yourGrad){
          break;
      }
}
alert('this is my favorite colors :  '+arr);

alert('you are grad is  :'+yourGrad );





// console.log(userInter1);
// console.log(userInter2);
// console.log(userInter3);
// console.log(userInter4);
// alert(userInter0);
// if(userInter0==='yes')
// {alert(userInter0);
//     let userInter5 =prompt ('Please enter your name?');
// }
// alert(userInter0.toUpperCase());


// if((userInter0.toLowerCase() ==='yes')||(userInter0.toUpperCase() ==='yes') && (userInter1.toLowerCase() ==='yes')||(userInter1.toUpperCase() ==='yes')
// &&(userInter2.toLowerCase() ==='yes')||(userInter2.toUpperCase() ==='yes')
// &&(userInter3.toLowerCase() ==='yes')||(userInter3.toUpperCase() ==='yes')
// &&(userInter4.toLowerCase() ==='yes')||(userInter4.toUpperCase() ==='yes'))
     
//      {
//         let userInter5 =prompt ('Please enter your name?');
//          alert(userInter5 + "welcom to my website ");
//      }


// let answer = prompt('do you think i like lodon');
// switch(answer.toLocaleLowerCase()){
//     case 'yes':
//     case 'y'  :
//         alert('hats incorrect');
//         break;
//     case 'no' :
//     case  'n' :
//         alert('thats correct');
//         break;
//         case 'idk':
//       alert('ali');   
//       break;
//       default:
//           alert('italy') ; 
// }






// let arr =[1,2,3,4,5,6,7,8,9,10];
// //alert(arr.length);
// // arr.push
// for(var i=0;i<=arr.length;i++)
// {
//     // console.log(arr[i]);
//     for(let j=1;j<=arr.length;j++){
//        let x= (arr[i])*j;
//        document.write(x+'&nbsp&nbsp');

//  }
//     document.write('<br>'+'<br>');
// }
