var LoadingScreen = Class.create(BaseScreen, {
    
	initialize: function ($super, Title) {
		$super();
        
        //Public Variables
        this.Title = Title;
        this.Progress = 0;
        
        //Controls
        this.ProgressBarControl = new ProgressBar();
        this.ControlManager.Add( this.ProgressBarControl );
	},
    
    
    Tick: function (elapsed) {
        
        //Invalidate Progress
        this.ProgressBarControl.Progress = this.Progress;
        
        this.ControlManager.Tick(elapsed);
    },
    
	Draw: function (e) {
		
        
        //Draw Title
        e.DrawString( this.Title, new Font("Arial", 100 * Cubuqus.Ratio, true), "#E6E6E6", 145 * Cubuqus.Ratio, e.Height / 2 - 30 * Cubuqus.Ratio);
        e.DrawString( this.Title, new Font("Arial", 100 * Cubuqus.Ratio, true), "#A4A4A4", 140 * Cubuqus.Ratio, e.Height / 2 - 35 * Cubuqus.Ratio);

        //Controls
		this.ControlManager.Draw(e);
	},
    
    onResize: function () {
       
        //ProgressBar
        this.ProgressBarControl.Width = 1000 * Cubuqus.Ratio;
        this.ProgressBarControl.Height = 80 * Cubuqus.Ratio;
        this.ProgressBarControl.X = Cubuqus.Canvas.width / 2 - this.ProgressBarControl.Width / 2;
        this.ProgressBarControl.Y = Cubuqus.Canvas.height / 2;
    }
	
	

});