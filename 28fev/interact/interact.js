
var start = 'Bonjour ', name, end = ' !', result;
//le texte entré par l'utilisateur sera stocké dans la variable name
name   = prompt('Quel est votre prénom ?');
result = start + name + end;
alert(result); // Affiche les variables concaténé dans la variable result

/* La concaténation d'un nombre et d'un string est tout à fait possible
var text = 'Voici un nombre : ', number = 42, result;
result = text + number;
alert(result); // Affiche : « Voici un nombre : 42 »
*/

