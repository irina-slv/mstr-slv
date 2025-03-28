let cars = [];
let ascendingOrder = true;

// Fonction pour charger les voitures depuis le serveur
function fetchCars() {
    fetch("get_cars.php")
        .then(response => response.json())
        .then(data => {
            cars = data;
            displayCars();
        })
        .catch(error => console.error("Erreur lors du chargement des voitures :", error));
}

// Fonction pour afficher les voitures
function displayCars() {
    const carContainer = document.getElementById("car-container");
    carContainer.innerHTML = "";
    
    cars.forEach(car => {
        const carCard = `
            <div class="car-card">
                <img src="${car.image}" alt="${car.name}">
                <h2>${car.name}</h2>
                <p><strong>Prix:</strong> ${car.price}</p>
                <p><strong>Moteur:</strong> ${car.engine}</p>
                <p><strong>Puissance:</strong> ${car.power}</p>
            </div>
        `;
        carContainer.innerHTML += carCard;
    });
}

// Fonction pour trier les voitures par prix
function sortCars() {
    cars.sort((a, b) => {
        let priceA = parseInt(a.price.replace("€", "").replace(" ", ""));
        let priceB = parseInt(b.price.replace("€", "").replace(" ", ""));
        return ascendingOrder ? priceA - priceB : priceB - priceA;
    });

    ascendingOrder = !ascendingOrder;
    displayCars();
}

// Fonction pour filtrer les voitures
function filterCars() {
    const searchText = document.getElementById("searchBar").value.toLowerCase();
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchText));
    displayCars(filteredCars);
}

// Charger les voitures au démarrage
fetchCars();
