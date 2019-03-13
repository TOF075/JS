/**
 * Exercice sur les objets et tableaux
 * -----------------------------------
 * Afficher dans la console, les éléments demandés :
 */

var voiture = {
	marque: 'citroen',
	modele: 'C4',
	finitions: {
		couleur: 'rouge',
		option: 'métallisée',
		chromes: [
			'jantes',
			'pare-choc',
			'rétros'
		]
	}
}
// Afficher : marque, couleur de finition, la deuxième option chrome (pare-choc)
console.log(
    voiture.marque,
    voiture.finitions.couleur,
    voiture.finitions.chromes[1]
);


//Exercice 2:
var usersList = [
    {
        nom: 'John',
        age: 28,
        id: 234566,
        mdp: 'secret',
        enfants: ['Alice', 'Joseph']
    },
    {
        nom: 'Jack',
        age: 22,
        id: 132443,
        mdp: 'mpolkiujhy',
        enfants: [] //ici, même si pas d'enfant, on garde la structure des données en indiquant un tableau vide
    },
    {
        nom: 'Martha',
        age: 24,
        id: 124467,
        mdp: 'toto1234',
        enfants: []
    }
];

//Afficher l'age de Martha,
//Afficher les prénoms des 2 enfants de John
//Afficher le nom de Jack
console.log(usersList[2].age);
console.log(usersList[0].enfants.join(' - ') );
//Array.join() fait une jointure entre tous les éléments du tableau et le convertit en string
//on peut préciser en argument le caractère qui fait la jointure
//ici ' - ', par défaut c'est une virgule.
console.log(usersList[1].nom.toUpperCase() );
//String.toUpperCase()
//String.toLowerCase()
//pour convertir la casse d'une string.

var prenom = usersList[1].nom;
//une chaine de caractère est aussi un tableau :
console.log( prenom.length ); //on peut interroger la longueur d'une chaine // 4
console.log( prenom[1] ); //renvoie la deuxième lettre du prénom Jack -> a
