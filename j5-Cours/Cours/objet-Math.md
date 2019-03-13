# L'objet "Math"

L'object `Math` regroupe des fonctions mathématiques.

## Fonctions basiques

`Math.abs(x)` : Renvoie la valeur absolue de x.
`Math.min(x,y)` : plus petite valeur
`Math.max(x,y)` : plus grande valeur

### Exemple:

```js
//abs(x)
//------
//Calculer la distance entre deux nombres 
//(qui est simplement la valeur absolue de leur différence) :
function distance(x,y)
{
     return Math.abs(x-y);
}

//Ce code affichera 4, puis 2.
alert(distance(1,5));
alert(distance(4,2));

//min(x, y)
//---------
//Renvoie le plus petit nombre parmi x et y.

//Ce code affichera 3 :
alert(Math.min(3,5));

//max(x, y)
//---------

//Renvoie le plus grand nombre parmi x et y.

//Ce code affichera 5 :

alert(Math.max(3,5));
```

## Arrondir

`Math.round(x)` : arrondi x à l'entier le plus proche
`Math.floor(x)` : arrondi x à l'entier inférieur
`Math.ceil(x)` : arrondi x à l'entier supérieur

## Trigonométrie

Calcul les sinus, cosinus, tangente d'un angle (l'angle est à indiquer en radians.)
`Math.sin(x)`
`Math.cos(x)`
`Math.tan(x)`

Calcul les arc sinus ou arcsin, Arc cosinus ou arccos et arc tangente ou arctan.
`Math.asin(x)`
`Math.acos(x)`
`Math.atan(x)`

## Autres fonctions usuelles

`Math.exp(x)` : exponentiel de x
`Math.log(x)` : logarithme népérien
`Math.pow(x,y)` : x puissance y
`Math.sqrt(x)` : racine carrée

## Utilitaires

`Math.PI` : constante pi
`Math.random()` : renvoie un nombre aléatoire de l'intervalle [0;0.9999999]

## Autres fonction utilitaires à connaître (pas dans l'objet Math)

`isNaN(x)` : renvoie true si x n'est pas un nombre, false sinon
`isFinite(x)` : renvoie true si x est un nombre que JS peut traiter, false sinon
`parseInt(str)` : convertit la chaîne str en entier
`parseFloat(str)` : convertit la chaîne str en flottant.

Voir les exemples ici :
https://openclassrooms.com/fr/courses/146276-tout-sur-le-javascript/144990-lobjet-math