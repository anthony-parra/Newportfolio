const home = document.getElementById("home");
const aboutMe = document.getElementById("aboutMe");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const blocImage = document.getElementById("bloc_image");

function click() {
    home.addEventListener("click", () => {
        blocImage.innerHTML = `<img id="spinner" src="Image/icon-loader!.png" alt="Image d'un spinner qui tourne entre chaque page" />`;
    })
}

click;