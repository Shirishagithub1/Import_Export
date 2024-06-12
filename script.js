 import { fullName as  myName } from "./login.js";

 import { aboutKajal } from "./siri.js";


 let name1 = myName("ale", "1236");

 console.log(name1)

 let name2 = myName("siri", "321");

 console.log(name2);

 console.log(aboutKajal);

 const actor = aboutKajal.name
 const study =aboutKajal.skills


 console.log(actor);

 console.log(study);


//destructuring :

let skills ="Mern";

let {name,age,skills :studentSkills} =aboutKajal


console.log(name,skills,studentSkills);


import sumOf from './login.js';

let total =sumOf(2,2);

console.log(total);


import company from './siri.js';

console.log(company);

for(let name of company ){
    console.log(name)
}

import { reverseString } from "./siri.js";

let name3 =reverseString("shirisha");

console.log(name3);

let name4 =reverseString("kaju");

console.log(name4);


let name5 ="simran";
let str ='';

for(let i = name5.length-1; i >=0; i--){

    str +=name5[i]
}
console.log(str)



