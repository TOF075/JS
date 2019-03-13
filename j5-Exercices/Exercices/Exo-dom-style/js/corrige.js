/*
Exercice : modifier les couleurs
*/

var couleurTexte = prompt("Entrez la couleur du texte :");
var couleurFond = prompt("Entrez la couleur du fond :");

//récupérer les élements du DOM correspondants à des DIV
//et changer les couleurs de texte et de background
//avec les entrées utilisateur

//corrigé
//------
var divsElts = document.getElementsByTagName("div");

for (var i = 0; i < divsElts.length; i++) {
    divsElts[i].style.color = couleurTexte;
    divsElts[i].style.backgroundColor = couleurFond;
}