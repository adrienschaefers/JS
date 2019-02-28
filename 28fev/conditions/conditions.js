/* Les opérateurs de comparaison
== égal à
!= différent de
=== contenu et type égal à
!== contenu ou type différent de
> supérieur à
>= supérieur ou égal à
< inférieur à
<= inférieur ou égal à
*/

/* Les opérateurs logiques
&& = ET = valeur1 && valeur2
|| = OU = valeur1 || valeur2
! = NON = !valeur
*/

//ELSE 
if (confirm('Pour accéder à ce site vous devez avoir 18 ans ou plus, cliquez sur "OK" si c\'est le cas.')) {
    alert('Vous allez être redirigé vers le site.');
}

else {
    alert("Désolé, vous n'avez pas accès à ce site.");
}


//ELSE IF
var floor = parseInt(prompt("Entrez l'étage où l'ascenseur doit se rendre (de -2 à 30) :"));

if (floor == 0) {

    alert('Vous vous trouvez déjà au rez-de-chaussée.');

} else if (-2 <= floor && floor <= 30) {

    alert("Direction l'étage n°" + floor + ' !');

} else {

    alert("L'étage spécifié n'existe pas.");

}

// Switch
var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 5) :'));

switch (drawer) {
    case 1:
        alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
    break;
    case 2:
        alert('Contient du matériel informatique : des câbles, des composants, etc.');
    break;
    case 3:
        alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
    break;
    case 4:
        alert('Contient des vêtements : des chemises, des pantalons, etc.');
    break;
    case 5: 
        alert('Contient rien du tout, c\'est juste un simple test');
    default:
        alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
}