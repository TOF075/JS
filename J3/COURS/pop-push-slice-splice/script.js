/**
 * Manipuler les tableaux
 *---------------------------------
Voir toutes les méthodes et propriétés des tableaux :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/prototype
 */


var zoo = ['girafe', 'lion', 'ours', 'singe'];

/**
 * Array.push(<nouvelle valeur);
 * --------------------------------
 * Ajoute un élément à la fin d'un tableau
 * Array.push(<nouvelle valeur);
 * <nouvelle valeur> => la variable à insérer
 * elle peut être de tout type (bool, number, str, array, obj)
 */

zoo.push('panda');
console.log(zoo);
//['girafe, 'lion', 'ours', 'singe', 'panda'] 


/**
 * Array.pop(<);
 * --------------------------------
 * Supprime le dernier élément d'un tableau 
 * et retourne la valeur de cet élément
 */

var animal = zoo.pop();
console.log(zoo); // ['girafe, 'lion', 'ours', 'singe', 'panda'] 
console.log(animal); // 'panda'

/**
 * Array.slice(<debut>[, <fin>]);    ==> [] = optionnel
 * --------------------------------
 * Sans modifier le tableau original, renvoie une copie superficielle
 * des éléments aux index demandés.
 * et retourne la valeur de cet élément
 */

//console.log(zoo.slice(2)); // 'ours', 'singe'
//console.log(zoo.slice(2,3)); //'ours'

var zoo1 = zoo;
var zoo2 = zoo.slice(); //shallow copy = emplacement mémoire différent
zoo1.push('croco');
zoo2.push('panda');
console.log(zoo);
console.log(zoo1); //zoo1 = zoo donc les valeurs sont modifiées pour
console.log(zoo2); //zoo2 est indépendant, il vit sa vie...

/**
 * Array.splice(<debut>, <nbASupprimer>[, elem1[, elem2[, ...]]]);
 * ----------------------------------
 * à ne pas confondre avec Array.slice()!!
 * modifie le contenu d'un tableau en retirant
 * des éléments et/ou en ajoutant de nouveaux éléments
 */

zoo.splice(2, 1); //'girafe', 'lion', 'singe', 'croco'
console.log(zoo); 
zoo.splice(2,0, 'Requin', 'Baleine'); 
//ne retire rien, ajoute requin et balaeine à partir de l'index 2
console.log(zoo); //'girafe', 'lion', 'requin', 'baleine', 'singe'

var animals = zoo.splice(3); //supprime tout à partir de l'index 3
//retourne les éléments supprimés dans la variable animals
console.log (zoo); // 'girafe', 'lion', 'requin'
console.log (animals); // ['baleine, 'singe', 'croco']