const { resolveNaptr } = require("dns");
const { ready } = require("jquery");

  let fromwebsitename = "Luka's Website (http://lukaserver.ddns.net/)";
  const websitecreator = {
    name: "Luka",
    lastName: "Utevski",
    age: 19,
    weight: 80,
    height: 150,
    academy: true,
    academyname: "SEDC",
    newacademyname: "Qinshift Academy",
  }
  
  /**
   * Logs a message to the console and sets the current webpage 
   * as the homepage using AppInventor's WebView string method.
   * @memberof window
   */
  function setashomepage() {
    // Alert the user that the website is going to be set as the homepage
    alert("Click Ok to set Website as Homepage");
    // Log a message to the console
    console.log('windowwithbutton Website set as Homepage');
    console.log("toastnotif from:",fromwebsitename);
    // Set the current webpage as the homepage using AppInventor's WebView string method
    window.AppInventor.setWebViewString("setcurrentwebpageashomepage");
  };

  /**
   * Runs the cash program. This program asks the user how much they have, and based on that, it tells the user what they should do.
   * @memberof window
   * @function runcashprogram
   */
  function runcashprogram() {
    let cash = prompt('Enter Cash (Number only)');

if(cash >= 50){
  document.write('<a href=https://www.google.com/search?q=restaurants+around+me> you should go out for a dinner and a movie </a> <a href=http://lukaserver.ddns.net> Go to site</a>');
}
else if (cash >= 35) {
    document.write('<a href=https://www.google.com/search?q=restaurants+around+me> you should go out to a fine meal. </a> <a href=/> Go to site</a>');
} else if (cash >= 12) {
    document.write('<a href=https://netflix.com> you should go see a movie </a> <a href=/> Go to site</a>');
} else {
    document.write('<a href=https://www.google.com/search?q=magenta+tv+go> looks like you\'ll be watching TV </a> <a href=/> Go to site</a>')
}
  }


  /**
   * Prompts the user for a score and alerts the grade based on the following criteria:
   *   - 80 and above: Grade 5
   *   - 70-79: Grade 4
   *   - 60-69: Grade 3
   *   - below 60: Failed
   * The grade is also logged to the console.
   * @memberof window
   * @function runscoregradeprogram
   */
  function runscoregradeprogram() {
    let score = prompt('Enter Score');

if (score > 80) {
   alert('Grade 5');
    console.log('Grade 5');
}   else if (score > 70) {
    alert('Grade 4');
     console.log("Grade 4");
    } else if (score > 60) {
        alert('Grade 3');
        console.log("Grade 3")
    } else {
        alert('Failed');
        console.log("Failed")
    } 
  }

  function runcashprogramforalert() {
    let cash = prompt('Enter Cash (Number only)');

if(cash >= 50){
 alert('you should go out for a dinner and a movie');
}
else if (cash >= 35) {
    alert('you should go out to a fine meal.');
} else if (cash >= 12) {
    alert('you should go see a movie');
} else {
    alert('looks like you\'ll be watching TV')
}
  }
  /**
   * Alerts the user, logs a message, and sends a command to 
   * open the Instify Android app using AppInventor's WebView 
   * string method.
   * 
   * This function prompts the user with a confirmation alert 
   * before attempting to open the Instify app. It logs the 
   * process to the console and utilizes AppInventor's WebView 
   * string method to trigger the app launch.
   *
   * @memberof window
   * @function openinstify
   */
  function openinstify() {
    // Alert the user to confirm opening the Instify app
    alert("Click OK to open Instify 'open the Instify Android app using AppInventor's WebView string method.'");

    // Log a notification message to the console indicating the app launch
    console.log('toastnotif Opening Android App (Instify)...');
    console.log("toastnotif from:", fromwebsitename);

    // Send a command using AppInventor's WebView string method
    // to open the Instify Android app with the specified package and activity
    window.AppInventor.setWebViewString("openandroidapp com.lukaplayer.instify/io.kodular.lukapravivlogovi.Andamp.Screen1");
  };
  /**
   * Opens the about browser dialog.
   * This function will show a message box with a Ok button. When the Ok button is clicked, the about browser window will open.
   * @memberof window
   */
  function aboutbrowser() {
    // Alert the user to confirm opening the about browser window
    alert("Click Ok to open About Browser Window.");

    // Log a notification message to the console
    console.log('toastnotif Opening About Browser...');
    console.log("toastnotif from:",fromwebsitename);

    // Use AppInventor's WebView string method to send a command to open the about browser window
    window.AppInventor.setWebViewString("aboutbrowser");
  };
  /**
   * Opens the Web Browser Android app using AppInventor's WebView string method.
   *
   * This function will show a message box with a Ok button. When the Ok button is clicked, the Web Browser app will open.
   *
   * @memberof window
   * @function openinwebbrowserapp
   */
  function openinwebbrowserapp() {
    // Alert the user to confirm opening the Web Browser app
    alert("Click OK to open Web Browser app 'open the Web browser Android app using AppInventor's WebView string method.'");

    // Log a notification message to the console
    console.log('toastnotif Opening Android App (Website Browser)...');
    console.log("toastnotif from:",fromwebsitename);

    // Use AppInventor's WebView string method to send a command to open the
    // Web Browser app with the specified package and activity
    // The package name is: io.kodular.lukapravivlogovi.WebBrowser
    // The activity name is: io.kodular.lukapravivlogovi.WebBrowser.Screen1
    window.AppInventor.setWebViewString("openandroidapp io.kodular.lukapravivlogovi.WebBrowser/io.kodular.lukapravivlogovi.WebBrowser.Screen1/",prompt("Enter Website to open in the app"));
 };

/**
 * Prompts the user to enter two numbers and performs various comparisons 
 * between them, displaying alert messages based on the conditions:
 * 
 * - Compares if the numbers are different or the same using if-else.
 * - Checks multiple cases to see if both numbers are zero, different, or the same.
 * - Uses two separate if statements to independently verify if both numbers are zero and if they are different.
 * - Utilizes nested if statements to ensure both inputs are numbers before comparing them.
 * 
 * Alerts the user with respective messages for each comparison case.
 * If non-number inputs are detected, alerts the user of an error.
 * 
 * @memberof window
 */
function runifandelsevariantsprogram() {
let number1 = prompt("Enter Number 1");
let number2 = prompt("Enter Number 2");

// If and else case
if(number1 != number2){
    alert("The numbers are different!");
} else {
    alert("The numbers are the same!");
}

// Multiple cases if and else
// The first case that is true, will be executed. If all are false, else is executed
if(number1 === 0 && number2 === 0){
    alert("Both numbers are zero!");
} else if(number1 != number2){
    alert("The numbers are different!");
} else {
    alert("The numbers are the same!");
}

// Two separate if statements
// Both might be true and both might write something in the console, since they are separate
if(number1 === 0 && number2 === 0){
    alert("Both numbers are zero!");
}

if(number1 != number2){
    alert("The numbers are different!");
} else {
    alert("The numbers are the same!");
}

// Nested if statements
// If the first if is true, then the second nested one can be executed. Otherwise the nested if is skipped and the second else is executed
if(typeof(number1) === "number" && typeof(number2) === "number"){
    if(number1 != number2){
        alert("The numbers are different!");
    } else {
        alert("The numbers are the same!");
    }
} else {
    alert("Error. Wrong format. Please enter numbers.");
}
}
/**
 * Prompts the user to enter a number representing a day of the week
 * and displays an alert with the corresponding day name and a special
 * message associated with that day. If the input is invalid, an alert
 * with "Invalid input" is shown.
 */
function rundayofweekprogram() {
let value = prompt("Enter the number of days in a week (0-7)")

let input = parseInt(value);

switch (input) {
case 1:
alert("Monday");
break;
case 2:
alert("Tuesday (Into the Groove)");
break;
case 3:
alert("Wednesday (Hip-Hop don't Stop, Super Radio Love)");
break;
case 4:
alert("Thursday (MAK Top 10, Super Radio Clubbing)");
break;
case 5:
alert("Friday (Addictive vibes, Colors of freedom)");
case 6:
alert("Saturday (Disco Heaven)");
break;
case 7:
alert("Sunday (Cacactua top 20)");
break;
default:
alert("Invalid input")
}
}
/**
 * Prompts the user to enter a number representing a day of the week
 * and displays an alert with a message indicating whether the day
 * is a workday, Saturday, Sunday or "Invalid input" if the input is
 * invalid.
 */
function rundayofweekprogramone() {
    let value1 = prompt("Enter the number of days in a week (0-7)")
    
    let input1 = parseInt(value1);
    
    switch (input1) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    alert("Workday");
    case 6:
    alert("Saturday (Disco Heaven)");
    break;
    case 7:
    alert("Sunday (Cacactua top 20)");
    break;
    default:
    alert("Invalid input")
    }
}

/**
 * Prompts the user to enter the cash they have and logs a message to the console
 * recommending what they should do based on the amount of cash they have.
 * If the cash is above 50, logs "you should go out for a dinner and a movie"
 * If the cash is between 35 and 50, logs "you should go out to a fine meal."
 * If the cash is between 12 and 35, logs "you should go see a movie"
 * If the cash is below 12, logs "looks like you'll be watching TV"
 *
 * @memberof window
 * @function runcashprogramforconsole
 */
function runcashprogramforconsole() {
    let cash = prompt('Enter Cash (Number only)');

if(cash >= 50){
console.log('you should go out for a dinner and a movie');
}
else if (cash >= 35) {
    console.log('you should go out to a fine meal.');
} else if (cash >= 12) {
    console.log('you should go see a movie');
} else {
    console.log('looks like you\'ll be watching TV')
}
  }

/**
 * Alerts the user with instructions on how to open the console
 * and runs the cash program for console output.
 *
 * This function presents a message to the user explaining
 * how to open the developer console using keyboard shortcuts
 * or the right-click menu. It then calls the 
 * `runcashprogramforconsole` function to execute the cash
 * program, which provides recommendations based on the user's
 * cash input, logging the results to the console.
 *
 * @memberof window
 * @function howtopenconsole
 */
  function howtopenconsole() {
    alert("Please Press CTRL+SHIFT+I or click Inspect in the right click menu and click console to use this program");
    runcashprogramforconsole();
  }


/**
 * Calculates the sum of two numbers and returns the result.
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
  function sum(num1, num2) {
    let result = num1 + num2;
    return result
  }
/**
 * Displays a greeting message for the user.
 *
 * This function logs and alerts a greeting message
 * using the provided first name and last name.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 */

/**
 * Displays a greeting message for the user.
 *
 * This function logs and alerts a greeting message
 * using the provided first name and last name.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 */

  function greeting(firstName, lastName) {
    console.log(`hello ${firstName} ${lastName}`);
    alert(`hello ${firstName} ${lastName}`);
  }


  function opengreeting() {
    greeting(prompt('Enter Your Name'),prompt('Enter Your Last Name'));
  }
/**
 * Calculates three values using the provided two numbers
 * and logs the results to the console.
 *
 * @param {number} x - The first number.
 * @param {number} y - The second number.
 */
  function calc(x,y) {

  let odzemanje = x - y;
  let delenje  = x / y;
  let mnozenje = x * y;

  console.log(odzemanje);
  console.log(delenje);
  console.log(mnozenje);
  
  }

  
  function calculate(x,y,operator){
    let value ;
    switch (operator) {
        case "/":
        value = x / y;
        alert(value);
        break;
        case "*":
         value = x * y;
         alert(value);
        break;
        case "+":
         value = x + y;
         alert(value);
         break;
         case "-":
         value = x - y;
         alert(value);
        break;
        default:
            alert("Wrong Input");

            break;
 }
 return value;
}

/**
 * Starts a calculator program.
 *
 * This function will first prompt the user to enter two numbers and then
 * prompt the user to enter one of the following operators: delenje, mnozenje,
 * sobiranje, odzemanje. It will then calculate the result of the two numbers
 * with the given operator and logs the result to the console.
 */
  function calculatorprogram() {
    calculate(prompt('Enter 1 number'),prompt('Enter 2 number'),prompt('Enter / (delenje), * (mnozenje), + (sobiranje), - (odzemanje)'));
}

function Stepeni() {
    let stepeni = prompt("Enter a number");
    let parF = parseFloat(celsiusStepen);
    
    console.log(parF);
}



/**
 * Converts given Celsius degrees to Fahrenheit degrees and alerts the result.
 *
 * @param {number} x - The Celsius degrees to convert.
 */
function stpn(x) {
    let celsiusStepen = x * 1.8 + 32;
    alert(celsius);

}

/**
 * Alerts a greeting message for the user.
 *
 * This function will alert a greeting message
 * using the opengreeting() function.
 */
function HelloFunction() {
  opengreeting();

}


/**
 * Sends a command to AppInventor using the WebView string method.
 *
 * This function is used to send a command to AppInventor from the
 * webpage using the WebView string method. It logs the process to
 * the console. The command text is "Kodular Test" and the from value
 * is determined by the fromwebsitename variable.
 */
function appinventorFunction() {
  alert("This function will do nothing if you run in a normal browser, Please use Chatbook browser or Website Browser App to view the text");
  window.AppInventor.setWebViewString(`Kodular Test ${fromwebsitename}`);
}

/**
 * Sends a command to AppInventor using the WebView string method.
 *
 * This function logs a message to the console and uses AppInventor's
 * WebView string method to send a command. It is intended to be used
 * with the Chatbook browser or Website Browser App to view the text.
 */
function appinventorFunctionHover() {
  console.log("Please use Chatbook browser or Website Browser App to view the text");
  window.AppInventor.setWebViewString(`Kodular Test ${fromwebsitename}`);
}


/**
 * Alerts a warning message for the user and logs a warning to the console.
 *
 * This function alerts the user to open the console to view the fault message.
 * It logs the provided fault message as a warning to the console and uses 
 * AppInventor's WebView string method to send a command with the fault name.
 *
 * @param {string} faultname - The name of the fault to be displayed and logged.
 */
function warnfault(faultname) {
alert("Please open the console to see the fault");
console.warn(faultname);
window.AppInventor.setWebViewString('faultshow',faultname);
}
/**
 * Displays an information alert and logs an informational message to the console.
 *
 * This function alerts the user to open the console to view the information message.
 * It logs the provided information message to the console and uses AppInventor's 
 * WebView string method to send a command with the information name.
 *
 * @param {string} infoname - The name of the information to be displayed and logged.
 */

function info(infoname) {
  alert("Please open the console to see the info");
  console.info(infoname);
  window.AppInventor.setWebViewString('infoshow',infoname);
  }


const hotel = new Object()
hotel.name = "Hotel Palas";
hotel.numOfRooms = 30;
hotel.bookedRooms = 20;
hotel.numOfStars = 4;
hotel.gym = false;
/**
 * Checks if hotel has enough free rooms to reserve.
 * @param {Number} numOfRoomsToReserve - The number of rooms to reserve.
 * @returns {Boolean} - True if rooms are available, false otherwise.
 */
hotel.isAvailable = function (numOfRoomsToReserve) {
    let freeRooms = this.numOfRooms - this.bookedRooms;
    if(freeRooms >= numOfRoomsToReserve){
        alert(`We reserved ${numOfRoomsToReserve} rooms to you in ${hotel.name}`);
    } else {
        alert("Sorry we are booked")
    }
}

/**
 * Prompts the user to enter a room number and checks if hotel has enough free rooms to reserve.
 *
 * This function prompts the user to enter a room number and calls the isAvailable method of the hotel object with the input value.
 * @see hotel#isAvailable
 */
function hotelroomsavaliable() {
hotel.isAvailable(prompt("Enter Room Number to check room avalbility"));
}

/**
 * Alerts a greeting message for the user.
 *
 * This function will alert a greeting message
 * using the name of the hotel object.
 */
hotel.greeting = function() {
  alert(`hello from ${this.name}!`)
}

const anotherHotel = {
  name: "Hotel Palas",
  rooms: 40,
  booked: 25,
  gym: false,
  roomTypes: ['twin','double','suite'],



  /**
   * Calculates the number of available rooms in the hotel.
   *
   * This function returns the difference between the total number of rooms and the number of booked rooms.
   * @returns {Number} - The number of available rooms.
   */
  checkAvalibility: function() {
    return this.rooms - this.booked;
  }
/*************  ✨ Codeium Command ⭐  *************/
/**
 * Determines if the hotel has gym facilities.
 *
 * This function checks the 'gym' property of the hotel object
 * to ascertain the availability of gym facilities. It returns 
 * true if the gym is available, and false otherwise.
 *
 * @returns {Boolean} - True if gym is available, false otherwise.
 */

/******  c1d44927-0c54-480e-8066-f939d8e90bd2  *******/}


anotherHotel.canDoExercise = function () {
  return this.gym == true;
}

let anotherHotelHasGym = anotherHotel.canDoExercise();


/**
 * Alerts whether another hotel has a gym.
 *
 * This function displays an alert with the name of another
 * hotel and its gym availability status.
 */

function alertanotherhotelhasgym() {
  alert(`${anotherHotel.name} hotel has gym: ${anotherHotelHasGym}`)
}


const me = {
  name: "Luka",
  age: 19,
  weight: 80,
  height: 150
}

const trainer = {
  name: "Stefan",
  lastName: "Stefanovski",
  academy: "SEDC CodeAcademy",
  lecture: "Objects"

}


const car = {
  model: "Peugeot 308 GTI",
  color: "White",
  year: 2011,
  fuel: 14,
  fuelConsuption: 5,
}
function getcarfuelconsuption()  {
/**
 * Calculates the amount of fuel consumed by the car over a given distance.
 *
 * This function takes a distance in kilometers as an argument and returns the
 * amount of fuel consumed by the car over that distance. The fuel consumption
 * is calculated by dividing the given distance by 100 and multiplying the
 * result by the fuel consumption rate of the car.
 *
 * @param {Number} distance - The distance in kilometers to calculate the fuel
 *   consumption for.
 * @returns {Number} The amount of fuel consumed by the car over the given
 *   distance.
 */
car.fuelConsuptionDistance = function(distance) {
  distance = prompt("Enter distance in km");
  return distance * (this.fuelConsuption/100);
}
alert(car.fuelConsuptionDistance());
}


const academy = {
  academyname: "SEDC",
  newacademyname: "Qinshift Academy",
  trainer: "Kliment Sidorov",
  assistant: "Zhanko Mitreski",
  students: [
"Viktorija", "Jasmin","Luka" ,"Ilija", "Biljana", "Ivana", "Andrej", "Bojan" ,"Meri", 
  ]
  
}

let jsonContent = JSON.stringify(academy);

/**
 * Sends the JSON representation of the academy object to AppInventor as a web
 * view string.
 *
 * This function sends the JSON representation of the academy object to AppInventor
 * using the setWebViewString method. The JSON representation was created by
 * calling JSON.stringify() on the academy object.
 */
function sendjsoncontent() {
window.AppInventor.setWebViewString(jsonContent);
}

$(document).ready(function () {
  let myButton = $("#myButton")
 
  myButton.on("click", function () {
 
   $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    /**
     * Function to handle the success of the AJAX call.
     * This function is given the result of the AJAX call as a parameter.
     * It logs the name of each user in the console and writes it to the page.
     * @param {Object[]} result - The result of the AJAX call, an array of Objects.
     */
    success: function (result) {
      for (let user of result) {
          console.log(user.name);
          document.write(user.name + "<br>");
      }
    },

/**
* Function to handle errors from the AJAX call.
* Logs the error object to the console.
* @param {Object} error - The error object from the AJAX call.
*/

/**
 * Function to handle errors from the AJAX call.
 * Logs the error object to the console.
 * @param {Object} error - The error object from the AJAX call.
 */

    error: function (error) {
     console.log(error);
    }
   }
   )
 
  })
 
 })


let salary = 1000;
const salaryAmount = 1000;
const rent = 10;
const bills = 250;

function pay(amount) {
    salary = salary - amount;
    console.log(salary);
    return salary;
}

function enterpayrent() {
    pay(prompt("Enter your rent amount"));
    viewleftsalary();
    
}

function viewleftsalary() {
let totalExpenses = salaryAmount - salary;
  alert(`You have ${salary} left`);
  console.log(totalExpenses);
}


function calculation(input) {
  switch (input) {
      case "+":
          return function(number1, number2) {
             return number1 + number2;
          }
          case "-":
              return function(number1, number2) {
                  return number1 - number2;
              }

          default:
              console.log("Invalid operator");
              return null;
  }
}

function decreasingNumbers(n) {
  let interval = setInterval(() => {
    console.log(n);
    n--;
    if(n == 0 ) {
       clearInterval(interval);
      }
  }, 1000);
 }
  setInterval(() => {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000);


function complex() {
	setTimeout(function () {
		console.log('1. First thing, preparing for the second');
		setTimeout(function () {
			console.log('2. Second thing, preparing for the third');
			setTimeout(function () {
				console.log('3. Third thing, preparing for the forth');
				setTimeout(function () {
					console.log('4. Forth thing, preparing for the fifth');
					setTimeout(function () {
						console.log('5. Fifth thing, preparing for the Sixth');
						setTimeout(function () {
							console.log('6. Sixth and last thing');
						}, 2000);
					}, 2000);
				}, 2000);
			}, 2000);
		}, 2000);
	}, 2000);
};

function logwindowfunction() {
  console.log(window);
  alert("Check the console for the window object");
}