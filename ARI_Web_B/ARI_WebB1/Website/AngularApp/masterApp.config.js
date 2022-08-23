

var app = angular.module('wmApp', ['ngRoute',
    'ngResource',

])
    .config([
        '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/',
                    {
                        templateUrl: './AngularApp/views/main.tpl.html',
                        controller: 'mainController'
                    })
                .when('/aboutus',
                    {
                        templateUrl: './AngularApp/views/aboutUs.tpl.html',
                        controller: 'mainController'
                    })
               
                .otherwise({ redirectTo: '/' });
            $locationProvider.hashPrefix('');
        }
    ]);
angular.module('wmApp').controller('menuController', [
    '$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {
        var errorFunction = function (error) {
            console.log(error);
        }

        function init() {
            $scope.toggle = false;
        }
        $scope.statutes = function () {
            $location.path('/statutes');
        };
        init();
    }]);


app.filter('ageFilter', function () {
    function calculateAge(birthday) {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return function (birthdate) {
        return calculateAge(birthdate);
    };
});

app.directive('owlCarousel', [function () {
    return {
        restrict: 'EA',
        transclude: false,
        scope: {
            owlOptions: '='
        },
        link: function (scope, element, attrs) {
            scope.initCarousel = function () {
                $(element).owlCarousel(scope.owlOptions);
            };
        }
    }
}
]);
app.directive('owlCarouselItem', [function () {
    return function (scope) {
        if (scope.$last) {
            scope.initCarousel();
        }
    };
}]);