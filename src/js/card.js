//jshint esversion:6

const position = document.querySelector('.gallery_wrapper');

export const addItem = (localName, pizzaName, size, id, ammount, calls, price, bestOffer) => {

    let content = `<div class="gallery_wrapper_element " id=${id}>
                        <label class = "gallery_wrapper_element_card-btn" id ="${id}">X</label>
                        <h3 class="header_3">${localName}</h3>
                        <p class="paragraph">${pizzaName}</p>
                        <br>
                        <p class="paragraph">${ammount} x ${size} cm pizzas</p>
                        <p class="paragraph">Total kcla: ${calls}</p>
                        <p class="paragraph">Price: ${price}</p>
                        <p class="best-offer">${bestOffer}</p>
                    </div> `;

    // Insert the HTML into the DOM
    position.insertAdjacentHTML('beforeend', content);
};

// export const removeItem = (id) => {
//     id.remove();
// };