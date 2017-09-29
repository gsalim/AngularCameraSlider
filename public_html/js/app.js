var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: "pages/home.html",
                    controller: 'HomeController'
                })
                .state('fbcci', {
                    url: "/fbcci",
                    templateUrl: "pages/fbcci.html"
//                    controller: 'FBCCIController'
                });
    }]);

app.directive('camera', [
    "$compile", "$timeout", function ($compile, $timeout) {
        return {
            restrict: 'A',
            scope: {
                options: '='
            },
            link: function ($scope, element, attr) {
                return $timeout(function () {
                    return jQuery(element).camera($scope.options);
                }, 500);
            }
        };
    }
]);
