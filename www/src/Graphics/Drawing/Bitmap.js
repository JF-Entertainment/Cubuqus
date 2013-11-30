var Bitmap = Class.create({
    
    initialize: function () {
        this.Image = new Image();
    
        this.Width = 0;
        this.Height = 0;
    },
    
    Load: function (Path, Callback) {
        
        //Set Source
        this.Image.src = Path;
        this.Image.onload = Callback;
        
        //Set Dimensions
        this.Width = this.Image.width;
        this.Height = this.Image.height;
    
    
    }

});