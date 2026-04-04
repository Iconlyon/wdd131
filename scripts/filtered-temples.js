const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
const gallery = document.querySelector(".gallery");
const pageTitle = document.querySelector("#page-title");

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {
    menuButton.innerHTML = "&times;";
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation menu");
  } else {
    menuButton.innerHTML = "&#9776;";
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  }
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },

];

function displayTemples(filteredTemples) {
  gallery.innerHTML = "";

  filteredTemples.forEach((temple) => {
    const card = document.createElement("figure");
    const title = document.createElement("h2");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const image = document.createElement("img");

    title.textContent = temple.templeName;
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    area.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;

    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = "lazy";
    image.width = 400;
    image.height = 250;

    card.append(title, location, dedicated, area, image);
    gallery.appendChild(card);
  });
}

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  pageTitle.textContent = "Home";
  displayTemples(temples);
});

oldLink.addEventListener("click", (e) => {
  e.preventDefault();
  pageTitle.textContent = "Old";
  displayTemples(temples.filter((temple) => new Date(temple.dedicated).getFullYear() < 1900));
});

newLink.addEventListener("click", (e) => {
  e.preventDefault();
  pageTitle.textContent = "New";
  displayTemples(temples.filter((temple) => new Date(temple.dedicated).getFullYear() > 2000));
});

largeLink.addEventListener("click", (e) => {
  e.preventDefault();
  pageTitle.textContent = "Large";
  displayTemples(temples.filter((temple) => temple.area > 90000));
});

smallLink.addEventListener("click", (e) => {
  e.preventDefault();
  pageTitle.textContent = "Small";
  displayTemples(temples.filter((temple) => temple.area < 10000));
});

displayTemples(temples);