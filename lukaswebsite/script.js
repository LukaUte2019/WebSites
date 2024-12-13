let myApp = document.getElementById("app");
let titleDiv = myApp.firstElementChild;
let contentDiv = myApp.children[1]

let students = ["Bob Bobsky", "Jill Cool" ,"John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

/**
 * Displays the grades for each subject in a given HTML element.
 *
 * This function clears the existing content of the specified element
 * and appends an unordered list of subjects and their corresponding
 * grades.
 *
 * @param {Array} subjects - An array of subject names.
 * @param {Array} grades - An array of grades corresponding to the subjects.
 * @param {HTMLElement} element - The HTML element where the grades will be displayed.
 */
function printGrades(subjects, grades, element) {
    console.log(element);
    element.innerHTML = ""; // clearing element
    element.innerHTML += "<ul>";
    for(let i=0; i < subjects.length; i++) {
        element.innerHTML += `<li>${subjects[i]} : ${grades[i]}</li>`;
}
element.innerHTML += "<ul>"
}

/**
 * Displays a list of students in a given HTML element.
 *
 * This function clears the existing content of the specified element
 * and appends an ordered list of student names.
 *
 * @param {Array} students - An array of student names.
 * @param {HTMLElement} element - The HTML element where the student list will be displayed.
 */
function printStudents(students, element) {
    element.innerHTML = ""; // clearing element
    element.innerHTML += "<ol>";
    for(let student of students) {
        element.innerHTML += `<li>${student}</li>`;
    }
    element.innerHTML += "</ol>"
}

/**
 * Prints either a student or teacher page based on the given person and name.
 *
 * If the person is a student, a page with their name and grades is printed.
 * If the person is a teacher, a page with their name and students is printed.
 * If the person is neither a student nor a teacher, or if the name is shorter
 * than 2 letters, an error page is printed.
 *
 * @param {string} person - Either "student" or "teacher".
 * @param {string} name - The name of the person.
 */
function academyPanel(person, name){
    if(person === "student" && name.length >= 2){ // if its student and has name longer than 1 letter
      titleDiv.innerHTML += "<h1><b>Hello there " + name + "</b></h1>";
      titleDiv.innerHTML += "<p>Welcome to your student page</p>";
      titleDiv.innerHTML += "<h3>Your grades:</h3>"
      document.title = name +"'s grades - Grades App";
      console.log(contentDiv);
      printGrades(subjects, grades, contentDiv);
    } else if(person === "teacher" && name.length >= 2){
      titleDiv.innerHTML += `<h1><b>Hello ${name}!</b></h1>
      <p>Welcome to your teachers page</p>`;
      document.title = `Teachers - ${name} - Grades App`;
      contentDiv.innerHTML += "<h3>Your students:</h3>"
      printStudents(students, contentDiv);
    } else {
      titleDiv.innerHTML += "<h1><b>Your login was unsucessfull</b></h1>";
      titleDiv.innerHTML += "<p>Please <a href=javascript:history.go()>try again!</a></p>";
      document.title = "Log in failed - Grades App";
    }
  }

let input = prompt("Are you a student or a teacher?");
let name = prompt("What is your name?");
academyPanel(input, name);