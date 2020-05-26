console.log("test")
let residentButtons = document.querySelectorAll('.residents');
for (let residentButton of residentButtons) {
    residentButton.addEventListener('click', function () {
        for (let residentLink of this.querySelectorAll('a')) {
            fetch(residentLink.getAttribute('href'))  // set the path; the method is GET by default, but can be modified with a second parameter
            .then((response) => response.json())  // parse JSON format into JS object
            .then((data) => {
                console.log(data.name);
            })
        }
    });
}