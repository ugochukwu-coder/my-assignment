console.log (typeof 23);
console.log (typeof 'salama');
console.log (typeof true);

let javascriptisfun = false;
javascriptisfun = true;
console.log(javascriptisfun);

// Math Operators

const currentYear = 2023;
const ageDavid = currentYear - 2009;
const ageJoy = currentYear - 1993;
const ageFortune = currentYear - 2001;
console.log(ageDavid, ageJoy, ageFortune);
console.log(ageDavid * 2, ageDavid / 2 ** 3);
const addition = 2 + 2;
console.log(addition);

//ASSIGMENTOPERATOR

let x = 10 + 5; //15 + 10
x += 10; // x = x + 10
x -= 3;
x --;
x --;
console.log(x);

//comparison operators // Boolean value
// console.log(ageDavid > ageJoy);
// console.log(ageJoy > ageFortune);

const isFullAge = ageDavid > ageJoy;
const isFullAge2 = ageJoy > ageFortune;
console.log(isFullAge, isFullAge2);

//Assigment

const totalSumOfGoods = 100;
const totalSumOfProducts = 500;
console.log (totalSumOfGoods, totalSumOfProducts);

console.log(totalSumOfGoods + totalSumOfProducts);

console.log(totalSumOfGoods > totalSumOfProducts);
console.log(totalSumOfGoods >= totalSumOfProducts);

const marksWeight = 78;
const marksHeight = 1.69;
const johnWeight = 92; 
const johnHeight = 1.95;
console.log (marksWeight, marksHeight, johnWeight, johnHeight);

const markBMI = marksWeight / marksHeight ** 2;
const johBMI = johnWeight / johnHeight ** 2;
console.log ( markBMI, johBMI)

console.log (markBMI > johBMI)

// Object

let liyaObject = { 
    firstName: 'Liya',
    lastName: 'La Flame Jnr',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Angela', 'Tosin', 'Amaka']
};

console.log(liyaObject.lastName);
console.log(liyaObject['firstName']);

const interestedIn = prompt('what do you want to know about Liya? Chose between first, LastName, age, job, and friends');
console.log(liyaObject[interestedIn]);

if (liyaObject[interestedIn]) {
    console.log(interestedIn);
} else {
    console.log("Wrong request! Chose between firstName, lastName, age, job, and friends");
}

liyaObject.location = 'spain';
liyaObject['instagram'] = '@Liyaflame';
console.log(liyaObject);

console.log(`${liyaObject.firstName} has ${liyaObject.friends.length} friends and her best friend is called ${liyaObject.friends[0]}`);

let ugoObject = {
    firstName: 'Ugochukwu',
    lastName: 'Okereafor',
    favoriteFood: 'Rice',
    movies: 'Gods are wise',
    socialMedia: 'Facebook',
    friends: ['John', 'Daniel', 'Emeka', 'Stephen', 'Prosper', 'Chuks', 'Mercy', 'Khan'],
    age: 41,
    location: 'Abuja',
    hobbies: 'Reading',
    moodswing: ['Happiness', 'Sad', 'Depression', 'Mental']    
};

console.log(ugoObject.firstName);
console.log(ugoObject.favoriteFood);
console.log(ugoObject.location);

console.log(`${ugoObject.firstName} has ${ugoObject.friends.length} friends and his best friend is called ${ugoObject.friends[2]}`);
console.log(`i always switch to from been happy to been ${ugoObject.moodswing[3]}`);


// const whatDoYou = prompt('want to know about about Ugochukwu? option firstName, lastName, hobbies, favoriteFood, movies, socialMedia, age, location, moodSwing');
// console.log(ugoObject[whatDoYou]);
// if (ugoObject[whatDoYou]) {
//     console.log(whatDoYou);
// } else {
//     console.log("wrong request! Chose between firstName, lastName, favoriteFood, movies, socialMedia, age, location, hobbies, moodswing")
// }

// ugoObject.friends = ['John', 'Daniel', 'Emeka', 'Stephen', 'Prosper', 'Emeka', 'Chuks', 'Mercy']
// console.log(ugoObject);

const firstName = 'Prosper';
const job = 'teacher';
birthday = 1991;
const currentYear1 = 2023; 

// String Literal
const Prosper = " i'm " + firstName + ', a ' + (currentYear1 - birthday) + ' year old ' + job + '!';
console.log(Prosper)

// Template Literal
const prosperNew = `i'm ${firstName}, a ${currentYear - birthday} year old ${job}!`;
console.log(prosperNew); 

//control structure

//const age = 19; this gives us first block
const age = 15;
if (age >= 18) {
    console.log ('proper is elligible to have drive license')
} else {
    //console.log 
        //('prosper is not elligible to have driver license')
        const yearsleft = 18 - age;
        console.log(`prosper is too young to have a drivers license wait in another ${yearsleft} years`);
    }

    
    function breadBaking(flower, sugar) {
    console.log(flower, sugar)
    const bread = breadBaking `i use ${flower} bags of flower and ${sugar} bags of sugar for my baking`; 
    return bread
    }
    const baking = breadBaking(3, 4)

       
























