const catImage = document.getElementById("catImage");
const newCatBtn = document.getElementById("newCatBtn");

function fetchCat() {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        catImage.src = data[0].url;
    })
    .catch(error => {
        console.error("Error fetching cat image 😿:", error);
     
    });
}

newCatBtn.addEventListener("click", fetchCat);

// Show one cat immediately 
fetchCat();