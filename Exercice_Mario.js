/*
Créer un objet mario :
  nom: 'Mario', pv: 20, strength: 10
Créer un objet bowser :
  nom: 'Bowser', pv: 20, strength: 8

Créer une fonction d'attaque qui prend comme arguments :
le nom du personnage attaqué et de celui qui attaque.

la fonction doit calculer si l'attaquant atteint la cible et 
ensuite calculer un facteur de dégat en fonction de cette règle :
  la variable 'touched' est de type boolean :
    - 'touched' est true si un chiffre aléatoire entre 0 et 1 est au dessus de .5,
    - touche est false dans le cas contraire. 
  Utiliser la fonction Math.random() pour générer ce chiffre aléatoire.
  Calcul des dégâts :
  degat = facteur * strength
  - facteur est un chiffre aléatoire entre 0 et 1
  - strength c'est la force du personnage qui attaque
Si touched est true, appliquer les dégâts au personnage visé (pv) par la fonction.


Créer une deuxième fonction récursive qui lance tour à tour une attaque sur l'un,
puis sur l'autre personnage. La récursion s'arrête lorsque l'un des personnages 
a ses pv à 0.
*/