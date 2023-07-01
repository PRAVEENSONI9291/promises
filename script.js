console.log("person1: tickets");
console.log("person2: tickets");

const wifebringingtickets = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("tickets");
    }, 3000);

})

const getpopcorn = wifebringingtickets.then((t) => {
    console.log("husband: lets go");
    console.log("wife: no am hungry, please get me something to eat");
    console.log("alright..!, I get you a popcorn");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${t} popcorn`)
        }, 3000);
    })
})

const addbutter = getpopcorn.then((t) => {
    console.log("husband: here is your popcorn, lets go to movie");
    console.log("wife: I want to add some butter on my popcorn");
    console.log("husband: ok I get you some butter on that");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${t} butter`);
        }, 3000);
    })
})


const getcolddrinks = addbutter.then((t) => {
    console.log("husband: I have added butter on your popcorn");
    console.log("husband: anything else darling");
    console.log("wife: I need something to drink, can you buy a cold drink?");
    console.log("husband: ok I get you a cold drink");

    return new Promise((resolve, reject) => {
        resolve(`${t} cold-drink`)
    })

})

getcolddrinks.then((t) => {
    setTimeout(() => {
        console.log(t);
    }, 3000);
})



console.log("person4: tickets");

console.log("person5: tickets");
