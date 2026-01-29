document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "5c8204014d894e7c8b291108231107";

    const btn = document.querySelector("#btn-submit");
    const input = document.querySelector("#location");

    btn.addEventListener("click", async () => {
        const cityName = input.value.trim();

        // Sécurisation du formulaire
        if (cityName === "") {
            alert("Veuillez entrer un lieu.");
            return;
        }

        try {
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`;
            const response = await fetch(apiUrl);

            if (!response.ok) throw new Error("Lieu introuvable");

            const data = await response.json();
            console.log(data);

            // Remplissage des données
            document.querySelector("#coordonnees").textContent =
                `${data.location.name}, ${data.location.region}`;
            document.querySelector("#temperature").textContent =
                `Température : ${data.current.temp_c}°C`;
            document.querySelector("#humidity").textContent =
                `Humidité : ${data.current.humidity}%`;

            // Gestion de l'affichage (Consigne 3)
            document.querySelector("#formulaire").style.display = "none";
            document.querySelector("#meteo").style.display = "block";
        } catch (error) {
            alert("Erreur : " + error.message);
        }
    });
});

/*
document.addEventListener("DOMContentLoaded", async function () {

    let inputLocation = document.querySelector("#location") //as HTMLInputElement;
    let button = document.querySelector("#btn-submit") //as HTMLButtonElement;
    let humidty = document.querySelector("#humidty");
    let temperature = document.querySelector("#temperature");
    let coordonnees = document.querySelector("#coordonnees");
    let image = document.querySelector("#image");

    button.addEventListener('click', () => {
        window.location.href = 'meteo.html'


    });


})
*/
