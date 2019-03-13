//Exercice 3:
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

//Grace à une boucle for, 
// lister les noms, age et enfants de chaque utilisateur
// dans la console
// indice: pour connaître la longueur d'un tableau,
//         utiliser usersList.length
for(var i = 0; i < usersList.length; i++) {
    var user = usersList[i];
    console.log( user.nom, user.age, user.enfants.join(', '));
}

console.log('---');
/*
    créer un tableau d'objets
    dans ce tableau, stocker des noms d'utilisateurs
    chaque utilisateur sera un objet avec les propriétés suivantes :
    nom<string>,
    online<boolean>
    ex: 
    {nom: "Marcel", online: false} 
    Le tableau doit contenir 10 utilisateurs

    Afficher ensuite grâce à une boucle, une liste d'utilisateurs,
    affichant le nom, le statut (online ou pas)
    ex:
    <nom du l'utilisateur> + (<statut>) ? 'est en ligne' : 'n\'est pas en ligne'
    "Marcel est en ligne",
    "Jean n'est pas en ligne"
*/
var usersList2 = [
    {nom: "Marcel", online: false},
    {nom: "John", online: true},
    {nom: "Jessica", online: false},
    {nom: "Vincent", online: true},
    {nom: "Marc", online: false},
    {nom: "Alice", online: true},
    {nom: "Sophie", online: false},
    {nom: "Jeanne", online: false},
    {nom: "Bob", online: false},
    {nom: "Frank", online: true},
    {nom: "Brigitte", online: true},
    {nom: "Philippe", online: false},
];

var i=0;
while(i < usersList2.length) {
    // (condition) ? si true : si false; -> retourne le code de la condition
    var phrase = ( usersList2[i].online ) ? ' est en ligne' : ' n\'est pas en ligne';

    console.log( usersList2[i].nom + phrase );
    i++;
}