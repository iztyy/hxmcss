var system={};var p=navigator.platform;var u=navigator.userAgent;system.win=p.indexOf("Win")==0;system.mac=p.indexOf("Mac")==0;system.x11=(p=="X11")||(p.indexOf("Linux")==0);if(system.win||system.mac||system.xll){if(u.indexOf('Windows Phone')>-1){}else{window.location.href="/index.html";}}
var browser={versions:function(){var u=navigator.userAgent,app=navigator.appVersion;return{trident:u.indexOf('Trident')>-1,presto:u.indexOf('Presto')>-1,webKit:u.indexOf('AppleWebKit')>-1,gecko:u.indexOf('Gecko')>-1&&u.indexOf('KHTML')==-1,mobile:!!u.match(/AppleWebKit.*Mobile.*/),ios:!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:u.indexOf('Android')>-1||u.indexOf('Linux')>-1,iPhone:u.indexOf('iPhone')>-1,iPad:u.indexOf('iPad')>-1,webApp:u.indexOf('Safari')==-1};}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()}
if(browser.versions.mobile||browser.versions.ios||browser.versions.android||browser.versions.iPhone||browser.versions.iPad){var Web_Type=false;}else{var Web_Type=true;}
if(Web_Type){location.href="/index.html";}