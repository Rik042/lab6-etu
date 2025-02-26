const boutonsModale = document.querySelectorAll('.bouton');

const modale = document.querySelector('.modale');

const image = document.createElement('img');

//Event listener sur tout les boutons pour ouvrir l'image cliquer
for(let i= 0; i< boutonsModale.length; i++){
    boutonsModale[i].addEventListener('click', openModale);
}

//zoom sur l'image cliquer
function openModale(){
    //console.log("allo")
    const chemin = this.previousElementSibling.getAttribute("src");

    

    image.setAttribute('src', chemin);

    image.classList.add('zoom');

    modale.appendChild(image);
    
    modale.classList.add("visible");
}


//event listener pour fermer l'image zoomer
image.addEventListener("click", closeModale);

//fermer l'image zoomer
function closeModale(){
    modale.removeChild(event.target);

    modale.classList.remove('visible');

}