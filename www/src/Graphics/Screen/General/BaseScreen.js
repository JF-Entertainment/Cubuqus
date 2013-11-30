var BaseScreen = Class.create({

	initialize: function () {
		
		//Initialize global variables
		this.State = State.Active;
		this.Filters = [];
        this.ControlManager = new ControlManager();
	},
	

	Tick: function (elapsed) {
			
		this.ControlManager.Tick(elapsed);
		
	},
		
	Draw: function (e) {
		
        this.ControlManager.Draw(e);
		
	},
	
    onResize: function() {
    
    }
	
	
});