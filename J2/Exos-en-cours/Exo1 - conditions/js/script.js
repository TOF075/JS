//Exercice JS conditions et comparaisons
//--------------------------------------

//Ecrire un programme qui demande à l'utilisateur de "saisir un nombre [0,100]"
//si le nombre est égale ou au dessus de 0, 
//faire un console log indiquant: "le nombre ... est positif ou nul".
//sinon, indiquer "Le nombre ... est négatif"
//remplacer les ... par le chiffre saisi

var nbr1 = prompt('saisir un nombre');
var nbrTest = parseInt(nbr1);
if(nbrTest >= 0)
    console.log('le nombre ' + nbrTest + ' est positif ou nul');
else
    console.log('Le nombre ' + nbrTest + ' est négatif');

//Exercice (suite) avec double test
//tester si le chiffre est entre 0 et 100 
//si oui, indiquer "le nombre est compris entre 0 et 100"
//dans la même condition, tester si le chiffre est supérieur à 100
//si oui, indiquer "le chiffre est suppérieur à l'intervalle [0,100]"
//sinon, indiquer "le chiffre n'est pas dans l'interval [0, 100]"
if(nbrTest >= 0 && nbrTest <= 100) {
    console.log('le nombre est compris entre 0 et 100');
} else if (nbrTest > 100) {
    console.log('le chiffre est suppérieur à l\'intervalle [0,100]');
} else {
    console.log('le chiffre n\'est pas dans l\'interval [0, 100]');
}

/* BONUS - baccaloreat */
/* 
  Exercice : trouver le résultat au bac selon la moyenne
  Ecrivez un programme qui fait saisir la moyenne d'un candidat 
  puis affiche si ce candidat est recalé (moyenne inférieure à 10),
  reçu (moyenne entre 10 et 12)
  ou reçu avec mention (moyenne supérieure ou égale à 12).
*/
var resultat = prompt('Quelle est votre note au bac (sur 20) ?');
if(resultat < 10) {
    console.log('vous êtes recalé');
} else {
    console.log('vous êtes reçu');
    if(resultat > 12) {
        console.log('Vous avez une mention !');
    }
}
//méthode avec else if :
if(resultat < 10) {
    console.log('vous êtes recalé');
} else if(resultat > 10 && resultat <= 12) {
    console.log('vous êtes reçu');
} else {
    console.log('vous êtes reçu'); 
    console.log('Vous avez une mention !');
    //ici on est obligé de doubler le code 'vous êtes reçu'
    //ou de changer la phrase: 'Vous êtes reçu avec mention !'
}
