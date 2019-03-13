/**
 * Rappels sur les tableaux
 * contient des variables dans un tableau indexé (0,1,2...)
 */
var monTableau1 = Array('valeur0', 'valeur1');
var monTableau2 = ['valeur0', 'valeur1'];
console.log(monTableau2);

//> ['valeur0', 'valeur1']
/*
En JavaScript, un array est en fait un Object :
[
    0:'valeur0',
    1:'valeur1',
    lenght: 2
]
*/

 /**
 * Rappels sur les objets
 * contient des variables nommées (nom: valeur,nom2: valeur,...)
 */
monObjet1 = {valeur1: 'valeur1', valeur2: 'valeur2'};

//comment récupérer la valeur 'valeur1' de monTableau1 ?
console.log( monTableau1[1] ); // 'valeur1'

//comment récupérer la valeur 'valeur2' de monObjet1
console.log( monObjet1.valeur2 ); //syntaxe pointée
console.log( monObjet1['valeur2'] ); //syntaxe crochets

//la syntaxe crochet pour interroger les propriétés d'un Objet, permet de faire des concaténations :
window.i = 1;
console.log( monObjet1['valeur'+i] ); // 'valeur1'
//ce sera utile plus tard pour faire des boucles
