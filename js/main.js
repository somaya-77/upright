let links = document.querySelectorAll(".links ul li")

links.forEach((li) => {
    li.addEventListener('click',  removeActiveLinksLI)
})

function removeActiveLinksLI(){
    links.forEach((li) => {
        li.classList.remove("active")
        this.classList.add("active")
    })
}
// ********************************************

let containImg = Array.from(document.querySelectorAll('.box-img'))

let countArray = containImg.length;

let countNum = 1;

let numbers = document.querySelector(".numbers")

let numberSpan = Array.from(document.querySelectorAll(".numbers span"))

let linkImages = document.querySelectorAll(".link-filter li")

// get all images
let allImages = Array.from(document.querySelectorAll('.images-filter .parent-img'))
console.log(allImages)
for(let i = 0; i < numberSpan.length; i++){

    numberSpan[i].onclick = function () {

        countNum = parseInt(this.getAttribute('data-index'))

        checker()
    }
}


function checker(){

    // remove all active classes
    removeAllActive()

    containImg[countNum -1].classList.add('active')

    numbers.children[countNum -1].classList.add('active')

}
checker()



// Remove active class of containImg & numbers
function removeAllActive(){

    // loop containImg
    containImg.forEach(function(img) {
        img.classList.remove('active')
    })

    numberSpan.forEach(function(span) {
        span.classList.remove('active')
    })
}


linkImages.forEach((li) => {
    li.addEventListener('click', removeActiveLinks)
    li.addEventListener('click', visibleImg)
})
// remove active class
function removeActiveLinks(){
    linkImages.forEach((e) => {
        e.classList.remove("active")
        this.classList.add("active")
    })
}

function visibleImg (){
    allImages.forEach((img) => {
        img.style.display = 'none';
    })
    document.querySelectorAll(this.dataset.img).forEach((el) => {
        el.style.display = 'block'
    })
}