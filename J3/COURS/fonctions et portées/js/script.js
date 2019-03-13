/**
 * Fonctions et portée des variables
 * ---------------------------------
 */

 /**
  * Syntaxe d'une fonction :
  * ------------------------
  * function nomDeMaFonction([<arg1>, <arg2>, ...]) {
  *     //code à exécuter ici...
  * }
  * 
  * var maFonction = function([<arg1>, <arg2>,...]){
  *     //code à exécuter ici...
  * }
  * - Le nom d'une fonction doit être unique et bien choisi ;-)
  * - Les arguments peuvent être facultatifs, en fonction du contexte
  * 
  * Il existe une fonction spéciale sans nom, appelée 'fonction anonyme'
  * Cette fonction anonyme sera utilisé dans des cas bien précis
  * ou l'on n'a besoin que d'un fonction temporaire.
  * 
  * Une fonction peut contenir d'autres fonctions.
  * Pour qu'elle soit exécutée, il faut l'appeler :
  * maFonction('ex arg1', 'ex arg2');
  */

//1er ex: fonction sans paramètre
function logMessage(){
    console.log('ça marche');
}
logMessage(); // 'ça marche'


//2e ex: fonction avec 2 paramètres
function bonjour(nom, age) {
    //à l'intérieur de cette fonction, 
    //je peux utiliser les 2 paramètres nom et age
    console.log( 'Bonjour ' + nom + ', vous avez ' + age + ' ans.' );
}
//console.log(nom, age); //erreur

bonjour('Frank', 24); // ici nom prendra la valeur: 'Frank', et age: 24
bonjour('John', 32);

var foo = 'bar';

function callFoo() {
    console.log(foo); 
    //ici foo existe car il est déclaré dans window
}

/**
 * la portée des variables en JS
 * -----------------------------
 * Une variable est déclarée avec le mot clé var, let, const...
 * Elle a une portée limitée au scope de l'endroit ou elle est 
 * déclarée.
 * Si par exemple je déclare une nouvelle variable dans une fonction,
 * cette variable n'est accessible que dans cette fonction et 
 * dans toutes les fonctions enfant de cette fonction.
 * À l'inverse, si une fonction enfant déclare une nouvelle variable,
 * il est impossible à la fonction parent d'accéder aux variables
 * de la fonction enfant.
 */

var foo1 = 'bar1';

function exemple1 (){
    function exemple2 () {
        var foo2 = 'bar2';
        console.log(foo1, foo2); //'bar1', 'bar2' 
    }
    console.log(foo1); //'bar1'
    //console.log(foo2); //Reference Error !!
    exemple2();
}
exemple1();
//exemple2(); //Reference Error !!


/**
 * Fonction anonyme
 * ----------------
 * La fonction anonyme décrit une fonction qui sera 'perdue'
 * après l'exécution de son code
 */
setTimeout( function () {
    console.log('Hello après 1 seconde');
}, 1000);
/**
 * Ici la fonction anonyme : 
 * function () {
 *      console.log('Hello après 1 seconde');
 *  }
 *  sera exécutée au bout d'une seconde.
 * elle est appelée dans la fonction native JS setTimeout(<function>, <délais en ms>);
 */

/**
 * Fonctions récursives
 * --------------------
 * C'est une fonction qui s'appelle elle-même
 */
function demandePrenom(){
    var prenom = prompt('Quel est votre prénom ?');
    //Si l'utilisateur ne saisi rien:
    if(prenom ==  '') {
        alert('vous devez saisir un prénom.');
        //réappelle la fonction pour une nouvelle exécution
        demandePrenom();
    //Sinon : affiche 'Bonjour <prenom>';
    } else {
        console.log('Bonjour ' + prenom);
    }
}
//init du programme :
demandePrenom();


/**
 * Fonction auto invoquée immédiate
 * --------------------------------
 * Une fonction qui s'invoque tout de suite après son instanciation
 */

 (function fooBar(){
     console.log('Ce code est exécuté tout de suite');
 })();

 