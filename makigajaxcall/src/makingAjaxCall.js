$(document).ready(function () {
    let myButton2 = $("#myButton2")
   
    myButton2.on("click", function () {
   
     $.ajax({
      url: "https://i.instagram.com/api/v1/users/176702683/info/",
      /**
       * Function to set the User-Agent header before making the AJAX call.
       * @param {Object} req - The request object to set the header on.
       */
      beforeSend: function (req) {
        req.setRequestHeader('User-Agent', 'Instagram 76.0.0.15.395 Android (24/7.0; 640dpi; 1440x2560; samsung; SM-G930F; herolte; samsungexynos8890; en_US; 138226743)');
    },
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

      error: function (error) {
       console.log(error);
      }
     }
     )
   
    })
   
   })

$(document).ready(function () {
    let myButton = $("#myButton")
   
    myButton.on("click", function () {
   
     $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      /**
       * Function to set the User-Agent header before making the AJAX call.
       * @param {Object} req - The request object to set the header on.
       */

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

      error: function (error) {
       console.log(error);
      }
     }
     )
   
    })
   
   })


   $(document).ready(function () {
    let myButton1 = $("#myButton1")
   
    myButton1.on("click", function () {
   
     $.ajax({
      url: "https://swapi.tech/api/people/" + prompt('Enter a person number'),
      /**
       * Function to handle the success of the AJAX call.
       * This function is given the result of the AJAX call as a parameter.
       * It logs the name of each user in the console and writes it to the page.
       * @param {Object[]} result - The result of the AJAX call, an array of Objects.
       */
        success: function (result) {
        console.log(result.result.properties.name);
        $("#name").text("Name: " + result.result.properties.name);
        $("#height").text("Height: " + result.result.properties.height);
        $("#mass").text("Mass: "+ result.result.properties.mass);
        },

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