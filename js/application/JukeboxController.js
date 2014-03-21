app.controller("JukeboxController", function ($scope, $http) {
  $scope.query = "";
  $scope.results = [];
  $scope.tracks = [];//[{ "href": null, "name": "Nothin' queued!", "extraLargeImage": "/images/broken-record.jpg" }]; //[{ "album": { "released": "2007", "href": "spotify:album:2ovXUTjkBkNlgAU7DTIxX9", "name": "Echoes, Silence, Patience & Grace", "availability": { "territories": "AR AT AU BE BO BR CH CL CO CR CY CZ DE DK EC EE ES FI FR GR GT HN HU IE IT LT LU LV MT MX NI NL NO NZ PA PE PL PT PY RO SE SK SV TR UY" } }, "name": "The Pretender", "popularity": "0.7", "external-ids": [{ "type": "isrc", "id": "USRW30700007" }], "length": 269.373, "href": "spotify:track:3ZsjgLDSvusBgxGWrTAVto", "artists": [{ "href": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD", "name": "Foo Fighters" }], "track-number": "1", "voteText": "request", "$$hashKey": "00C", "listener": "Ed Bishop", "votes": 1, "smallImage": "http://userserve-ak.last.fm/serve/64s/83693587.png", "mediumImage": "http://userserve-ak.last.fm/serve/126/83693587.png", "largeImage": "http://userserve-ak.last.fm/serve/174s/83693587.png", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/83693587.png" }, { "album": { "released": "2011", "href": "spotify:album:5lnQLEUiVDkLbFJHXHQu9m", "name": "Wasting Light", "availability": { "territories": "AD AR AT AU BE BG BO BR CA CH CL CO CR CY CZ DE DK DO EC ES FR GB GR GT HK HN HU IE IS IT LI LU MC MT MX MY NI NL NO NZ PA PE PH PL PT PY RO SG SI SK SV TR TW US UY" } }, "name": "These Days", "popularity": "0.65", "external-ids": [{ "type": "isrc", "id": "USRW31100008" }], "length": 298.266, "href": "spotify:track:2kN05N1AQQplsgFweFAqYb", "artists": [{ "href": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD", "name": "Foo Fighters" }], "track-number": "6", "voteText": "request", "$$hashKey": "00F", "listener": "Ed Bishop", "votes": 1, "smallImage": "http://userserve-ak.last.fm/serve/64s/80295471.png", "mediumImage": "http://userserve-ak.last.fm/serve/126/80295471.png", "largeImage": "http://userserve-ak.last.fm/serve/174s/80295471.png", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/80295471.png" }, { "album": { "released": "2005", "href": "spotify:album:2B9q4KPjOEYu885Keo9dfX", "name": "In Between Dreams", "availability": { "territories": "AD AR AT AU BE BG BO BR CH CL CO CR CY CZ DK DO EC EE ES FI FR GB GR GT HK HN HU IE IS IT LI LT LV MC MT MY NI NL NO NZ PA PE PH PL PT PY RO SE SG SI SK SV TR TW UY" } }, "name": "Better Together", "popularity": "0.73", "external-ids": [{ "type": "isrc", "id": "USMC60400027" }], "length": 207.68, "href": "spotify:track:2iXdwVdzA0KrI2Q0iZNJbX", "artists": [{ "href": "spotify:artist:3GBPw9NK25X1Wt2OUvOwY3", "name": "Jack Johnson" }], "track-number": "1", "voteText": "vote up", "$$hashKey": "0C2", "listener": "Ed Bishop", "votes": 1, "smallImage": "http://userserve-ak.last.fm/serve/64s/75083890.png", "mediumImage": "http://userserve-ak.last.fm/serve/126/75083890.png", "largeImage": "http://userserve-ak.last.fm/serve/174s/75083890.png", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/75083890.png" }, { "album": { "released": "2005", "href": "spotify:album:2B9q4KPjOEYu885Keo9dfX", "name": "In Between Dreams", "availability": { "territories": "AD AR AT AU BE BG BO BR CH CL CO CR CY CZ DK DO EC EE ES FI FR GB GR GT HK HN HU IE IS IT LI LT LV MC MT MY NI NL NO NZ PA PE PH PL PT PY RO SE SG SI SK SV TR TW UY" } }, "name": "Good People", "popularity": "0.67", "external-ids": [{ "type": "isrc", "id": "USMC60400030" }], "length": 208.506, "href": "spotify:track:1A4WjuUXeFEVXjwgc7eVZ6", "artists": [{ "href": "spotify:artist:3GBPw9NK25X1Wt2OUvOwY3", "name": "Jack Johnson" }], "track-number": "4", "voteText": "vote up", "$$hashKey": "0CE", "listener": "Ed Bishop", "votes": 1, "smallImage": "http://userserve-ak.last.fm/serve/64s/75083890.png", "mediumImage": "http://userserve-ak.last.fm/serve/126/75083890.png", "largeImage": "http://userserve-ak.last.fm/serve/174s/75083890.png", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/75083890.png" }, { "album": { "released": "2005", "href": "spotify:album:7tTc46dNdE6GGuiQsssWxo", "name": "In Between Dreams", "availability": { "territories": "CA US" } }, "name": "Breakdown", "popularity": "0.66", "external-ids": [{ "type": "isrc", "id": "USMC60400029" }], "length": 212.706, "href": "spotify:track:3cnRYoW4nYzIuVPCp7k5iG", "artists": [{ "href": "spotify:artist:3GBPw9NK25X1Wt2OUvOwY3", "name": "Jack Johnson" }], "track-number": "11", "voteText": "vote up", "$$hashKey": "0CH", "listener": "Ed Bishop", "votes": 1, "smallImage": "http://userserve-ak.last.fm/serve/64s/75083890.png", "mediumImage": "http://userserve-ak.last.fm/serve/126/75083890.png", "largeImage": "http://userserve-ak.last.fm/serve/174s/75083890.png", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/75083890.png" }, { "album": { "released": "2005", "href": "spotify:album:7tTc46dNdE6GGuiQsssWxo", "name": "In Between Dreams", "availability": { "territories": "CA US" } }, "name": "Do You Remember", "popularity": "0.66", "external-ids": [{ "type": "isrc", "id": "USMC60400038" }], "length": 144.013, "href": "spotify:track:1EZJBB6bvCcrvYRlOyoHuf", "artists": [{ "href": "spotify:artist:3GBPw9NK25X1Wt2OUvOwY3", "name": "Jack Johnson" }], "track-number": "13", "voteText": "vote up", "$$hashKey": "0CF", "listener": "Ed Bishop", "votes": 1, "smallImage": "http://userserve-ak.last.fm/serve/64s/75083890.png", "mediumImage": "http://userserve-ak.last.fm/serve/126/75083890.png", "largeImage": "http://userserve-ak.last.fm/serve/174s/75083890.png", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/75083890.png" }, { "album": { "released": "2008", "href": "spotify:album:5hgzC9IxDx8wcos3LTGrCh", "name": "80s Mania", "availability": { "territories": "AD AR AT AU BE BG BO BR CA CH CL CO CR CY CZ DE DK DO EC EE ES FI FR GB GR GT HK HN HU IE IS IT LI LT LU LV MC MT MX MY NI NL NO NZ PA PE PH PL PT PY RO SE SG SI SK SV TR TW US UY" } }, "name": "Flashdance...What A Feeling", "popularity": "0.65", "external-ids": [{ "type": "isrc", "id": "USA560846945" }], "length": 246.253, "href": "spotify:track:1vyI6X2Id2CarE73XOLGxM", "artists": [{ "href": "spotify:artist:3oZa8Xs6IjlIUGLAhVyK4G", "name": "Irene Cara" }], "track-number": "2", "voteText": "request", "$$hashKey": "1PN", "listener": "Ed Bishop", "votes": 1, "smallImage": "http://userserve-ak.last.fm/serve/64s/97309849.jpg", "mediumImage": "http://userserve-ak.last.fm/serve/126/97309849.jpg", "largeImage": "http://userserve-ak.last.fm/serve/174s/97309849.jpg", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/97309849.jpg" }, { "album": { "released": "2013", "href": "spotify:album:0W7LGlyIzrhbSjU2zjHHzi", "name": "80s Party Vol 2", "availability": { "territories": "AD AR AT AU BE BG BO BR CA CH CL CO CR CY CZ DE DK DO EC EE ES FI FR GB GR GT HK HN HU IE IS IT LI LT LU LV MC MT MX MY NI NL NO NZ PA PE PH PL PT PY RO SE SG SI SK SV TR TW US UY" } }, "name": "I Love Rock N Roll", "popularity": "0.53", "external-ids": [{ "type": "isrc", "id": "US7071300352" }], "length": 174.72, "href": "spotify:track:4VqPSmET1kDAOaKUdbtlKG", "artists": [{ "href": "spotify:artist:6P7Nluz43Chhg9I8nzcTqC", "name": "80s Pop Stars" }], "track-number": "8", "voteText": "request", "$$hashKey": "1PR", "listener": "Ed Bishop", "votes": 1, "smallImage": "http://userserve-ak.last.fm/serve/64s/87532917.jpg", "mediumImage": "http://userserve-ak.last.fm/serve/126/87532917.jpg", "largeImage": "http://userserve-ak.last.fm/serve/174s/87532917.jpg", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/87532917.jpg" }, { "album": { "released": "2008", "href": "spotify:album:5hgzC9IxDx8wcos3LTGrCh", "name": "80s Mania", "availability": { "territories": "AD AR AT AU BE BG BO BR CA CH CL CO CR CY CZ DE DK DO EC EE ES FI FR GB GR GT HK HN HU IE IS IT LI LT LU LV MC MT MX MY NI NL NO NZ PA PE PH PL PT PY RO SE SG SI SK SV TR TW US UY" } }, "name": "Bette Davis Eyes", "popularity": "0.54", "external-ids": [{ "type": "isrc", "id": "USA560846944" }], "length": 223.013, "href": "spotify:track:4j88vFFHgyJOHCGiOi8WXe", "artists": [{ "href": "spotify:artist:5PN2aHIvLEM98XIorsPMhE", "name": "Kim Carnes" }], "track-number": "1", "voteText": "request", "$$hashKey": "1PW", "listener": "Ed Bishop", "votes": 2, "smallImage": "http://userserve-ak.last.fm/serve/64s/96403483.png", "mediumImage": "http://userserve-ak.last.fm/serve/126/96403483.png", "largeImage": "http://userserve-ak.last.fm/serve/174s/96403483.png", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/96403483.png" }, { "album": { "released": "2008", "href": "spotify:album:5kZ8N9CSvFq9T50wnOJhBy", "name": "80s Monster Ballads", "availability": { "territories": "AD AR AT AU BE BG BO BR CA CH CL CO CR CY CZ DE DK DO EC EE ES FI FR GB GR GT HK HN HU IE IS IT LI LT LU LV MC MT MX MY NI NL NO NZ PA PE PH PL PT PY RO SE SG SI SK SV TR TW UY" } }, "name": "Love Hurts", "popularity": "0.55", "external-ids": [{ "type": "isrc", "id": "USA560873576" }], "length": 231.733, "href": "spotify:track:2tVinls1mEvkUtkrGiA1K9", "artists": [{ "href": "spotify:artist:6fvN9GmMCVKb5LY0WsnjFP", "name": "Nazareth" }], "track-number": "17", "voteText": "request", "$$hashKey": "1PU", "listener": "Ed Bishop", "votes": 1, "smallImage": "http://userserve-ak.last.fm/serve/64s/94410125.png", "mediumImage": "http://userserve-ak.last.fm/serve/126/94410125.png", "largeImage": "http://userserve-ak.last.fm/serve/174s/94410125.png", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/94410125.png" }, { "album": { "released": "2008", "href": "spotify:album:0RJjyyS787c7DWnZFwxpCb", "name": "Pure 80s Pop", "availability": { "territories": "AD AR AT AU BE BG BO BR CH CL CO CR CY CZ DE DK DO EC EE ES FI FR GB GR GT HK HN HU IE IS IT LI LT LU LV MC MT MY NI NL NO NZ PA PE PH PL PT PY RO SE SG SI SK SV TR TW UY" } }, "name": "Love Changes (Everything)", "popularity": "0.54", "external-ids": [{ "type": "isrc", "id": "GBAYE8700120" }], "length": 268.466, "href": "spotify:track:2oIQPIbB6PkuTiUTPXfLjn", "artists": [{ "href": "spotify:artist:3bpvhFSIErguVNQUiutctF", "name": "Climie Fisher" }], "track-number": "7", "voteText": "request", "$$hashKey": "1Q0", "listener": "Ed Bishop", "votes": 3, "smallImage": "http://userserve-ak.last.fm/serve/64s/71925354.png", "mediumImage": "http://userserve-ak.last.fm/serve/126/71925354.png", "largeImage": "http://userserve-ak.last.fm/serve/174s/71925354.png", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/71925354.png" }, { "album": { "released": "2008", "href": "spotify:album:0RJjyyS787c7DWnZFwxpCb", "name": "Pure 80s Pop", "availability": { "territories": "AD AR AT AU BE BG BO BR CH CL CO CR CY CZ DE DK DO EC EE ES FI FR GB GR GT HK HN HU IE IS IT LI LT LU LV MC MT MY NI NL NO NZ PA PE PH PL PT PY RO SE SG SI SK SV TR TW UY" } }, "name": "Don't Go", "popularity": "0.55", "external-ids": [{ "type": "isrc", "id": "GBAJH9600227" }], "length": 182.253, "href": "spotify:track:7n6CKf9uT5qM1D9lBlCRfm", "artists": [{ "href": "spotify:artist:1G1mX30GpUJqOr1QU2eBSs", "name": "Yazoo" }], "track-number": "15", "voteText": "request", "$$hashKey": "1PX", "listener": "Ed Bishop", "votes": 1, "smallImage": "http://userserve-ak.last.fm/serve/64s/56856195.jpg", "mediumImage": "http://userserve-ak.last.fm/serve/126/56856195.jpg", "largeImage": "http://userserve-ak.last.fm/serve/174s/56856195.jpg", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/56856195.jpg" }, { "album": { "released": "2008", "href": "spotify:album:5hgzC9IxDx8wcos3LTGrCh", "name": "80s Mania", "availability": { "territories": "AD AR AT AU BE BG BO BR CA CH CL CO CR CY CZ DE DK DO EC EE ES FI FR GB GR GT HK HN HU IE IS IT LI LT LU LV MC MT MX MY NI NL NO NZ PA PE PH PL PT PY RO SE SG SI SK SV TR TW US UY" } }, "name": "Ice Ice Baby", "popularity": "0.54", "external-ids": [{ "type": "isrc", "id": "USA560846950" }], "length": 254.03, "href": "spotify:track:4odX89WCq4zmsjvXr3emTh", "artists": [{ "href": "spotify:artist:7GXXMm3DB1VswVcuGyInUd", "name": "Vanilla Ice" }], "track-number": "7", "voteText": "request", "$$hashKey": "1PY", "listener": "Ed Bishop", "votes": 3, "smallImage": "http://userserve-ak.last.fm/serve/64s/87860491.jpg", "mediumImage": "http://userserve-ak.last.fm/serve/126/87860491.jpg", "largeImage": "http://userserve-ak.last.fm/serve/174s/87860491.jpg", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/87860491.jpg" }, { "album": { "released": "2009", "href": "spotify:album:5uJ3FfBJ9CdGcEcCZZxiCr", "name": "Hits Of The 80s (100 Songs)", "availability": { "territories": "US" } }, "name": "I Ran", "popularity": "0.55", "external-ids": [{ "type": "isrc", "id": "GBAHK0500042" }], "length": 219.906, "href": "spotify:track:10zlwR7kvVbD9OBkeZWr3L", "artists": [{ "href": "spotify:artist:0uAjBatvB4ubpd4kCfjmNt", "name": "A Flock Of Seagulls" }], "track-number": "96", "voteText": "request", "$$hashKey": "1Q3", "listener": "Ed Bishop", "votes": 3, "smallImage": "http://userserve-ak.last.fm/serve/64s/96765521.jpg", "mediumImage": "http://userserve-ak.last.fm/serve/126/96765521.jpg", "largeImage": "http://userserve-ak.last.fm/serve/174s/96765521.jpg", "extraLargeImage": "http://userserve-ak.last.fm/serve/300x300/96765521.jpg" }];
  $scope.playing = null;//{ "href": null, "name": "The sounds of silence...", "extraLargeImage": "/images/broken-record.jpg" };
  $scope.history = ['Nothings happening right now, request some tracks!']; //[{ "listener": "Ed Bishop", "track": "Learn To Fly", "action": "Ed Bishop requested Learn To Fly", "$$hashKey": "08T" }, { "listener": "Ed Bishop", "track": "My Hero", "action": "Ed Bishop requested My Hero", "$$hashKey": "08X" }, { "listener": "Ed Bishop", "track": "The Pretender", "action": "Ed Bishop requested The Pretender", "$$hashKey": "091" }, { "listener": "Ed Bishop", "track": "Times Like These", "action": "Ed Bishop requested Times Like These", "$$hashKey": "095" }, { "listener": "Ed Bishop", "track": "Walk", "action": "Ed Bishop requested Walk", "$$hashKey": "099" }, { "listener": "Ed Bishop", "track": "The Pretender", "action": "Ed Bishop voted for The Pretender", "$$hashKey": "09C" }, { "listener": "Ed Bishop", "track": "The Pretender", "action": "Ed Bishop voted for The Pretender", "$$hashKey": "09E" }, { "listener": "Ed Bishop", "track": "The Pretender", "action": "Ed Bishop voted for The Pretender", "$$hashKey": "09G" }, { "listener": "Ed Bishop", "track": "All My Life", "action": "Ed Bishop requested All My Life", "$$hashKey": "09J" }, { "listener": "Ed Bishop", "track": "These Days", "action": "Ed Bishop voted for These Days", "$$hashKey": "09M" }, { "listener": "Ed Bishop", "track": "All My Life", "action": "Ed Bishop voted for All My Life", "$$hashKey": "09O" }];
  $scope.listeners = ["Ed Bishop", "Barney Lockwood", "Steve Dave", "Billy Joe"];
  $scope.listener = "Ed Bishop";

  $scope.lastfmApiKey = 'c36c9e948c053d7d1e87c2ccb180131c';
  $scope.lastfmSecret = '513d929b3967e9f15a3bbb437bf35791';

  $scope.inPlaylist = function (track) {
    return $scope.tracks.indexOf(track) > -1;
  };

  $scope.search = function () {
    $scope.results.length = 0;
    if ($scope.query.length > 2) {
      $http({ method: "GET", url: 'http://ws.spotify.com/search/1/track.json?q=' + $scope.query }).success(function (data) {
        for (var resultIndex = 0; resultIndex < data.tracks.length; resultIndex++) {
          var result = data.tracks[resultIndex];
          $scope.getCoverArt(result);
          result.voteText = 'request';
          for (var trackIndex = 0; trackIndex < $scope.tracks.length; trackIndex++) {
            var track = $scope.tracks[trackIndex];
            if (result.href == track.href) {
              result = track;
              result.voteText = 'vote up';
              break;
            }
          }
          $scope.results.push(result);
        }
      });
    }
  };

  $scope.voteUp = function (track) {
    var index = $scope.tracks.indexOf(track);
    $scope.tracks[index].votes++;
    $scope.tracks[index].rated.push($scope.listener);
    $scope.updateHistory($scope.listener + ' rated ' + track.name );
  };

  $scope.voteDown = function (track) {
    var index = $scope.tracks.indexOf(track);
    $scope.tracks[index].votes--;
    $scope.tracks[index].slated.push($scope.listener);
    $scope.updateHistory($scope.listener + ' slated ' + track.name );
  };

  $scope.request = function (track) {
    track.listener = $scope.listener;
    track.votes = 1;
    track.order = -$scope.tracks.length;
    track.rated = [];
    track.slated = [];
    if ($scope.playing == null || $scope.playing.href == null) {
      $scope.playing = track;
      $scope.updateHistory('now playing ' + track.name + ' requested by ' + track.listener);
    } else if ($scope.playing != track) {
      if ($scope.tracks.length == 1 && $scope.tracks[0].href == null) {
        $scope.tracks.length = 0;
      }

      $scope.tracks.push(track);
      $scope.updateHistory(track.listener + ' requested ' + track.name );
    }
  };

  $scope.getCoverArt = function (track) {
    $.getJSON('http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=' + $scope.lastfmApiKey + '&artist=' + track.artists[0].name + '&track=' + track.name + '&format=json', null, function (data) {
      $scope.$apply(function () {
        track.smallImage = data.track.album.image[0]['#text'];
        track.mediumImage = data.track.album.image[1]['#text'];
        track.largeImage = data.track.album.image[2]['#text'];
        track.extraLargeImage = data.track.album.image[3]['#text'];
      });
    });
  };

  $scope.updateHistory = function (action) {
    if ($scope.history.length == 1 && $scope.history == 'Nothings happening right now, request some tracks!') {
      $scope.history.length = 0;
    }
    clearHistoryRotator();
    $scope.history.push(action);
    setHistoryRotator($scope);
    $scope.notify(action);
  };

  $scope.notify = function (action) {
    toastr.info(action);
  };

  $scope.getListenersForAction = function (listeners, max, action) {
    max = max > listeners.length ? listeners.length : max;
    var list = '';
    for (var i = 0; i < max; i++) {
      list += listeners[i];
      if (i + 2 == max && max >= listeners.length) {
        list += ' and ';
      } else if (i + 1 < max) {
        list += ', ';
      }
    }
    if (max < listeners.length) {
      list += ' and others ' + action + ' this';
    }
    return list == '' ? '' : list;
  };
});
