const cats = [
  {name: "Mittens",
   image: "./cat1.jpg",
   clicks: 0,},
  {name: "Snowball",
   image: "./cat2.jpg",
   clicks: 0,},
]


function displayCat(cat){
  // create local variables for the properties of the cat object
  let name = cat.name;
  let imagePath = cat.image;

  // create a div to hold each cat's info
  let catBox = document.createElement('div');
  catBox.classList.add('cat-container');

  // create the heading with the cats's name
  let catName = document.createElement('h2');
  catName.classList.add('catHeading')
  catName.textContent = name;

  // create the image element
  let catPic = document.createElement('img');
  catPic.src = imagePath;

  // add event listener to the cat picture
  catPic.addEventListener('click', function(){
    cat['clicks']++;
    outPutMsg.innerText = `${name} has ${cat['clicks']} clicks`;
  })

  // create the output
  let outPutMsg = document.createElement('div');
  outPutMsg.textContent = `${name} has ${cat['clicks']} clicks`;

  // append the elements onto the div that will contain the cat
  catBox.appendChild(catName);
  catBox.appendChild(catPic);
  catBox.appendChild(outPutMsg);

  // return the div to be appended to the outer container
  return catBox;
}

const outerContainer = document.getElementById('outerContainer');


for (let cat of cats) {
  let innerContainer = displayCat(cat);
  outerContainer.appendChild(innerContainer);
}
// const counterDiv = document.getElementById('output-div');
// let catClicks = 0;

// catImage.addEventListener('click', function(){
//   catClicks++;
//   counterDiv.innerText = catClicks;
// }
