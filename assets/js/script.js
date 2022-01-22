function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function initMap() {
  var location = {
    lat: 40.000,
    lng: -79.000
  }

  var options = {
    center: location,
    zoom: 10

  }

  // map = new google.maps.Map(document.getElementById("map"), options);

  if (navigator.geolocation) {
    console.log("Geolocation available");

    navigator.geolocation.getCurrentPosition((loc) => {

      location.lat = loc.coords.latitude;
      location.lng = loc.coords.longitude;

      map = new google.maps.Map(document.getElementById("map"), options);

    },
      (err) => {
        map = new google.maps.Map(document.getElementById("map"), options);
      }
    )

  } else {
    console.log("Geolocation not supported");
    map = new google.maps.Map(document.getElementById("map"), options);
  }

  autocomplete = new google.maps.places.Autocomplete(document.getElementById("input"),
    {
      componentRestrictions: { "country": ["us"]["pr"] },
      fields: ["geometry", "name"],
      types: ["establishment"]
    });

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    new google.maps.Marker({

      position: place.geometry.location,
      title: place.name,
      map: map
    })
  });

}
// var genre = document.getElementById("myDropdown")
function getMovie(event) {
  console.log(event.target)
  var genre;
  switch (event.target.innerText) {
    case "Comedy":
      genre = 35
      break
    case "Action":
      genre = 28
      break
    case "Thriller":
      genre = 27
      break
    case "Family":
      genre = 10751
      break
    case "Romance":
      genre = 10749
      break
  }
  fetch('https://api.themoviedb.org/3/discover/movie?with_genres='+genre+'&sort_by=popularity.desc&api_key=c4ce49d4635009b34fab74a629cf65b3')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      for(var i =0; i < 3; i++){
      var posterContainer = document.getElementById("poster")
      var movieContainer = document.createElement("div")
      var movieTitle = document.createElement("h1")
      var movieRating = document.createElement("h3")
      var poster = document.createElement("img")
      console.log(data[i])
      movieTitle.innerText = data.results[i].title
      movieContainer.append(movieTitle)
      movieRating.innerText = data.results[i].vote_average
      movieContainer.append(movieRating)
      poster.src = "https://www.themoviedb.org/t/p/w440_and_h660_face/"+data.results[i].poster_path
      movieContainer.append(poster)
      posterContainer.append(movieContainer)
   }});
}
// getMovie()