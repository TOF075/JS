/**
 * creation d'un damier avec JavaScript
 * ------------------------------------
 * Créer un damier composé de cases blanches et noires
 * Les cases du damier font 40px de large et de haut, 
 * et sont en propriété style : float: left;
 * Il doit y avoir 10 lignes et 10 rangées de cases
 * Les cases doivent être en couleur alternée d'une ligne sur l'autre
 * (première ligne commence par une case blanche, deuxième ligne une case noire, troisième ligne blanche...)
 * 
 * - Compléter la fonction de création d'un case "createCase(color)" avec comme paramètre : la couleur de la case
 * - Compléter la fonction d'initialisation du programme initBoard(color1, color2) :
 *    - faire une boucle qui appelle la fonction createCase(color) autant de fois que nécessaire
 *    - en alternant avec color1 ou color 2 en fonction de l'emplacement de la case
 * Indice: pour les lignes impair : vous devez ajouter une case en plus à chaque début de ligne et en retirer une à chaque fin de ligne
 * 
 */

// taille des cases
var caseSize = "50px";
// récupération du plateau dans lequel on va ajouter les cases
var board = document.getElementById("board");

// créer une fonction qui créé une case
function createCase (color){
  //utiliser le paramètre color pour varier la couleur de la case
  //utiliser la variable caseSize pour définir la taille de la case (style.width, style.height)
  //faire flotter les cases à gauche avec le style float: left;
};

function initBoard(color1, color2){
  //faire une boucle qui appelle la fonction une fois sur deux createCase(color1) ou createCase(color2)
  //(utiliser un modulo de 2).
  //Dans la boucle, créer la logique d'alternance de case de début de ligne sur les lignes impaires
}

initBoard("black", "white");
