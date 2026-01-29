let inputCoffee = document.querySelector("#coffeeInput") as HTMLInputElement; 
let button = document.querySelector("#startBtn") as HTMLButtonElement;
let preparation = document.querySelector("#preparation") as HTMLDivElement;
let result = document.querySelector("#result") as HTMLDivElement;

button.addEventListener('click', () => {
    let coffeeNbr: number = Number(inputCoffee.value);
    //let coffeeNbr: number = parseInt(inputCoffee.value);
    console.log(coffeeNbr);

    result.innerHTML = "";
    preparation.innerHTML = "";

    if (coffeeNbr < 1){
        alert("Veuillez saisir un nombre valide de café s'il vous plaît!")
        return;
    };

    for (let i: number = 1; i <= coffeeNbr; i++){

        const countSec: number = Math.floor(Math.random()*8)+3;

        const prepaMsg = document.createElement("p") as HTMLParagraphElement;
        prepaMsg.textContent = `Préparation du Café ${i} ... (attente de ${countSec} secondes)`;
        preparation.appendChild(prepaMsg);

       const asyncPreparation : Promise<string> = new Promise ((resolve, reject) => {
        setTimeout(() => {

            const message = `Le café ${i} est terminé et servi !`;
            const resultMsg = document.createElement("p") as HTMLParagraphElement;
            resultMsg.textContent = `Résultat : ${message} Bonne dégustation !`;
            result.appendChild(resultMsg);

            resolve(message);

        }, countSec * 1000);
       });

       asyncPreparation
       .then(result => {
        console.log("Résultat :", result);
       })
       .catch(error => {
        console.error("Erreur :", error);
       });
    }
})