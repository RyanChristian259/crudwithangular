app.controller('BeerController', ['$scope', '$http', function($scope, $http) {

  $http.get('/api/v1/beers').then(function(response){
      console.log(response.data);
  });

  $scope.beers = response.data;





}]);//myController
