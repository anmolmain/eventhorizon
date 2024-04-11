import trips from "./trips.js"
        function generateTripCards() {
            const tripContainer = document.getElementById('tripContainer');

            // Loop through each trip and create a card for it
            trips.forEach(trip => {
                const cardHtml = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${trip.cityName}</h5>
                                <p class="card-text">Package: ${trip.package}</p>
                                <p class="card-text">Duration: ${trip.duration}</p>
                                <p class="card-text">Upcoming Trip Date: ${trip.upcomingTripDate}</p>
                            </div>
                        </div>
                    </div>
                `;
                tripContainer.innerHTML += cardHtml;
            });
        }

        // Call the function to generate trip cards when the DOM content is fully loaded
        document.addEventListener('DOMContentLoaded', generateTripCards);