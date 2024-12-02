let cash = prompt('Enter Cash (Number only)');

if(cash >= 50){
  document.write('<a href=https://www.google.com/search?q=restaurants+around+me> you should go out for a dinner and a movie </a>');
}
else if (cash >= 35) {
    document.write('<a href=https://www.google.com/search?q=restaurants+around+me> you should go out to a fine meal. </a>');
} else if (cash >= 12) {
    document.write('<a href=https://netflix.com> you should go see a movie </a>');
} else {
    document.write('<a href=https://www.google.com/search?q=magenta+tv+go> looks like you\'ll be watching TV </a>')
}