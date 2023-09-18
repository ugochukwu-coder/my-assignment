'use strict'

// function fruitProccessor(pear, melon) {
//     const juice = `juice with ${pear} pear and ${melon} melon.`;
//     return juice;
// }

// const pearJuice = fruitProccessor(10, 3);
// console.log(pearJuice)

// const melonJuice = fruitProccessor(0, 5);
// console.log(melonJuice)

// function breadBaking(flower, sugar) {
//     const bread = `i use ${flower} bags of flower and ${sugar} bags of sugar for my baking.`; 
//     return bread;
//     }
//     const baking = breadBaking(3, 4);
//     console.log(baking)

    function cutFruitPieces (fruit) {
        return fruit * 4;
    }

    function fruitProccessor(apples, oranges) {
        const appleJuice = cutFruitPieces(apples);
        const orangeJuice = cutFruitPieces(oranges);

        const juice = `juice with ${appleJuice} apples and ${orangeJuice} oranges.`;
        return juice;
    }

    const fruitTime = fruitProccessor(4, 5);
    console.log(fruitTime);

    // Function Declaration
    function calcAge(birthYear) {
        return 2023 - birthYear;
    }
    const age1 = calcAge(1991);
    console.log(age1);

    // FAUNCTION Expression
    const calcAge1 = function(birthYear) {
        return 2037 - birthYear;
    }

    const age2 = calcAge1(2001);
    console.log(age2);

    //Arrow Function
    const calcAge2 = (birthYear) => {
        return 2023 - birthYear;
    }

    const age3 = calcAge2(1996);
    console.log(age3);

    const yearsUntilRetirement = (birthYear, firstName) => {
        const age = 2023 - birthYear;
        const retirement = 60 - age;
        return `${firstName} retires in ${retirement} years`;
    }

    console.log(yearsUntilRetirement(1993, 'John'));
    console.log(yearsUntilRetirement(1999, 'Fortune'));

