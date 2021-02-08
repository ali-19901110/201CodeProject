'use strict';
// alert('hellllllllllo');
let userInter0 =prompt ('Do you prefer your coffee black?');
let userInter1=prompt ('Do you prefer your color black?');
let userInter2 =prompt ('Do you prefer your  footbal?');
let userInter3 =prompt ('Do you prefer your games?');
let userInter4 =prompt ('Do you prefer your markitng?');
console.log(userInter0);
console.log(userInter1);
console.log(userInter2);
console.log(userInter3);
console.log(userInter4);
// alert(userInter0);
// if(userInter0==='yes')
// {alert(userInter0);
//     let userInter5 =prompt ('Please enter your name?');
// }
// alert(userInter0.toUpperCase());


if((userInter0.toLowerCase() ==='yes')||(userInter0.toUpperCase() ==='yes') && (userInter1.toLowerCase() ==='yes')||(userInter1.toUpperCase() ==='yes')
&&(userInter2.toLowerCase() ==='yes')||(userInter2.toUpperCase() ==='yes')
&&(userInter3.toLowerCase() ==='yes')||(userInter3.toUpperCase() ==='yes')
&&(userInter4.toLowerCase() ==='yes')||(userInter4.toUpperCase() ==='yes'))
     
     {
        let userInter5 =prompt ('Please enter your name?');
         alert(userInter5 + "welcom to my website ");
     }
