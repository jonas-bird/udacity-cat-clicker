const catImage = document.getElementById('cat-picture');
const counterDiv = document.getElementById('output-div');
let catClicks = 0;

catImage.addEventListener('click', function(){
  catClicks++;
  counterDiv.innerText = catClicks;
})
