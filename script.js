const cats = [
  {name: "Mittens",
   image: "./cat1.jpg"},
  {name: "Snowball",
   image: "./cat2.jpg"},
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

  // append the elements onto the div that will contain the cat
  catBox.appendChild(catName);
  catBox.appendChild(catPic);

  // return the div to be appended to the outer container
  return catBox;
}

const outerContainer = document.getElementById('outerContainer');


for (let cat of cats) {
  outerContainer.appendChild(displayCat(cat));
}
