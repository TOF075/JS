## Altérer des tableaux et objets

```js
    var mon_tableau = [10,20,30,40,50];
    var frigo = {
        fruits: ["banane", "mangue", "cerise"],
        legumes: ["courgette", "tomate", "poireau"]
    };

    console.log(mon_tableau[2]); // Affiche 30
    console.log(frigo.fruits[0]); // Affiche "banane"

    var type = "legumes";
    console.log(frigo[type][1]); // Affiche tomate, si on utilise la notation par crochets [], on peut passer une variable à la place d'une clé

    .push() permet de rajouter un élément à un tableau.
    mon_tableau.push(100);
    console.log(mon_tableau); // Affiche [10,20,30,40,50,100]

    .pop() renvoie la dernière valeur du tableau tout en l'enlevant de celui-ci
    mon_tableau.push("banane"); // mon_tableau est maintenant égal à [10,20,30,40,50,100,"banane"]
    console.log(mon_tableau.pop()); // Affiche "banane", mon_tableau est maintenant égal à [10,20,30,40,50,100]
```

## Structuration de code

### La portée des variables

* Comprendre la notion de variable locale et globale.
* Savoir utiliser le mot-clé `var`.

Une variable peut être globale ou avoir une portée limitée (scope).
Quand une variable est définie sans le mot-clé var, elle est crée dans l'objet window, qui a une portée globale.
Une variable globale est accessible depuis n'importe quelle partie du code , même depuis une librairie tierce chargée pour d'autres fonctionnalités.
Elle est ainsi facilement écrasable si le nom est trop commun.
Ainsi, il faut toujours contrôler la portée de la variable (savoir quelle partie du code peut lire et réécrire celle-ci).
Déclarer une variable avec `var` limite sa portée à la fonction actuelle et tous ses descendants.

```js
    function maFonction(){
        var locale = "Je suis une variable locale";
        globale = "Je suis globale";

        console.log(locale); // Affiche "Je suis une variable locale"
    }

    maFonction();

    console.log(globale); // Affiche "Je suis globale"
    console.log(locale); // Affiche une erreur, locale n'est pas accessible ici
```


### Structuration de code JS

 * Savoir regrouper son code en fonction courtes.
 * Prendre l'habitude de commenter avec des blocs de commentaires chaque partie du fichier.
 * Prendre l'habitude de commenter avec des commentaires en ligne chaque instruction qui n'est pas compréhensible immédiatement.

Ne pas oublier ces règles quand on développe, quel que soit le langage :

* Fractionner le problème en petits morceaux et créer des fonctions courtes Si une fonction se charge de deux concepts différents, songer à la fractionner. Par exemple, si je veux créer un slider, une partie du code s'occupera d'afficher les éléments et une autre gérera les interactions avec l'utilisateur. Si une seule fonction gère les deux, elle deviendra vite illisible.
* Chaque ligne de code doit être clairement compréhensible, inutile d'utiliser des fonction alambiquées.
* Commenter généreusement, utile pour la prochaine fois où le développeur relira son code ou se fera relire par quelqu'un d'autre.
* Si possible, déclarer les variables (sans forcément les initialiser) en haut de fonction permet d'avoir une vue globale de ce qu'elle fait.