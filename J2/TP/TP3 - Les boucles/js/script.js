/**
 * Les boucles en JavaScript
 * -------------------------
 * Les boucles permettent de répéter des actions simplement et rapidement.
 * Une boucle peut être vue comme une version informatique de « copier N lignes » ou de « faire X fois quelque chose ».
 */

/**
 * La boucle for :
 * for(index de départ; tant que index est dans la condition; incrémente l'index) {
 * }
 */

for(var i = 0; i < 4; i++) {
    //execute ce code pendant 10x
    console.log(i);
}

console.log('-----');
/**
 * La boucle While
 * while (condition) {
 *  instruction(s) à executer tant que la conditon est vrai
 * } 
 */
var i = 0;
while(i < 4) {
    console.log(i);
    i++; //ne pas oublier d'incrémenter !!
}

console.log('-----');
/**
 * La boucle Do...While
 * do {
 *  instructions exécuté au début de la boucle
 * } while (condition)
 */
var i = 5;
do  {
    console.log(i);
    i++; //ne pas oublier d'incrémenter !!
} while(i < 4);
//la boucle ne sera pas exécutée car i vaut 5
//mais l'instruction du Do sera exécutée au moins une fois

console.log('-----');
/**
 * L'instruction break permet d'arrêter une boucle
 * en cours, généralement dans un if
 */
for(var i = 0; i < 10; i++) {
    console.log(i);
    if(i == 5) {
        console.log('valeur 5 atteinte');
        break;
    }
}
//ici la boucle s'arrête à 5

console.log('-----');
/**
 * L'instruction continue permet d'aller directement 
 * à la prochaine itération de la boucle, sans exécuter
 * le reste des instruction
 */
for(var i = 0; i < 10; i++) {
    if(i == 5 || i == 6 || i== 7) {
        console.log('valeur sautée');
        continue; //saute à la prochaine valeur de i
    }
    console.log(i); // ne sera pas fait sur la valeur 5
}

console.log('-----');
/**
 * Boucle for...in
 * S'utilise uniquement sur les objets
 * Elle permet d'atteindre les propriétés de l'objet
 * for (variable in objet) {
 *   instruction
 *  }
 */
var person = {
    nom: 'toto',
    prenom: 'tata',
    age: 24
}
person.prenom // 'tata'

//itère les propriétés de l'objet person
for (var prop in person){
    //prop n'est valable que dans cette boucle
    //console.log( prop ); //nom de la propriété -> nom, prenom, age
    console.log( person[prop] ); //valeur de la propriété -> 'toto', 'tata', 24
}
//prop n'existe plus en dehors de la boucle
