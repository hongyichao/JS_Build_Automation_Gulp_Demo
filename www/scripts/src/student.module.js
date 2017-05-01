var student = angular.module('student', []);

var studentCtrl = function ($scope) {

    $scope.ngtest = 'Hello ~ World!';

}

studentCtrl.$inject = ['$scope'];

student.controller('studentCtrl', studentCtrl);
