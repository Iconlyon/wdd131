const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");
const reviewCount = document.querySelector("#reviewCount");

year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

let count = Number(localStorage.getItem("reviewCount")) || 0;
count += 1;
localStorage.setItem("reviewCount", count);
reviewCount.textContent = count;