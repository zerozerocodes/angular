angular.module('app', ['ui.bootstrap']);

    function CarouselDemoCtrl( $scope, $http ) {
        $scope.myInterval = 100;
        $scope.slides = [
        {
            image: 'images/ex1.jpg'
        },
        {
           image: 'images/ex2.jpg'
        },
        {
            image: 'images/ex3.jpg'
        },
        {
            image: 'images/ex4.jpg'
        }
    ];
}