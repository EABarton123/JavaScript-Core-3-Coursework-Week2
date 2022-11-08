function loadRandomImage() {
  const buttonElement = document.getElementById("button");
  buttonElement.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/image/random")
      // Get the response and extract the JSON
      .then(function (response) {
        return response.json();
      })
      // Do something with the JSON
      .then((image) => {
        let imageElement = document.getElementById("image");
        imageElement.src = image.message;
      })
      .catch((error) => console.log(error));
  });
}

loadRandomImage();
