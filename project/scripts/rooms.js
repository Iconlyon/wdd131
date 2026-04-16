// ROOM DATA (Array + Objects) 
const rooms = [
  {
    name: "Single Room",
    price: 50,
    image: "images/room1.jpg"
  },
  {
    name: "Double Room",
    price: 80,
    image: "images/room2.jpg"
  },
  {
    name: "Luxury Suite",
    price: 150,
    image: "images/room3.jpg"
  }
];


// DISPLAY ROOMS

function displayRooms() {
  const container = document.getElementById("rooms-container");
  if (!container) return;

  container.innerHTML = rooms.map(room => `
    <div class="room">
      <img src="${room.image}" alt="${room.name}" loading="lazy"
           onerror="this.src='https://via.placeholder.com/300'">
      <h3>${room.name}</h3>
      <p>Price: $${room.price}</p>
      <button onclick="viewDetails('${room.name}')">View Details</button>
    </div>
  `).join("");
}


// VIEW DETAILS (save + redirect)

function viewDetails(roomName) {
  localStorage.setItem("selectedRoom", roomName);
  window.location.href = "details.html";
}


// DISPLAY DETAILS PAGE

function displayDetails() {
  const container = document.getElementById("details");
  if (!container) return;

  const selected = localStorage.getItem("selectedRoom");

  const room = rooms.find(r => r.name === selected);

  if (!room) {
    container.innerHTML = "<p>No room selected</p>";
    return;
  }

  container.innerHTML = `
    <h2>${room.name}</h2>
    <img src="${room.image}" alt="${room.name}" width="300"
         onerror="this.src='https://via.placeholder.com/300'">
    <p>Price: $${room.price}</p>
    <p>This is a comfortable and well-furnished room perfect for your stay.</p>
    <button onclick="goBook()">Book Now</button>
  `;
}


// GO TO BOOKING SECTION

function goBook() {
  window.location.href = "index.html#booking";
}


// SCROLL TO BOOKING (Home Page)

function scrollToBooking() {
  if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
    const section = document.getElementById("booking");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.location.href = "index.html#booking";
  }
}


// HANDLE BOOKING FORM

function handleBooking() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    const message = document.getElementById("message");

    // CONDITION CHECK
    if (!name || !email || !checkin || !checkout) {
      message.textContent = "Please fill in all fields.";
      return;
    }

    if (checkin >= checkout) {
      message.textContent = "Check-out date must be after check-in date.";
      return;
    }

    const selectedRoom = localStorage.getItem("selectedRoom") || "Not selected";

    // STORE DATA
    const booking = {
      name,
      email,
      checkin,
      checkout,
      room: selectedRoom
    };

    localStorage.setItem("booking", JSON.stringify(booking));

    message.textContent = `Thank you ${name}! Your booking for ${selectedRoom} is confirmed.`;

    form.reset();
  });
}


// INIT (Runs on all pages)

document.addEventListener("DOMContentLoaded", () => {
  displayRooms();
  displayDetails();
  handleBooking();
});