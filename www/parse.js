/*global cordova, module*/


var Parse = function() {};

Parse.greet = function(name, successCallback, errorCallback) {
	cordova.exec(successCallback, errorCallback, "Parse", "greet", [name]);
};

Parse.facebookLogin = function(successCallback, errorCallback) {
	cordova.exec(successCallback, errorCallback, "Parse", "facebookLogin", []);
};


module.exports = Parse;