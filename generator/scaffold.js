var Scaffold = new Class({


	analyzer: false,

	initialize: function() {
		$('gen').addEvent('click', function() {
			this.analyzer = new DatabaseAnalyzer($('db').get('value'));
			
		}.bind(this));
	},

	showSchema: function(tables) {
		console.log("Parsed schema into object", tables);
		
	}

});

