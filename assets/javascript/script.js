const menuIcon = document.getElementById('menu-icon')
const menuList = document.getElementById('menu-list')
// menuIcon.style.border = "2px solid black"
menuIcon.style.borderRadius = '5px'

menuIcon.addEventListener('click', function () {
    menuList.classList.toggle('hidden')
    menuIcon.classList.toggle('menu-icon-border')
})