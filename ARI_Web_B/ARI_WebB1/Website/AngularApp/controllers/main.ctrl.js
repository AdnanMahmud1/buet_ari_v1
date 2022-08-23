
angular.module('wmApp').controller('mainController', [
    '$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {
        var errorFunction = function (error) {
            console.log(error);
        }
        $scope.pageName = "Main Information";
        

        $scope.categoryId = parseInt($routeParams.cId);

        function init() {
            $scope.currentMinute = new Date().getTime();
            var collectionDate = '1993-01-01T09:00:00';
            var date = new Date(collectionDate);
            $scope.initObj = {
                establishmentDate: date
            };
            console.log($scope.categoryId);
            if ($scope.categoryId == undefined || isNaN($scope.categoryId) ) {
               $scope.categoryId = 1;
               
            }
        }


        $scope.visible = false;
        $scope.toggle = function () {
            $scope.visible = !$scope.visible;
        };
       

        $scope.findCategoryWise= function(id) {
            $scope.categoryId = id;
        }
        init();
    }]);