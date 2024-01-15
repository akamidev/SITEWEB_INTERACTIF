const navbarToggle = document.getElementById('navbar-toggle');
const navbarContainer = document.getElementById('navbar-container');
const burger = document.querySelector('.burger');



window.addEventListener('resize', function() {
    const width = window.innerWidth;

    // Conversion des valeurs EM en pixels (en supposant que 1em = 16px)
    const minWidth56em = 896; // 56em
    const minWidth600px = 600; // 600px

    if (width >= minWidth56em) {
        // Actions pour les écrans d'au moins 56em (896px)
        burger.style.display ="none";
        console.log("La fenêtre a une largeur d'au moins 56em (896px).");
    } else if (width >= minWidth600px) {
        // Actions pour les écrans entre 600px et 56em (896px)
      burger.style.display ="block";

        console.log("La fenêtre a une largeur entre 600px et 56em (896px).");
        
    } else {
        // Actions pour les écrans de moins de 600px
        burger.style.display ="block";
        console.log("La fenêtre a une largeur de moins de 600px.");
    }
});

navbarToggle.addEventListener('click', function() {
    navbarContainer.classList.toggle('active');
}
);


//Parent des boutons
const parentBoutons = document.querySelector('.tabs__btns');
//Boutons
const boutons = document.querySelectorAll('.tabs__btn');
//Ajouter un écouteur d'événement sur le parent des boutons
parentBoutons.addEventListener('click', function(e){
    //Si l'élément cliqué est un bouton
    if(e.target.tagName === 'BUTTON'){
        //Récupérer la valeur de data-target du bouton
        const bouton = e.target.dataset.target;
        //Sélectionner la classe contenant les contenus correpondant à la valeur du bouton
        const contenu = document.querySelector(bouton);
        if (contenu.classList.contains('tabs__info--active')) {
            //Si le contenu est déjà actif, on ne fait rien
            return;
        }else{
            //Sinon, on retire la classe active du contenu actif
            document.querySelector('.tabs__info--active').classList.remove('tabs__info--active');
            //On ajoute la classe active au contenu correspondant au bouton cliqué
            contenu.classList.add('tabs__info--active');
        }
    }
});