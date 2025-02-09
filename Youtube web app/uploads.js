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
      for (let videosfound of result) {
        // uploads.push(`<p>${videosfound.videoname}<p>`);
        // uploads.push(`<video width="320" height="240" controls="" src=${videosfound.videopath}></video>`);
        // document.getElementById('video-container').innerHTML = uploads
      uploads.push(`<p>${videosfound.videoname}<p>`);
      uploads.push(`<a href="${videosfound.videourl}"><img src="${videosfound.thumbnail}" alt="Thumbnail for ${videosfound.videoname}" width="320" height="240"></a>`);
      uploads.push(`<p>${videosfound.ltchannel}<p>`);
      document.getElementById('video-container').innerHTML = uploads
      }
    },

/**
* Function to handle errors from the AJAX call.
* Logs the error object to the console.
* @param {Object} error - The error object from the AJAX call.
*/

    error: function (error) {
      if(confirm("Error loading uploaded videos. This may be because there is no internet connection or the port 81 is blocked by your ISP or a firewall on a Wi-Fi access point. Would you like to try again? View the error code in Console (CTRL+SHIFT+I)")) {
        loadvideos();
      }
     console.log(error);
    }
   }
   )
 
  }
loaduploads();


