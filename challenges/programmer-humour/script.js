function consoleLogAPIData() {
  fetch("https://xkcd.now.sh/?comic=latest")
    // Get the response and extract the JSON
    .then(function (response) {
      return response.json();
    })
    // Do something with the JSON
    .then((data) => {
      console.log(data);
      let imageElement = document.getElementById("image");
      imageElement.src = data.img;
    })
    .catch((error) => console.log(error));
}

consoleLogAPIData();
