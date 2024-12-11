
/**
 * Sets the form method to POST for the specified form.
 *
 * @param {string} name - The name of the form whose method is to be set to POST.
 */
function jslFormSetPost(name) {
    document.forms[name].method = "POST";
    }
/**
 * Sets the form method to GET for the specified form.
 *
 * @param {string} name - The name of the form whose method is to be set to GET.
 */
    function jslFormSetGet(name) {
    document.forms[name].method = "GET";
    }
/**
 * Submits the form with the specified name.
 *
 * This function first calls UpdateDateTime() to update the time field and then
 * submits the form.
 *
 * @param {string} name - The name of the form to be submitted.
 */
    function jslFormSubmit(name) {
    UpdateDateTime();
    document.forms[name].submit();
    }
/**
 * Goes to the specified menu/page.
 *
 * This function sets the form variable 'menu' to the value of the first
 * parameter and sets the form variables 'pagename' and 'errorpagename' to the
 * value of the second parameter. It then sets the form method to GET and
 * submits the form.
 *
 * @param {string} Menu - The name of the menu to go to.
 * @param {string} Page - The name of the page to go to.
 */
    function jslGoTo(Menu,Page) {
    if ((Menu!=null) && (Menu!="")) jslSetValue("uiPostMenu", Menu);
    if ((Page!=null) && (Page!="")) {
    jslSetValue("uiPostPageName", Page);
    jslSetValue("uiPostErrorPageName", Page);
    }
    jslFormSetGet("uiPostForm");
    jslFormSubmit("uiPostForm");
    }
/**
 * Updates the hidden field 'time:settings/time' with the current time in seconds
 * since 1970-01-01 00:00:00 UTC and the current timezone offset in minutes.
 */
    function UpdateDateTime() {
    var date = new Date();
    jslSetValue("uiPostDateTime", Math.floor(date.getTime()/1000) + "," + date.getTimezoneOffset());
    }
/**
 * Retrieves the value of a form element or DOM element by ID.
 *
 * This function checks if the application is running on Microsoft Pocket Internet Explorer.
 * If so, it uses the eval method to get the value of the form element by ID. Otherwise,
 * it attempts to retrieve the DOM element by ID and returns its value if found.
 *
 * @param {string} id - The ID of the element whose value is to be retrieved.
 * @returns {string} The value of the specified element, or an empty string if not found.
 */
    function jslGetValue (id) {
    if (navigator.appName=='Microsoft Pocket Internet Explorer') {
    return eval('document.uiPostForm.'+id+'.value');
    } else {
    var h = document.getElementById(id);
    if (h != null) return h.value;
    }
    return "";
    }
/**
 * Sets the value of a form element or DOM element by ID.
 *
 * This function checks if the application is running on Microsoft Pocket Internet Explorer.
 * If so, it uses the eval method to set the value of the form element by ID. Otherwise,
 * it attempts to retrieve the DOM element by ID and sets its value if found.
 *
 * @param {string} id - The ID of the element whose value is to be set.
 * @param {string} wert - The value to be set.
 */
    function jslSetValue(id, wert) {
    if (navigator.appName=='Microsoft Pocket Internet Explorer') {
    eval('document.uiPostForm.'+id+'.value="'+wert+'"');
    } else {
    var h1 = document.getElementById(id);
    if (h1 != null) h1.value=wert;
    }
    }
/**
 * Opens a help popup window for the specified page.
 *
 * This function calls jslPopHelpEx with an empty anchor name.
 *
 * @param {string} pagename - The name of the help page to be displayed.
 */
    function jslPopHelp(pagename) {
    jslPopHelpEx(pagename, "");
    }
/**
 * Opens a help popup window for the specified page with an anchor.
 *
 * This function builds a URI to the help page by concatenating the page name and
 * anchor with the popup window parameters. It then opens a new window with the
 * specified options and assigns it to the global variable g_HelpWin. If the
 * window already exists, its location is updated and it is focused.
 *
 * @param {string} pagename - The name of the help page to be displayed.
 * @param {string} anker - The anchor name on the help page to be displayed.
 */
    function jslPopHelpEx(pagename, anker) {
    var uri = "/cgi-bin/webcm?getpage=../html/de/help/popup.html&var:pagename="+pagename;
    if (anker != "") uri += "&var:anker="+anker;
    uri += "&sid=e287ecac9d1ffde7";
    var options = "width=580,height=500,resizable=yes,scrollbars=yes,location=no";
    if (top.g_HelpWin==null || typeof(top.g_HelpWin.closed)=='undefined' || top.g_HelpWin.closed)
    top.g_HelpWin = window.open(uri,"HelpWindow",options);
    else
    top.g_HelpWin.location.href = uri;
    if (top.g_HelpWin) top.g_HelpWin.focus();
    }
/**
 * Determines whether the given menu and page combination should initiate a specific process.
 *
 * @param {string} menu - The name of the menu to be checked.
 * @param {string} page - The name of the page to be checked.
 * @returns {boolean} - Returns true if the menu and page combination requires a specific process,
 *                      otherwise returns false.
 */
    function isLotse(menu, page) {
    if (menu == "home") return false;
    if (menu == "konfig" && (page != "home" && page != "sitemap")) return true;
    if (menu == "first" || menu == "fon_config") return true;
    return false;
    }
    var g_AskAssiText = "If you exit the Wizard now, your entries will be lost. \x0aSelect \"OK\" to end the Wizard. \x0aSelect \"Cancel\" to return to the Wizard.";
/**
 * Asks the user whether they want to cancel the current assistant process.
 *
 * If the current menu and page combination is known to require a specific process
 * (as determined by the isLotse function), this function will display a confirmation
 * dialog to the user with the message in g_AskAssiText. If the user selects OK, the
 * function will return true. If the user selects Cancel, the function will return
 * false.
 *
 * @returns {boolean} - Returns true if the user selected OK, otherwise returns false.
 */
    function AskAssiCancel() {
    return confirm(g_AskAssiText);
    }
    function OnOverview() {
    var m = jslGetValue("uiPostMenu");
    var p = jslGetValue("uiPostPageName");
    if (isLotse(m,p)) {
    if (!AskAssiCancel()) return;
    }
    jslGoTo("home", "home");
    }
    function OnSetting() {
    var m = jslGetValue("uiPostMenu");
    var p = jslGetValue("uiPostPageName");
    if (isLotse(m,p)) {
    if (!AskAssiCancel()) return;
    }
    var menu = readCookie("menu");
    var page = readCookie("page");
    if ((menu == "konfig" || menu == "software" || menu =="enhsettings") && (page =="enhsettings" || page == "home" || page == "extern")) {
    jslGoTo(menu, page);
    return;
    }
    jslGoTo("konfig", "home");
    }
    function GoToSitemap()
    {
    var m = jslGetValue("uiPostMenu");
    var p = jslGetValue("uiPostPageName");
    if (isLotse(m,p)) {
    if (!AskAssiCancel()) return;
    }
    if(m=="home") {jslGoTo('home', 'sitemap');}
    else if(m=="system") { jslGoTo('system', 'sitemap');}
    else if(m=="first") {jslGoTo('konfig', 'sitemap');}
    else if(m=="fon") { jslGoTo('fon', 'sitemap');}
    else if(m=="fon_config") {jslGoTo('konfig', 'sitemap');}
    else if(m=="internet") {jslGoTo('internet', 'sitemap');}
    else if(m=="konfig") { jslGoTo('konfig', 'sitemap');}
    else if(m=="enhsettings") { jslGoTo('enhsettings', 'sitemap');}
    else if(m=="software") {jslGoTo('software', 'sitemap');}
    else if(m=="wlan") {jslGoTo('wlan', 'sitemap');}
    else if(m=="usb") {jslGoTo('usb', 'sitemap');}
    else{ jslGoTo('home', 'sitemap');}
    }
    function AddFavoritesLink(breite, titel) {
    if (g_IE)
    document.write('<td title="' + titel + '" style="width:' + breite + 'px;"><a href="javascript:window.external.AddFavorite(window.document.URL,window.document.title)"><img src="../html/de/images/favorite.gif"></a></td>');
    }
    function setMenuPageCookie(menu, page) {
    storeCookie("menu",menu,100);
    storeCookie("page",page,100);
    }
    function sortByStrings(array, getStrFunc, makeCopy) {
    if (typeof getStrFunc != 'function') {
    getStrFunc = function (str) { return str; };
    }
    var toSort = array;
    if (makeCopy) {
    for (var i = 0, len = array.length; i < len; i++) {
    toSort[i] = array[i];
    }
    }
    toSort.sort(makeStrCompareFunc(getStrFunc));
    return toSort;
    }
    function makeStrCompareFunc(getStrFunc) {
    var makeComparable = function (str) {
    str = convertHTML2Text(str || "");
    return str;
    };
    if ("Z".localeCompare("a") < 0) {
    makeComparable = function (str) {
    str = convertHTML2Text(str || "");
    str = replaceSpecialChars(str);
    str = str.toLowerCase();
    return str;
    };
    }
    function replaceSpecialChars(str) {
    var repl = {
    "a": /(Á|À|Â|Ã|Æ|Å|á|à|â|ã|æ|å|Ä|ä)/g,
    "c": /(ç|Ç)/g,
    "e": /(Ë|É|È|Ê|ë|é|è|ê)/g,
    "i": /(Ï|Í|Ì|Î|ï|í|ì|î)/g,
    "n": /(Ñ|ñ)/g,
    "o": /(Ø|Ó|Ò|Õ|Ô|ø|ó|ò|õ|ô|Ö|ö)/g,
    "u": /(Ú|Ù|Û|ú|ù|û|Ü|ü)/g,
    "y": /(Ý|ý)/g
    };
    for (var ch in repl) {
    str = str.replace(repl[ch], ch);
    }
    return str;
    }
    return function (obj1, obj2) {
    var str1 = makeComparable(getStrFunc(obj1));
    var str2 = makeComparable(getStrFunc(obj2));
    return str1.localeCompare(str2);
    };
    }
    function isBitSet(num, b) {
    return (num & (1 << b)) > 0;
    }
    function doLogout() {
    var frm = document.forms["logoutForm"];
    if (frm) {
    return frm.submit();
    }
    return false;
    }
    function isLoginPage(txt) {
    if (txt) {
    if (txt.indexOf("<!--login" + "Page-->") >= 0) {
    return true;
    }
    }
    return false;
    }
    function showtip(current,e,text){
    if (!e)
    return;
    var tipObj=document.getElementById("uiTooltip");
    if (tipObj)
    {
    tipObj.innerHTML=text;
    tipObj.style.left=(e.pageX?e.pageX:e.clientX)+5+"px";
    tipObj.style.top=(e.pageY?e.pageY:e.clientY)+5+"px";
    tipObj.style.display="";
    }
    return;
    }

    function hidetip(){
    var tipObj=document.getElementById("uiTooltip");
    if (tipObj)
    tipObj.style.display="none";
    return;
    }
/*************  ✨ Codeium Command ⭐  *************/
/**
 * Generates an HTML button element with an icon.
 *
 * @param {string} btnId - The id of the button element.
 * @param {function|string} clickFunc - The function or code to execute on click.
 * @param {string} [btnValue] - The value and title of the button.
 * @param {string} pic - The filename of the icon image.
 * @param {boolean} [invisible=false] - Set to true to make the button initially invisible.
 * @returns {string} The HTML code for the button element.
 */
/******  47688b16-0c14-41c5-bdcb-e72ed0354c22  *******/    var g_ImgPath = '../html/de/images/';

/**
 * Generates an HTML button element with an icon.
 *
 * @param {string} btnId - The id of the button element.
 * @param {function|string} clickFunc - The function or code to execute on click.
 * @param {string} [btnValue] - The value and title of the button.
 * @param {string} pic - The filename of the icon image.
 * @param {boolean} [invisible=false] - Set to true to make the button initially invisible.
 * @returns {string} The HTML code for the button element.
 */
    function IconBtn(btnId, clickFunc, btnValue, pic, invisible)
    {
    var str = '<button type="button" id="' + btnId + '"';
    if (clickFunc) str += ' onclick="' + clickFunc + '"';
    if (btnValue) str += ' value="' + btnValue + '" title="' + btnValue + '"';
    if (invisible) str += ' style="visibility:hidden;"';
    str += '>';
    str += '<img src="' + g_ImgPath + pic + '" /></button>';
    return str;
    }
/**
 * Stores a cookie with the specified name, value, and expiration period.
 *
 * This function sets a cookie with the provided name and value. If the number
 * of days is specified, the cookie will expire after that many days; otherwise,
 * it will be a session cookie.
 *
 * @param {string} name - The name of the cookie to be stored.
 * @param {string} value - The value of the cookie to be stored.
 * @param {number} [days] - Optional. The number of days until the cookie expires.
 */
    function storeCookie(name, value, days) {
    var expires = "";
    if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = "; expires="+date.toGMTString();
    }
    document.cookie = name+"="+value+expires+"; path=/";
    }
/**
 * Reads a cookie with the given name.
 *
 * @param {string} name the name of the cookie to read
 * @returns {string} the value of the cookie, or an empty string if the cookie does not exist
 */
    function readCookie(name) {
    var result = "";
    var cookieStr = document.cookie;
    if (cookieStr) {
    var start = cookieStr.indexOf(name + '=');
    if (start > -1) {
    start += name.length + 1;
    var end = cookieStr.indexOf(';', start);
    if (end == -1) {
    end = cookieStr.length;
    }
    result = cookieStr.substring(start, end);
    }
    }
    return result;
    }
    /**
     * Deletes a cookie with the given name.
     *
     * @param {string} name - Name of the cookie to delete.
     */
    function eraseCookie(name) {
    storeCookie(name, "", -1);
    }
    

    
// ../js/webuicookie.js
var g_webuiCookie = g_webuiCookie || (function () {
    var fields = [
    { valName: "noPwdReminder", valDefault: "0"} // Keine Anzeige des "Passworteinrichten"-Reminders
    ];
    var values;
    function init(str) {
    str = str || "";
    values = str.split("");
    for (var i = values.length; i < fields.length; i++) {
    values[i] = fields[i].valDefault;
    }
    }
    function idx(valName) {
    for (var i = 0, len = fields.length; i < len; i++) {
    if (fields[i] && fields[i].valName == valName) {
    return i;
    }
    }
    return -1;
    }
    function getChar(valName) {
    if (values) {
    var i = idx(valName);
    if (i >= 0) {
    return values[i];
    }
    }
    return "";
    }
    function setChar(valName, ch) {
    if (values) {
    ch = ""+ch;
    if (ch.length != 1) {
    return false;
    }
    var i = idx(valName);
    if (i >= 0) {
    values[i] = ch;
    return true;
    }
    }
    return false;
    }
    function getWholeStr() {
    if (!values) {
    return "";
    }
    return values.join("");
    }
    function saveToForm(dontEnable) {
    if (!values) {
    return false;
    }
    var frm = document.forms["uiPostForm"];
    if (!frm) {
    return false;
    }
    frm = frm.elements["box:settings/webui_cookie"];
    if (!frm) {
    return false;
    }
    frm.value = getWholeStr();
    if (!dontEnable) {
    frm.disabled = false;
    }
    return true;
    }
    return {
    init: init,
    getChar: getChar,
    setChar: setChar,
    saveToForm: saveToForm
    };
    })();
    
    g_webuiCookie.init("");