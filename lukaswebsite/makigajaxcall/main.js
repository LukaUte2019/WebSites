const academy = {
    academyname: "SEDC",
    trainer: "Igor Mitkovski",
    assistant: "Dejan Blazheski",
    students: [
"Ana", "Marija","Dragan"   
]
    
}

let jsonContent = JSON.stringify(academy);

console.log(jsonContent);
window.AppInventor.setWebViewString(jsonContent);