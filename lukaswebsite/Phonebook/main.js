let btn = document.getElementById("save");
function Phonebook (fname, lname, phone) {
 this.name = `${fname} ${lname}`;
 this.phoneNumber = phone;
}
let numbers = [];

btn.addEventListener("click", function(){
 let firstName = document.getElementById("firstName").value;
 let lastName = document.getElementById("lastName").value;
 let phoneNumber = document.getElementById("phoneNumber").value;
 let user = new Phonebook(firstName, lastName, phoneNumber);
 let table = document.getElementById("phoneBook");
 console.log(user);
 numbers.push(user);
 console.log(numbers);
for(let item of numbers) {
 let row = document.createElement("tr");
 let colName = document.createElement("td");
 let colPhone = document.createElement("td");
 let deleteBtn = document.createElement("button");
colName.innerText=item.name;
colPhone.innerText=item.phoneNumber;
row.appendChild(colName);
row.appendChild(colPhone);
row.appendChild(deleteBtn)
deleteBtn.innerText = "Edit";
table.lastElementChild.appendChild(row);
}
});

deleteBtn.addEventListener("click", function(){
prompt(`Do you want to delete?`);
});