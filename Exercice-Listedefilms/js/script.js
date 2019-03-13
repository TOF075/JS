var films = [
    {
        title: 'Velvet Goldmine',
        genre: 'drame',
        real: ['Todd Haynes'],
        sortie: 1998,
        studioprod: 'Christine Vachon',
        synopsis: 'En 1984, Arthur Stuart, journaliste anglais expatrié à New York, est chargé par son rédacteur en chef d\'écrire un article sur Brian Slade, idole du glam-rock qui a mis fin à sa carrière dix ans auparavant en simulant son assassinat sur scène. Stuart part donc sur les traces de celui dont la musique a bouleversé l\'existence',
        duree: 127
    },
    {
        title: 'Into The Wild',
        genre: 'drame',
        real: ['Sean Penn'],
        sortie: 1998,
        studioprod: 'Paramount Vantage',
        synopsis: 'Tout juste diplômé de l\'université, Christopher McCandless, 22 ans, est promis à un brillant avenir. Pourtant, tournant le dos à l\'existence confortable et sans surprise qui l\'attend, le jeune homme décide de prendre la route en laissant tout derrière lui. Des champs de blé du Dakota aux flots tumultueux du Colorado, en passant par les communautés hippies de Californie, Christopher va rencontrer des personnages hauts en couleur. Chacun, à sa manière, va façonner sa vision de la vie et des autres. Au bout de son voyage, Christopher atteindra son but ultime en s\'aventurant seul dans les étendues sauvages de l\'Alaska pour vivre en totale communion avec la nature',
        duree: 148
    },
    {
        title: 'Trainspotting',
        genre: 'drame',
        real: ['Danny Boyle'],
        sortie: 1996,
        studioprod: 'Channel Four Films',
        synopsis: 'Edimbourg, dans les années 90. Mark Renton et ses amis Spud et Sick Boy se droguent à l\'héroïne. Quoique fort sensible au plaisir qu\'il éprouve ainsi, Mark décide toutefois de décrocher avant qu\'il ne soit trop tard. Il y parvient, non sans mal, et consacre alors son énergie retrouvée à séduire une lycéenne délurée. Il reprend cependant rapidement ses vieilles habitudes, au grand dam de Begbie, un ami alcoolique sujet à d\'effrayantes crises de violence',
        duree: 95
    },
    {
        title: '28 jours plus tard',
        genre: 'horreur',
        real: ['Danny Boyle'],
        sortie: 2003,
        studioprod: 'Andrew Macdonald',
        synopsis: 'Un commando de la Protection Animale fait irruption dans un laboratoire top secret pour délivrer des dizaines de chimpanzés soumis à de terribles expériences. Mais aussitôt libérés, les primates, contaminés par un mystérieux virus et animés d\'une rage incontrôlable, bondissent sur leurs "sauveurs" et les massacrent. 28 jours plus tard, le mal s\'est répandu à une vitesse fulgurante à travers le pays, la population a été évacuée en masse et Londres n\'est plus qu\'une ville fantôme. Les rares rescapés se terrent pour échapper aux "Contaminés" assoiffés de violence. C\'est dans ce contexte que Jim, un coursier, sort d\'un profond coma...',
        duree: 117
    },
    {
        title: 'Apocalypto',
        genre: 'drame',
        real: ['Mel Gibson'],
        sortie: 2006,
        studioprod: 'Touchstone Pictures',
        synopsis: 'La civilisation maya autrefois prospère est sur la voie de la décadence. Des escouades d\'hommes pillent les villages à la recherche de victimes à sacrifier à leurs dieux sanguinaires. Patte de jaguar, chef de village, mène une existence paisible avec les siens. Jusqu\'au jour où des soldats mayas envahissent et pillent leurs terres. Fait prisonnier, il est emmené dans une cité maya pour y être mis à mort',
        duree: 138
    }
];


	for (var i = 0; i < films.length; i++) 
	{
        var list = films[i]
        var text = ' FILM : ' + (i+1) + list.title +' | DUREE DU FILM : ' + list.duree + ' minutes' + ' | FILM SORTI EN ' + list.sortie + 
        ' | REALISE PAR ' + list.real + ' | GENRE : ' + list.genre + ' | PRODUCTION : ' + list.studioprod + ' | SYNOPSIS : ' + list.synopsis + ('. ');
        console.log(text);
    }



    

        var fav = prompt('Quel est le numéro de votre film préféré ?');


        if ( !isNaN(fav) )
        {

            if ( (fav-1) < films.length && (fav-1) >= 0)
            {
                console.clear();
                var films = films.splice((fav-1),1);
                var copyText = 

                'Votre film préféré est: '
                + fav +
                ': ' 
                + films[0].title + 
                ' - '
                + films[0].duree +
                ' Film sorti en '
                + films[0].sortie +
                ', réalisé par '
                + films[0].real.slice(" ") +
                ' Genre: '
                + films[0].genre +
                ' Production: '
                + films[0].studioprod +
                ' Synopsis: '
                + films[0].synopsis +
                '';

                console.log(copyText);
                alert('Votre film préféré est: ' + films[0].title + '.')
            }
            else
            {
                alert('Ce film n\'existe pas !');
                favFilm(films);
            }
        }
        else
        {
            alert('Vous n\'avez pas saisi un nombre !');
            favFilm(films);
        }




//Affichage des films dans la console :
/*console.log(films);



var result = '';

function askfilm()
{

    var monFilmPrefere = 0;
    var i = 0;

    do
    {
        var choice = prompt ('Quel est le numéro de votre film préféré ?');
    }
    while(!(choice >= 0 && choice < 6));

    if (choice >= 0 && choice < 6)

    {
        var film = films.splice(1, 1);

        console.log(films);
        console.log( choice + ' FILM : ' + films[0].title +' | DUREE DU FILM : ' + films[0].duree + ' minutes' + ' | FILM SORTI EN ' + films[0].sortie + 
        ' | REALISE PAR ' + films[0].real + ' | GENRE : ' + films[0].genre + ' | PRODUCTION : ' + films[0].studioprod + ' | SYNOPSIS : ' + films[0].synopsis + ('. '));
    }
    return;
}

askfilm();





/*function askFilm(tab)
{
    for(var i = 0; i < tab.length; i++) {
        var list = tab[i];
        console.log( i+1 + ' FILM : ' + list.title +' | DUREE DU FILM : ' + list.duree + ' minutes' + ' | FILM SORTI EN ' + list.sortie + ' | REALISE PAR ' + list.real + ' | GENRE : ' + list.genre + ' | PRODUCTION : ' + list.studioprod + ' | SYNOPSIS : ' + list.synopsis + ('. '));
    };
}

askFilm(films);

var films = prompt('Quel est le numéro de votre film préféré ?');*/









/*
function demandeNum(){
    var films = prompt('Quel est le numéro de votre film préféré ?');
    if(films ==  '') {
        alert('vous devez saisir un numéro.');
        demandeNum();
    } else {
        console.log('Votre film préféré porte le numéro ' + films;
demandePrenom();



/*
while (true) {
    films = prompt('Quel est le numéro de votre film préféré ?');
    if (films) {
        var nicks = new Array
        nicks.push(nick) + ' '; // Ajoute le nouveau prénom ainsi qu'un espace juste après
    } else {
        break; // On quitte la boucle
    }
}
if (nicks){
    for(var i = 0; i < nicks.length; i++){                  
    alert(nicks); // Affiche les prénoms à la suite
    }      
}*/