//add a skip link... make it the first element
//target the correct section to skip to
// hide it until we hit tab 
// reveal skip button what tab is clicked


function updateFares(element) {
    //pretend I am checking flight data for correct prices
    //then we update the markup for the user
    const flightCardContents = element.parentElement.parentElement;
    const flightCardRates = flightCardContents.querySelector(".flight-card-rate");
    const price = 3000;
    flightCardRates.textContent = `${price} credits`;
    console.log(element, flightCardContents, flightCardRates);
  }