# Introduction à JavaScript

* Informatique : révolution depuis les années 1950: réservation d'un billet de train, calcul d'un itinéraire GPS
* ordinateur : machine électronique capable d'exécuter des opérations **arithmétiques** et **logiques**
* sens large : ordinateur, smartphones, tablettes, serveur, montre connectées, Smart TV... ça reste une machine
* pas intelligent ou magique
* donne des instruction, comme dans une recette
* intérêt c'est qu'il ne se trompe pas  et qu'il est très rapide
* intervention humaine nécessaire: le programmeur donne des ordres (instructions) à la machine en écrivant des programmes (code source)
* programmer = écrire le code source d'un programme = coder
* Pour être compris de la machine, on doit parler la même langue = langage de programmation

## les différents types de langage :

* Au plus près de la machine = langage assembleur
* Il existes des grandes familles de langages de programmation : chacun sa syntaxe même logique

## Execution d'un programme

* **Execution:** le fait de demander à un ordinateur de réaliser les ordres contenus dans un programme
* Quel que soit le langage utilisé, il doit être traduit en langage assembleur pour être exécuté
* **Interprétation :** Python et PHP sont des langages interprétés = traduit ligne par ligne à la volée
* **compilation** : programme .exe C et C++ sont des exemples =  toue le code source est interprété par un compilateur
* **Pseudo-compilation** = génère un ensemble de fichiers lisible par l'intermédiaire d'un interpréteur sur chaque plate-forme .NET, JAVA, VB.NET, C#...

## Algorithmes

 * analyse du problème
 * définition d'une suite d'opérations pour arriver au résultat
 * description précise des tâches, exemple de la recette de cuisine d'Alain Tarlowski :

```
    Début
      Sortir une casserole
      Mettre de l'eau dans la casserole
      Ajouter du sel
      Mettre la casserole sur le feu
      Tant que l'eau ne bout pas
        Attendre
      Sortir les pâtes du placard
      Verser les pâtes dans la casserole
      Tant que les pâtes ne sont pas cuites
          Attendre
      Verser les pâtes dans une passoire
      Egoutter les pâtes
      Verser les pâtes dans un plat
      Goûter
      Tant que les pâtes sont trop fades
          Ajouter du sel
          Goûter
      Si on préfère le beurre à l'huile
          Ajouter du beurre
      Sinon
          Ajouter de l'huile
    Fin
```

### On détache de ce programme différents types d'actions :

* Actions simples (fonctions)
* Actions conditionnelles  (conditions)
* actions qui se répètent (boucles)

### Nous venons d'écrire un algorithme

* **définition:** suite ordonnée d'opérations permettant de résoudre un problème donné
* Les lignes de code sont lues de haut en bas. * En javascript : Chaque instruction doit se terminer par un ; ou un retour à la ligne.

--

# Javascript

## historique

JavaScript est avant tout le langage de programmation du Web. Il a été inventé **en 1995** par Brendan Eich, qui travaillait à l'époque pour la société Netscape, créatrice du premier navigateur Web populaire (l'ancêtre de Firefox).

* progressivement adapté à tous les navigateur (avec des variantes)
* C'est un langage de script = langage **interprété** par le navigateur.
* aussi utilisé dans de nombreux environnements extérieurs aux navigateurs web tels que **node.js** ou **Apache CouchDB**.
* Standardisé en 1997 sous le nom d'ECMAScript, en constante évolution (ES5, ES6)
* Aujourd'hui en standard sur tous les navigateurs (ES5)
* Il existe des transpileurs qui permettent dors et déjà d'utiliser la norme ES6 : [BabelJS](https://babeljs.io)
 
**Son but est d'apporter de l'interactivité à des pages web statiques**

Quelques exemples des possibilités de JS : 

* action au clic
* Vérification des données dans un formulaire
* Détection des mouvements de la souris
* Détecter des changement d'état dans une page
* Ouvrir des fenêtre, des alertes, afficher des éléments masqués...

## Où coder ?

* Directement dans le navigateur (console, ardoise)
* Dans des outils en ligne pour tester (JSFiddle, JS Bin et CodePen)
* Directement dans le code d'une page web, ou dans un fichier de script (.js) lié à une page HTML

## Organiser son code

* Séparation des concepts
* Maintenance du code :
  - Organisation des fichiers en sous-dossiers
  - Maintenance des gros programmes !

## Les outils pour coder

* Navigateur
* Editeur de code (SublimeText), les packages indispensables :
  - [JQuery](https://packagecontrol.io/packages/jQuery)
  - [JQuery Snippets pack](https://packagecontrol.io/packages/jQuery%20Snippets%20pack)
  - [JavaScript Completions](https://packagecontrol.io/packages/JavaScript%20Completions)
  - [JavaScriptNext - ES6 Syntax](https://packagecontrol.io/packages/JavaScriptNext%20-%20ES6%20Syntax)
  - [JSHint](https://packagecontrol.io/packages/JSHint)
  - [JS Format](https://packagecontrol.io/packages/JsFormat)
  - [DocBLockr](https://packagecontrol.io/packages/DocBlockr)
  - [AngularJS](https://packagecontrol.io/packages/AngularJS)
  - [TypeScript](https://packagecontrol.io/packages/TypeScript)
  - [Babel](https://packagecontrol.io/packages/Babel)
  - [Babel snippets](https://packagecontrol.io/packages/Babel%20Snippets)

* Console du navigateur
  - Debugger
  - Utilisation des breakpoints
  - commentaires
  - Utilisation de console.log et des commentaires dans la console
