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