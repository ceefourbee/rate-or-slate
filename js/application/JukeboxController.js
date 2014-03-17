app.controller("JukeboxController", function ($scope, $http) {
  $scope.query = "";
  $scope.results = [];
  $scope.tracks = [];
  $scope.listeners = ["Ed Bishop"];
  $scope.history = [];
  $scope.listener = "Ed Bishop";

  $scope.search = function () {
    $scope.results.length = 0;
    if ($scope.query.length > 2) {
      $http({ method: "GET", url: 'http://ws.spotify.com/search/1/track.json?q=' + $scope.query }).success(function(data) {
        $scope.results.push.apply($scope.results, data.tracks);
      });
    }
  };

  $scope.request = function (track) {
    track.requester = $scope.listener;
    var index = $scope.tracks.indexOf(track);
    if (index > -1) {
      $scope.tracks[index].votes++;
    } else {
      track.votes = 1;
      $scope.tracks.push(track);
    }
  };
});
