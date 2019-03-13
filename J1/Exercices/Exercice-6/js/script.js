// Exercice 6
// ---------

var femme = {
	prenom: "eve",
	sexe: "Féminin",
	age: 18,
	couleurCheveux: "Blonde",
	mensuration: {
		taille: 175,
		poids: 45
	}
}

var homme = {
	prenom: "adam",
	sexe: "Masculin",
	age: 54,
	couleurCheveux: "chauve",
	mensuration: {
		bonnet: "rouge",
		taille: 175,
		poids: 85
	}
}

//J'utiliser une fonction à un paramètre changer les résultats

function presentation ( personne ) {
	//portion de code qui va être exécuté à l'appel de la fonction
	//doit afficher une phrase avec le nom de la personne du type
	//Bonjour, Je m'appelle ----.
}

//j'appelle les fonctions avec les variables décrites plus haut qui sont des objets
presentation( femme );
presentation( homme );

