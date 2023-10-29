window.addEventListener ("scroll",() => {
    const header =  document.querySelector('.header-transform')

    if (window.scrollY>header.offsetHeight){
        header.classList.add("header-fix")
    }
    else{
        header.classList.remove("header-fix")
    }
})