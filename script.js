console.log("person1: tickets");
console.log("person2: tickets");

const preMovie= async ()=> {

const wifebringingtickets= new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('tickets')

        
    }, 3000);
})

const getpopcorn= new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('popcorn')
        
    }, 5000);
})

const addbutter= new Promise((resolve, reject) => {

    setTimeout(() => {
    resolve('butter');

        
    }, 8000);
})

const getcolddrinks= new Promise((resolve, reject) => {

    setTimeout(() => {
    resolve('cold-drinks');

        
    }, 10000);
})

let tickets= await wifebringingtickets;

console.log(`wife: I have the ${tickets}`)
console.log("husband: lets go");
console.log("wife: no am hungry, please get me something to eat");
console.log("husband: alright..!, I get you a popcorn");

let popcorn = await getpopcorn;

console.log(`husband: here is your ${popcorn}, lets go to movie`);
console.log(`wife: I want to add some butter on my ${popcorn}`);
console.log("husband: ok I get you some butter on that");

let butter= await addbutter;

console.log(`husband: I have added ${butter} on your ${popcorn}`);
console.log("husband: anything else darling");
console.log("wife: I need something to drink, can you buy a cold drink?");
console.log("husband: ok I get you a cold drink");

let colddrink= await getcolddrinks;

console.log(`husband: here is your ${colddrink} are we good to go now?`);
console.log("wife: yeah lets go, we are running late");

return tickets;

};



preMovie().then((m)=>{
    console.log(m);

})



console.log("person4: tickets");

console.log("person5: tickets");




