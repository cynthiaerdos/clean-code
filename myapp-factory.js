angular.module('myApp.factory', [])
    .factory('courseStudents', function(){
        var courseStudents = {};
        courseStudents.students = [
            "Attila",
            "Peter",
            "Renato",
            "Richard"
        ];

        return courseStudents.students;
    })

    .factory('courseLessons', function(){
        var courseLessons = {};
        courseLessons.lessons = [
            "JavaScript",
            "C++",
            "Python"
        ];

        return courseLessons.lessons;
    });