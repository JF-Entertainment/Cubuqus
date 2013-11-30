var SceneManager = Class.create({
	
	initialize: function () {
		
		//Initialize global variables
		this.Scenes = [];
		
	
	},

	
	Tick: function (elapsed) {
		
	 	for (var i=0; i < this.Scenes.length; i++){
            
			
        	if (this.Scenes[i].State == State.Killed){
				//Delete Scene and add index
				this.Scenes.splice(i, 1);
				i++;
				if (i >= this.Scenes.length) break;
			}
		
			
            //Call "Tick"-Method
            if (this.Scenes[i].State != State.Pause) { 
				this.Scenes[i].Tick(elapsed); 
			}

        }

	
	},
		
	Draw: function (e) {

		//Call "Draw"-Method
		for (var i=0; i < this.Scenes.length; i++) this.Scenes[i].Draw(e);
	
	},
    
    onResize: function() {
        for (var i=0; i < this.Scenes.length; i++) this.Scenes[i].onResize();
    },
		
	// Add a scene
	Add: function (Scene) {
		//Add scene to array
		Scene.Load();
        Scene.onResize();
		this.Scenes.push(Scene);
	},
	
	// Set one scene
	Set: function (Scene) {
	
		this.Scenes = [];
		this.Add(Scene);
		
	}	
		
		
	
});