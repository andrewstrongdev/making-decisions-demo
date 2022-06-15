
//kenobi stats
let kenobiAttack = 20;
let kenobiHealth = 100;
let kenobiDefense = 0;

//anakin stats
let anakinAttack = 30;


//who is has better attack?
if (anakinAttack > kenobiAttack){
    console.log("Anakin has a better attack than Kenobi");
} else if (anakinAttack < kenobiAttack) {
    console.log("Kenobi has a better attack than Anakin")
} else {
    console.log("Anakin and Kenobi have the same attack");  
}

//anakin attacks kenobi
if(kenobiHealth > anakinAttack){
    kenobiHealth -= anakinAttack;
    console.log(`Kenobi's health is now ${kenobiHealth}`)
} else{
    console.log(`Kenobi was slain`)
}

//kenobi ups his defense in response to anakins attack. This reduces the "damge" that anakins attack will have.
kenobiDefense += 25;
let damage = anakinAttack - kenobiDefense;

//anakin will now attack 5 times
for(let i = 0; i<5; i++){
    
    kenobiHealth -= damage;
    console.log(`Kenobi's health is now ${kenobiHealth}`)
}

//Anakin is ruthless. He kills Kenobi just like he killed the women and the children.
while(kenobiHealth > 0){
    
    kenobiHealth -= damage;
    if(kenobiHealth <= 0){
        console.log(`Kenobi was slain `)
    } else{
    console.log(`Kenobi's health is now ${kenobiHealth}`)
    }
}