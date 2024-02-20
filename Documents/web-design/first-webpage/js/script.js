// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello, World!";

const imgElement = document.querySelector("img");

const img1URL = "img/Ala-Too.png";
const img2URL = "img/COMSEP-23.png";

function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src",img2URL);
    } else {
        imgElement.setAttribute("src", img1URL)
    }
}

imgElement.onclick = changePhoto;

document.getElementById("change-name").addEventListener("click", function() {
    var name = prompt("Please enter your name:");
    if (name != null) {
        document.getElementById("header").innerText = "Welcome " + name + "!";
    }
});


