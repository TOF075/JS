# LE DOM

 * DOM, pour Document Object Model. Le DOM définit la structure d'une page et le moyen d'interagir avec elle : il s'agit d'une interface de programmation, ou API (Application Programming Interface).
 * Chaque balise HTML est un nœud dont l'ensemble représente une arborescence
 * On distingue deux types de nœuds : HTML (balise HTML), textuel (contenu texte)
 * Le DOM représente une page web sous la forme d'une hiérarchie d'objets
 * `document` correspond au `<html>`
 * `document`≠ `window`

https://developer.mozilla.org/en-US/docs/Web/API/Document

```
    var h = document.head; // La variable h contient l'objet head du DOM
    console.log(h);

    var b = document.body; // La variable b contient l'objet body du DOM
    console.log(b);
```

 * Type de nœuds

```
    if (document.body.nodeType === document.ELEMENT_NODE) {
        console.log("Body est un noeud élément");
    } else {
        console.log("Body est un noeud textuel");
    }
```

 * Accéder aux enfants d'un nœud

 * `console.log(document.body.childNodes[0]);`

```
// Affiche les noeuds enfant du noeud body
for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}
```

**Exercice**

```
    /*
     Exercice : afficher l'enfant d'un objet du DOM
    */

    // Affiche un enfant d'un objet du DOM
    // Le paramètre noeud est l'objet du DOM
    // Le paramètre indice est l'indice de l'enfant à afficher
    function afficherEnfant(noeud, indice) {
        // TODO : compléter la fonction

    }

    // Doit afficher le noeud h1
    afficherEnfant(document.body, 1);

    // Doit afficher l'erreur "Indice incorrect"
    // L'indice demandé est négatif
    afficherEnfant(document.body, -1);

    // Doit afficher l'erreur "Indice incorrect"
    // Le noeud body a moins de 9 noeuds enfants
    afficherEnfant(document.body, 8);

    // Doit afficher l'erreur "Type de noeud incorrect"
    // Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
    afficherEnfant(document.body.childNodes[0], 0);

```


## parcourir le DOM

 * document.getElementById 
 * document.getElementByClassName
 * document.getElementsByTagName
 * document.querySelector()
 * document.querySelectorAll()

```
    var elem = document.getElementById("para1");
    var elems = document.getElementByClassName("maClasse");
    var htmlElems = document.getElementByTagName("p");
    var el = document.querySelector(".myclass");
    var matches = document.querySelectorAll("div.note, div.alert");
```

https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByClassName
https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByName
https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByTagName
https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
https://developer.mozilla.org/fr/docs/Web/API/document/querySelectorAll


## Manipuler les attributs

 * element.attributes
 * element.hasAttributes
 * element.setAttribute(nom,valeur);
 * element.getAttribute(nom) et syntaxe pointée element.id;
 * element.removeAttribute(nom);

```
    // récupère le premier élément <p> du document
    var para = document.getElementsByTagName("p")[0];
    var attr = para.attributes;

```

https://developer.mozilla.org/fr/docs/Web/API/Element/attributes


## Manipulation des contenus

 * createElement
 * createTextNode
 * appendChild
 * element.innerHTML
 * element.textContent

```
    // créer un élément HTML
    button = document.createElement("button");
    button.innerHTML = "<strong>soumettre</strong>"; // HTML
    button.textContent = "soumettre"; // TEXTE

    // ajouter un élément HTML à un autre HTML
    // body.appendChild(element);

    // déplacer l'élément button dans le footer
    footer = document.getElementById("footer");
    footer.appendChild( button );
```

https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode



## Manipuler les classes et les styles

 * elementDeReference.className
 * elementClasses = elementNodeReference.classList;
 * element.style

```
    // div est l'objet référent d'un élément <div> avec la classe="foo bar"
    div.classList.remove("foo");
    div.classList.add("anotherclass");

    // Si la classe visible est affectée, on la retire ; Sinon, on l'ajoute
    div.classList.toggle("visible");

    alert(div.classList.contains("foo"));


    elem = document.getElementById("board");
    elem.style.width = "520px";
    elem.style.border = "4px dashed #000";
    elem.style.borderColor = "#A1E325";

```

