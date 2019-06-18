//jshint esversion:6

const position = document.querySelector('.gallery_wrapper');

export const addItem = (id, localName, pizzaName, ammount, size, calls, price, bestOffer) => {

    let content = `<div class="gallery_wrapper_element ">
                        <label class = "gallery_wrapper_element_card-btn" id ="${id}">X</label>
                        <h3 class="header_3">${localName}</h3>
                        <p class="paragraph">${pizzaName}</p>
                        <p class="paragraph">${size} ${ammount}</p>
                        <p class="paragraph">${calls}</p>
                        <p class="paragraph">${price}</p>
                        <p class="best-offer">${bestOffer}</p>
                    </div> `;

    // Insert the HTML into the DOM
    position.insertAdjacentHTML('beforeend', content);
};

// export const removeItem = (id) => {
//     id.remove();
// };