var LevelSelectorScreen = Class.create(BaseScreen, {
    
	initialize: function ($super) {
		$super();
        
        this.Filters = [ new BlurFilter(5) ];
        this.ControlManager.Add( new BaseControl(50, 50, 300, 60) );
	},
    
    
    Tick: function (elapsed) {
        
        
        this.ControlManager.Tick(elapsed);
    },
    
	Draw: function (e) {
		
        
        e.FillRectangle("red", 10, 20, 300, 150);
        
        e.DrawString("Test", new Font("Arial", 15), "blue", 300, 200);
        
        
        e.DrawImage( Cubuqus.CurrentAsset.Resources["Test1"], 30,30  )
        
        //Controls
		this.ControlManager.Draw(e);
	}
	
	

});