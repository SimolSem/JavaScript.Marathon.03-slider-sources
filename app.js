const upbtn = document.querySelector('.up-button') 
const downbtn = document.querySelector('.down-button')

const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')

const sliderCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0


sidebar.style.top = `-${(sliderCount - 1 )* 100}vh` //Обратные кавычки

upbtn.addEventListener('click', () => {
    ChangeSlide('up')
})
downbtn.addEventListener('click', () => {
    ChangeSlide('down')    
})

document.addEventListener('keydown', 
event => {
    if (event.key === 'ArrowUp') {
        ChangeSlide('up')    
    } else if (event.key === 'ArrowDown') {
        ChangeSlide('down')    
    }
})

function ChangeSlide(direction) {

    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === sliderCount) {
            activeSlideIndex = 0
        }
    } else {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = sliderCount - 1
        }

    }

    const heigth = container.clientHeight



    mainSlide.style.transform = `translateY(-${(activeSlideIndex * heigth)}px)`
    sidebar.style.transform = `translateY(${(activeSlideIndex * heigth)}px)`

  

}