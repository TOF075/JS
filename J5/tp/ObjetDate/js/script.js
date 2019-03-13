/**
 * Objet date
 */


// date maintenant (sans autre paramètre)

var aujourdhui = new Date ();
console.log(aujourdhui);


//pour stocker une date précise (année, mois, jour, heure, minutes, secondes):
var anniversaire = new Date(2019, 9, 13, 21, 30, 0);
console.log(anniversaire);

//le premier mois de l'année correspond à 0 l(es mois étant stockés comme dans un tableau, Janvier = 0)

//Méthode de l'objet date:
var d = aujourdhui. getDay(); //de 1 à 7 -> les jours de la semaine 1 = Lundi
var m = aujourdhui. getMonth(); // de 0 à 11
var y = aujourdhui. getFullYear();
var h = aujourdhui. getHours();
var min = aujourdhui. getMinutes();
var sec = aujourdhui. getSeconds();
var millisec = aujourdhui. getMilliseconds();

console.log(d, m, y, h, min, sec, millisec);

//Pour convertir une une date en timestamp:
//permet de faire desopérations mathématiques entre dates
//Timestamp = le nombre de millisecondes écoulées **depuis le 1er janvier 1970**

console.log(aujourdhui.getTime());

function diffDate(date1, date2){
    var nbJours = date2.getTime() - date1.getTime();
    //on convertit les millisecondes en jours arrondis au supérieur
    var diff = Math.ceil (nbJours/(1000*60*60*24));
    if(diff < 0){
        return diff + 365;
;

} else {
    return diff;
}
}

//calcule la différence de jours entre aujoourd'hui et mon anniversaire
var result = diffDate(aujourdhui, anniversaire);
console.log('Mon prochain anniversaire est dans ' + result + ' jours')

/*new Date();
    new Date(valeur);
    new Date(chaineDate);
    */

    var d1 = new Date('Jan 10 2019');
    console.log(d1);
    //Affiche en format lisible par défaut
    console.log(d1.toDateString());

    //Affiche la date dans notre locale, avec des options
    var options = { weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};
    console.log ( d1.toLocaleDateString('fr-FR', options));
    console.log(aujourdhui.toLocaleString())