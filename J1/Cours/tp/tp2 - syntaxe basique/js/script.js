/**
 * Commentaires
 */

// commentaire sur une ligne
// une deuxième ligne
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Types_et_grammaire


/*
Commentaire sur 
plusieures lignes 
\/* pas d'imbrication de commentaire possible, il faut utiliser des antislash *\/
*/

/**
 * Les déclarations de variables
 * ----------------------------
 * Une variable se définit par :
 * - un nom -> au choix du programmeur (il y a des mots réservés, par ex: ne peut pas commencer par un chiffre)
 * - une valeur -> c'est un morceau d'information utilisé dans les paramètres d'un programme
 * - un type -> définit le rôle et les opérations applicables à la variable
 * - une portée -> c'est l'endroit ou la variable est déclarée, elle existe dans un environnement définit
 */

/** Nom des variables
 * ------------------
 * pas débutter par un nombre
 * pas d'accents
 * pas de nom protégé (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_réservés)
 * adopter une convention de nommage camelCase https://fr.wikipedia.org/wiki/CamelCase
 * Différentes conventions de nommage : 
 * Sans convention : mavariablespecialedemafonction
 * PascalCase : MaVariableSpecialeDeMaFonction
 * camelCase : maVariableSpecialeDeMaFonction
 * snake_case : ma_variable_speciale_de_ma_fonction
 * dash-case : ma-variable-speciale-de-ma-fonction
 */
var maVariable = -5.45323; //type Number
var maVariable2 = 'Hello'; //type String


/**
 * Utiliser les variables :
 * ------------------------
 * role: un programme informatique mémorise des données grâce à des variables
 * Déclarer une variable
 * Affecter une valeur à cette variable
 * Modifier cette valeur
 * Concaténation, opérations ... avec ces variables
 * Stocker une variable ou un résultat d'opération sur des variables dans une autre variable ou dans elle-même.
 * Souplesse du typage en JS : c'est l'interpréteur JavaScript qui va autodéterminer le type de la variable en fonction ce ce qu'elle contient
 */

/** Les différents types en JavaScript
 * -----------------------------------
 */

/** Le type null
 * 
 * Un mot-clé spécial pour indiquer qu'une variable ne contient rien du tout.
 * Attention: null n'est pas Null ou NULL, JavaScript étant sensible à la case
*/
var leVide = 'le ciel'; //type String
leVide = null; //type null

/**
 * Le type undefined
 * Un type qui existe pour les valeurs qui ne sont pas encore définies (pas encore de valeur à la variable)
 */

 //exemple
 //ici la fonction typeof() permet de tester le type d'une variable

 var personne; //type undefined
 console.log( typeof(personne) );
 
 personne = 'john'; //type string
 console.log( typeof(personne) );
 
 personne = 10; //type number
 console.log( typeof(personne) );

console.log(
    null === undefined, // false
    null == undefined, // true
    null === null // true
);

/** Le type Boolean
 *  simplement une valeur vrai ou faux (true || false)
 */
var jeSuisDeveloppeur = false;
var jeSuisEnFormation = true;
var test = 1; //Number ou Boolean(true) ou String
var test2 = 0; //Number ou Boolean(false) ou String

/**
 * Le type string (chaine de caractères)
 * ---------------
 * Represente du texte, string = "chaine de caractère"
 * On peut utiliser des simples quotes '' ou des doubles quotes ""
 */
var toto = 'tata';
var tata = 'tutu';

console.log(tata + ' ' + toto);
//concaténation de string avec des variables

console.log('toto'); // 'toto'
console.log(toto); // 'tata'
console.log(
    'Bonjour je m\'appelle \n \
    "Jérôme".',
    "Bonjour je m'appelle \"Jérôme\"."
);

/** 
 * pour protéger des caractères dans une string, on utilise l'antislash \.
 * Dans certains cas, on peut aussi utiliser des caractères échappés pour :
 * - sauter des lignes dans le code \ 
 * - sauter des lignes dans l'affichage \n
 * - faire une tablulation \t
 * - ...
 */

 /**
  * Le type array (tableau)
  * -----------------------
  * Les tableaux permettent de contenir plusieurs valeurs/variables
  * Les valeurs sont indexées avec un numéro (de case) en anglais un 'index'
  */
var monTableau = Array(0, 1, 2, 'toto', toto);
console.log(monTableau);

var tableau2 = 
[
    'Le Loup de Wall Street',
    ,
    'Vice-Versa',
    'Star Wars'
];

console.log(tableau2);
console.log(tableau2.length); // le nombre d'élément que contient le tableau

console.log(
    tableau2[0] //ici on cherche la valeur qui est à l'index 0 du tableau
); // 'Le Loup de Wall Street' 


/**
 * Le type object (objet)
 * ----------------------
 * Les objets permettent de contenir plusieurs valeurs/variables nommées, on appelle cela les propriétés d'un objet. 
 * Les objets peuvent aussi contenir des méthodes : des fonctions associées à l'objet
 */

var animal = {
    couleur: 'noir', //propriétés de l'objet
    type: 'chat', 
    age: 4,
    poids: '2 Kg',
    vivant: true,
    marcher: function() {
        console.log('c\'est fatigant de marcher');
    } //méthode de l'objet
};
console.log( animal );
console.log( animal.couleur );
animal.marcher();

