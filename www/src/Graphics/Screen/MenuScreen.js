var MenuScreen = Class.create(BaseScreen, {
    
	initialize: function ($super, Title) {
		$super();

        //Controls
        this.StartButton = new Button();
        this.ControlManager.Add( this.StartButton );
	},
    
    
	Draw: function (e) {

        
        //Controls
		this.ControlManager.Draw(e);
	},
    
    onResize: function () {
        
        //StartButton
        this.StartButton.Width = 550 * Cubuqus.Ratio;
        this.StartButton.Height = 400 * Cubuqus.Ratio;
        this.StartButton.X = Cubuqus.Canvas.width / 2 - this.StartButton.Width / 2 ;
        this.StartButton.Y = Cubuqus.Canvas.height / 2 - this.StartButton.Height / 1.3;
        
    }
	
	

});