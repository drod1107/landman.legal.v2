// Get API key from Parcel's environment variables
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

document.addEventListener("DOMContentLoaded", function () {
  if (!apiKey) {
    console.error("Google Maps API key is missing! Check your .env file.");
  }

  // Dynamically update iframe src
  document.getElementById("map-frame").src =
    `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Law+office+of+nathaniel+landman+llc&zoom=11`;
});
