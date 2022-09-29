let menu = document.querySelector('.menu');
let menuItems = document.getElementsByClassName(".menuItem");
let hamburgerBtn = document.querySelector(".hamburger");
let bodyContainer = document.querySelector('.bodyContainer');
let currentTitle = "";

function toggleMenu() {
  menu.classList.toggle('showMenu');
  hamburgerBtn.classList.toggle('hamburgerClicked');
}
hamburgerBtn.addEventListener('click', toggleMenu);

function toggleImage(event) {
  menu.classList.toggle('showMenu');
  hamburgerBtn.classList.toggle('hamburgerClicked');
  console.log(event.target.dataset.value)
}

const ghibliUrl = "https://ghibliapi.herokuapp.com/films/";

function createLinks(arr) {
  arr.forEach((movies) => {
    let menuhtmlTemplate = `<li onClick="toggleImage(event)"><a data-value="${movies.title}" class="menuItem"> ${movies.title}
     </a></li>`
    menu.insertAdjacentHTML("beforeend", menuhtmlTemplate);
    })
  }
function displayImage(arr){
  arr.map((movieImage) => {
    let imagehtmlTemplate = `<img src="${movieImage.image}">`
    movieImage.title.includes(currentTitle) &&
    bodyContainer.insertAdjacentHTML("beforeend", imagehtmlTemplate)
  })
}

async function fetchStudioGhibli() {
  let response = await axios(ghibliUrl)
  createLinks(response.data);
  displayImage(response.data);
}
fetchStudioGhibli();
  
// fetch(ghibliUrl)
//     .then(res => {
//         return res.json();
//     })
//     .then(res => {
//         console.log("success!", res);
//     })
//     .catch(err => {
//         console.log("something went wrong...", err);
//     });
