const burger = document.getElementById('burger')
const subpageslist = document.getElementById('subpages_list')


function toggleMenu() {
    subpageslist.classList.toggle('subpages_list_visible')

    burger.classList.toggle('burger_x')
}

burger.addEventListener('click', toggleMenu)
