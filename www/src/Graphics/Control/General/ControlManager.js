var ControlManager = Class.create({
    
    initialize: function () {
        this.Controls = [];
    },
    
    Add: function (Control) {
        //Add new control
        this.Controls.push(Control);
    },
    
    Tick: function (elapsed) {
        
        for ( var i=0; i < this.Controls.length; i++) { this.Controls[i].Tick(elapsed); }
        
    },
    
    Draw: function (e) {
        
        for ( var i=0; i < this.Controls.length; i++) {
            
            var CurrentControl = this.Controls[i];
            
            //Merge Screens
            var ScreenGraphics = new Graphics( CurrentControl.Width, CurrentControl.Height);
            
			
            CurrentControl.Draw(ScreenGraphics); 

            e.Merge(ScreenGraphics, CurrentControl.X, CurrentControl.Y);
    
        
        
        }
        
    }

});