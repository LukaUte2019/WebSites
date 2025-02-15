let videos = [];


function loadvideos() {
      console.log("Loading URL: http://lukaserver.ddns.net:81/videos");
     $.ajax({
      
      url: "http://lukaserver.ddns.net:81/videos",
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
            // videos.push(`<p>${ videosfound.videoname}<p>`);
            // videos.push(`<video width="320" height="240" controls="" src=${ videosfound.videourl}></video>`);
            videos.push(`<p>${videosfound.artistansongmname}<p>`);
            videos.push(`<a href="${videosfound.videourl}"><img src="${videosfound.thumbnail}" alt="Thumbnail for ${videosfound.artistansongmname}" width="320" height="240"></a>`);
            videos.push(`<p>${videosfound.artistName}<p>`);

            document.getElementById('video-container').innerHTML = videos
        }
      },

/**
 * Function to handle errors from the AJAX call.
 * Logs the error object to the console.
 * @param {Object} error - The error object from the AJAX call.
 */

      error: function (error) {
        if(confirm("Error loading videos. This may be because there is no internet connection or the port 81 is blocked by your ISP or a firewall on a Wi-Fi access point. Would you like to try again? View the error code in Console (CTRL+SHIFT+I)")) {
            loadvideos();
     }
       console.log(error);
      }
     }
     )
   
    }

    loadvideos();