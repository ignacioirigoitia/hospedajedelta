/* ****** Menu ****** */
((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
        $menu = d.querySelector(".menu");

        /* cuando hacemos click, nos cambia el icono de boton hacia la cruz y nos activa el menu */
    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

        /* cuando seleccionamos un elemento de la lista, nos cierra el menu y nos lleva hacia el ancla seleccionada */
    d.addEventListener("click", (e) => {
        if(!e.target.matches(".menu a")) return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    });
})(document);

/* const d = document,
    w = window;

d.addEventListener("DOMContentLoaded", (e) => {
    console.log("vinculado")
    const $videos = d.querySelectorAll("video[data-smart-video]");

    const cb = (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            };

            w.addEventListener("visibilitychange", (e) =>
                d.visibilityState === "visible"
                ? entry.target.pause()
                : entry.target.play()
            );
        });
    };

    const observer = new IntersectionObserver(cb, { threshold : 1 });

    $videos.forEach((el) => observer.observe(el));
}); */

const d = document;

function contactFormValidations(){
    const $formulario = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");

    /* console.log($inputs); */

    $inputs.forEach((input) => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e) => {
        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;
            /* console.log($input, pattern); */

            if (pattern && $input.value !== "") {
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
            };

            if (!pattern) {
                return $input.value === ""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
            };
        };
    });

    d.addEventListener("submit", (e) => {
        // e.preventDefault();
        alert("Enviando Formulario");

        const $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none");

        setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.remove("none");
            $formulario.reset();

            setTimeout(() => $response.classList.add("none"), 3000);
        }, 3000);
    });
};

d.addEventListener("DOMContentLoaded", (e) =>{
    contactFormValidations();
});