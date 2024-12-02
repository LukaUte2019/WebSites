function setashomepage() {
    console.log('windowwithbutton Website set as Homepage');
    window.AppInventor.setWebViewString("setcurrentwebpageashomepage");

  };
  function openinstify() {
    console.log('toastnotif Opening Android App...');
    window.AppInventor.setWebViewString("openandroidapp com.lukaplayer.instify/io.kodular.lukapravivlogovi.Andamp.Screen1");
  };
  function aboutbrowser() {
    console.log('toastnotif Opening About Browser...');
    window.AppInventor.setWebViewString("aboutbrowser");
  };