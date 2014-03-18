app.controller("JukeboxController", function ($scope, $http) {
  $scope.query = "";
  $scope.results = [];
  $scope.tracks = [];
  $scope.playing = null;
  $scope.history = [];
  $scope.listeners = ["Ed Bishop"];
  $scope.listener = "Ed Bishop";

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

  $scope.request = function (track) {
    track.listener = $scope.listener;
    if ($scope.playing == null) {
      $scope.playing = track;
      $scope.history.push({ listener: track.listener, track: track.name, action: 'now playing ' + track.name + ' requested by ' + track.listener });
    } else if ($scope.playing != track){
      var index = $scope.tracks.indexOf(track);
      if (index > -1) {
        $scope.tracks[index].votes++;
        $scope.history.push({ listener: track.listener, track: track.name, action: track.listener + ' voted for ' + track.name });
      } else {
        track.votes = 1;
        $scope.tracks.push(track);
        $scope.history.push({ listener: track.listener, track: track.name, action: track.listener + ' requested ' + track.name });
      }
    }
  };
});
