var datasource = angular.module('datasource', []);

datasource.service('StudentService', function () {

    function getStudentList() {

        var students = [
                { 'StudentId': 's123451', 'First_Name': 'Student1', 'Last_Name': 'Tester', 'Contact_Phone': '12345678' },
                { 'StudentId': 's123452', 'First_Name': 'Student2', 'Last_Name': 'Tester', 'Contact_Phone': '12345679' },
                { 'StudentId': 's123453', 'First_Name': 'Student3', 'Last_Name': 'Tester', 'Contact_Phone': '12345670' },
                { 'StudentId': 's123454', 'First_Name': 'Student4', 'Last_Name': 'Tester', 'Contact_Phone': '12345672' },
                { 'StudentId': 's123455', 'First_Name': 'Student5', 'Last_Name': 'Tester', 'Contact_Phone': '12345671' },
                { 'StudentId': 's123456', 'First_Name': 'Student6', 'Last_Name': 'Tester', 'Contact_Phone': '12345673' },
                { 'StudentId': 's123457', 'First_Name': 'Student7', 'Last_Name': 'Tester', 'Contact_Phone': '12345674' },
                { 'StudentId': 's123458', 'First_Name': 'Student8', 'Last_Name': 'Tester', 'Contact_Phone': '12345675' },
                { 'StudentId': 's123459', 'First_Name': 'Student9', 'Last_Name': 'Tester', 'Contact_Phone': '12345676' },
                { 'StudentId': 's123460', 'First_Name': 'Student10', 'Last_Name': 'Tester', 'Contact_Phone': '12345657' }
        ];

        return students;
    };

    return { getStudentList: getStudentList };
});