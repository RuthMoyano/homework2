const starsSection = document.querySelector('#starsSection')
const removeButton = document.querySelector('#remove')
const counterSection = document.querySelector('#counterSection')
const addButton = document.querySelector('#add')



removeButton.addEventListener("click", removeButtonClicked)
addButton.addEventListener("click", addButtonClicked)



let counter = 0

function removeButtonClicked(){
    if (counter === 0){ }
    else { 
        counter = counter - 1
        counterChanged()
        removeStars()
        }

}
function addButtonClicked() {
    counter = counter + 1
    counterChanged()
    displayStars()
}

function counterChanged(){
    counterSection.innerText = counter
}
function displayStars() {
    const parent = document.createElement('div');
    parent.className = 'starBox';


    const image = document.createElement('img');
    image.className = 'starBoxImage'
    image.src = "./starLogo.png"

    parent.appendChild(image)
    starsSection.appendChild(parent)
}
function removeStars() {
    starsSection.removeChild(starsSection.lastChild);
}
