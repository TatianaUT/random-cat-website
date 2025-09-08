const breedsContainer  = document.getElementById("breedsContainer");

fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => response.json())
    .then(data => {
        data.forEach(breed => {
        const div = document.createElement("div");
        div.classList.add("breed");

// Check either breed.image.url or fallback by reference_image_id
        let imgUrl = null;
        if (breed.image && breed.image.url) {
            imgUrl = breed.image.url;
        } else if (breed.reference_image_id) {
            // Making an additional request to the API
            //fetch(`https://api.thecatapi.com/v1/images/${breed.reference_image_id}`)
             //   .then(res => res.json())
             //   .then(imgData => {
            imgUrl = `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`;
        }
        // Rendering the card
        renderBreed(breed, imgUrl, div);
        breedsContainer.appendChild(div);
        });
    })
    .catch(error => {
        breedsContainer.innerHTML = "❌ Error loading cat breeds 😿";
        console.error("Download error:", error);
    });
    
    function renderBreed(breed, imgUrl, div) {
        div.innerHTML = `
            <h2>${breed.name}</h2>
            ${
                imgUrl 
                ? `<img src="${imgUrl}" alt="${breed.name}" style="width:250px; border-radius:8px;">` 
                : `<p> 🐾 No image available</p>`
            }
            <p><strong>Country:</strong> ${breed.origin}</p>
            <p><strong>Intelligence:</strong> ${breed.intelligence} / 5</p>
            <p>${breed.description}</p>
            `;
    }
         

        



