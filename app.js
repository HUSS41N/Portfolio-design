nav_show = () => {
    let burger = document.querySelector('.nav-burger')
    let nav = document.querySelector('.nav-links')
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-links-show')
    })
}
nav_show()