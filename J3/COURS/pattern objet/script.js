/**
 * Isoler ses composants
 * avec le pattern objet
 */

var hero = {
//propriéiés de l'objet hero
nom: 'Mario',
speed: 0,
pv: 5,
//méthodes de l'objet:
walk: function(){
//le mot clé this, fait
this.speed = 1;
console.log(this.speed);
},
stop: function(){
this.speed = 0;
console.log(this.speed);
this.talk('Je suis à l\'arrêt');
},
talk: function(message){
console.log(message);
}

} 

hero.walk();
hero.stop();
hero.talk('Bonjour');