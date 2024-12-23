let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {

    let dataID = document.getElementById("dataID").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${dataID}`).then(function (response) {
        response.json()
        .then (function (data) {
         console.log(data);
         document.getElementById("user").innerHTML = `Name: ${data.name}`;
         document.getElementById("weight").innerHTML = `Weight: ${data.weight}`;
         let list = document.getElementById("abilities");
         for(let item of data.abilities){
           console.log(item);
           if(item.is_hidden){
             list.innerHTML += `<li style = "color: red">${item.ability.name} (hidden)</li>`;
           } else {
           list.innerHTML += `<li style = "color: green">${item.ability.name}</li>`;
         }
        }
        })
    })})