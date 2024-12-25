let grades = [];
let exams = 5;
for(let index= 0; index < exams; index++){
    let grade = prompt(`Enter a grade for exam:`);
    let number = parseInt(grade);
    grades.push(number);
    }
     let sum = 0;
     for(let i=0; i < grades.length; i++){
         sum = sum + grades[i];

     }
    console.log(grades);
    console.log(sum);


    let average = sum / exams;
    let passingAv = 50;
   if (average <= passingAv) {
    alert("You have failed the exam");
   } else {
    alert("You have passed the exam");
   }