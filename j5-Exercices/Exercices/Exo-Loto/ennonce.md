# Réaliser une application du tirage du loto

L'association du 3e age veut moderniser son tirage du loto du dimanche :
Vous devez réaliser l'application qui choisit les jetons et procède au tirage des 6 numéros gagnants, ainsi que du numéro complémentaire :

## Dans une première fonction

- L'application doit générer 12 jetons
chaque jeton est un numéro aléatoire entre 1 et 50, stocker ces numéros dans un tableau.
Trier ces numéros dans l'odre du plus petit au plus grand (voir Array.sort() )
- la fonction doit ensuite tirer 6 boules et un numéro complémentaire qui correspondent à des numéros du tableau des jetons
pour choisir les boules parmi les jetons, les jetons doivent avoir au moins 2 unités d'interval, exemple (5 et 6 sont trop rapprochés, mais 5 et 7 sont valides).
Trier ces numéros dans l'odre du plus petit au plus grand.
- Afficher les jetons dans la console.
- Afficher les 6 boules tirées du resultat de l'algorythme.

## Dans une deuxième fonction

- Tirer un numéro aléatoire entre 0 et 49 en l'arrondissant au suppérieur.
- Afficher ce numéro complémentaire dans la console.

> *Aide :*
> - Dans un tableau **jetons**, stocker n chiffre aléatoires entre 0 et 49.
> - Dans un tableau **jetonsTri** = stocker le même tableau, mais trié dans l'ordre du plus petit au plus grand (voir `Array.sort()` )
> - Faire une boucle sur le tableau **jetonsTri** et faire un check entre l'index et l'index + 1 pour vérifier si les deux chiffres ont bien 2 unités d'écart.
> - Stocker les chiffres corrects obtenus dans un nouveau tableau **boules**.
> - Arrêter la boucle lorsqu'on a obtenu 6 chiffres.
> - Trié le tableau **boules** et stocker dans un nouveau tableau **boulesTri** (voir `Array.sort()` ).
> - Afficher le résultat dans la console.
> - Pour les chiffres aléatoires, voir les fonctions d'arrondi `Math.ceil()` et de random `Math.random()`.
