/**
 * Les opérateurs et conditions en JavaScript
 * ------------------------------------------
 */

 /**
  * Les opérateurs comparaisons: > == < >= <= === != !==
  */

console.log(
    5 < 3, // false
    5 <= 5, // true
    5 > 3, // true
    5 >= 5, // true
    5 == '5', // test de comparaison sur la valeur = true
    5 === '5', // Comparaison sur la valeur et le type = false
    true == 1, // true car 1 est aussi true en JS, donc les valeurs sont égales
    true === 1, // false car les types sont différents
    5 != '5', //false car la comparaison est sur les valeurs
    5 !== '5', // test aussi le type donc différent = true
    5 % 5, //Est-ce qu'il reste quelque chose de la division de 5 par 5 = 0
);

/** 
 * Opérateurs logiques && || !
 */

console.log('----');
//&& -> ET
console.log( 5>0 && 5<10 ); 
//true && true => true
//si j'avais true && false => false
//ici avec && dès que l'une des comparaisons est false, le résultat obtenu sera false

// || -> OU Bien
console.log( 4<2 || 4>2 );
//false || true => true
//si j'avais false || false => false
//ici avec || dès que l'une des comparaisons est true, le résultat obtenu sera true

// ! -> inverse la valeur

console.log( ! true ); // -> false
var ckbox = 'checked';
console.log( !(ckbox == 'checked') );
// ! ( ckbox == 'checked') -> ! (true) -> false
var test1 = 6;
console.log( !(test1 > 11) );
// !(test1 > 11) -> ! (6>11) -> !(false) -> true

//on peut bien sut cummuler les opérateurs :
var chiffre = 9;
console.log( chiffre%2==0 || chiffre%3==0 );


/** 
 * Opérateurs mathématiques + - * /
 * Opérateurs d'affectation -= += *= /= 
 * Opérateurs d'incrémentation ++ --
 */
console.log('----');
var nombre1 = 5;
var nombre2 = 3;
console.log(
    nombre1 + nombre2,
    nombre1 - nombre2,
    nombre1 * nombre2,
    nombre1 / nombre2,
    nombre1 ** nombre2,
    nombre1++,
    ++nombre2,
    nombre1--,
    --nombre2
    );

//incrémenter signifie ajouter 1,
//décrémenter signifie retirer 1
//a++; veut dire: a = a + 1;
//a--; -> veut dire: a = a - 1;

//ordre d'incrémentation :
var a = 1;
var b = 2;
console.log(a++); // 1
//a vaut 2
var b = a++; 
//a vaut 3 et b vaut 2
console.log(a, b);

var b = ++a;
//a vaut 4 et b vaut 4
console.log(a, b);

/**
 * opérateurs d'affectation :
 * ---------------------------
 * on affecte la valeur de ce qui est à droite de l'opérateur à ce qui est à gauche (parfois en faisant une opération de calcul)
 * */
var c = 4; // affecte la valeur 4 à c
var d = 5; // affecte la valeur 5 à d

c += d; //même chose que si j'écrivais c = c + d;
c -= d; //même chose que si j'écrivais c = c - d;
c *= d; //même chose que si j'écrivais c = c * d;
c /= d; //même chose que si j'écrivais c = c / d;
c %= d; //affecte le résultat de la division même chose que si j'écrivais c = c % d;
c **= d; //même chose que c = c ** d;

//à chaque fois, on réaffecte le résultat de l'opération à la valeur de c

/**
 * Les opérateurs renvoient toujours un résultat,
 * souvent le résultat est un booléen: true/false
 * (sauf pour les opérateurs d'affectation)
 * L'intérêt de ces opérateurs est de les utiliser dans des conditions.
 */

 /** Les Conditions 
  * ----------------
  * Une condition sert à déterminer si le programme va exécuter un bloc d'instruction ou pas.
  * if (condition) ...;    // instruction sur une seule ligne
  * if(condition) {}       // if avec bloc d'instructions
  * if(condition) {} else {}
  * if(condition) {} elseif (condition) {} else {}
  * if(condition) {} elseif (condition) {} ... elseif (condition) {} else {}
  * condition ? val1 : val2; //Opérateur conditionnel ternaire
  * 
  * La condition doit se résoudre à un boolean, si le boolean est true, le bloc d'instruction du if est exécuté, sinon, le programme teste les autres conditions. Si aucune condition n'est valable, le programme exécute le bloc else (s'il est présent), ou passe simplement à la ligne suivante sans exécuter de bloc (s'il n'y a pas de else).
 */

//exemple simple de if :
if(true)
    console.log('oui c\'est vrai');

//exemple avec else :
if(false)
    console.log('ce code ne sera jamais exécuté');
else
    console.log('C\'est faux');

//exemple avec plusieurs lignes d'instruction
if(true) {
    var mySuperText = 'toto';
    var myText2 = 'toto';
    console.log(mySuperText);
}


//Exemple complet dans un programme :
//-----------------------------------

var age = prompt('Quel est votre age ?');

//convertit la saisie en chiffre ou NaN
var ageTest = parseInt(age);

//teste si ageTest n'est pas un NaN
if( ! isNaN( ageTest ) ) {
    //Si la valeur saisie par l'utilisateur n'est pas NaN (Not a Number) alors execute le code suivant :
    
    //parseInt(ageTest) converti la saisie en type number
    if( ageTest > 50) {
        console.log('vous êtes vieux.');
    } else {
        console.log('Vous êtes jeune !!');
    }
} else {
    console.log('Vous devez saisir un chiffre.');
}

