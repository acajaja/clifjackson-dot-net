/**
 * Testing for any version of IE. Set a "IS_IE" cookie with the result 1 or 0.
 */
var cookieHandler = {
    checkForIE: function() {
        var i,x,y,ARRcookies = document.cookie.split(";");
        for (i=0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == 'IS_IE') {
                return unescape(y);
            }
        }
    },
    setBrowserCookie: function() {
        if (cookieHandler.checkForIE() == null) {
            var c_value = document.all ? 1 : 0;
            var exdays = 1;
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + exdays);
            c_value += ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
            document.cookie = "IS_IE=" + c_value;
        }
    }
};

(function() {
    cookieHandler.setBrowserCookie();
})();