// Create module
var app = angular.module( 'app', [] );

// Create controller
app.controller( 'MainCtrl', ['$scope', function ($scope ) {
	this.color = 'white';
}]);

// Create directives
app.directive( 'helloWorld', function() {
	return {
		restrict: 'E',
		replace: 'true',
		template: '<h3> Hello World!!</h3>'
	};
});

app.directive( 'buttonDirective', function() {
	return {
		restrict: 'AE',
		replace: 'false',
		templateUrl: 'button.html'
	};
});

app.directive( 'linkDirective', function () {
	
	return {
		restrict: 'AE',
		replace: true,
		template: '<p style="background-color:{{color}}">Hello World',
		link: function(scope, elem, attrs) {
			elem.bind('click', function() {
				elem.css('background-color', 'white');
				scope.$apply(function() {
					scope.color = "white";
				});
			});
			elem.bind('mouseover', function() {
				elem.css('cursor', 'pointer');
			});
		}
	};
});

app.directive( 'classChange', function () {
	return {
		restrict: 'CAE',
		replace: true,
		link: function( scope, elem, attrs ) {
			elem.bind( 'mouseover', function () {
				elem.addClass('hover');
			});

			elem.bind('mouseout',  function () {
				elem.removeClass('hover');
			})
		}
	};
});