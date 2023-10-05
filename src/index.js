const restaurantMenuDiv = document.getElementById('restaurant-menu');

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    foods.forEach(food => {
        addFoodImageToRestaurantMenu(food);
    })
    displayFoodDetails(foods[4])
    console.log(foods[4]);
})

function addFoodImageToRestaurantMenu(food) {
    const newFoodImgElement = document.createElement('img');
    newFoodImgElement.src = food.image;
    newFoodImgElement.addEventListener('click', () => {
        displayFoodDetails(food)
    })
    restaurantMenuDiv.appendChild(newFoodImgElement)
}

function displayFoodDetails(food) {
    const detailImageElement = document.querySelector('.detail-image');
    detailImageElement.src = food.image;

    const imageElementName = document.querySelector('.name');
    imageElementName.textContent = food.name;
    // imageElementName.src = food.name;

    const imageElementDescription = document.querySelector('#description-display');
    imageElementDescription.textContent = food.description;
}

// .then(response => response.json())
// .then(foods => {
//     console.log(foods);
// })