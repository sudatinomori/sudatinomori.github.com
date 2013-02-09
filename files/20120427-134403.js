// ----------------------------------------------------------------------------
if (typeof(ACCESSIBLE_VERSION) == "undefined") { ACCESSIBLE_VERSION = false; }
// ----------------------------------------------------------------------------
if (typeof(__waa__) == "undefined") var __waa__ = [];
__waa__[__waa__.length] = 
new function(appInfo) {
language = "de";
country = "DE";

/*
try {

var thisUrl = new URL(document.location.href);
var params = '';
try {params += '?accountId='		+ appInfo.accountId;					} catch(__e1__) {}
try {params += '&url=' 				+ URL.jencode(thisUrl.toString());      } catch(__e2__) {}
try {params += '&appName=' 			+ URL.jencode(navigator.appName);       } catch(__e3__) {}
try {params += '&appVersion=' 		+ URL.jencode(navigator.appVersion);    } catch(__e4__) {}
try {params += '&language=' 		+ URL.jencode(navigator.userLanguage);  } catch(__e5__) {}
try {params += '&referrer=' 		+ URL.jencode(document.referrer);       } catch(__e6__) {}
try {params += '&aheight=' 			+ screen.availHeight;                   } catch(__e7__) {}
try {params += '&awidth=' 			+ screen.availWidth;                    } catch(__e8__) {}

var imgHref = new URL(
				  'http://'+appInfo.server+'/stats/stats.gif' + params
			  );

if (appInfo.proxyIncludes) {
	imgHref = new URL(appInfo.proxyUrl + URL.jencode(imgHref).toString());
}

new Image().src=imgHref.toString();
} catch (__e__) {}
*/

// insert wanted protocol and set corrsponding port
var urlLocation = new URL( document.location.href );
var webappSchema = urlLocation.protocol;

if (appInfo.proxyIncludes) {
	 webappSchema = "http";
}
 
var serverUrl = webappSchema + '://' + appInfo.server;
if( "https" == webappSchema ) { 
	serverUrl = serverUrl.replace( /:\d+/, ":443" );
} else { // assuming http 
	serverUrl = serverUrl.replace( /:\d+/, ":80" );
	
}

var resurl = new URL(serverUrl + "/extras/res/js/date.js");
var cgiurl = new URL(serverUrl + appInfo.cgiPath);

cgiurl.setParameter("accountId", appInfo.accountId, true);
cgiurl.setParameter("modified", appInfo.customField, true);

if (appInfo.proxyIncludes) {
	resurl = new URL(appInfo.proxyUrl + URL.jencode(resurl.toString()));
	cgiurl = new URL(appInfo.proxyUrl + URL.jencode(cgiurl.toString()));
}

footer_setModifiedTimestamp = function() {
	try {
		var elem = document.getElementById("footer_lastModified");
		if (elem) {
			var date = new Date();
			var d = elem.getAttribute("value");
			if (d) {
				d = d.substring(0,4) + "/" + d.substring(4,6) + "/" + d.substring(6,8) + " "
				  + d.substring(9,11) + ":" + d.substring(11,13) + ":" + d.substring(13,15)
				date = new Date(d);
			}

			var format = elem.getAttribute("format") || "f1";

			elem.innerHTML = dateToLocaleTimeStamp(date, true, true, format);
		}
	} catch (e) {
		alert(e);
	}
}

document.writeln("<SCRIPT src='" + resurl.toString() + "'></SCRIPT>");
document.writeln("<SCRIPT src='" + cgiurl.toString() + "'></SCRIPT>");
document.writeln("<SCRIPT> footer_setModifiedTimestamp();</SCRIPT>");


}({
    accountId       : "AVESJ0INX2ES", 
    internalId      : "", 
    customField     : "20120427-134403", 
    server          : "diycgi.cluster.mlpsca01.us.diy-servers.net:80", 
    cgiPath         : "/cgi-bin/Footer", 
    cgiRes          : "http://diycgi.cluster.mlpsca01.us.diy-servers.net:80/cgi", 
    productId       : "WSCSYSSSSLYTCP86", 
    clientId       	: "RRV000999JZT4SP1", 
    proxyIncludes   : false, 
    proxyUrl        : "", 
    pos             : __waa__.length
});
// ----------------------------------------------------------------------------
