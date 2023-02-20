let toggle = document.getElementById('toggle');
let red = document.getElementById('red')
let blue = document.getElementById('blue')
let black = document.getElementById('green')
red.addEventListener('click',function(){
toggle.style.backgroundImage = 'url(BMW_bike_img/BMW1.png)'
})
blue.addEventListener('click',function(){
    toggle.style.backgroundImage = 'url(BMW_bike_img/BMW2.png)'
})
green.addEventListener('click',function(){
    toggle.style.backgroundImage = 'url(BMW_bike_img/BMW3.png)'
})