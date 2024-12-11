document.addEventListener("DOMContentLoaded", function () {

    if (window.location.pathname.endsWith("flights.html")) {
        const flightResultsContainer = document.getElementById("flightResults");

        const flights = [
            { id: 1, departure: "2024-12-01", return: "2024-12-15", destination: "Paris", price: 500, image: "images/paris.jpg" },
            { id: 2, departure: "2024-12-05", return: "2024-12-20", destination: "London", price: 450, image: "images/london.jpg" },
            { id: 3, departure: "2024-12-10", return: "2024-12-25", destination: "New York", price: 700, image: "images/new-york.jpg" },
            { id: 4, departure: "2024-12-01", return: "2024-12-15", destination: "Amsterdam", price: 500, image: "images/amsterdam.jpg" },
            { id: 5, departure: "2024-12-05", return: "2024-12-20", destination: "Lisbon", price: 450, image: "images/portugal.jpg" },
            { id: 6, departure: "2024-12-10", return: "2024-12-25", destination: "Rome", price: 700, image: "images/rome.jpg" },
            { id: 7, departure: "2024-12-10", return: "2024-12-25", destination: "Rome", price: 700, image: "images/rome.jpg" },
            { id: 7, departure: "2024-12-10", return: "2024-12-25", destination: "Rome", price: 700, image: "images/rome.jpg" }
        ];
        

        function displayFlights(flights) {
            if (!flightResultsContainer) {
                console.error("Element #flightResults not found!");
                return;
            }
        
            flightResultsContainer.innerHTML = '';
        
            flights.forEach(flight => {
                const flightElement = document.createElement("div");
                flightElement.classList.add("destination_card");
        
                flightElement.innerHTML = `
                <img src="${flight.image}" alt="${flight.destination}"/>
                <div class="destination_card_details">
                  <div>
                    <h4>${flight.destination}</h4>
                    <p>${flight.departure} - ${flight.return}</p>
                    <p><strong>Price: $${flight.price}</strong></p>
                  </div>
                  </div>
                        <button class="book-btn" data-flight-id="${flight.id}" onclick="redirectToBooking()">Book Now</button>
                    </div>
                </div>
              </div>
            `;
            
            const bookButton = flightElement.querySelector('.book-btn');
            bookButton.addEventListener('click', redirectToBooking);

            function redirectToBooking() {
                window.location.href = 'booking.html';
            }
        
                flightResultsContainer.appendChild(flightElement);
            });

        }
        
        displayFlights(flights);
    }


    const menuBtn = document.getElementById("menu_btn");
    const navLinks = document.getElementById("nav_links");
    const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;

    if (menuBtn && navLinks && menuBtnIcon) {
        menuBtn.addEventListener("click", (e) => {
            navLinks.classList.toggle("open");

            const isOpen = navLinks.classList.contains("open");
            menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
        });

        navLinks.addEventListener("click", (e) => {
            navLinks.classList.remove("open");
            menuBtnIcon.setAttribute("class", "ri-menu-line");
        });
    }


    const flightBookingForm = document.getElementById("flightBookingForm");
    if (flightBookingForm) {
        flightBookingForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const departure = document.getElementById("departure").value;
            const returnDate = document.getElementById("return").value;
            const destination = document.getElementById("destination").value;
            const people = document.getElementById("people").value;
            const luggage = document.getElementById("luggage").value;

            if (!departure || !destination || !people) {
                alert("Please fill in all required fields.");
                return;
            }


            const flightSearchData = {
                departure,
                returnDate: returnDate || "One-way",
                destination,
                people,
                luggage: luggage || "No luggage",
            };

            localStorage.setItem("flightSearchData", JSON.stringify(flightSearchData));

            window.location.href = "flights.html";
        });
    }

    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const departureDate = document.getElementById('departure');
    const returnDate = document.getElementById('return');
    if (departureDate && returnDate) {
        departureDate.setAttribute('min', today);
        returnDate.setAttribute('min', today);

        // Ensure return date is not before departure date
        departureDate.addEventListener('change', () => {
            returnDate.setAttribute('min', departureDate.value);
        });
    }
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".destination_card", {
    ...scrollRevealOption,
    interval: 500,
});


ScrollReveal().reveal(".destination_grid", {
    ...scrollRevealOption,
    interval: 500,
});

function goBack() {
    const form = document.getElementById('booking-form');
    if (form) {
      form.reset();
    }
    window.history.back();
  }