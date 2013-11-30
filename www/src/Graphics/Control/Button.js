var Button = Class.create(BaseControl, {
    
    initialize: function($super) {
        $super();
    
        
    },
    
    Draw: function (e) {
        
        //Background
        e.FillRectangle("#E4EBED", 0,0, this.Width, this.Height);
        
        //Bar
        e.FillRectangle("lightblue", 5,5, this.Width - 10, this.Height - 10);
        
    }
    
});