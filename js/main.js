require([

	// Libs
	"jquery", 
	"vendor/modernizr-2.6.2.min",

	// Modules
	"modules/common",
	"modules/home",

], function($) {	

	// Initalize default module
	var Common = new ModuleCommon();

	// Check if page has module
	if($('body').attr('rel')){

		Common.loadModule($('body').attr('rel'));

	}


});

