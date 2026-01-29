const secretNbr = Math.floor(Math.random()*100)+1; //Math.random donne un nombre entre 0-0,99999
const attempt = 5;
let found = false //Paramètre pour savoir si on a gagné 



for (i=0; i<attempt; i++) {
    let choosenNbr = prompt(" Veuillez saisir un nombre : "); // Tentative n°${i + 1}/${attempts} 
    console.log(choosenNbr);

    if (choosenNbr===null){
        alert("Tu as abandonné la partie");
        break; //Pour sortir de la boucle
    }
//Soit ƒ Number() et "===" ou "==" suffit 
    if (Number(choosenNbr)===secretNbr){
        alert(`Bravo tu as trouvé le nombre secret ${secretNbr} ! `)
        found = true;
        break; // On arrête la boucle 
    } else if (choosenNbr>secretNbr) {
        alert("C'est plus petit ! ");
    } else {
        alert("C'est plus grand ! ")
    };

    if (i === attempt - 1){
        alert(`Dommage vous n'avez plus de tentatives. Le nombre secret était ${secretNbr}`);
    }
};
/*
if (!found) {
    alert(`Dommage vous n'avez plus de tentatives. Le nombre secret était ${secretNbr}`)
};*/

alert("Fin du Jeu ! ");

console.log(secretNbr);
