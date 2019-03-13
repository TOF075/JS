var mario = 
    {
        nom: 'Mario',
        pv: 20,
        strength: 10
    }
var bowser = 
    {
        nom: 'Bowser',
        pv: 20,
        strength: 8
    }

/*var touched = ();
var = i;



console.log(mario);
console.log(bowser);*/

//cycle d'un seul round attack
function attack(attaquant, defenseur)
{  
    var touched = Math.random(); 
    //donne un chiffre à virgule entre 0 et 1
    if(touched >= .5){
        //touché !!! on applque les dégats au défenseur:
        var degats = Math.random() * attaquant.strength;
        defenseur.pv -= degats;
        
        console.log(attaquant.nom + ' a touché ' + defenseur.nom);

    } else {
        //manqué !!!
    }

}

//cycle du jeu
function engine(attaquant, defenseur){
    attack(attaquant, defenseur);    
}

//lancement du jeu
engine(mario, bowser);