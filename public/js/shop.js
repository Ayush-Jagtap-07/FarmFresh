let vegetableDiv = document.getElementById("allVegetableProducts");
let dairyDiv = document.getElementById("allDairyProducts");
let veganDiv = document.getElementById("allVeganProducts");
let fruitDiv = document.getElementById("allFruitProducts");

vegetableDiv.style.display = "block";
dairyDiv.style.display = "none";
veganDiv.style.display = "none";
fruitDiv.style.display = "none";

function showVegetables() {
    if (vegetableDiv.style.display == "none") {
        vegetableDiv.style.display = "block";
        dairyDiv.style.display = "none";
        veganDiv.style.display = "none";
        fruitDiv.style.display = "none";
    }
}

function showDairy() {
    if (dairyDiv.style.display == "none") {
        vegetableDiv.style.display = "none";
        dairyDiv.style.display = "block";
        veganDiv.style.display = "none";
        fruitDiv.style.display = "none";
    }
}

function showVegan() {
    if (veganDiv.style.display == "none") {
        vegetableDiv.style.display = "none";
        dairyDiv.style.display = "none";
        veganDiv.style.display = "block";
        fruitDiv.style.display = "none";
    }
}

function showFruit() {
    if (fruitDiv.style.display == "none") {
        vegetableDiv.style.display = "none";
        dairyDiv.style.display = "none";
        veganDiv.style.display = "none";
        fruitDiv.style.display = "block";
    }
}
