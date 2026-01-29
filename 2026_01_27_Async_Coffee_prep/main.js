var inputCoffee = document.querySelector("#coffeeInput");
var button = document.querySelector("#startBtn");
var preparation = document.querySelector("#preparation");
var result = document.querySelector("#result");
button.addEventListener('click', function () {
    var coffeeNbr = Number(inputCoffee.value);
    //let coffeeNbr: number = parseInt(inputCoffee.value);
    console.log(coffeeNbr);
    result.innerHTML = "";
    preparation.innerHTML = "";
    if (coffeeNbr < 1) {
        alert("Veuillez saisir un nombre valide de café s'il vous plaît!");
        return;
    }
    ;
    var _loop_1 = function (i) {
        var countSec = Math.floor(Math.random() * 8) + 3;
        var prepaMsg = document.createElement("p");
        prepaMsg.textContent = "Pr\u00E9paration du Caf\u00E9 ".concat(i, " ... (attente de ").concat(countSec, " secondes)");
        preparation.appendChild(prepaMsg);
        setTimeout(function () {
            var resultMsg = document.createElement("p");
            resultMsg.textContent = "R\u00E9sultat : Le caf\u00E9 ".concat(i, " est termin\u00E9 et servi ! Bonne d\u00E9gustation !");
            result.appendChild(resultMsg);
        }, countSec * 1000);
    };
    for (var i = 1; i <= coffeeNbr; i++) {
        _loop_1(i);
    }
});
