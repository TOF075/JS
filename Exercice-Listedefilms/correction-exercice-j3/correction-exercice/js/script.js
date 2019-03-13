var listeDeFilms = [
	{

		titre:'Avatar',
		genre:'Science-Fiction',
		réalisateur:'James Cameron',
		date_de_sortie:'2009',
		studio_de_production:'Warner Bros',
		synopsis:'Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre.',
 		durée:'2h47'
	},
	{
		
		titre:'The Darknight',
		genre:'Action, Thriller',
		réalisateur:'Christopher Nolan',
		date_de_sortie:'2008',
		studio_de_production:'Warner Bros',
		synopsis:'Dans ce nouveau volet, Batman augmente les mises dans sa guerre contre le crime. Avec l\'appui du lieutenant de police Jim Gordon et du procureur de Gotham, Harvey Dent, Batman vise à éradiquer le crime organisé qui pullule dans la ville. Leur association est très efficace mais elle sera bientôt bouleversée par le chaos déclenché par un criminel extraordinaire que les citoyens de Gotham connaissent sous le nom de Joker. ',
 		durée:'2h27'

	},
	{
		
		titre:'Interstellar',
		genre:'Science-Fiction',
		réalisateur:'Christopher Nolan',
		date_de_sortie:'2014',
		studio_de_production:'Warner Bros',
		synopsis:'Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire. ',
 		durée:'2h49'

	},
	{
		
		titre:'Ready Player One',
		genre:'Science-Fiction',
		réalisateur:'Steven Spielberg',
		date_de_sortie:'2018',
		studio_de_production:'Warner Bros',
		synopsis:' 2045. Le monde est au bord du chaos. Les êtres humains se réfugient dans l\'OASIS, univers virtuel mis au point par le brillant et excentrique James Halliday. Avant de disparaître, celui-ci a décidé de léguer son immense fortune à quiconque découvrira l\'œuf de Pâques numérique qu\'il a pris soin de dissimuler dans l\'OASIS. L\'appât du gain provoque une compétition planétaire. Mais lorsqu\'un jeune garçon, Wade Watts, qui n\'a pourtant pas le profil d\'un héros, décide de participer à la chasse au trésor, il est plongé dans un monde parallèle à la fois mystérieux et inquiétant…',
 		durée:'2h28'

	},
	{
		
		titre:'Je suis une Légende',
		genre:'Horreur, Science-Fiction',
		réalisateur:'Jhon Mac Tierman',
		date_de_sortie:'2007',
		studio_de_production:'Warner Bros',
		synopsis:'Robert Neville était un savant de haut niveau et de réputation mondiale, mais il en aurait fallu plus pour stopper les ravages de cet incurable et terrifiant virus d\'origine humaine. Mystérieusement immunisé contre le mal, Neville est aujourd\'hui le dernier homme à hanter les ruines de New York. Peut-être le dernier homme sur Terre... Depuis trois ans, il diffuse chaque jour des messages radio dans le fol espoir de trouver d\'autres survivants. Nul n\'a encore répondu.',
 		durée:'1h40'

	}
];

/**FILM <1> : <titre> - <durée du film>
 *  Film sorti en <date de sortie>, réalisé par <realisateur1>, <realisateur2>, ...
 *  Genre : <genre> - Studio : <studioDeProduction>
 *  Résumé : <synopsis>"
 */

//  var valeur = (<condition>) ? <si vrai>: <si faux>;

 function listFilms(t, n){
	 for (var i = 0; i < t.length ; i++) {
		var str = (t.length == 1) ? 'Votre film préféré est le numéro '+ n +' :' + t[i].titre : 'Films ' + i + ': ' + t[i].titre;
		 
		console.log(
	 		str  + '\n' +
	 		'Réalisé par: ' + t[i].réalisateur  + '\n' +
	 		'Genre: ' + t[i].genre + '\n' +
	 		'Studio de production: ' + t[i].studio_de_production + '\n' +
	 		'Synopsis: ' + t[i].synopsis
	 	);

	 }
}
listFilms(listeDeFilms);


function promptFilm(){
	var filmFavoris = parseInt( prompt('Quel est le numéro de votre film favoris parmis cette liste ?') );
	if( isNaN( filmFavoris ) ) {
		alert('Vous devez saisir un chiffre.');
		promptFilm(); //fonction récursive
		return; // sortie de fonction
	}
	//ne sera pas exécuté si le if est true
	if (filmFavoris > 0 || filmFavoris < listeDeFilms.length -1) {
		//vide la console
		//console.clear();
		//affiche le film sélectionné
		var filmPrefere = [listeDeFilms[filmFavoris]];
		listFilms(filmPrefere, filmFavoris);
	} else {
		alert('veuillez entrer une valeur entre 0 et ' + (listeDeFilms.length-1) );
		promptFilm(); //fonction récursive
		return; // sortie de fonction
	}
}
promptFilm();


	
	
	