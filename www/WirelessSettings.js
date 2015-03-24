
var exec = require('cordova/exec');

function WirelessSettings() {
}

WirelessSettings.prototype.launch = function() {
	exec(null, null, "WirelessSettings", "launch", []);
};

WirelessSettings.install = function() {
	if(!window.plugins) {
		window.plugins = [];
	}

	window.plugins.WirelessSettings = new WirelessSettings();
	return window.plugins.WirelessSettings;
};

cordova.addConstructor(WirelessSettings.install);