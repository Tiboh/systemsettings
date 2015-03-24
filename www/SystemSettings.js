
var exec = require('cordova/exec');

function SystemSettings() {
}

SystemSettings.prototype.launch = function() {
	exec(null, null, "SystemSettings", "launch", []);
};

SystemSettings.install = function() {
	if(!window.plugins) {
		window.plugins = [];
	}

	window.plugins.SystemSettings = new SystemSettings();
	return window.plugins.SystemSettings;
};

cordova.addConstructor(SystemSettings.install);
