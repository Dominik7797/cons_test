let residentButtons = document.querySelectorAll('.residents');
for (let residentButton of residentButtons) {
    residentButton.addEventListener('click', function () {
        for (let residentLink of this.querySelectorAll('a')) {
            fetch(residentLink.getAttribute('href'))  // set the path; the method is GET by default, but can be modified with a second parameter
            .then((response) => response.json())  // parse JSON format into JS object
            .then((data) => {})}
        });
}
function getNextPlanet() {
    fetch('https://swapi.dev/api/planets/?page=2')  // set the path; the method is GET by default, but can be modified with a second parameter
    .then((response) => response.json())  // parse JSON format into JS object
    .then((data) => {
        document.getElementById('row').innerHTML = data.results[0];
        console.log(data.results[0])
    })
    }