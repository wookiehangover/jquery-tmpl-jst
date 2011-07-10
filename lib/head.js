try {
	if (module && module.exports) {
		jQuery = require('jquery');
		module.exports = jQuery;
	}
} catch(e) {}
