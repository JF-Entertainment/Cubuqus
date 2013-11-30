var BaseControl = Class.create({

    initialize: function() {
    	this.X = 0;
		this.Y = 0;
		this.Width = 10;
		this.Height = 10;

        
    },
    
    Tick: function (elapsed) {

    },
    
    Draw: function (e) {
        e.FillRectangle("blue", 50, 20, 300, 150);
    }

});