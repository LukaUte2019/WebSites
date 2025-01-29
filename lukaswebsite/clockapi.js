setInterval(() => {
    let date = new Date();
  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
  }, 1000);