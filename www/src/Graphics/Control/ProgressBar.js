var ProgressBar = Class.create(BaseControl, {
    
    initialize: function($super) {
        $super();

        this.Progress = 0;        
        
    },
    
    Draw: function (e) {
        
        //Background
        e.FillRectangle("#E4EBED", 0,0, this.Width, this.Height);
        
        //Bar
        e.FillRectangle("lightblue", 0,0, this.Width * this.Progress, this.Height);
        
    }
    
});