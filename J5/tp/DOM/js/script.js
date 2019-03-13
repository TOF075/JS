
/**
 * Objets de base :
 * head, body
 */


var h = document.head;
console.log(h);

var b = document.body;
console.log(b);


/** 
 * Trouver la liste des enfants d'un noeid HTML
 * Elem.chilNodes;
 * Elem est n'importe quel élément du DOM
 * childNodes est un tableau contenant des noeuds
 * endants du noeud demandé
 */

console.log(
b.childNodes, // renvoie un tableau d'éléments []
b.childNodes[1],// '<h1>...</h1>
b.childNodes.lengh // renvoie la longueur du tableau d'éléments
);


/**
 * Connaître le type d'un noeud
 * Elem.nodeType
 * -> 1 est un noeud HTML
 * -> 3 est un noeud texte
 */

console.log(b.nodeType);// 1 -> noeud HTML

/**
 * parcourir le DOM
 * document.getElementById('id')
 * renvoie un seul élément HTML correspondant à l'ID recherché
 */

var btn1 = document.getElementById('btn1');
console.log(btn1);
//innerText permet de récupérer ou modifier la valeur d'un node
console.log(btn1.innerText); //Mon bouton 1
btn1.innerText = 'Mon nouveau texte de bouton';

/**
 * document.getElementsByTagName('tagHTML')
 * renvoie un tableau d'éléments HTML correspondant
 * au nom de balse recherchée 'tagHTML
 */

var divs = document.getElementsByTagName('div');
console.log(divs);

//prépare un tableau de couleurs
var colors = ['red', 'blue', 'green', 'orange'];
//applique la couleur à chaque div traitée
for(var i=0; i< divs.length; i++){
divs[i].style.backgroundColor = colors[i];
}

/**
 * document.getElementsByClassName('nomDeClass');
 * renvoie un tableau d'éléméents
 * qui ont comme attribut class="nodeClass"


var validationElemts = document.getElemntsByClassName('validation');
console.log(validationElemts);


/**
 * document.querySelector(')
 */


var query1= document.querySelector('#monDiv.validation > p + div');
console.log(query1);
var query2 = document.querySelector(' .validation');
console.log(query2);

var query3 = document.querySelectorAll('div.validatin, div#text');
console.log(query3);
var query4 = document.querySelectorAll('div.validatin, div#text');
console.log(query4); // un tableau de l'élément

/**
 * Manipuler les attributs
 * element.attributes-> liste des attributs d'un élément HTML
 * element.hasAttributes -> renvoie true / false si l'élément a un / des attribut(s)
 * element.setAttribute('nom', 'valeur');
 * element.getAttribute('nom)
 * vous pouvez aussi utiliser la syntaxe pointée : element.id
 * element.removeAttribute('nom') -> supprime un attribut
 */

var text = document.getElementById('text');
console.log(text.attributes);
console.log(text.hasAttributes);  //True
console.log(text.getAttribute('id')); // remote 'text'
text.setAttribute('title', 'mon titre de div'); //ajoute l'attribut title="mon titre de div"
text.setAttribute('class', 'validation'); // ajoute l'attribut class="validation"
text.removeAttribute('class'); //supprime l'attribut class


//EXERCICE
//récupérer le premier paragraphe du document et vérifier s'il a des attributs
//ajouter un attribut class="found" au paragraphe

//correction
var p1 = document.querySelector('p');
console.log(p1.hasAttribute('id')); //false
p1.setAttribute('class', 'found');

/**
 * Manipulation des contenus
 * ---------------------------------
 * document.createElement('htmldelelement');
 * document.createElement('texte');
 * element.appendChild(element);
 * element.innerHTML = '<p class="message">texte</p>;
 * element.innerText = 'coucou';
 */
var newBtn = document.createElement('button');
//newBtn.innerText = 'Envoyer';
//newBtn.innerText = 'Envoyer';
newBtn.innerHTML = '<strong>Envoyer</strong>';

//pour pouvoir ajouter mon nouveau bouton, je dois l'injecter
//dans un autre élément qui est déjà dans le DOM
var monDiv = document.getElementById('monDiv');
//j'injecte le bouton ) la fin de monDiv
monDiv.appendChild(newBtn);

//On peut donc ajouter/retirer/déplacer des éléments de la page ou de
//nouveaux éléments HTML ou Text que l'on crée de toute pièce.


/**
 * Manipulation des styles et des classes
 * element.style
 * element.className
 * element.classList
 * element.classList
 */

//element.style permet l'accès aux styles de l'élément
//les propriétés css avec des tirets sont remplacées en camelCase
//par exemple background-color en css sera backgroundColor en JS
var span = document.querySelector('#text > span'); 
console.log(span.classList);// le tableau des classes
//set les valeurs
span.className = "toto";
span.classList.add ('tata');
span.style.color = '#FFDDD';

//get les valeurs (réccupération de la valeur)
console.log(span.className);
console.log(span.style.color);