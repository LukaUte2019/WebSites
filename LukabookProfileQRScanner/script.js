// script.js file
function newDoc(document) {
    window.location.assign(document);
  }
function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        if (decodeText.includes("http://lukaserver.ddns.net/lukabookprofiles/lukabookprofile.php?username=")) {
            console.log(`Scan result: ${decodeText}`, decodeResult);
            newDoc(decodeText);
        } else {
            alert("Not a Lukabook QR Code. Scan the Lukabook QR Code, not the Nametag.");
        }
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});
