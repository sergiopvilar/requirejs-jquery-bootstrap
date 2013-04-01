		
	function ModuleBootstrap(){

		var module = {};
		module.debug = true;		

		module.init = function(){

			if(module.debug == true) console.info('Module Bootstrap intialized');

			this.default();
			this.events();

		}

		module.default = function(){

		}

		module.events = function(){

		}

		return module.init();

	};