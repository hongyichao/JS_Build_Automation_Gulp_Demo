describe('studentModule', function () {

    beforeEach(module('main'));

    var $controller, $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_) {

        $controller = _$controller_;
        $rootScope = _$rootScope_;

    }));

    describe('getStudentList', function () {
        var $scope;

        beforeEach(function () {
            $scope = $rootScope.$new();
        });

        it('test student total count', function () {

            var controller = $controller('studentCtrl', { $scope: $scope });

            var students = $scope.getStudentList();

            expect(students.length).toBe(10);
            expect(students[0].First_Name).toBe('Student1');
        });

    });
});