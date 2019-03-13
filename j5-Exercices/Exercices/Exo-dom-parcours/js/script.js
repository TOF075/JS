/*
 Exercice : attributs et classes
*/

//PARTIE 1
//--------
// Affiche des informations sur les liens
function infosLiens() {
    
    var liensElts; // récupérer les liens du document dans cette variable
    var nombreLiens; //compter le nombre de résultats (.length)

    console.log(nombreLiens);
    if(true) { //remplacer true par la condition qui teste si j'ai au moins un lien dans le document
        console.log(liensElts[0].getAttribute("href"));

        //exercice optionnel
        //ecrire dans la console l'attribut href du dernier lien des nœuds du tableau liensElts
        
    }
}

infosLiens();


//PARTIE 2
//--------
// Affiche si un élément possède une classe
function possede(idName, className) {
    var instrument = document.getElementById(idName);
    //compléter le code pour tester si un des éléments de 'instrument' 
    //possède la classe 'classe' passée comme argument de fonction
    
    //aficher le résultat dans la console
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher false