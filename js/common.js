window.addEventListener ("scroll",() => {
    const header =  document.querySelector('.header')
    const video = document.querySelector('.video-wrapper')
    if (window.scrollY>header.offsetHeight){
        header.classList.add("header-fix")
        video.classList.add("video-wrapper-asynchronous")
    }
    else{
        header.classList.remove("header-fix")
    }
})