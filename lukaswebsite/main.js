  let fromwebsitename = "Luka's Website (http://lukaserver.ddns.net/)";
  
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
    window.AppInventor.setWebViewString("openandroidapp io.kodular.lukapravivlogovi.WebBrowser/io.kodular.lukapravivlogovi.WebBrowser.Screen1/From JavaScript");
 };

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