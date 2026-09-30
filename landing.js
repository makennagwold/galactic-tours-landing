//add a skip link... make it the first element
//target the correct section to skip to
// hide it until we hit tab 
// reveal skip button what tab is clicked

//default exports don't need curly brackets

import flightCardData from "flightCardData.js"


function makeFlightCards(data) {
    //get data from json/js
    const flightCardSection = document.querySelector(".dynamic-sale.flight-cards")
    function makeFlightCard(flightData) {
        return `
            <div class="dynamic-sale flight-card">
                <div class="flight-card-image"></div>
                <div class="flight-card-contents">
                    <div class="flight-card-destinations-section">
                        <div class="flight-card-destinations">
                            <span class="departure-planet">${flightData.departure}</span>
                            <span>to</span>
                            <span class="arrival-planet">${flightData.destination}</span>
                        </div>
                        <div class="flight-card-dates">
                            <p>XX/XX/XXXX - XX/XX/XXXX</p>
                        </div>
                    </div>
                    <div class="flight-card-rates">
                        <p>from</p>
                        <span class="flight-card-rate">2000 credits</span>
                        <span class="flight-type">Round Trip | Economy</span>
                    </div>
                    <div class="flight-card-button">
                        <button onclick="updateFares(this)"><p>See Latest Fare</p></button>
                    </div>
                </div>
            </div>
        `;
    }
    function renderFlightCards(flightCards) {
        const html = flightCards.map(makeFlightCard).join("");
        flightCardSection.replaceChildren();
        //flightCardSection.insertAdjacentHTML(position:insert beforeBegin afterBegin beforeEnd afterEnd, html )
        flightCardSection.insertAdjacentHTML("afterbegin", html);
    };
    renderFlightCards(data);
}
makeFlightCards(flightCardData);

function updateFares(element) {
    //pretend I am checking flight data for correct prices
    //then we update the markup for the user
    const flightCardContents = element.parentElement.parentElement;
    const flightCardRates = flightCardContents.querySelector(".flight-card-rate");
    const price = 3000;
    flightCardRates.textContent = `${price} credits`;
    console.log(element, flightCardContents, flightCardRates);
  }