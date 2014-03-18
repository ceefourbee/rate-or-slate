var app = angular.module("Jukebox", []);
app.filter('reverse', function () {
  return function (items) {
    return items.slice().reverse();
  };
});
