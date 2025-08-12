const breedsContainer  = document.getElementById("breedsContainer");

fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => response.json())
    .then(data  => {
        data.forEach(breed => {
        const div = document.createElement("div");
        div.classList.add("breed");

        div.innerHTML = `
        <h2>${breed.name}</h2>
        <p><strong>Contry:</strong> ${breed.origin}</p>
        <p><strong>Intelligence:</strong> ${breed.intelligence} / 5</p>
        <p>${breed.description}</p>
        `;

        breedsContainer.appendChild(div);
    });
})
.catch(error => {
    breedsContainer.innerHTML = "Error loading cat breeds 😿";
    console.error(error);
});

