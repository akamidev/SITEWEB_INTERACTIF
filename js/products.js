//Récupérer le parent des boutons de filtrage
const filterArea = document.querySelector(".filters");
console.log(filterArea);

//Appliquer un écouteur d'événement sur le parent des boutons de filtrage
filterArea.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target.tagName);
    //Si l'élément cliqué est un bouton
    if (e.target.tagName === "BUTTON") {
        //Récupérer la valeur du bouton
        const filter = e.target.dataset.filter;
        //Récupérer tous les produits
        const products = document.querySelectorAll(".product-card");
        //Parcourir les produits
        for (let product of products) {
        //Si le produit a l'attribut correspondant à la valeur du filtre OU si le filtre est "all"
        if (product.dataset.product === filter || filter === "all") {
            //Afficher le produit
                product.style.display = "block";
            } else {
            //Sinon, cacher le produit
                product.style.display = "none";
            }
        }
    }
});