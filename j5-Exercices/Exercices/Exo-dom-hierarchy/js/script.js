/*
  Exercice : afficher l'enfant d'un objet du DOM
*/

// Affiche un enfant d'un objet du DOM
// Le paramètre noeud est l'objet du DOM
// Le paramètre index est l'index de l'enfant à afficher
function afficherEnfant(noeud, index) {
    // TODO : compléter la fonction


    // indices : noeud.childNodes est un tableau,
    // vous pouvez vous addresser à son index comme ceci : noeud.childNodes[index]
    // vous pouvez connaître la longueur du tableau avec : noeud.childNodes.length
}

// Doit afficher le noeud h1
afficherEnfant(document.body, 1);

// Doit afficher l'erreur "Indice incorrect"
// L'index demandé est négatif
afficherEnfant(document.body, -1);

// Doit afficher l'erreur "Indice incorrect"
// Le noeud body a moins de 9 noeuds enfants
afficherEnfant(document.body, 8);

// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 0);