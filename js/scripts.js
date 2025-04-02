// JavaScript per al botó de tornada al principi
const backToTopButton = document.getElementById("back-to-top-btn");

// Fes que el botó porti l'usuari al principi de la pàgina
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplaçament suau 
        });
});