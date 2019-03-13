/**
 * Manipuler les tableaux
 * ----------------------
 * Voir toutes les méthodes et propriétés des tableaux :
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array
 */
var zoo = ['girafe', 'lion', 'ours', 'singe'];

/**
  * Array.push(<nouvelle valeur>);
  * ------------------------------
  * Ajoute un élément à la fin d'un tableau.
  * <nouvelle valeur> => la variable à insérer
  * elle peut être de tout type (bool, number, str, array, obj)
  */
zoo.push('panda');
// console.log(zoo);
//['girafe', 'lion', 'ours', 'singe', 'panda']

/**
  * Array.pop();
  * ------------------------------
  * Supprime le dernier élément d'un tableau 
  * et retourne la valeur de cet élément
  */
var animal = zoo.pop(); //supprime la dernière valeur 'panda'
//  console.log( zoo ); // ['girafe', 'lion', 'ours', 'singe']
//  console.log( animal ); // 'panda'

 /**
  * Array.slice([<debut>[, <fin>]]);
  * ------------------------------
  * Sans modifier le tableau original, renvoie une copie superficielle
  * des élements aux indexs demandés.
  */
// console.log( zoo.slice(2) ); // 'ours', 'singe'
// console.log( zoo.slice(2, 3) ); // 'ours'
// console.log( zoo.slice() ); // 'girafe', 'lion', 'ours', 'singe'
var zoo1 = zoo;
var zoo2 = zoo.slice(); //shallow copy = emplacement mémoire différent
zoo1.push('croco');
zoo2.push('panda');
console.log(zoo);
console.log(zoo1); //zoo1 = zoo donc les valeurs sont modifiées pour les 2
console.log(zoo2); //zoo2 est indémendant, il vit sa vie...

 /**
  * Array.splice(<début>, [<nbASupprimer> [, <elemAjouté1>[, ...]]]);
  * ------------------------------
  * à ne pas confondre avec Array.slice() !!
  * modifie le contenu d'un tableau en retirant 
  * des éléments et/ou en ajoutant de nouveaux éléments
  * permet de retourner le tableau des élément retirés
  */
//zoo = 'girafe', 'lion', 'ours', 'singe', 'croco'
zoo.splice(2, 1); //'girafe', 'lion', 'singe', 'croco'
console.log( zoo );
zoo.splice(2, 0, 'requin', 'baleine'); 
//ne retire rien, ajoute requin et baleine à partir de l'index 2

console.log( zoo ); //'girafe', 'lion', 'requin', 'baleine', 'singe', 'croco'

var animals = zoo.splice(3); //supprime tout à partir de l'index 3
//retourne les éléments supprimés dans la variable animals
console.log( zoo ); // 'girafe', 'lion', 'requin'
console.log( animals ); // ['baleine', 'singe', 'croco']
