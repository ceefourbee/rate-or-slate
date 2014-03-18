app.controller("JukeboxController", function ($scope, $http) {
  $scope.query = "";
  $scope.results = [];
  $scope.tracks = [];
  $scope.playing = null;
  $scope.history = [];
  $scope.listeners = ["Ed Bishop"];
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
    $scope.history.push({ listener: track.listener, track: track.name, action: track.listener + ' voted for ' + track.name });
  };

  $scope.voteDown = function (track) {
    var index = $scope.tracks.indexOf(track);
    $scope.tracks[index].votes--;
    $scope.history.push({ listener: track.listener, track: track.name, action: track.listener + ' voted for ' + track.name });
  };

  $scope.request = function (track) {
    $scope.getCoverArt(track);
    track.listener = $scope.listener;
    track.votes = 1;
    if ($scope.playing == null) {
      $scope.playing = track;
      $scope.history.push({ listener: track.listener, track: track.name, action: 'now playing ' + track.name + ' requested by ' + track.listener });
    } else if ($scope.playing != track) {
      $scope.tracks.push(track);
      $scope.history.push({ listener: track.listener, track: track.name, action: track.listener + ' requested ' + track.name });
    }
  };

  $scope.getCoverArt = function (track) {
    $.getJSON('http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=' + $scope.lastfmApiKey + '&artist=' + track.artists[0].name + '&track=' + track.name + '&format=json', null, function (data) {
      $scope.$apply(function() {
        track.smallImage = data.track.album.image[0]['#text'];
        track.mediumImage = data.track.album.image[1]['#text'];
        track.largeImage = data.track.album.image[2]['#text'];
        track.extraLargeImage = data.track.album.image[3]['#text'];
      });
    });
  };
});
