# La syntaxe en javascript

> https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Types_et_grammaire

## les commentaires

* `//`
* `/* */`
* pas d'imbrication possible

## les variables

* Valeur et type
* valeur : morceau d'information utilisée comme paramètre dans un programme informatique
* type : rôle et opérations applicables à la variable
* déclaration `var, let, const`
* portée des variables (var et let)
* `undefined`, `null`
* tenter d'accéder à une variable non définie : `ReferenceError`
* valeur `NaN` (Not a Number)

```js
    var a;
    a + 2; // NaN
```
 
* Nommage : pas d'accents, pas débutter par un nombre, pas de [nom protégé](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_réservés)
* adopter une convention de nommage [camelCase](https://fr.wikipedia.org/wiki/CamelCase)
* Remontée de variables (hoisting)

### Utilisation des variables

* **Le rôle des variables** : Un programme informatique mémorise des données en utilisant des variables
* Trois grandes caractéristique : **nom, valeur, type**
* Déclarer une variable
* Affecter une valeur à une variable
* Modifier cette valeur
* Concaténation des variables (ajouter le contenu de deux variables)
* souplesse du typage en JS (concaténation mixant les types)


## Les types de variables

### Type nul (null)

* un mot-clé spécial pour indiquer une valeur nulle (au sens informatique). 
* JavaScript étant sensible à la casse, null n'est pas Null ou NULL

### Type undefined

* Un type pour les valeurs indéfinies (pas encore de valeur dans la variable)

```js
    var TestVar; // undefined
    alert(typeof TestVar); // undefined
    var TestVar = null; // null
    alert(typeof TestVar); // object

     null === undefined // false
     null == undefined // true
     null === null // true

     null = 'value' // ReferenceError
     undefined = 'value' // 'value'
```

### Type Boolean

* true/false

### types nombre

* nombre (int / float)
* division par 0 : `Infinity`
* attention, la virgule est un point en anglais
* opérateurs `+, -, /, *`
* concaténation: `1+1 = 2; "1"+1 = "11";`

### types chaîne

* Représente du texte, String en anglais : `"ceci est une chaîne"`
* Délimité par des guillemets double ou simple (soyez cohérents)
* caractères spéciaux `\n, \t`... voir [ici](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Utilisation_des_caractères_spéciaux)
* Sauter des lignes avec `\`
* Concaténation `"Bon"+"jour"`

**Exercice**
* [Calculatrice](https://github.com/oc-courses/intro-javascript/tree/gh-pages/chapitre_1/js)
* Espionnage de variable à l'aide du debuggeur
 
```js
    var prenom = prompt("Entrez votre prénom :");
    alert("Bonjour, " + prenom);
```

```js
    var saisie = prompt("Entrez un nombre : "); // saisie est de type chaîne
    var nb = Number(saisie); // nb est de type nombre
```

Possible de combiner les opérations :

```js
    var nb = Number(prompt("Entrez un nombre : ")); // nb est de type nombre
```

**Exercices :**

[Exercices OpenClassroom](https://github.com/oc-courses/intro-javascript)

* Bonjour amélioré (nom + prénom)
* Calcul de TVA
* Conversion Celsius/Fahrenheit: [°F] = [°C] x 9/5 + 32
* Permutation de valeurs (astuce : pas limité à deux variables):

```js
    var nombre1 = 5;
    var nombre2 = 3;

    // Tapez votre code ici (sans rien modifier d'autre !)

    console.log(nombre1); // Doit afficher 3
    console.log(nombre2); // Doit afficher 5
```

### Type Object (collection)

* **Object**: collection de variables
* liste de valeurs nommées (propriété de l'objet)

```js
    var film1 = "Le loup de Wall Street";
    var film2 = "Vice-Versa";
    var film3 = "Babysitting";

    //donne 

    var films = {
        film1: "Le loup de Wall Street",
        film2: "Vice-Versa",
        film3: "Babysitting",
        // ...
    };

    console.log( films[film1] ) // Affiche "Le loup de Wall Street"
    console.log( films[film2] ) // Affiche "Vice-Versa"
    console.log( films[film3] ) // Affiche "Babysitting"
```


### Type Array (collection)

* **Array** : comme les objets, mais un index au lieu de valeurs nommées
* Faire appel à la longeur d'un tableau avec `.index`
* l'index commence à 0

```js
    var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

    console.log(films[0]); // Affiche "Le loup de Wall Street"
    console.log(films[1]); // Affiche "Vice-Versa"
    console.log(films[2]); // Affiche "Babysitting"

    console.log(films.length); // Affiche 3
```

## les fonctions

[Référénce MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions)

* Les fonctions servent à conteneriser des portions de code réutilisables et à améliorer/simplifier la lisibilité du code
* **Définition :** Une fonction est un regroupement d'instructions qui réalise une tâche donnée.
* **avantage des fonctions :** DRY (Don't Repeat Yourself) = éviter la dupplication du code

```js
    Début
        Sortir une casserole
        Mettre de l’eau dans la casserole
        Mettre la casserole sur le feu
        Tant que l’eau ne bout pas
          Attendre
        Verser les pâtes dans la casserole
        Tant que les pâtes ne sont pas cuites
            Attendre
        Verser les pâtes dans une passoire
        Remuer la passoire pour faire couler l’eau
        Remettre les pâtes dans la casserole
        Goûter
        Tant que les pâtes sont trop fades
            Ajouter du sel
            Goûter
        Si on préfère le beurre à l’huile
            Ajouter du beurre
        Sinon
            Ajouter de l’huile
    Fin
```

Simplifié en sous étapes devient :

```
    Début
        Faire bouillir de l’eau
        Cuire les pâtes dans l’eau
        Egoutter les pâtes
        Assaisonner les pâtes
    Fin
```

exemple de code de fonction:

```js
    //déclaration de fonction
    function direBonjour() {
        console.log("Bonjour !");
    }

    console.log("Début du programme");

    //appel de la fonction
    direBonjour();

    console.log("Fin du programme");
```

* utiliser le debugger pour analyser l'execution de ce code
* entrer dans la fonction

**On observe ceci**
* l'appel d'une fonction déclenche un changement de l'ordre de lecture du code
* l'appel d'une fonction se déclenche à l'utilisation du nom de la fonction suivi d'une pair de parenthèses


### utilisation de return

* `return`= valeur de retour de la fonction lorsqu'elle est attribuée à une valeur de variable

```js
    function direBonjour() {
        return "Bonjour !";
    }

    console.log("Début du programme");
    var resultat = direBonjour();
    console.log(resultat);
    console.log("Fin du programme");
```

on peut aussi écrire ceci

```js
    function direBonjour() {
        return "Bonjour !";
    }

    console.log(direBonjour()); // Affiche "Bonjour !"
```


### Portée des variables d'une fonction

```js
    function direBonjour() {
        var message = "Bonjour !";
        return message;
    }

    console.log(direBonjour());
    console.log(message); // Erreur : la variable message n'existe pas ici
```


### Passage de paramètres

* un **paramètre** est une information stockée dans une variable temporaire dont une fonction a besoin pour jouer son rôle
* portée réduite à l'interieur de la fonction

```js
    function direBonjour(prenom) {
        var message = "Bonjour, " + prenom + " !";
        return message;
    }

    console.log(direBonjour("Baptiste"));
    console.log(direBonjour("Sophie"));
    console.log(message); //undefined


    // Déclaration de la fonction maFonction
    function maFonction(param1, param2, ...) {
        // Instructions pouvant utiliser param1, param2, ...
    }

    // Appel de la fonction maFonction
    // param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
    maFonction(arg1, arg2, ...);
```

### syntaxe des fonctions

* Une fonction peut utiliser tous les éléments de langages d'un programme classique
* Une fonction peut faire appel à d'autre fonctions
* Une fonction peut contenir d'autre fonction (portée réduite des fonctions à la fonction mère), on parle de **fonction imbriquées**
* Elle faire appel à elle-même, on parle de **fonction récursive**
* Peut être anonyme (sans nom) pour un usage temporaire **fonction anonyme**
* elle peut utiliser les arguments et les variables de la fonction parente. En revanche, la fonction parente ne peut pas utiliser les arguments et les variables de la fonction fille.
* `arguments[i]` où i représente l'index ordinal de l'argument dans la liste des paramètres de la fonction

### Conseils sur l'utilisation des fonctions

* Ecrire une fonction à chaque fois que l'on doit écrire du code redondant
* Attention toutefois au code [Spaghetti](https://fr.wikipedia.org/wiki/Programmation_spaghetti)
* Minimiser les interdépendances entre les fonctions
* au-delà d'une vingtaine de lignes de code, la question de la décomposition d'une fonction en sous-fonctions doit se poser.
* Utiliser les fonctions prédéfinies de JavaScript : `prompt(), alert()...` [liste ici](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions#Fonctions_prédéfinies)

**exercices**

https://github.com/oc-courses/intro-javascript/



