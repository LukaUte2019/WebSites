let uploads = [];

function loaduploads() {
    console.log("Loading URL: http://lukaserver.ddns.net:81/uploads");
   $.ajax({
    
    url: "http://lukaserver.ddns.net:81/uploads",
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
        uploads.push(`<p>${user.videoname}<p>`);
        uploads.push(`<video width="320" height="240" controls="" src=${user.videopath}></video>`);
        document.getElementById('video-container').innerHTML = uploads
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
 
  }
loaduploads();


