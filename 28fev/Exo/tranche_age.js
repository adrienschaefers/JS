var age = parseInt (prompt("quel est votre âge ? : "))

if (age <= 0)
        alert ('Ce n\'est pas possible désolé')

    else if (1<= age && age < 18){
        alert("Vous n\'êtes pas encore majeur")
    }
    else if (18 <= age && age < 50) {
        alert('Vous êtes majeur mais pas encore senior.');
    }
    else if (50 <= age && age < 60) {
        alert('Vous êtes senior mais pas encore retraité.');
    }
    else if (60 <= age && age <= 120) {
        alert('')
    } 
    else if (age > 120) { // Ne pas oublier les plus de 120 ans, ils n'existent probablement pas mais on le met dans le doute
        alert("Plus de 120 ans ?!! C'est possible ça ?!");
    } 
else { // Si prompt() contient autre chose que les intervalles de nombres ci-dessus alors l'utilisateur a écrit n'importe quoi
alert("Vous n'avez pas entré d'âge !");
}