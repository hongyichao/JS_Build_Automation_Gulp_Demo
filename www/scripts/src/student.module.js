var student = angular.module('student', []);

var studentCtrl = function ($scope, StudentService) {

    $scope.ngtest = 'Hello ~ World!';

    $scope.getStudentList = function () {

        return StudentService.getStudentList();

    };


    $scope.students = $scope.getStudentList();

};

studentCtrl.$inject = ['$scope', 'StudentService'];

student.controller('studentCtrl', studentCtrl);
