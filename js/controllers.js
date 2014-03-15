function SearchController($scope) {
  $scope.results = [{ "album": { "released": "2009", "href": "spotify:album:7KY0vTEiE2N4oL04e9O5d0", "name": "Telegram", "availability": { "territories": "GB" } }, "name": "Cover Me - Dilinja Mix", "popularity": "0.15", "external-ids": [{ "type": "isrc", "id": "GBBTF9600214" }], "length": 382.106, "href": "spotify:track:1Yx4hLFoN6Hgpix1FYx7xJ", "artists": [{ "href": "spotify:artist:7w29UYBi0qsHi5RTcv3lmA", "name": "Bj\u00f6rk" }], "track-number": "8" }, { "album": { "released": "2003", "href": "spotify:album:7gpYorwQEmuXSrvpmr42tJ", "name": "Different Drum (feat. Robert Owens)", "availability": { "territories": "AD AR AT AU BE BG BO BR CA CH CL CO CR CY CZ DE DK DO EC EE ES FI FR GB GR GT HK HN HU IE IS IT LI LT LU LV MC MT MX MY NI NL NO NZ PA PE PH PL PT PY RO SE SG SI SK SV TR TW US UY" } }, "name": "Different Drum - Dilinja Remix", "popularity": "0.07", "external-ids": [{ "type": "isrc", "id": "GBCJY0363001" }], "length": 343.091, "href": "spotify:track:0rvbreG6zjsMv9zojDDGbJ", "artists": [{ "href": "spotify:artist:4CbuwI3bEF7gQOwpxBKtal", "name": "London Elektricity" }, { "href": "spotify:artist:407nV5hO7mZap3UJdpTr4t", "name": "Robert Owens" }], "track-number": "1" }];

  $scope.search = function() {
    
  }
}

var application = {
  tracks: [],
  listeners: [],
  events: []
};

// Attach the auto complete shizzle for searching spotify...
$('#track-search').keyup(function (event) {
  var query = $('#track-search').val();
  if (query.length > 2) {
    search(query);
  }
});

function search(query) {
  $.getJSON('http://ws.spotify.com/search/1/track.json?q=' + query, null, populateResults);
}

function populateResults(data, request) {
  $.each(data.tracks, function (index, track) {
    console.log(track);
  });
}
