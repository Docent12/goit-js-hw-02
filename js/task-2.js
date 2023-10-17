'use strict';
function formatMessage(message, maxLength) {


    const message = message.length >= maxLength ? `${message.slice(0, maxLength)} "..."` : message;

    // if (message.length > maxLength) {

    //     `${message.slice(0, maxLength)} "..."`;

    //     console.log(message.length,);

    //     console.log(message.slice(0, maxLength));
    //     console.log( `${message.slice(0, maxLength)} "..."`);

    // } else {



    // }


    return
     }
    // return realLength = message.length <= maxLength.length ? `${message.slace(0, maxLength)} "..."` : message;




console.log(formatMessage("Curabitur ligula sapien", 16)); //"Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"