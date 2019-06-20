//jshint esversion:6

const position = document.querySelector('.gallery_wrapper');

export const addItem = (localName, pizzaName, people, ammount, size, calls, price, bestOffer, id) => {

    let content = `<div class="gallery_wrapper_element " id=${id}>
                        <label class = "gallery_wrapper_element_card-btn" job="delete" id ="${id}">X</label>
                        <h3 class="header_3">${localName}</h3>
                        <p class="paragraph">Pizza name: ${pizzaName}</p>                        
                        <p class="paragraph">For ${people} persone</p>
                        <p class="paragraph">${ammount} x ${size} cm</p>
                        <p class="paragraph">Total kcla: ${calls}</p>
                        <p class="paragraph">Price: ${price}</p>
                        <p class="best-offer">${bestOffer}</p>
                    </div> `;

    // Insert the HTML into the DOM
    position.insertAdjacentHTML('beforeend', content);
};