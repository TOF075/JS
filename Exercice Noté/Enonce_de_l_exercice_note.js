/**
 * TP chatMessages dans la console (note sur 22 points) :
 * ------------------------------------------------------
 * Créer un tableau chatMessages[]. 
 * Le tableau contient une liste de {message}s contenant 4 propriétés :
 * [{
 *    userPseudo: <string>,
 *    message: <string>,
 *    date: <string>,
 *    id: <number>
 * }]
 * 
 * 
 * Exercice partie 1 (8 points ) :
 * -------------------------------
 * - Initialisez le tableau chatMessages[] contenant deux objets {message}, tel qu'indiqué plus haut
 * - créer une fonction qui permet d'ajouter un {message} dans ce tableau :
 *   * La fonction doit inviter le visiteur du site à saisir son pseudo et son message avec deux fenêtres prompt()
 *   * La fonction doit automatiquement enregistrer un id et une date pour le message
 *      -> La propriété id du message doit être générée aléatoirement avec une fonction Math.ramdom(),
 *      -> Les dates doivent être enregistrées en timestamp (càd : au format millisecondes (ex: 1529644667834) )
 *   * La fonction doit enregistrer les données générées dans le tableau de données prévu à cet effet
 *   * à chaque message enregistré, créer une récursion de fonction qui recommence le programme pour demander de saisir un (nouveau) message
 *   * Chaque nouveau message s'ajoute au tableau
 * 
 * Exercice partie 2 (8 points ) :
 * -------------------------------
 * - Au bout de 5 messages, le dernier message saisi remplace le premier du tableau (le plus ancien), 
 *   les messages se déplacent dans l'historique: le premier devient le deuxième, le deuxième devient le troisième... le sixième est supprimé.
 *
 * Exercice partie 3 (4 points ) :
 * -------------------------------
 * - Au bout de 12 messages, stopper la conversation (arrêt du programme)
 * - Une fois le programme stoppé, afficher automatiquement toute la conversation dans la console, formatés comme dans un chat : " - Le [date formatée : Mon, 04 Mar 2019 10:28:35 GMT], [userPseudo] a écrit: '[contenu du message]'."
 * 
 * Exercice partie 4 BONUS (2 points) :
 * ------------------------------------
 * En plus de l'affichage de la console de la partie 3, 
 * Utiliser les fonction du DOM pour générer un div dans l'HTML du document.
 * En JavaScript, donnez un style à ce div avec une bordure, du padding et des bords arrondis.
 * En JavaScript, placer un ul > li dans ce div, chaque li doit correspondre à un message de la conversation.
 * En JavaScript, alterner la couleur d'arrière plan des li une fois sur deux grâce à l'ajout de styles
 * 
 * 
 * Aide : 
 * ------
 * Générer un nombre à virgule aléatoire entre 0 et 1 : Math.random()
 * Créer une date : new Date();
 * Obtenir le timestamp d'une date : Date.getTime();
 * Afficher au format UTC : Date.toUTCString();
 * 
 * Ressources sur les dates:
 * https://www.toptal.com/software/definitive-guide-to-datetime-manipulation
 * Ressources sur le DOM:
 * https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction
 */
