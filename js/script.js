const burger = document.getElementById('menu')
const subpageslist = document.getElementById('subpages_list')


function toggleMenu() {
    subpageslist.classList.toggle('subpages_list_visible')

    burger.classList.toggle('menu_x')
}

burger.addEventListener('click', toggleMenu)

