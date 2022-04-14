let harmburgerOpen = document.querySelector(".harmburger img")
let harmburgerClose = document.querySelector(".mobileNav img")
let mobileNav = document.querySelector(".mobileNav")
let mobileNavLinks = document.querySelectorAll(".mobileNav a")
let desktopNavLinks = document.querySelectorAll(".nav a")
mobileNavLinks = [...mobileNavLinks]
desktopNavLinks = [...desktopNavLinks]

let header = document.querySelector("header")
let main = document.querySelector("main")



function closeMenu(){
    mobileNav.classList.remove("active");
}
function openMenu(){
    mobileNav.classList.add("active");
}
function headerBackground(){
    if(window.scrollY >= 60){
    header.style.backgroundColor = "white"
    header.style.boxShadow = "0 2px 10px #acacac"
    desktopNavLinks.forEach((link)=>{
        link.style.color = "black"
    })
    harmburgerOpen.style.filter = "invert(0)"
    
    }else{
    header.style.backgroundColor = ""  
    header.style.boxShadow = ""
    harmburgerOpen.style.filter = "invert(100%)"
    desktopNavLinks.forEach((link)=>{
        link.style.color = "white"
    })
    }
}


harmburgerOpen.addEventListener('click', openMenu)
harmburgerClose.addEventListener("click", closeMenu)

mobileNavLinks.forEach(link=>{
    link.addEventListener("click", closeMenu)
})


window.addEventListener("scroll", headerBackground)