let nick = 20;
let mike = 30;

let nickHealth = 100;
let mikeHealth = 100;

if (nick > mike) {
    console.log('nick is better than mike');
} else if (mike > nick) {
    console.log('mike is better than nick');
} else {
    console.log('equality rules');
}

if (nickHealth <= mikeHealth) {
    console.log("nick has been destroyed")
} else {
    nickHealth -= mikeHealth
    console.log(`nick's health is ${nickHealth}`)
}

let nickDefense = 25;

if (nickHealth <= mike - nickDefense) {
    console.log('nick has been destroyed');
} else {
    nickHealth -= mike - nickDefense
    console.log(`nick's health is now ${nickHealth}`)
}    

if ((nickHealth + 60) >= 100) {
    nickHealth = 100
} else {
    nickHealth += 60
}

console.log(`nick has done some repairs and his health is now ${nickHealth}`)

let threat = false;

if (threat = true) {
    console.log(`mike will continue attacking nick`);
} else {
    console.log(`mike will let nick flee`)
}

let attacks = 0;
while (threat ) {
    nickHealth -= (mike - nickDefense)
    console.log(`mike attacks nick's health is now ${nickHealth}`)
    attacks++
    
    if (mikeHealth < 0) {
        mikeHealth = 0;
    } else if (nickHealth < 0) {
        nickHealth = 0;
    }
    threat = nickHealth > 30 && mikeHealth > 0
    console.log(attacks)
    console.log(`nick's health is ${nickHealth} and mike's health is ${mikeHealth}`)
}   