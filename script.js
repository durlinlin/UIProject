let menu = document.querySelector('.menu');
let menuItems = document.getElementsByClassName(".menuItem");
let hamburgerBtn = document.querySelector(".hamburger");
let bodyContainer = document.querySelector('.bodyContainer');
const ghibliUrl = "https://ghibliapi.herokuapp.com/films/";

bodyContainer.addEventListener('click', clear)

function clear() {
  let insertedContent = document.querySelector(".filmContainer");
  function removeContent() {
    insertedContent.remove()
  }
  if (insertedContent) {
    insertedContent.classList.add("bodyClear")
    setTimeout(removeContent, 1000) //removes images from the page after sliding animation
    // insertedContent.parentNode.removeChild(insertedContent);
    }
}

//closes burger menu 
function toggleMenu() {
  menu.classList.toggle('showMenu');
  hamburgerBtn.classList.toggle('hamburgerClicked');
}
hamburgerBtn.addEventListener('click', toggleMenu);

//Creates list based on fetched data
function createLinks(arr) {
  arr.forEach((movies) => {
    let menuhtmlTemplate = `<li onClick="selectMovie(event)"><a data-info="${movies.id}" class="menuItem"> ${movies.title}
     </a></li>`
    menu.insertAdjacentHTML("beforeend", menuhtmlTemplate);
    })
}
async function fetchStudioGhibli() {
  let response = await axios(ghibliUrl)
  createLinks(response.data);
}
fetchStudioGhibli();

// Each link in burger menu can select a new film
async function selectMovie(event) {
  toggleMenu() // Closes burger menu
  // console.log(event.target.dataset.info)
  let response = await axios(`https://ghibliapi.herokuapp.com/films/${event.target.dataset.info}`)
  // console.log(response)
  // console.log(response.data)
  displayImage(response.data);
}



function displayImage(res) {
  
  let insertedContent = document.querySelector(".filmContainer");

  if (insertedContent) {
    insertedContent.remove();//if content in filmContainer exists then it would remove it so that a new film can be displayed if not removed, content stacks over one another
    }
    let imagehtmlTemplate = `
    <div class ="filmContainer">
      <div class ="filmInfo">
          <h1>${res.title}</h1>
          <div class="infoWrap">
          <p><span>Director:</span> ${res.director}</p>
          <p><span>Producer:</span> ${res.producer}</p>
          <p><span>Release Year:</span> ${res.release_date}</p>
          <p><span>Movie length:</span> ${res.running_time} mins</p>
          <p>${res.description}</p>
          </div>
      </div>
      <img class="filmImage" src="${res.image}">
    </div>`
    bodyContainer.insertAdjacentHTML("beforeend", imagehtmlTemplate);
}

