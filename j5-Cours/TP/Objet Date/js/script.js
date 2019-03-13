/**
 * Objet date
 */

 var aujourdhui = new Date();
 console.log(aujourdhui);

 //pour stocker une date précise (année, mois-1, jour, heure, minutes, secondes) :
var anniversaire = new Date(2019,7,5,21,30,0);
console.log(anniversaire);
//attentions les mois sont stockés comme dans un tableau,
//le mois de janvier a l'index 0.

//Méthodes de l'objet date :
var d = aujourdhui.getDay(); //de 1 à 7 -> les jours de la semaine 1 = Lundi
var m = aujourdhui.getMonth(); //de 0 à 11
var y = aujourdhui.getFullYear();
var h = aujourdhui.getHours();
var min = aujourdhui.getMinutes();
var sec = aujourdhui.getSeconds();
var millisec = aujourdhui.getMilliseconds();
console.log(d, m, y, h, min, sec, millisec);

//Date.getTime()
//Pour convertir une date en timestamp, 
//permet de faire des opérations mathématiques entre dates
//Timestamp = le nombre de millisecondes écoulées depuis le 1er janvier 1970

console.log( aujourdhui.getTime() );

function diffDate(date1, date2) {
    var nbJours = date2.getTime() - date1.getTime();
    //on convertit les millisecondes en jours arrondis au suppérieur
    var diff = Math.ceil(nbJours/(1000*60*60*24));
    //Si l'anniversaire est déjà passé, j'ai un nombre négatif
    if(diff < 0) {
        //j'ajoute donc un an au résultat
        return diff + 365;
    } else {
        return diff;
    }
}
//calcul la différence de jours entre aujourdhui et mon anniversaire
var result = diffDate(aujourdhui, anniversaire);
console.log( 'Mon prochain anniversaire est dans ' + result + ' jour(s).');



/*
new Date();
    new Date(valeur);
    new Date(chaîneDate);
    new Date(année, indexMois[, jour[, heures[, minutes[, secondes[, millisecondes]]]]]);
*/
var d1 = new Date('jan 10 2019');
console.log(d1);
//Affiche en format lisible par défaut
console.log(d1.toDateString() );

//Affiche la date dans notre locale, avec des options
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log( d1.toLocaleDateString('fr-FR', options)  );

//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date