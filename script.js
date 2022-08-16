((d)=> {
    const $btnMenu = d.querySelector(".menu-btn");
    const $menu = d.querySelector('.menu');

    $btnMenu.addEventListener('click',(e) => {
        $btnMenu.firstElementChild.classList.toggle('none');
        $btnMenu.lastElementChild.classList.toggle('none');
    })
})(document)