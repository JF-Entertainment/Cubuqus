State = {
	Active: 0,
	Paused: 1,
	Killed: 2

};


var BaseScene = Class.create({

	initialize: function () {
		
		//Initialize global variables
		this.Screens = [];
		
		this.State = State.Active;
	},
	
		
	Load: function (elapsed) {
        
	
	},		

	Tick: function (elapsed) {
		
		
	 	for (var i=0; i < this.Screens.length; i++){
            
        	if (this.Screens[i].State == State.Kill){
				//Delete Scene and add index
				this.Screens.splice(i, 1);
				i++;
				if (i >= this.Screens.length) break;
			}
			
			
            //Call "Tick"-Method
            if (this.Screens[i].State != State.Pause) this.Screens[i].Tick(elapsed);

        }
		
		
		
		
	},
		
	Draw: function (e) {
		
		//Call "Draw"-Method
		for (var i=0; i < this.Screens.length; i++) {
            //Apply Filters and merge Screens 
            var ScreenGraphics = new Graphics( e.Width, e.Height);
            this.Screens[i].Draw(ScreenGraphics); 
            ScreenGraphics.ApplyFilters(this.Screens[i].Filters);
            e.Merge(ScreenGraphics,0,0);
        }
		
        
        
	},
	
	onResize: function() {

        for (var i=0; i < this.Screens.length; i++) this.Screens[i].onResize(); 
        
    }
	
	
	
});