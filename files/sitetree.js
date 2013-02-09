/* [nodename, id, name, navigationtext, href, isnavigation, childs[], templatename] */

if (typeof(decodeURIComponent) == 'undefined') {
  decodeURIComponent = function(s) {
    return unescape(s);
  }
}

function jdecode(s) {
    s = s.replace(/\+/g, "%20")
    return decodeURIComponent(s);
}

var POS_NODENAME=0;
var POS_ID=1;
var POS_NAME=2;
var POS_NAVIGATIONTEXT=3;
var POS_HREF=4;
var POS_ISNAVIGATION=5;
var POS_CHILDS=6;
var POS_TEMPLATENAME=7;
var POS_TARGET=8;
var theSitetree=[ 
	['PAGE','3628',jdecode('%E3%83%9B%E3%83%BC%E3%83%A0'),jdecode(''), jdecode('%2F3628.html'), 'true',[],'',''],
	['PAGE','3646',jdecode('%E6%96%99%E9%87%91'),jdecode(''), jdecode('%2F3646.html'), 'true',[],'',''],
	['PAGE','20301',jdecode('%E5%87%BA%E5%BC%B5%E4%B9%97%E9%A6%AC%E3%80%80'),jdecode(''), jdecode('%2F20301.html'), 'true',[],'',''],
	['PAGE','18801',jdecode('%E9%A0%90%E8%A8%97%E9%A6%AC%E5%8B%9F%E9%9B%86'),jdecode(''), jdecode('%2F18801.html'), 'true',[],'',''],
	['PAGE','20322',jdecode('%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%83%BB%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B'),jdecode(''), jdecode('%2F20322.html'), 'true',[],'',''],
	['PAGE','42501',jdecode('%E6%9C%80%E6%96%B0news'),jdecode(''), jdecode('%2F42501.html'), 'true',[],'','']];
var siteelementCount=6;
theSitetree.topTemplateName='Tendril';
theSitetree.paletteFamily='D9F4D5';
theSitetree.keyvisualId='-1';
theSitetree.keyvisualName='keyv.jpg';
theSitetree.fontsetId='35663';
theSitetree.graphicsetId='14058';
theSitetree.contentColor='3B8030';
theSitetree.contentBGColor='FFFFFF';
var localeDef={
  language: 'ja',
  country: 'JP'
};
var prodDef={
  wl_name: 'pageon',
  product: 'WSCSYSSSSLYTCP86'
};
var theTemplate={
				hasFlashNavigation: 'false',
				hasFlashLogo: 	'false',
				hasFlashCompanyname: 'false',
				hasFlashElements: 'false',
				hasCompanyname: 'false',
				name: 			'Tendril',
				paletteFamily: 	'D9F4D5',
				keyvisualId: 	'-1',
				keyvisualName: 	'keyv.jpg',
				fontsetId: 		'35663',
				graphicsetId: 	'14058',
				contentColor: 	'3B8030',
				contentBGColor: 'FFFFFF',
				a_color: 		'000000',
				b_color: 		'000000',
				c_color: 		'000000',
				d_color: 		'000000',
				e_color: 		'000000',
				f_color: 		'000000',
				hasCustomLogo: 	'false',
				contentFontFace:'MS PGothic',
				contentFontSize:'12',
				useFavicon:     'false'
			  };
var webappMappings = {};
webappMappings['1006']=webappMappings['1006-1006']={
webappId:    '1006',
documentId:  '3628',
internalId:  '1006',
customField: '1006'
};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '18801',
internalId:  '-',
customField: '20120427-135933'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '3628',
internalId:  '',
customField: '20120427-171420'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '42501',
internalId:  '',
customField: '20120419-170924'
};
webappMappings['5000']=webappMappings['5000-']={
webappId:    '5000',
documentId:  '20301',
internalId:  '',
customField: '20120427-134403'
};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '3646',
internalId:  '-',
customField: '20120427-134259'
};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '20322',
internalId:  '-',
customField: '20101225-124421'
};
var webAppHostname = 'diycgi.cluster.mlpsca01.us.diy-servers.net:80';
var canonHostname = 'diywk02.cluster.mlpsca01.us.diy-servers.net';
var accountId     = 'AVESJ0INX2ES';
var companyName   = '%E7%A4%BE%E4%BC%9A%E7%A6%8F%E7%A5%89%E6%B3%95%E4%BA%BA+%E3%80%80%E5%B7%A3%E7%AB%8B%E3%81%A1%E3%81%AE%E6%9D%9C+';
var htmlTitle	  = '%E7%A4%BE%E4%BC%9A%E7%A6%8F%E7%A5%89%E6%B3%95%E4%BA%BA%E5%B7%A3%E7%AB%8B%E3%81%A1%E3%81%AE%E6%9D%9C%E3%80%80+%E3%83%AC%E3%82%AA%E3%83%8A%E3%83%AB%E3%83%89%E3%83%80%E3%83%B4%E3%82%A3%E3%83%B3%E3%83%81%E7%89%A7%E5%A0%B4';
var metaKeywords  = '%E7%A4%BE%E4%BC%9A%E7%A6%8F%E7%A5%89%E6%B3%95%E4%BA%BA%E5%B7%A3%E7%AB%8B%E3%81%A1%E3%81%AE%E6%9D%9C%2C%E9%9A%9C%E5%AE%B3%E7%A6%8F%E7%A5%89%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E4%BA%8B%E6%A5%AD%E6%89%80%2C%E3%83%AC%E3%82%AA%E3%83%8A%E3%83%AB%E3%83%89%E3%83%BB%E3%83%80%E3%83%BB%E3%83%B4%E3%82%A3%E3%83%B3%E3%83%81%E7%89%A7%E5%A0%B4%2C%E3%83%AC%E3%82%AA%E3%83%8A%E3%83%AB%E3%83%89%E3%83%80%E3%83%B4%E3%82%A3%E3%83%B3%E3%83%81%E7%89%A7%E5%A0%B4%2C%E4%B9%97%E9%A6%AC%2C%E9%A0%90%E8%A8%97%E9%A6%AC%2C%E9%A4%8A%E8%80%81%E9%A6%AC%2C%E5%B0%B1%E5%8A%B4%E7%B6%99%E7%B6%9A%E6%94%AF%E6%8F%B4%E4%BA%8B%E6%A5%ADA%E5%9E%8B%2C++%E7%BE%A4%E9%A6%AC%E7%9C%8C%2C%E7%BE%A4%E9%A6%AC%2C%E9%A6%AC%2C%E4%B9%97%E9%A6%AC%E3%82%AF%E3%83%A9%E3%83%96%2C%E7%A6%8F%E7%A5%89%E6%96%BD%E8%A8%AD%2C%E3%83%AC%E3%82%AA%E3%83%8A%E3%83%AB%E3%83%89%2C%E3%83%AC%E3%82%AA%E3%83%8A%E3%83%AB%E3%83%89%E3%83%BB%E3%83%80%E3%83%BB%E3%83%B4%E3%82%A3%E3%83%B3%E3%83%81%2C%E5%B7%A3%E7%AB%8B%E3%81%A1%E3%81%AE%E6%9D%9C%2C%E8%87%AA%E9%A6%AC%2C%E3%82%B8%E3%83%A5%E3%83%8B%E3%82%A2%2C%E9%A0%90%E8%A8%97%E9%A6%AC%E5%8B%9F%E9%9B%86%2Cwww14.ocn.ne.jp%2F%7Esudati';
var metaContents  = '%E7%A4%BE%E4%BC%9A%E7%A6%8F%E7%A5%89%E6%B3%95%E4%BA%BA%E2%80%9C%E5%B7%A3%E7%AB%8B%E3%81%A1%E3%81%AE%E6%9D%9C%E2%80%9D%E3%81%AF%E3%80%81%E8%B5%A4%E5%9F%8E%E5%B1%B1%E5%8D%97%E9%BA%93%E3%81%AE%E7%BE%A4%E9%A6%AC%E7%9C%8C%E5%89%8D%E6%A9%8B%E5%B8%82%E5%AF%8C%E5%A3%AB%E8%A6%8B%E7%94%BA%E3%81%AB%E3%81%A6%E2%80%9C%E3%83%AC%E3%82%AA%E3%83%8A%E3%83%AB%E3%83%89%E3%83%BB%E3%83%80%E3%83%BB%E3%83%B4%E3%82%A3%E3%83%B3%E3%83%81%E7%89%A7%E5%A0%B4%E2%80%9D%E3%82%92%E7%B5%8C%E5%96%B6%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%BD%93%E6%B3%95%E4%BA%BA%E3%81%AF%E3%80%81%E7%9F%A5%E7%9A%84%E9%9A%9C%E5%AE%B3%E8%80%85%E3%81%AE%E5%88%A9%E7%94%A8%E8%80%85%E6%96%B9%E3%81%9F%E3%81%A1%E3%81%A8%E9%9B%87%E7%94%A8%E5%A5%91%E7%B4%84%E3%82%92%E7%B5%90%E3%81%B3%E3%80%81%E9%A6%AC%E3%82%92%E4%B8%AD%E5%BF%83%E3%81%A8%E3%81%97%E3%81%9F%E3%80%81%E9%A0%90%E8%A8%97%E9%A6%AC%E4%BA%8B%E6%A5%AD%E3%80%81%E4%B9%97%E9%A6%AC%E4%BA%8B%E6%A5%AD%E3%80%81%E4%B9%97%E9%A6%AC%E4%BD%93%E9%A8%93%E3%80%81%E9%A6%AC%E3%81%A8%E3%81%AE%E3%81%B5%E3%82%8C%E3%81%82%E3%81%84%E4%BD%93%E9%A8%93%E4%BA%8B%E6%A5%AD%E3%82%92%E8%A1%8C%E3%81%84%E5%BE%97%E3%81%9F%E5%8F%8E%E7%9B%8A%E3%81%AB%E3%82%88%E3%82%8A%E5%88%A9%E7%94%A8%E8%80%85%E3%81%AE%E7%9A%86%E6%A7%98%E3%81%AB%E8%B3%83%E9%87%91%E3%82%92%E6%94%AF%E6%89%95%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E8%AA%B0%E3%81%A7%E3%82%82%E6%B0%97%E8%BB%BD%E3%81%AB%E9%81%8A%E3%81%B3%E3%81%AB%E6%9D%A5%E3%81%A6%E3%82%82%E3%82%89%E3%81%88%E3%82%8B%E3%82%88%E3%81%86%E3%81%AA%E4%BA%8B%E6%A5%AD%E6%89%80%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E6%97%A5%E3%80%85%E6%B4%BB%E5%8B%95%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E9%A6%AC%EF%BC%88%E3%83%9D%E3%83%8B%E3%83%BC%E3%82%82%E3%81%84%E3%81%BE%E3%81%99%EF%BC%89%E3%82%92%E8%A6%8B%E3%81%A6%E3%81%BF%E3%81%9F%E3%81%84%E4%BA%BA%E3%80%81%E8%A7%A6%E3%82%8C%E3%81%A6%E3%81%BF%E3%81%9F%E3%81%84%E4%BA%BA%E3%80%81%E4%B9%97%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F%E3%81%84%E4%BA%BA%E3%80%81%E6%9C%AC%E6%A0%BC%E7%9A%84%E3%81%AA%E6%8A%80%E8%A1%93%E3%82%92%E7%BF%92%E5%BE%97%E3%81%97%E3%81%9F%E3%81%84%E6%96%B9%E3%81%BE%E3%81%A7%E3%80%82%E8%88%88%E5%91%B3%E3%81%AE%E3%81%82%E3%82%8B%E6%96%B9%E3%81%AF%E6%98%AF%E9%9D%9E%E4%B8%80%E5%BA%A6%E3%81%94%E6%9D%A5%E5%A0%B4%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%E3%82%B9%E3%82%BF%E3%83%83%E3%83%95%E4%B8%80%E5%90%8C%E3%81%8A%E5%BE%85%E3%81%A1%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82';
theSitetree.getById = function(id, ar) {
	if (typeof(ar) == 'undefined'){
		ar = this;
	}
	for (var i=0; i < ar.length; i++) {
		if (ar[i][POS_ID] == id){
			return ar[i];
		}
		if (ar[i][POS_CHILDS].length > 0) {
			var result=this.getById(id, ar[i][POS_CHILDS]);
			if (result != null){
				return result;
			}
		}
	}
	return null;
};

theSitetree.getParentById = function(id, ar) {
	if (typeof(ar) == 'undefined'){
		ar = this;
	}
	for (var i=0; i < ar.length; i++) {
		for (var j = 0; j < ar[i][POS_CHILDS].length; j++) {
			if (ar[i][POS_CHILDS][j][POS_ID] == id) {
				// child found
				return ar[i];
			}
			var result=this.getParentById(id, ar[i][POS_CHILDS]);
			if (result != null){
				return result;
			}
		}
	}
	return null;
};

theSitetree.getName = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_NAME];
	}
	return null;
};

theSitetree.getNavigationText = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_NAVIGATIONTEXT];
	}
	return null;
};

theSitetree.getHREF = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_HREF];
	}
	return null;
};

theSitetree.getIsNavigation = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_ISNAVIGATION];
	}
	return null;
};

theSitetree.getTemplateName = function(id, lastTemplateName, ar) {
	if (typeof(lastTemplateName) == 'undefined'){
		lastTemplateName = this.topTemplateName;
	}
	if (typeof(ar) == 'undefined'){
		ar = this;
	}
	for (var i=0; i < ar.length; i++) {
		var actTemplateName = ar[i][POS_TEMPLATENAME];
		if (actTemplateName == ''){
			actTemplateName = lastTemplateName;
		}
		if (ar[i][POS_ID] == id) {
			return actTemplateName;
		}
		if (ar[i][POS_CHILDS].length > 0) {
			var result=this.getTemplateName(id, actTemplateName, ar[i][POS_CHILDS]);
			if (result != null){
				return result;
			}
		}
	}
	return null;
};

theSitetree.getByXx = function(lookup, xx, ar) {
    if (typeof(ar) == 'undefined'){
    	ar = this;
    }
    for (var i=0; i < ar.length; i++) {
        if (ar[i][xx] == lookup){
        	return ar[i];
        }
        if (ar[i][POS_CHILDS].length > 0) {
        	var result=this.getByXx(lookup, xx, ar[i][POS_CHILDS]);
            if (result != null){
                return result;
               }
        }
    }
    return null;
};

function gotoPage(lookup) {
	if(__path_prefix__ == "/servlet/CMServeRES" && typeof (changePage) == 'function'){
		changePage(lookup);
		return;
	}
	var page = theSitetree.getHREF(lookup);
	if (!page) {
		var testFor = [ POS_NAME, POS_NAVIGATIONTEXT ];
		for (var i=0 ; i < testFor.length ; i++) {
			var p = theSitetree.getByXx(lookup, testFor[i]);
			if (p != null) {
				page = p[POS_HREF];
				break;
			}
		}
	}
	document.location.href = (new URL(__path_prefix__ + page, true, true)).toString();
};
