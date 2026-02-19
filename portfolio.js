
        const scrollContainer = document.querySelector(".horizontal-scroll");
        const aboutSection = document.getElementById("about");

        // 1. Défilement à la molette (votre code existant)
        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });

        // 2. Centrer sur "About" au chargement de la page
        window.addEventListener("load", () => {
            // On calcule la position de la section "About" et on déplace la barre de défilement horizontale
            scrollContainer.scrollLeft = aboutSection.offsetLeft;
        });
    