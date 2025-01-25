const groceries = ['Bread', 'Milk', 'Butter', 'Salt', 'Chips', 'Bitolska Pavlaka', 'Balans+', 'Argeta Pashteta Kokoskina', 'Argeta Pashteta Tuna', 'Salakis', 'Knoppers', 'Tofife']
let groceriescookie = "['Bread', 'Milk', 'Butter', 'Salt', 'Chips', 'Bitolska Pavlaka', 'Balans+', 'Argeta Pashteta Kokoskina', 'Argeta Pashteta Tuna', 'Salakis', 'Knoppers', 'Tofife'];"
/**
 * Adds an item to the groceries list if it is a string.
 *
 * This function checks if the provided item is of type string,
 * and if so, adds it to the groceries array. After attempting
 * to add the item, it logs the current state of the groceries list.
 *
 *  * @param {string} item - The item to be added to the groceries list.
 */

function addToGroceriesListPrompt() {
    addToGroceriesList(prompt('Enter what to add in the grocery list'));
}
function addToGroceriesList(item) {
    if (typeof item === 'string') {
groceries.push(item);
document.cookie = "Groceries" + "=" + groceries + ";" + "expires" + ";path=/";
}
alert(`item ${item} added`);
console.log(groceries);
}
function showGroceriesList() {
   document.write('My groceries list:', '<br>')
    for (let i= 0; i < groceries.length; i++) {
        document.write(`${i + 1}) ${groceries[i]}`, "<br>");
    } 
    document.write("<a href=javascript:history.go()>Go Back</a>")
}
function findProductInList(item) {
    for (let product of groceries) {
      if (product === item) {
        return product;
      }
    }
    return null;
}

function finditem() {
let foundItem = findProductInList(prompt('Enter Product Name'));
if (foundItem) {
document.write(`Found ${foundItem}`, '<br>');
} else {
    document.write('Not On List. On List Are:', '<br>')
}
document.write("<a href=javascript:history.go()>Go Back</a>")
}

function finditemalertshow() {
    let foundItem = findProductInList(prompt('Enter Product Name'));
    if (foundItem) {
    alert(`Found ${foundItem}`);
    } else {
       alert('Not On List.')
    }
    }

function deleteItemFromList(item) {
    let index = 0;
    while (index < groceries.length) {
        if (groceries[index] === item) {
            document.write(`Deleted ${groceries[item]}`);
            groceries[index] = null;
        }
        document.write(`Item Not Found, Nothing Deleted. Current item: ${groceries[index]}`, '<br>');
        index++;
    }
    document.write("<a href=javascript:history.go()>Go Back</a>")
}

/**
 * Gets the value of a cookie by name.
 *
 * @param {string} cname - The name of the cookie to get.
 * @returns {string} The value of the cookie, or an empty string if the cookie does not exist.
 */
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c;
      }
    }
    return "";
  }

groceries = getCookie("Groceries");


function getCookie1(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    return ca;
  }