// navbar 

document.getElementById("menuBtn").onclick = function () { fun() }

function fun() {
    document.getElementById("hambargurMenu").classList.toggle('activeMenu')
}


//accordian
const accordian = document.getElementsByClassName('contentBox');

for (i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

// portfolio 
const icon = document.getElementsByClassName('portfolio-info');

//slider
const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar

});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})