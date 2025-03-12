const cars = [
    { name: "Tesla Model S", price: "90 000€", engine: "Électrique", power: "1020 ch", image: "images/tesla.jpg" },
    { name: "BMW M3", price: "80 000€", engine: "3.0L Turbo", power: "510 ch", image: "images/bmw.jpg" },
    { name: "Audi R8", price: "150 000€", engine: "V10 5.2L", power: "620 ch", image: "images/audi.jpg" },
    { name: "Porsche 911", price: "120 000€", engine: "3.0L Flat-6", power: "450 ch", image: "images/porsche.jpg" }
];

const carContainer = document.getElementById("car-container");

function displayCars() {
    carContainer.innerHTML = "";
    cars.forEach(car => {
        const carCard = `
            <div class="car-card">
                <img src="${car.image}" alt="${car.name}">
                <h2>${car.name}</h2>
                <p><strong>Prix:</strong> ${car.price}€</p>
                <p><strong>Moteur:</strong> ${car.engine}</p>
                <p><strong>Puissance:</strong> ${car.power}ch</p>
            </div>
        `;
        carContainer.innerHTML += carCard;
    });
}

function filterCars() {
    const searchText = document.getElementById("searchBar").value.toLowerCase();
    carContainer.innerHTML = "";
    cars.filter(car => car.name.toLowerCase().includes(searchText))
        .forEach(car => {
            const carCard = `
                <div class="car-card">
                    <img src="${car.image}" alt="${car.name}">
                    <h2>${car.name}</h2>
                    <p><strong>Prix:</strong> ${car.price}€</p>
                    <p><strong>Moteur:</strong> ${car.engine}</p>
                    <p><strong>Puissance:</strong> ${car.power}ch</p>
                </div>
            `;
            carContainer.innerHTML += carCard;
        });
}
let ascendingOrder = true;
function sortCars(){
    cars.sort((a,b) => {
        let priceA = parseInt(a.price.replace("€","").replace("",""));
        let priceB = parseInt(b.price.replace("€","").replace("",""));
        return ascendingOrder ? priceA-priceB : priceB-priceA;
    });
    ascendingOrder =! ascendingOrder;
    displayCars();
}

// Afficher les voitures au chargement
displayCars();
