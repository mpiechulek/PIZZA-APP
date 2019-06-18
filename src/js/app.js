//jshint esversion:6

import { addItem, removeItem } from "./card.js";
import { clearInputs } from "./clear.js";

let localName,
    pizzaName,
    sizeSmall,
    priceSmall,
    peopleCount,
    callPerPerosne,
    id,
    trash;

var newPizza;

// ==============================Get data from inputs===========================

id = 0;
trash = false;

export const getInputs = () => {

    localName = document.querySelector('#local-name').value;
    pizzaName = document.querySelector('#pizza-name').value;

    size = Math.abs(document.querySelector('#size').value.replace(",", "."));
    price = Math.abs(document.querySelector('#price').value.replace(",", "."));

    callPerPerosne = Math.abs(document.querySelector('#calories').value.replace(",", "."));
    peopleCount = Math.ceil(Math.abs(document.querySelector('#people').value.replace(",", ".")));
};

// ==============================Pizza Object===================================

function Pizza(localName, pizzaName, size, price, peopleCount, callPerPerosne, id, trash) {

    this.localName = localName;
    this.pizzaName = pizzaName;
    this.size = size;
    this.price = price;
    this.peopleCount = peopleCount;
    this.callPerPerosne = callPerPerosne;
    this.id = id;
    this.trash = trash;
    this.pizzaCallAmmout = function() {

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
    this.callTotalDeclared = function() {
        return this.peopleCount * this.callPerPerosne;
    };
}

// ==============================Filtering data======================================

function filter() {

    if (localName == '' || pizzaName == '' || size == '' ||
        peopleCount == '' || callPerPerosne == '' || price == '') {

        document.querySelector('#warning').innerHTML =
            "Please complete the missing fields.";
        return false;

    } else if (isNaN(size) || isNaN(peopleCount) || isNaN(callPerPerosne) || isNaN(price)) {
        document.querySelector('#warning').innerHTML =
            "Please compleet  People, kcl/persone, Size, Price fields with numbers";
        return false;

    } else {
        if (size < 20) {
            console.log("pizza to small");
            document.querySelector('#warning').innerHTML =
                "Please enter pizza radius from 20 to 50 cm. And a positive price value.";
            return false;

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

function peopleRound() {
    if (peopleCount == 0 || peopleCount == '') {
        peopleCount = 1;
    }
    return peopleCount;
}

// ==============================New Pizza======================================

const start = () => {
    let listItem = [];

    //submitting the form through click adding new pizza item
    document.querySelector('#button-submit').addEventListener('click', () => {

        getInputs();
        peopleRound();
        let condition = filter();
        console.log(condition);

        if (condition) {
            newPizza = new Pizza(localName, pizzaName, size, price, peopleCount, callPerPerosne, id, trash);
        }

        addItem(newPizza.localName, newPizza.localName, newPizza.localName,
            newPizza.localName, newPizza.localName, newPizza.localName,
            newPizza.localName, newPizza.localName);
    });

    //submitting the form through ENTER
    document.addEventListener('keypress', (event) => {
        if (event.keyCode === 13 || event.which === 13) {

        }
    });

    //resetting the form through click
    document.querySelector('#button-reset').addEventListener('click', () => {
        document.querySelector('#warning').innerHTML = "";
        clearInputs();
    });

    // deleting  custom card
    let x = document.querySelector(".gallery_wrapper_element_card-btn");

    x.addEventListener('click', (event) => {

    });
};

start();