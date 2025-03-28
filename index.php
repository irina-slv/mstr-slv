<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
  <link rel="stylesheet" href="style.css">
  
</head>





<?php
    include("connect.php"); 
?> 
<body>

<header>
        <h1>Catalogue de Voitures</h1>
        <input type="text" id="searchBar" placeholder="Rechercher une voiture..." onkeyup="filterCars()">
</header>


<main>
        <div id="car-container">
            <!-- Les voitures seront insérées ici via JavaScript -->
        </div>
    </main>

    <script src="script.js"  ></script>


</body>
</html>
