# Les dates

## Créer des dates

Les dates sont très présentes dans les sites web : dates de création d’un article, date de modification, date d’un commentaire, date de réservation...

Pour créer une date, nous pouvons utiliser la syntaxe classique avec le constructeur appliqué à l’objet `Date()` :

```js
    var aujourdhui = new Date() ; 
    console.log( aujourdhui ); //Wed Mar 06 2019 15:00:25 GMT+0100 (CET)
```

Le résultat affiché est très précis : nous avons la date, l’heure, le fuseau horaire GMT et l’indication du changement d’heure.

Nous pouvons aussi créer une variable de type date, à une date voulue :

```js
    var anniversaire = new Date(1998,4,12);
    console.log(anniversaire); //Tue May 12 1998 00:00:00 GMT+0200 (CEST)
```

Attention: Le mois de janvier, qui est le premier mois de l’année, possède l’index numéroté 0, comme pour les tableaux. Donc le mois de décembre est numéroté 11.

```js
    var anniversaire = new Date(1998,3,12,15,30,23);
    console.log(anniversaire); //Sun Apr 12 1998 15:30:23 GMT+0200 (CEST)
```

## Des méthodes de l’objet Date()

* `getDay()` permet de connaître le numéro du jour dans la semaine d’une date donnée. Attention, le premier jour de la semaine est le dimanche, qui est numéroté `0`.
* `getMonth()` permet de connaître le numéro du mois dans l'année d’une date donnée. Attention, le premier mois de l'année est aussi numéroté `0`.
* `getYear()` permet de connaître l'année
* `getHours()` permet de connaître les secondes
* `getMinutes()` permet de connaître les secondes
* `getSeconds()` permet de connaître les secondes
* `getMilliseconds()` permet de connaître les millisecondes

```js
    var anniversaire = new Date(1998,03,12,15,30,23);
    console.log( anniversaire.getDay() );
```

Dans cet exemple, le 12 avril 1998 était un dimanche. Le jour dimanche a bien pour numéro d’index `0`.

Voici un autre exemple d’utilisation de la méthode `getDay()` pour afficher le nom du jour.

En utilisant la fonction `switch()` :

```js
    var anniversaire = new Date(1998,03,12,15,30,23) ; 
    var jourAnniversaire = anniversaire.getDay() ; 
    switch (jourAnniversaire) { 
        case 0: 
            alert("Le jour anniversaire était un dimanche"); 
        case 1: 
            alert("Le jour anniversaire était un lundi"); 
        case 2: 
            alert("Le jour anniversaire était un mardi"); 
        case 3: 
            alert("Le jour anniversaire était un mercredi"); 
        case 4: 
            alert("Le jour anniversaire était un jeudi"); 
        case 5: 
            alert("Le jour anniversaire était un vendredi"); 
        case 6: 
            alert("Le jour anniversaire était un samedi"); 
    } 
```

Nous pouvons aussi calculer le nombre de jours écoulés entre deux dates, avec la méthode `getTime()` et la méthode mathématique `ceil()`. Sachez que la méthode `getTime()` renvoie le nombre de millisecondes écoulées **depuis le 1er janvier 1970**.

```js
    function differenceDates(date_1,date_2){ 
        var nbJours = date_2.getTime() - date_1.getTime(); 
        return Math.ceil(nbJours/(1000*60*60*24)); 
    } 
    // Saisie des deux dates 
    var date_1 = new Date(2018,01,01); 
    var date_2 = new Date(2018,01,31); 
    // Appel à la fonction 
    alert(differenceDates(date_1,date_2) + " jours."); 
```

La méthode `ceil()` de l’objet `Math()` permet de calculer le nombre de jours à partir d’une valeur en millisecondes.


## Propriétés et méthodes de l’objet Date()

Il existe différentes manières de créer une date :

```
    new Date();
    new Date(valeur);
    new Date(chaîneDate);
    new Date(année, indexMois[, jour[, heures[, minutes[, secondes[, millisecondes]]]]]);
```

Il existe aussi différents format officiel d'enregistrement de dates, en voici quelques-uns :

- Norme [ISO9001](https://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)
- Norme [RFC 1123 de l'IETF](https://tools.ietf.org/html/rfc1123)
- Format UTC -> L'UTC (Universal Time Coordinated) est équivalente au nombre de secondes écoulées depuis le 1er janvier 1970.

Voici la page du MDN consacrée à l’objet `Date()`:

> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date




