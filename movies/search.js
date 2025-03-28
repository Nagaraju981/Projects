let slideShowArray = [
  "https://image-resizer-cloud-api.akamaized.net/image/F1DE08EE-79B3-44CC-90D9-0303FE935BCC/0-3x1.jpg?width=1800&updatedTime=2024-08-30T14:33:20Z&dt=Web",
  "https://image-resizer-cloud-api.akamaized.net/image/3D24C9D0-A513-488B-9CAF-50D4BF2D13C3/0-3x1.jpg?width=1800&updatedTime=2024-08-30T14:37:12Z&dt=Web",
  "https://image-resizer-cloud-api.akamaized.net/image/2CD58353-24C9-4F51-9279-C8E1746D5C1F/0-3x1.jpg?width=1800&updatedTime=2024-08-31T12:12:14Z&dt=Web",
];

function slideShow() {
  let i = 0;

  let div = document.getElementById("carousel");
  let img = document.createElement("img");
  img.src = slideShowArray[0];

  div.append(img);

  setInterval(function () {
    if (i == slideShowArray.length) {
      i = 0;
    }
    img.src = slideShowArray[i]; //0, 1, 2,0,1,2
    i = i + 1;
    // if i=3 , the image is will not be replaced.
  }, 1000);
}

slideShow();

// fetching the movies from omdb api

async function searchMovies() {
  try {
    let loader_div = document.getElementById("loader_div");
    loader_div.style.display = "block";

    let query = document.getElementById("query").value;

    let response = await fetch(
      `http://www.omdbapi.com/?apikey=96030101&s=${query}`
    );

    let data = await response.json(); // to convert json to object data;
    console.log(data.Search);

    appendMovies(data.Search);
  } catch (error) {
    console.log("fetch error:", error);
  }
}

function appendMovies(data) {
  let loader_div = document.getElementById("loader_div");
  loader_div.style.display = "none";

  let data_div = document.getElementById("movies");

  data_div.innerHTML = "";

  data_div.id = "movies";

  data.forEach(function (element) {
    let div = document.createElement("div");

    let title = document.createElement("p");
    title.innerText = `Name : ${element.Title}`;

    let year = document.createElement("p");
    year.innerText = `Year : ${element.Year}`;

    let poster = document.createElement("img");
    poster.id = "poster";

    poster.src = element.Poster;

    div.append(poster, title, year);

    data_div.append(div);
  });
}
