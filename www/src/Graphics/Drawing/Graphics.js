var Graphics = Class.create({
    
    initialize: function (width, height) {
        
        this.Width = width;
        this.Height = height;
        
        this.Canvas = this.CreateCanvas(width, height);
        this.Context = this.Canvas.getContext("2d");
    },
    
    
    CreateCanvas: function (width, height) {
        
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    
    },
    
    GetContext: function (OriginalContext) {
        
        OriginalContext.putImageData( this.Context.getImageData(0, 0, this.Width, this.Height) , 0, 0);
        
        return OriginalContext;
    },
    
    
    Merge: function (NewGraphics, X, Y) {
		
        this.Context.drawImage(NewGraphics.Canvas, X, Y);
    
    },
    
    
    ApplyFilters: function (Filters) {
    
        for (var i=0; i < Filters.length; i++) {

            this.Context.putImageData( Filters[i].Apply(this.Context.getImageData(0, 0, this.Width, this.Height)) , 0, 0);
        }
        
    
    },
    
    //### Drawing ###
    DrawString: function (Text, Font, Color, X, Y){
        
        
        this.Context.font = Font.Size + "px " + Font.Family;
        if (Font.Bold) this.Context.font = "bold " + this.Context.font; 
        
        this.Context.fillStyle = Color;
        this.Context.fillText(Text, X, Y);
        
        
    },
    
    FillRectangle: function (Color, X, Y, Width, Height) {
        
        this.Context.fillStyle = Color;
        this.Context.fillRect(X, Y, Width, Height);
        
    },
    
    
    DrawImage: function (Bitmap, X, Y, Width, Height){
        
        if (! Width) Width = Bitmap.Width;
        if (! Height) Height = Bitmap.Height;

        this.Context.drawImage(Bitmap.Image, X, Y, Width, Height);
        
    }
    
});