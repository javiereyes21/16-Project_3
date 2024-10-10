// Create the map
let myMap = L.map("map", {
    center: [33.330035, -111.925976],
    zoom: 9.8
});

// Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Array of markers with coordinates and titles
const markers = [
    { coords: [33.6865, -112.2658], title: "Liberty High School 97%" },
    { coords: [33.5833, -112.4589], title: "Shadow Ridge High School 98%" },
    { coords: [33.6899, -112.2042], title: "Mountain Ridge High School 98%" },
    { coords: [33.63, -112.4432], title: "Willow Canyon High School 97%" },
    { coords: [33.7173, -112.1365], title: "Sandra Day O'Connor High School 97%" }
];

// Loop through the markers array and add each marker to the map
markers.forEach(marker => {
    L.marker(marker.coords) // Create marker with default icon
        .addTo(myMap) // Add the marker to the map
        .bindPopup(marker.title); // Bind a popup with the title to the marker
});

const coloredMarkers = [

    { coords: [33.5434191,-112.3382495,12], title: "EdOptions HS Learning Center 14%", color: "red"},
    { coords: [33.4723284,-112.0681029,17], title: "Pathways in Education 14%", color: "red" },
    { coords: [33.5512249,-112.1547713,17], title: "Ombudsman - Charter Metro 13%", color: "red"},
    { coords: [32.1360785,-111.0050529,17], title: "Ombudsman - Charter Valencia 12%", color: "red"},
    { coords: [33.4953846,-112.2759582,17], title: "Arizona Preparatory Academy 9%", color: "red"}
];

coloredMarkers.forEach(marker => {
    L.circleMarker(marker.coords, {
        color: marker.color, // Set the border color
        fillColor: marker.color, // Set the fill color
        fillOpacity: 0.5,
        radius: 5 // Set radius size for the marker
    })
    .addTo(myMap)
    .bindPopup(marker.title);
});