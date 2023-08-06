const toggleBtn = document.querySelector('.toggle_btn')
const dropDownMenu = document.querySelector('.dropdown_menu')
const buttonDrawer = document.querySelector('.toggle_btn i')
toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    buttonDrawer.classList = !dropDownMenu.classList.contains('open') ? 'fa-solid fa-bars' : 'fa-solid fa-x'
}