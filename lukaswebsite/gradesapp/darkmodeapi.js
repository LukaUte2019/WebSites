// This file contains the functions that are used to toggle the webpage to dark mode or light mode, or to turn on and off dark mode.
// Add it in the html file as darkmodeapi.js. example: <script src="darkmodeapi.js"></script>


/**
 * Toggles the webpage to dark mode styling.
 *
 * This function changes the background color of the body to black
 * and changes the text color of the body to white.
 */

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    console.log("toastnotif Dark mode enabled");
    return "Dark mode enabled";
  }
  
  
  /**
   * Toggles the webpage to light mode styling.
   *
   * This function changes the background color of the body to white
   * and changes the text color of the body to black.
   */
  function lightMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    console.log("toastnotif Light mode enabled");
    return "Light mode enabled";
  }
  
  /**
   * Toggles the webpage to dark mode styling.
   *
   * This function changes the background color of the body to black
   * and changes the text color of the body to white.
   */
  
  function darkModenoreturn() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    console.log("toastnotif Dark mode enabled");
  }
  
  
  /**
   * Toggles the webpage to light mode styling.
   *
   * This function changes the background color of the body to white
   * and changes the text color of the body to black.
   */
  function lightModenoreturn() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    console.log("toastnotif Light mode enabled");
  }

 function toggledarkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  console.log("toastnotif Dark mode enabled or disabled");
}