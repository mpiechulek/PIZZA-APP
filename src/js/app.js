//jshint esversion:6

import { addItem } from "./card.js";
import { clearInputs } from "./clear.js";

// ==============================Declaring variables============================

let localName,
    pizzaName,
    size,
    price,
    peopleCount,
    callPerPerosne,
    id;

id = 0;
console.log(id);
let newPizza;
let itemList = [];
let bestOffer = '';

// ==============================Get data from inputs===========================


export const getInputs = () => {

    localName = document.querySelector('#local-name').value;
    pizzaName = document.querySelector('#pizza-name').value;

    size = Math.abs(document.querySelector('#size').value.replace(",", "."));
    price = Math.abs(document.querySelector('#price').value.replace(",", "."));

    callPerPerosne = Math.abs(document.querySelector('#calories').value.replace(",", "."));
    peopleCount = Math.ceil(Math.abs(document.querySelector('#people').value.replace(",", ".")));

};


// ==============================Pizza Object===================================


function Pizza(localName,
    pizzaName,
    size,
    price,
    peopleCount,
    callPerPerosne,
    id,
    bestOffer) {

    this.localName = localName;
    this.pizzaName = pizzaName;
    this.size = size;
    this.price = price;
    this.peopleCount = peopleCount;
    this.callPerPerosne = callPerPerosne;
    this.id = id;
    this.bestOffer = bestOffer;
}

// object prototype calculating the calorie amount of a pizza based on the
// diamiter
Pizza.prototype.onePizzaCall = function() {

    if (this.size >= 20 && this.size < 23) {
        return 986;
    } else if (this.size >= 23 && this.size < 25) {
        return 1186;
    } else if (this.size >= 25 && this.size < 28) {
        return 1466;
    } else if (this.size >= 28 && this.size < 30) {
        return 1773;
    } else if (this.size >= 30 && this.size < 33) {
        return 2110;
    } else if (this.size >= 33 && this.size < 36) {
        return 2477;
    } else if (this.size >= 36 && this.size < 38) {
        return 2872;
    } else if (this.size >= 38 && this.size < 41) {
        return 3300;
    } else if (this.size >= 41 && this.size <= 42) {
        return 3753;
    } else {
        return 4000;
    }
};

//calculating the total calorie amount for the declared person count
Pizza.prototype.peopleTotalCall = function() {
    return (this.peopleCount * this.callPerPerosne);
};

//Pizzas caount to order to satisfy the people count callorie request
Pizza.prototype.pizzaAmmount = function() {
    return Math.ceil(this.peopleTotalCall / this.onePizzaCall);
};

//How many callories all the pizzas have
Pizza.prototype.pizzasCallTotal = function() {
    return (this.peopleCount * this.onePizzaCall);
};

//Pizzas total price
Pizza.prototype.totalPrice = function() {
    return (this.price * this.pizzaAmmount);
};


// ==============================Functions======================================


//filtering input data
function filter() {

    //if form inputs are empty return false
    if (localName == '' || pizzaName == '' || size == '' ||
        peopleCount == '' || callPerPerosne == '' || price == '') {

        document.querySelector('#warning').innerHTML =
            "Please complete the missing fields.";
        return false;

        //if some  form inputs are not a number return false
    } else if (isNaN(size) || isNaN(peopleCount) || isNaN(callPerPerosne) || isNaN(price)) {
        document.querySelector('#warning').innerHTML =
            "Please compleet  People, kcl/persone, Size, Price fields with numbers";
        return false;

    } else {

        //if pizza size is not required specific diamiter
        // to small return false
        if (size < 20) {
            console.log("pizza to small");
            document.querySelector('#warning').innerHTML =
                "Please enter pizza radius from 20 to 50 cm. And a positive price value.";
            return false;

            // to large return false
        } else if (size > 50) {
            console.log("pizza to big");
            document.querySelector('#warning').innerHTML =
                "Please enter pizza radius from 20 to 50 cm. And a positive price value.";
            return false;

        } else {
            document.querySelector('#warning').innerHTML = "";
            return true;
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
// persone count can't be zero or undefined
function peopleRound() {
    if (peopleCount == 0 || peopleCount == '') {
        peopleCount = 1;
    }
    return peopleCount;
}

////////////////////////////////////////////////////////////////////////////////
// finding the lowest price of pizza order
// function lowestCost(array) {
//
//     let lowest = Number.POSITIVE_INFINITY;
//     let tmp;
//     let lowestObject = [];
//     let offer = "BEST OFFER";
//
//     for (let i = 0; array.length > i; i++) {
//
//         tmp = array[i].totalPrice;
//
//         if (tmp < lowest) {
//             lowest = tmp;
//             lowestObject = array[i];
//         }
//     }
//
//     console.log(lowestObject);
//     // array[lowestObject].bestOffer(offer);
// }

////////////////////////////////////////////////////////////////////////////////
// removing an intem form the item lisyt, by id
function removeItem(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    itemList.splice(itemList[element.id], 1);
    console.log(element);
}

////////////////////////////////////////////////////////////////////////////////
// function ads a niew item to an array and a new card render to the gallery
function submitting() {
    //reading data from inputs
    getInputs();

    //People conut can't be 0 or undefined
    peopleRound();

    //inputs are filterd , you cat't eneter incorrect data, if data is corect
    //return true, thean a newPizza item is created
    let condition = filter();

    if (condition) {
        newPizza = new Pizza(localName, pizzaName, size, price, peopleCount,
            callPerPerosne, id, bestOffer);

        newPizza.onePizzaCall = newPizza.onePizzaCall();
        newPizza.peopleTotalCall = newPizza.peopleTotalCall();
        newPizza.pizzaAmmount = newPizza.pizzaAmmount();
        newPizza.pizzasCallTotal = newPizza.pizzasCallTotal();
        newPizza.totalPrice = newPizza.totalPrice();

        //pushing the new object to an array
        itemList.push(newPizza);
        console.log(itemList);

        //finding the lowest cost
        // lowestCost(itemList);

        //adding a new pizza ofer card to the gallry
        addItem(newPizza.localName, newPizza.pizzaName, newPizza.peopleCount, newPizza.pizzaAmmount, newPizza.size,
            newPizza.pizzasCallTotal, newPizza.totalPrice, newPizza.bestOffer, newPizza.id);

        return id++;
    }
}


// ==============================New Pizza======================================


//main function
const start = () => {

    //submitting the form through click adding new pizza item
    document.querySelector('#button-submit').addEventListener('click', () => {
        submitting();
    });

    //submitting the form through pressing ENTER
    document.addEventListener('keypress', (event) => {
        if (event.keyCode === 13 || event.which === 13) {
            submitting();
        }
    });

    //resetting the form through click event
    document.querySelector('#button-reset').addEventListener('click', () => {
        document.querySelector('#warning').innerHTML = "";
        clearInputs();
    });

    //deleting a card element based on job declaration
    const card = document.querySelector('.gallery_wrapper');

    card.addEventListener('click', function(event) {
        let element = event.target;
        const elementJOB = event.target.attributes.job.value;
        if (elementJOB == "delete") {
            removeItem(element);
        }
    });
};

start();