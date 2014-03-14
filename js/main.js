$(function () {

  // bung the current version of jQuery in the console
  console.log($().jquery);

  // Attach the auto complete shizzle for searching spotify...
  $('#track-search').typeahead({}, {
    name: 'artists',
    displayKey: 'name',
    source: artists.ttAdapter(),
    templates: {
      header: '<h3 class="artists-name">Artists</h3>'
    }
  }, {
    name: 'albums',
    displayKey: 'name',
    source: albums.ttAdapter(),
    templates: {
      header: '<h3 class="albums-name">Albums</h3>'
    }
  },{
    name: 'tracks',
    displayKey: 'name',
    source: tracks.ttAdapter(),
    templates: {
      header: '<h3 class="tracks-name">Tracks</h3>'
    }
  });
});

var artists = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: {
    url: 'http://ws.spotify.com/search/1/artist.json?q=%QUERY',
    filter: filterArtists
  }
});

var albums = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: {
    url: 'http://ws.spotify.com/search/1/album.json?q=%QUERY',
    filter: filterAlbums
  }
});

var tracks = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: {
    url: 'http://ws.spotify.com/search/1/track.json?q=%QUERY',
    filter: filterTracks
  }
});

artists.initialize();
albums.initialize();
tracks.initialize();

function filterArtists(data) {
  return data.artists;
}
function filterAlbums(data) {
  return data.albums;
}
function filterTracks(data) {
  return data.tracks;
}