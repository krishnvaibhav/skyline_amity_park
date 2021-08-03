const start = document.querySelector('#the-flat');
const header = document.querySelector('.header');

console.log(start);

const initCoords = start.getBoundingClientRect()

console.log(initCoords);

window.addEventListener('scroll',function(){
    console.log(this.scrollY);
    if(this.scrollY >= initCoords.top){
        header.classList.remove('header')
        header.classList.add('opacity-header')  
    }else{
        header.classList.add('header')
        header.classList.remove('opacity-header')
    }
})

