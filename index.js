
const burger = document.getElementsByClassName("navbar_container_menu_burger");
const menuItem = document.getElementsByClassName("navbar_container_menu_item");
const menuItemMobile = document.getElementsByClassName("navbar_container_menu_burger_mobile")
function toggleMenu() {
    if(burger[0].classList.contains('open')) {
        burger[0].classList.remove('open');
        menuItem[0].classList.remove('open');
        menuItemMobile[0].classList.remove('open');
    }
    else {
        burger[0].classList.add('open')
        menuItem[0].classList.add('open')
        menuItemMobile[0].classList.add('open')
    }


}