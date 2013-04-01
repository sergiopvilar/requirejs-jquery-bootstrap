		
	function ModuleCommon(){

		var module = {};
		module.debug = true;		

		module.init = function(){

			if(module.debug == true) console.info('Module Common intialized');

			this.default();
			this.events();

		}

		module.default = function(){

		}

		module.events = function(){

		}

		this.loadModule = function(mod){

			var mod = mod.charAt(0).toUpperCase() + mod.slice(1);

			eval(mod+' = new Module'+mod+'();');

		}

		return module.init();

	};