import trips from "./trips.js"
function generateTripCards() {
    const tripContainer = document.getElementById('tripContainer');

    // Loop through each trip and create a card for it
    trips.forEach(trip => {
        const cardHtml = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title"><b>City : </b>${trip.cityName}</h5>
                                <p class="card-text"><b>Package : </b>Rs. ${trip.package}</p>
                                <p class="card-text"><b>Duration : </b>${trip.duration}</p>
                                <p class="card-text"><b>Upcoming Trip Date : </b>${trip.upcomingTripDate}</p>
                            </div>
                        </div>
                    </div>
                `;
        tripContainer.innerHTML += cardHtml;
    });
}

// Call the function to generate trip cards when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', generateTripCards);