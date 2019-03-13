/**
 * Le DOM (Document Object Model)
 * Parcourir et modifier le code HTML
 * avec JavaScript
 */

/**
 * Objets de base :
 * head, body
 */
var h = document.head; // La variable h contient l'objet head du DOM
console.log(h);

var b = document.body; // La variable b contient l'objet body du DOM
console.log(b);

/**
 * Trouver la liste des enfants d'un nœud HTML
 * Elem.childNodes;
 * Elem est n'importe quel élément du DOM
 * childNodes est un tableau contenant les nœuds
 * enfants du nœud demandé
 */
console.log( 
    b.childNodes, // renvoie un tableau d'éléments []
    b.childNodes[1], // '<h1>...</h1>'
    b.childNodes.length //renvoie la longueur du tableau d'éléments
);

/**
 * Connaître le type d'un nœud
 * Elem.nodeType
 * -> 1 est un Nœud HTML
 * -> 3 est un Nœud Texte
 */
console.log(b.nodeType) //1 -> Noeud HTML

/**
 * parcourir le DOM
 * document.getElementById('id')
 * Renvoie un seul élément HTML correspondant à l'ID recherché
 */
var btn1 = document.getElementById('btn1');
console.log(btn1);

//innerText permet de récupérer ou modifier la valeur d'un node
console.log( btn1.innerText );//'Mon bouton 1
btn1.innerText = 'Mon nouveau texte de bouton';

/**
 * document.getElementsByTagName('tagHTML')
 * Renvoie un tableau d'éléments HTML correspondant 
 * au nom de balise recherchée 'tagHTML'
 */
var divs = document.getElementsByTagName('div');
console.log(divs);

//prépare un tableau de couleurs
var colors = ['red', ' blue', '#FFDD45'];
//applique la couleur à chaque div trouvé
for (var i=0; i< divs.length; i++){
    divs[i].style.backgroundColor = colors[i];
}

/**
 * document.getElementsByClassName('nomDeClass');
 * Renvoie un tableau d'éléments 
 * qui ont comme attribut class="nomDeClass"
 */
var validationElemts = document.getElementsByClassName('validation');
console.log(validationElemts);

/**
 * document.querySelector('sélecteur CSS');
 * Renvoie un élément unique correspondant au sélecteur css indiqué
 * document.querySelectorAll('sélecteur CSS');
 * Renvoie un tableau d'éléments 
 *  correspondant au sélecteur css indiqué
 */
var query1 = document.querySelector('#monDiv.validation > p + div');
console.log(query1);
var query2 = document.querySelector('.validation');
//normalement 2 éléments correspondent à ce sélecteur css
//mais querySelector ne sélectionne que le premier
console.log(query2);

//querySelectorAll renvoie toujours un tableau d'éléments, même s'il n'en trouve qu'un
var query3 = document.querySelectorAll('div.validation, div#text');
console.log(query3); //un tableau de 2 éléments
var query4 = document.querySelectorAll('div#text');
console.log(query4); //un tableau de 1 élément


/**
 * Manipuler les attributs
 * element.attributes -> liste des attributs d'un élément HTML
 * element.hasAttributes  -> renvoie true /false si l'élément a un/des attribut(s)
 * element.setAttribute('nom','valeur');
 * element.getAttribute('nom') 
 * vous pouvez aussi utiliser la syntaxe pointée : element.id
 * element.removeAttribute('nom') -> supprime un attribut
 */
var text = document.getElementById('text');
console.log(text.attributes);
console.log(text.hasAttribute('id')); //true
console.log(text.getAttribute('id')); // renvoie 'text'
text.setAttribute('title', 'mon titre de div' ); //ajoute l'attribut title="mon titre de div"
text.setAttribute('class', 'validation' ); //ajoute l'attribut class="validation"
text.removeAttribute('class'); //supprime l'attribut class

//EXERCICE
//récupérer le premier paragraphe du document et vérifier s'il a un attribut ID
//ajouter un attribut class="found" au paragraphe
var p1 = document.querySelector('p');
console.log( p1.hasAttribute('id') ); //false
p1.setAttribute('class', 'found');

/**
 * Manipulation des contenus
 * -------------------------
 * document.createElement('htmldelelement');
 * document.createTextNode('texte');
 * element.appendChild(element);
 * element.innerHTML = '<p class="message">texte</p>';
 * element.innerText = 'coucou';
 */
//cree en mémoire un nouvel élément HTML
var newBtn = document.createElement('button');
//modifie son contenu
 //newBtn.innerText = 'Envoyer';
newBtn.innerHTML = '<strong>Envoyer</strong>';

//pour pouvoir ajouter mon nouveau bouton, je dois l'injecter
//dans un autre élément qui est déjà dans le DOM :
var monDiv = document.getElementById('monDiv');
//j'injecte le bouton à la fin de monDiv
monDiv.appendChild(newBtn);

//On peut donc ajouter/retirer/déplacer des éléments de la page ou de nouveaux éléments HTML ou Text que l'on crée de toutes pièces.

/**
 * Manipulation des styles et des classes
 * element.style
 * element.className
 * .classList.add('tata');
 * .classList.remove('tata');
 * element.classList
 */

 //element.style permet l'accès aux styles de l'élément
 //les propriétés css avec des tirets sont remplacées en camelCase
 //par exemple background-color en css sera backgroundColor en JS
 var span = document.querySelector('#text > span');
console.log(span.classList); // le tableau des classes
//set des valeurs (attribution de la valeur)
span.className = 'toto';
span.classList.add('tata');
span.style.color = '#FFFDDD';

//get des valeurs (récupération de la valeur)
console.log(span.className);
console.log(span.style.color);