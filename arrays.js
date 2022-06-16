/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = []
let belt = []
let bag = []

backpack.push("lightsaber")
backpack.push("robe","food")

belt[0] = backpack.shift()

backpack.splice(0,0,"fur-coat")

bag.unshift("flint","blanket","toothbrush")

backpack.push(bag.slice(0,3))

// for(let i=0; i < bag.length; i++){
//     console.log(bag[i])
// }

for(let i=0; i < 3; i++){
console.log(backpack[i])    
}