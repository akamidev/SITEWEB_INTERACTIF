//projects.js : Changer les prix mensuels en annuels en utilisant le slider

//Tableau des prix annuels
const annualPrices = [99.99, 199.99, 299.99];
//Tableau des prix mensuels
const monthlyPrices = [9.99, 19.99, 29.99];
//Tableau des éléments à modifier
const elements = ["basic", "pro", "master"];
//Récupérer l'élément du checkbox (slider)
const slider = document.getElementById("checkbox");
//Appliquer un écouteur d'événement sur le checkbox
slider.addEventListener("click", (e) => {
    //Si le checkbox est coché (Slider sur Annuel)
    if (e.target.checked) {
        for(let i = 0; i < annualPrices.length; i++ ){
        //On affiche les prix annuels
        document.querySelector(".subscriptions__" + elements[i]).textContent = annualPrices[i];
        }
    //Sinon (Slider sur Mensuel)
    }else{
        for(let i = 0; i < annualPrices.length; i++ ){
        //On affiche les prix mensuels
            document.querySelector(".subscriptions__" + elements[i]).textContent = monthlyPrices[i];
        }
    }
});
