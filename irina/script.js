let cars = [];
let ascendingOrder = true;

// Fonction pour charger les voitures depuis le serveur
function fetchCars() {
    fetch("get_cars.php")
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                cars = data;
                displayCars(cars);
            } else {
                console.error("Données reçues invalides :", data);
            }
        })
        .catch(error => console.error("Erreur de récupération :", error));
}

// Fonction pour afficher les voitures
function displayCars(carsToDisplay) {
    const carContainer = document.getElementById("car-container");
    carContainer.innerHTML = "";

    carsToDisplay.forEach(car => {
        // Vérification des données pour éviter les erreurs
        const imageSrc = car.image ? car.image : "placeholder.jpg";
        const name = car.name ? car.name : "Modèle inconnu";
        const price = car.price ? car.price : "Prix non disponible";
        const engine = car.engine ? car.engine : "Non spécifié";
        const power = car.power ? car.power : "Non spécifié";

        const carCard = `
            <div class="car-card">
                <img src="${imageSrc}" alt="${name}">
                <h2>${name}</h2>
                <p><strong>Prix:</strong> ${price}</p>
                <p><strong>Moteur:</strong> ${engine}</p>
                <p><strong>Puissance:</strong> ${power}</p>
            </div>
        `;
        carContainer.innerHTML += carCard;
    });
}

// Fonction pour trier les voitures par prix
function sortCars() {
    cars.sort((a, b) => {
        let priceA = parseInt(a.price.replace("€", "").replace(" ", "")) || 0;
        let priceB = parseInt(b.price.replace("€", "").replace(" ", "")) || 0;
        return ascendingOrder ? priceA - priceB : priceB - priceA;
    });

    ascendingOrder = !ascendingOrder;
    displayCars(cars);
}

// Fonction pour filtrer les voitures
function filterCars() {
    const searchText = document.getElementById("searchBar").value.toLowerCase();
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchText));
    displayCars(filteredCars);
}

// Charger les voitures au démarrage
fetchCars();