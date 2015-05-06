/**
 * Created by mksev on 5/6/2015.
 */

app.controller('MainController', ['$scope', function($scope) {

    $scope.lastupdate = "error";

    $.ajax(
        {
            url:"https://www.kimonolabs.com/api/2ytjf560?apikey=3vb3vMQsivFbZY0Hn64aAy7cVxzRBAqK",
            crossDomain: true,
            dataType: "jsonp",
            success: function (response) {
                $scope.$apply(function() {
                        responseData = response;
                        $scope.data = responseData.results.collection1;
                        $scope.lastupdate = responseData.thisversionrun;
                        $scope.nextupdate = responseData.nextrun;
                        console.log($scope.data);
                    }
                );
            },
            error: function (xhr, status) {
                //handle errors
            }
        });
}]);