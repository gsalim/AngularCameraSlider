angular.module('app')
        .controller('HomeController', function ($scope) {
            $scope.images = [
                {
                    bigimage: 'images/slides/bridge.jpg',
                    thumb: 'images/slides/thumbs/bridge.jpg',
                    desc:'To be or not to be that is the question.'
                },
                {
                    bigimage: 'images/slides/leaf.jpg',
                    thumb: 'images/slides/thumbs/leaf.jpg',
                    desc:'God save the queen.'
                },
                {
                    bigimage: 'images/slides/road.jpg',
                    thumb: 'images/slides/thumbs/road.jpg',
                    desc:'All for one, one for all.'
                },
                {
                    bigimage: 'images/slides/sea.jpg',
                    thumb: 'images/slides/thumbs/sea.jpg',
                    desc:'No string attached.'
                }

            ];
        });