let mySlider = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
]
let img = document.querySelector('#slider img');
let index = 0;
img.src = mySlider[index]

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
    index++;
    if (index > mySlider.length - 1) {
        index = 0;
    }
    img.src = mySlider[index]
})
prev.addEventListener('click', function () {
    index--;
    if (index == -1) {
        index = mySlider.length - 1;
    }
    img.src = mySlider[index]
})

function AutoPlay() {
    index++;
    if (index > mySlider.length - 1) {
        index = 0;
    }
    img.src = mySlider[index]
}

setInterval(() => {
    AutoPlay();
}, 3000);

let dots1 = document.querySelector('.dots1');
let dots2 = document.querySelector('.dots2');
let dots3 = document.querySelector('.dots3');

dots1.addEventListener('click', function () {
    img.src = "images/image1.jpg";
})
dots2.addEventListener('click', function () {
    img.src = "images/image2.jpg";
})
dots3.addEventListener('click', function () {
    img.src = "images/image3.jpg";
})

// Fibonacci

var a, b, result;
 a = 1;
 b = 0;
 result = b;
 for (var i=1; i<=20; i++) {
  console.log(result+"<br/>");
  result = a + b;
  a = b;
  b = result;
  }