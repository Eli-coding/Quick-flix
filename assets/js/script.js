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